// ============================================
// 💰 Money Control — Secure Delete & OTP Service
// ============================================

import { doc, getDoc, setDoc, updateDoc, deleteDoc, increment } from 'firebase/firestore';
import { getDb, auth } from '../config/firebase.js';
import { sendOtpEmailNotification } from './email.js';

/**
 * Mask an email address for privacy
 * Example: "skaviraj416@gmail.com" -> "sk****16@gmail.com"
 * Example: "kaviraj416@gmail.com" -> "ka****16@gmail.com"
 * @param {string} email 
 * @returns {string}
 */
export function maskEmail(email) {
  if (!email || typeof email !== 'string') return '';
  const trimmed = email.trim();
  const parts = trimmed.split('@');
  if (parts.length !== 2) return trimmed;
  const [name, domain] = parts;
  if (name.length <= 3) {
    return `${name[0]}***@${domain}`;
  }
  const first2 = name.slice(0, 2);
  const last2 = name.slice(-2);
  return `${first2}****${last2}@${domain}`;
}

/**
 * Generate a cryptographically secure 6-digit numeric OTP
 * @returns {string}
 */
export function generateOtpCode() {
  const buf = new Uint32Array(1);
  crypto.getRandomValues(buf);
  return String(buf[0] % 1000000).padStart(6, '0');
}

/**
 * Generate a cryptographic salt
 * @returns {string}
 */
export function generateSalt() {
  const buf = new Uint8Array(16);
  crypto.getRandomValues(buf);
  return Array.from(buf, (b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Compute SHA-256 hash of (salt + ":" + otp)
 * @param {string} otp 
 * @param {string} salt 
 * @returns {Promise<string>}
 */
export async function hashOtp(otp, salt) {
  const enc = new TextEncoder();
  const data = enc.encode(`${salt}:${otp}`);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Create a new delete verification session in Firestore
 * Overwrites / invalidates any existing session for the target.
 * Never stores the plaintext OTP in the database.
 * 
 * @param {Object} params
 * @param {string} params.uid - User UID
 * @param {string} params.targetId - Document ID being deleted
 * @param {string} params.targetName - Exact name of item
 * @param {string} params.targetType - Type of item ('Account', 'Budget', 'Transaction', etc.)
 * @param {string} params.userEmail - User's registered email
 * @returns {Promise<{ expiresAt: number }>}
 */
export async function createDeleteSession({ uid, targetId, targetName, targetType, userEmail }) {
  if (!uid || !targetId) {
    throw new Error('User ID and Target ID are required to initialize delete session.');
  }

  const currentAuthUser = auth.currentUser;
  if (!currentAuthUser || currentAuthUser.uid !== uid) {
    throw new Error('Your session expired. Please sign in again.');
  }

  const cleanEmail = String(userEmail || '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!cleanEmail || !emailRegex.test(cleanEmail)) {
    throw new Error('A valid registered email address is required to receive verification code.');
  }

  const otp = generateOtpCode();
  const salt = generateSalt();
  const hashedOtp = await hashOtp(otp, salt);
  const now = Date.now();
  const expiresAt = now + 5 * 60 * 1000; // 5 minutes expiration

  const db = getDb();
  const sessionRef = doc(db, 'users', uid, 'deleteSessions', targetId);

  // Store ONLY hashed OTP and salt — never plaintext OTP
  await setDoc(sessionRef, {
    targetId,
    targetName: targetName || '',
    targetType: targetType || 'Record',
    hashedOtp,
    salt,
    attempts: 0,
    maxAttempts: 5,
    verified: false,
    createdAt: now,
    expiresAt
  });

  // Dispatch OTP email
  const emailResult = await sendOtpEmailNotification({
    email: cleanEmail,
    otp,
    itemName: targetName,
    itemType: targetType
  });

  if (!emailResult.success || !emailResult.delivered) {
    await deleteDoc(sessionRef).catch(() => {});
    throw new Error(emailResult.error || 'Unable to send OTP. Please try again.');
  }

  return { expiresAt, emailResult };
}

/**
 * Verify entered OTP against the hashed value in Firestore
 * 
 * @param {Object} params
 * @param {string} params.uid
 * @param {string} params.targetId
 * @param {string} params.enteredOtp
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
export async function verifyDeleteOtp({ uid, targetId, enteredOtp }) {
  if (!uid || !targetId) {
    return { success: false, error: 'Invalid verification session.' };
  }

  const currentAuthUser = auth.currentUser;
  if (!currentAuthUser || currentAuthUser.uid !== uid) {
    return { success: false, error: 'Your session expired. Please sign in again.' };
  }

  const cleanOtp = String(enteredOtp || '').trim();
  if (cleanOtp.length !== 6 || !/^\d{6}$/.test(cleanOtp)) {
    return { success: false, error: 'Please enter a valid 6-digit OTP.' };
  }

  const db = getDb();
  const sessionRef = doc(db, 'users', uid, 'deleteSessions', targetId);
  const sessionSnap = await getDoc(sessionRef);

  if (!sessionSnap.exists()) {
    return { success: false, error: 'Verification session expired. Please request a new OTP.' };
  }

  const session = sessionSnap.data();
  const now = Date.now();

  // Check expiration
  if (now > session.expiresAt) {
    return { success: false, error: 'OTP expired. Please request a new OTP.' };
  }

  // Check attempt limits
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
      console.warn('Failed to increment attempt count:', e);
    }
    return { success: false, error: 'OTP verification failed. Please check the code.' };
  }

  // Mark session verified with 60s deletion window
  await updateDoc(sessionRef, {
    verified: true,
    verifiedAt: now,
    expiresAt: now + 60 * 1000 // 60s window to complete the Firestore delete
  });

  return { success: true };
}

/**
 * Clean up / delete session after successful deletion or cancel
 * @param {string} uid 
 * @param {string} targetId 
 */
export async function cleanupDeleteSession(uid, targetId) {
  try {
    const db = getDb();
    const sessionRef = doc(db, 'users', uid, 'deleteSessions', targetId);
    await deleteDoc(sessionRef).catch(() => {});
    if (typeof targetId === 'string' && !targetId.startsWith('budget-')) {
      const prefixedRef = doc(db, 'users', uid, 'deleteSessions', `budget-${targetId}`);
      await deleteDoc(prefixedRef).catch(() => {});
    }
  } catch (e) {
    console.warn('cleanupDeleteSession warning:', e);
  }
}
