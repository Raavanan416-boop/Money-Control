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

function getCachedPinData(uid) {
  try {
    const raw = localStorage.getItem(`mc_pin_${uid}`);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function setCachedPinData(uid, partialData) {
  try {
    const existing = getCachedPinData(uid) || {};
    const updated = { ...existing, ...partialData };
    localStorage.setItem(`mc_pin_${uid}`, JSON.stringify(updated));
  } catch (e) {}
}

/**
 * Save PIN hash to Firestore and local cache
 */
export async function savePinHash(uid, pinHashValue) {
  const pinData = {
    pinHash: pinHashValue,
    pinEnabled: true,
    pinSetupPromptShown: true
  };
  setCachedPinData(uid, pinData);

  try {
    await updateDoc(doc(db, 'users', uid), pinData);
  } catch (e) {
    console.warn('savePinHash Firestore sync deferred (offline):', e);
  }
}

/**
 * Get PIN data with instant offline cache fallback
 */
export async function getPinData(uid) {
  const cached = getCachedPinData(uid);

  // If offline, return cached PIN data immediately
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    if (cached) {
      return {
        pinHash: cached.pinHash || null,
        pinEnabled: !!cached.pinEnabled,
        pinSetupPromptShown: cached.pinSetupPromptShown !== undefined ? cached.pinSetupPromptShown : false,
        autoLockTimeout: cached.autoLockTimeout !== undefined ? cached.autoLockTimeout : 5,
        biometricEnabled: !!cached.biometricEnabled,
        biometricCredentialId: cached.biometricCredentialId || null,
        hideBalance: !!cached.hideBalance,
        pinLength: PIN_LENGTH
      };
    }
    return {
      pinHash: null,
      pinEnabled: false,
      pinSetupPromptShown: true, // Don't block offline users with prompt
      autoLockTimeout: 5,
      biometricEnabled: false,
      biometricCredentialId: null,
      hideBalance: false,
      pinLength: PIN_LENGTH
    };
  }

  // If online, attempt to fetch from Firestore with a 1500ms safety timeout
  try {
    const fetchPromise = getDoc(doc(db, 'users', uid));
    const timeoutPromise = new Promise((resolve) => setTimeout(() => resolve(null), 1500));
    const docSnap = await Promise.race([fetchPromise, timeoutPromise]);

    if (docSnap && docSnap.exists()) {
      const data = docSnap.data();
      const pinResult = {
        pinHash: data.pinHash || null,
        pinEnabled: data.pinEnabled || false,
        pinSetupPromptShown: data.pinSetupPromptShown || false,
        autoLockTimeout: data.autoLockTimeout !== undefined ? data.autoLockTimeout : 5,
        biometricEnabled: data.biometricEnabled || false,
        biometricCredentialId: data.biometricCredentialId || null,
        hideBalance: data.hideBalance || false,
        pinLength: PIN_LENGTH
      };
      setCachedPinData(uid, pinResult);
      return pinResult;
    }
  } catch (e) {
    console.warn('getPinData online fetch warning:', e);
  }

  if (cached) {
    return {
      pinHash: cached.pinHash || null,
      pinEnabled: !!cached.pinEnabled,
      pinSetupPromptShown: cached.pinSetupPromptShown !== undefined ? cached.pinSetupPromptShown : false,
      autoLockTimeout: cached.autoLockTimeout !== undefined ? cached.autoLockTimeout : 5,
      biometricEnabled: !!cached.biometricEnabled,
      biometricCredentialId: cached.biometricCredentialId || null,
      hideBalance: !!cached.hideBalance,
      pinLength: PIN_LENGTH
    };
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
  setCachedPinData(uid, { pinHash: null, pinEnabled: false });
  try {
    await updateDoc(doc(db, 'users', uid), {
      pinHash: null,
      pinEnabled: false
    });
  } catch (e) {
    console.warn('removePin Firestore sync deferred (offline):', e);
  }
}

/**
 * Save auto-lock timeout setting
 * @param {number} minutes - 0 (immediately), 1, 5, 15, -1 (never)
 */
export async function saveAutoLockTimeout(uid, minutes) {
  setCachedPinData(uid, { autoLockTimeout: minutes });
  try {
    await updateDoc(doc(db, 'users', uid), {
      autoLockTimeout: minutes
    });
  } catch (e) {
    console.warn('saveAutoLockTimeout Firestore sync deferred (offline):', e);
  }
}

/**
 * Mark PIN setup prompt as shown (so it doesn't re-appear)
 */
export async function markPinPromptShown(uid) {
  setCachedPinData(uid, { pinSetupPromptShown: true });
  try {
    await updateDoc(doc(db, 'users', uid), {
      pinSetupPromptShown: true
    });
  } catch (e) {
    console.warn('markPinPromptShown Firestore sync deferred (offline):', e);
  }
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
  setCachedPinData(uid, { biometricEnabled: false, biometricCredentialId: null });
  localStorage.removeItem(`mc_biometric_cred_${uid}`);
  try {
    await updateDoc(doc(db, 'users', uid), {
      biometricEnabled: false,
      biometricCredentialId: null
    });
  } catch (e) {
    console.warn('disableBiometric Firestore sync deferred (offline):', e);
  }
}

// ─── Hide Balance ──────────────────────────────

/**
 * Save the hide balance setting
 * @param {string} uid
 * @param {boolean} hidden
 */
export async function saveHideBalance(uid, hidden) {
  setCachedPinData(uid, { hideBalance: hidden });
  try {
    await updateDoc(doc(db, 'users', uid), {
      hideBalance: hidden
    });
  } catch (e) {
    console.warn('saveHideBalance Firestore sync deferred (offline):', e);
  }
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
