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
  try {
    const docSnap = await getDoc(doc(db, 'users', uid));
    if (docSnap && docSnap.exists()) {
      const data = docSnap.data();
      return {
        pinHash: data.pinHash || null,
        pinEnabled: data.pinEnabled || false,
        pinSetupPromptShown: data.pinSetupPromptShown || false,
        autoLockTimeout: data.autoLockTimeout !== undefined ? data.autoLockTimeout : 5,
        biometricEnabled: data.biometricEnabled || false,
        biometricCredentialId: data.biometricCredentialId || null,
        hideBalance: data.hideBalance || false,
        pinLength: PIN_LENGTH
      };
    }
  } catch (e) {
    console.warn('getPinData warning:', e);
  }
  return {
    pinHash: null,
    pinEnabled: false,
    pinSetupPromptShown: false,
    autoLockTimeout: 5,
    biometricEnabled: false,
    biometricCredentialId: null,
    hideBalance: false,
    pinLength: PIN_LENGTH
  };
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

// ─── Biometric / Fingerprint ──────────────────────────────

/**
 * Check if biometric authentication is supported on this device.
 * @returns {Promise<boolean>}
 */
export async function isBiometricSupported() {
  try {
    if (!window.PublicKeyCredential) return false;
    if (typeof PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable !== 'function') return false;
    return await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
  } catch (e) {
    return false;
  }
}

/**
 * Register a biometric credential (passkey) for the user.
 * Stores the credential ID in Firestore (not the private key — that stays on-device).
 * @param {string} uid
 * @param {string} userName
 * @returns {Promise<string>} — credential ID (base64url)
 */
export async function registerBiometric(uid, userName) {
  const challenge = crypto.getRandomValues(new Uint8Array(32));
  const userId = new TextEncoder().encode(uid.substring(0, 32));

  const credential = await navigator.credentials.create({
    publicKey: {
      challenge,
      rp: {
        name: 'Money Control',
        id: window.location.hostname
      },
      user: {
        id: userId,
        name: userName || 'user',
        displayName: userName || 'Money Control User'
      },
      pubKeyCredParams: [
        { alg: -7, type: 'public-key' },   // ES256
        { alg: -257, type: 'public-key' }  // RS256
      ],
      authenticatorSelection: {
        authenticatorAttachment: 'platform', // use on-device authenticator (fingerprint/face)
        userVerification: 'required'
      },
      timeout: 60000,
      attestation: 'none'
    }
  });

  const credId = bufferToBase64Url(credential.rawId);

  // Store credential ID + public key info in Firestore (NOT the private key)
  await updateDoc(doc(db, 'users', uid), {
    biometricEnabled: true,
    biometricCredentialId: credId
  });

  // Also cache in localStorage for quick lookup
  localStorage.setItem(`mc_biometric_cred_${uid}`, credId);

  return credId;
}

/**
 * Verify biometric authentication using stored credential.
 * @param {string} uid
 * @param {string} credentialId — base64url credential ID
 * @returns {Promise<boolean>}
 */
export async function verifyBiometric(uid, credentialId) {
  try {
    const challenge = crypto.getRandomValues(new Uint8Array(32));
    const credIdBuffer = base64UrlToBuffer(credentialId);

    const assertion = await navigator.credentials.get({
      publicKey: {
        challenge,
        rpId: window.location.hostname,
        allowCredentials: [{
          id: credIdBuffer,
          type: 'public-key',
          transports: ['internal']
        }],
        userVerification: 'required',
        timeout: 60000
      }
    });

    // If we get an assertion without error, the biometric was verified
    return assertion !== null;
  } catch (err) {
    console.warn('Biometric verification failed:', err.name, err.message);
    return false;
  }
}

/**
 * Disable biometric for a user
 * @param {string} uid
 */
export async function disableBiometric(uid) {
  await updateDoc(doc(db, 'users', uid), {
    biometricEnabled: false,
    biometricCredentialId: null
  });
  localStorage.removeItem(`mc_biometric_cred_${uid}`);
}

// ─── Hide Balance ──────────────────────────────

/**
 * Save the hide balance setting
 * @param {string} uid
 * @param {boolean} hidden
 */
export async function saveHideBalance(uid, hidden) {
  await updateDoc(doc(db, 'users', uid), {
    hideBalance: hidden
  });
}

// ─── Utility helpers ──────────────────────────────

function bufferToBase64Url(buffer) {
  const bytes = new Uint8Array(buffer);
  let str = '';
  for (const b of bytes) str += String.fromCharCode(b);
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

function base64UrlToBuffer(base64Url) {
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, '=');
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes.buffer;
}
