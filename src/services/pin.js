// ============================================
// 💰 Money Control V3 — PIN Lock Service
// ============================================
// PIN is NEVER stored or logged as plain text.
// Uses Web Crypto API SHA-256 for hashing.

import { doc, updateDoc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase.js';

/** Single Source of Truth for Application PIN Length */
export const PIN_LENGTH = 4;

/**
 * Hash a PIN using SHA-256 (Web Crypto API)
 * @param {string} pin - The plain PIN (4 digits)
 * @returns {Promise<string>} - Hex-encoded hash
 */
export async function hashPin(pin) {
  const encoder = new TextEncoder();
  const data = encoder.encode(pin);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Save PIN hash to Firestore
 */
export async function savePinHash(uid, pinHashValue) {
  await updateDoc(doc(db, 'users', uid), {
    pinHash: pinHashValue,
    pinEnabled: true,
    pinSetupPromptShown: true
  });
}

/**
 * Get PIN data from Firestore
 */
export async function getPinData(uid) {
  const docSnap = await getDoc(doc(db, 'users', uid));
  if (docSnap.exists()) {
    const data = docSnap.data();
    return {
      pinHash: data.pinHash || null,
      pinEnabled: data.pinEnabled || false,
      pinSetupPromptShown: data.pinSetupPromptShown || false,
      autoLockTimeout: data.autoLockTimeout !== undefined ? data.autoLockTimeout : 5,
      pinLength: PIN_LENGTH
    };
  }
  return { pinHash: null, pinEnabled: false, pinSetupPromptShown: false, autoLockTimeout: 5, pinLength: PIN_LENGTH };
}

/**
 * Verify PIN against stored hash
 * @param {string} pin - The entered PIN
 * @param {string} storedHash - The stored hash
 * @returns {Promise<boolean>}
 */
export async function verifyPin(pin, storedHash) {
  const inputHash = await hashPin(pin);
  return inputHash === storedHash;
}

/**
 * Remove PIN (disable lock)
 */
export async function removePin(uid) {
  await updateDoc(doc(db, 'users', uid), {
    pinHash: null,
    pinEnabled: false
  });
}

/**
 * Save auto-lock timeout setting
 * @param {number} minutes - 0 (immediately), 1, 5, 15, -1 (never)
 */
export async function saveAutoLockTimeout(uid, minutes) {
  await updateDoc(doc(db, 'users', uid), {
    autoLockTimeout: minutes
  });
}

/**
 * Mark PIN setup prompt as shown (so it doesn't re-appear)
 */
export async function markPinPromptShown(uid) {
  await updateDoc(doc(db, 'users', uid), {
    pinSetupPromptShown: true
  });
}
