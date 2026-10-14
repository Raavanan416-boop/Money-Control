// ============================================
// 💰 Money Control — Transaction Edit OTP Session Service
// Secure OTP verification for unlocking individual protected transaction fields
// ============================================

import { doc, getDoc, setDoc, updateDoc, deleteDoc, increment, addDoc, collection } from 'firebase/firestore';
import { getDb } from '../config/firebase.js';
import { generateOtpCode, generateSalt, hashOtp, maskEmail } from './secure-delete.js';
import { sendOtpEmailNotification } from './email.js';

// Re-export maskEmail for convenience
export { maskEmail } from './secure-delete.js';

export const PROTECTED_FIELDS = ['amount', 'account', 'date', 'time', 'type'];

/**
 * Create a new field-specific edit verification session in Firestore.
 * Overwrites / invalidates any existing session for THIS SPECIFIC FIELD of the target transaction.
 * Does NOT overwrite other fields' verified states.
 * Never stores the plaintext OTP in the database.
 * 
 * @param {Object} params
 * @param {string} params.uid - User UID
 * @param {string} params.transactionId - Transaction document ID being edited
 * @param {string} params.field - Field identifier: 'amount' | 'account' | 'date' | 'time' | 'type'
 * @param {string} [params.fieldLabel] - User-friendly name e.g. "Amount"
 * @param {string} [params.transactionName] - Description of transaction (for email context)
 * @param {string} params.userEmail - User's registered email
 * @returns {Promise<{ expiresAt: number, emailResult: Object }>}
 */
export async function createFieldEditSession({ uid, transactionId, field, fieldLabel, transactionName, userEmail }) {
  if (!uid || !transactionId || !field) {
    throw new Error('User ID, Transaction ID, and Field name are required to initialize verification session.');
  }

  const cleanField = String(field).toLowerCase().trim();
  const displayLabel = fieldLabel || (cleanField.charAt(0).toUpperCase() + cleanField.slice(1));
  const sessionId = `${transactionId}_${cleanField}`;

  const db = getDb();
  const sessionRef = doc(db, 'users', uid, 'editSessions', sessionId);

  // Rate-limiting check: prevent spamming OTP requests within 60 seconds
  try {
    const existingSnap = await getDoc(sessionRef);
    if (existingSnap.exists()) {
      const data = existingSnap.data();
      const timeSinceLastOtp = Date.now() - (data.createdAt || 0);
      if (timeSinceLastOtp < 55000 && !data.verified) {
        const waitSec = Math.ceil((55000 - timeSinceLastOtp) / 1000);
        throw new Error(`Please wait ${waitSec}s before requesting a new OTP for ${displayLabel}.`);
      }
    }
  } catch (err) {
    if (err.message && err.message.includes('Please wait')) {
      throw err;
    }
    // Continue if Firestore read error
  }

  const otp = generateOtpCode();
  const salt = generateSalt();
  const hashedOtp = await hashOtp(otp, salt);
  const now = Date.now();
  const expiresAt = now + 5 * 60 * 1000; // 5 minutes expiration

  // Store ONLY hashed OTP and salt in dedicated field session doc — never plaintext OTP
  await setDoc(sessionRef, {
    transactionId,
    field: cleanField,
    fieldLabel: displayLabel,
    transactionName: transactionName || '',
    hashedOtp,
    salt,
    attempts: 0,
    maxAttempts: 5,
    verified: false,
    createdAt: now,
    expiresAt
  });

  // Dispatch OTP email with field-specific context
  const emailResult = await sendOtpEmailNotification({
    email: userEmail,
    otp,
    itemName: transactionName || 'Transaction',
    itemType: 'Transaction Edit',
    field: displayLabel
  });

  return { expiresAt, emailResult };
}

/**
 * Verify entered OTP for a specific field session
 * 
 * @param {Object} params
 * @param {string} params.uid
 * @param {string} params.transactionId
 * @param {string} params.field - Field being verified e.g. 'amount', 'date'
 * @param {string} params.enteredOtp - 6-digit code entered by user
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
export async function verifyFieldEditOtp({ uid, transactionId, field, enteredOtp }) {
  if (!uid || !transactionId || !field) {
    return { success: false, error: 'Invalid verification session parameters.' };
  }

  const cleanField = String(field).toLowerCase().trim();
  const cleanOtp = String(enteredOtp || '').trim();
  if (cleanOtp.length !== 6 || !/^\d{6}$/.test(cleanOtp)) {
    return { success: false, error: 'Please enter a valid 6-digit OTP.' };
  }

  const db = getDb();
  const sessionId = `${transactionId}_${cleanField}`;
  const sessionRef = doc(db, 'users', uid, 'editSessions', sessionId);
  const sessionSnap = await getDoc(sessionRef);

  if (!sessionSnap.exists()) {
    return { success: false, error: 'Verification session expired. Please request a new OTP.' };
  }

  const session = sessionSnap.data();
  const now = Date.now();

  // Check expiration (5 minutes)
  if (now > session.expiresAt) {
    return { success: false, error: 'OTP expired. Please request a new OTP.' };
  }

  // Check attempt limits (max 5)
  if ((session.attempts || 0) >= (session.maxAttempts || 5)) {
    return { success: false, error: 'Too many incorrect attempts. Please request a new OTP.' };
  }

  // Hash entered OTP with saved salt
  const enteredHash = await hashOtp(cleanOtp, session.salt);

  if (enteredHash !== session.hashedOtp) {
    // Increment attempts
    try {
      await updateDoc(sessionRef, { attempts: increment(1) });
    } catch (e) {
      console.warn('Failed to increment edit attempt count:', e);
    }
    const remaining = (session.maxAttempts || 5) - ((session.attempts || 0) + 1);
    const attemptWarning = remaining > 0 ? ` (${remaining} attempt${remaining > 1 ? 's' : ''} left)` : '';
    return { success: false, error: `Incorrect OTP. Please try again.${attemptWarning}` };
  }

  const validUntil = now + 5 * 60 * 1000; // 5-minute unlock window to edit and save

  // 1. Mark dedicated field session verified
  await updateDoc(sessionRef, {
    verified: true,
    verifiedAt: now,
    expiresAt: validUntil
  });

  // 2. Also merge authorization flag into summary doc for fast compound checks
  try {
    const summaryRef = doc(db, 'users', uid, 'editSessions', transactionId);
    await setDoc(summaryRef, {
      [`${cleanField}Unlocked`]: true,
      expiresAt: validUntil,
      updatedAt: now
    }, { merge: true });
  } catch (err) {
    console.warn('Could not update summary edit session:', err);
  }

  return { success: true };
}

/**
 * Check if a specific field has an active verified session
 * 
 * @param {string} uid 
 * @param {string} transactionId 
 * @param {string} field 
 * @returns {Promise<boolean>}
 */
export async function isFieldEditSessionVerified(uid, transactionId, field) {
  if (!uid || !transactionId || !field) return false;

  try {
    const cleanField = String(field).toLowerCase().trim();
    const db = getDb();
    const sessionId = `${transactionId}_${cleanField}`;
    const sessionRef = doc(db, 'users', uid, 'editSessions', sessionId);
    const sessionSnap = await getDoc(sessionRef);

    if (sessionSnap.exists()) {
      const session = sessionSnap.data();
      const now = Date.now();
      if (session.verified === true && now <= session.expiresAt) {
        return true;
      }
    }

    // Fallback: check summary doc
    const summaryRef = doc(db, 'users', uid, 'editSessions', transactionId);
    const summarySnap = await getDoc(summaryRef);
    if (summarySnap.exists()) {
      const summary = summarySnap.data();
      const now = Date.now();
      return summary[`${cleanField}Unlocked`] === true && now <= summary.expiresAt;
    }

    return false;
  } catch (e) {
    console.warn('isFieldEditSessionVerified error:', e);
    return false;
  }
}

/**
 * Clean up all field sessions and summary session for a transaction
 * Called on modal cancel, close, or after successful save.
 * 
 * @param {string} uid 
 * @param {string} transactionId 
 */
export async function cleanupFieldEditSessions(uid, transactionId) {
  if (!uid || !transactionId) return;

  try {
    const db = getDb();
    const deletePromises = PROTECTED_FIELDS.map(f => {
      const sessionId = `${transactionId}_${f}`;
      return deleteDoc(doc(db, 'users', uid, 'editSessions', sessionId)).catch(() => {});
    });

    // Also delete summary doc
    deletePromises.push(deleteDoc(doc(db, 'users', uid, 'editSessions', transactionId)).catch(() => {}));

    await Promise.all(deletePromises);
  } catch (e) {
    console.warn('cleanupFieldEditSessions warning:', e);
  }
}

/**
 * Save a correction audit record to Firestore
 * Records previous and updated values along with which fields were unlocked and changed.
 * Never stores the actual OTP.
 * 
 * @param {Object} params
 * @param {string} params.uid - User UID
 * @param {string} params.transactionId - Transaction document ID
 * @param {Object} params.previousValues - Snapshot of fields before correction
 * @param {Object} params.updatedValues - Snapshot of fields after correction
 * @param {Object} [params.unlockedFields] - Map of which fields were verified
 * @returns {Promise<string>} - Audit record ID
 */
export async function saveCorrectionAudit({ uid, transactionId, previousValues, updatedValues, unlockedFields }) {
  if (!uid || !transactionId) return null;

  try {
    const db = getDb();
    const auditRef = collection(db, 'users', uid, 'correctionHistory');
    const docRef = await addDoc(auditRef, {
      transactionId,
      userId: uid,
      previousValues: { ...previousValues },
      updatedValues: { ...updatedValues },
      unlockedFields: unlockedFields ? { ...unlockedFields } : {},
      correctionTimestamp: new Date().toISOString(),
      correctionTimestampMs: Date.now(),
      verificationMethod: 'email_otp_individual_field',
      status: 'success'
    });
    return docRef.id;
  } catch (e) {
    console.warn('saveCorrectionAudit warning:', e);
    return null;
  }
}

// ----------------------------------------------------
// Backward compatibility wrappers for older imports
// ----------------------------------------------------

export async function createEditSession({ uid, transactionId, transactionName, userEmail, field = 'amount' }) {
  return createFieldEditSession({ uid, transactionId, field, fieldLabel: 'Amount', transactionName, userEmail });
}

export async function verifyEditOtp({ uid, transactionId, enteredOtp, field = 'amount' }) {
  return verifyFieldEditOtp({ uid, transactionId, field, enteredOtp });
}

export async function isEditSessionVerified(uid, transactionId, field = 'amount') {
  return isFieldEditSessionVerified(uid, transactionId, field);
}

export async function cleanupEditSession(uid, transactionId) {
  return cleanupFieldEditSessions(uid, transactionId);
}
