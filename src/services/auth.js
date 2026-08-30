// ============================================
// 💰 Money Control — Authentication Service
// ============================================

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile as firebaseUpdateProfile,
  updatePassword,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential
} from 'firebase/auth';
import { auth, validateFirebaseConfig } from '../config/firebase.js';
import { createUserProfile, deleteUserData } from './firestore.js';

/**
 * Register a new user with email/password and create Firestore profile
 */
export async function register(name, email, password) {
  const configCheck = validateFirebaseConfig();
  if (!configCheck.isValid) {
    throw { code: 'auth/config-incomplete', message: `Firebase configuration is incomplete. Missing: ${configCheck.missing.join(', ')}` };
  }

  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    throw { code: 'auth/network-request-failed', message: 'Network error. Check your internet connection.' };
  }

  const regPromise = (async () => {
    const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
    const user = userCredential.user;

    try {
      if (name && name.trim()) {
        await firebaseUpdateProfile(user, { displayName: name.trim() });
      }
    } catch (e) {
      console.warn('firebaseUpdateProfile warning:', e);
    }

    try {
      await createUserProfile(user.uid, {
        name: (name || '').trim() || 'User',
        email: (email || '').trim(),
        createdAt: new Date().toISOString()
      });
    } catch (e) {
      console.warn('createUserProfile warning during registration:', e);
    }

    return user;
  })();

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject({ code: 'auth/timeout', message: 'Registration request timed out. Please try again.' });
    }, 12000);
  });

  return await Promise.race([regPromise, timeoutPromise]);
}

/**
 * Login with email/password (with 12s safety timeout)
 */
export async function login(email, password) {
  const configCheck = validateFirebaseConfig();
  if (!configCheck.isValid) {
    throw { code: 'auth/config-incomplete', message: `Firebase configuration is incomplete. Missing: ${configCheck.missing.join(', ')}` };
  }

  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    throw { code: 'auth/network-request-failed', message: 'Network error. Check your internet connection.' };
  }

  const loginPromise = (async () => {
    const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
    return userCredential.user;
  })();

  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject({ code: 'auth/timeout', message: 'Login request timed out. Please try again.' });
    }, 12000);
  });

  return await Promise.race([loginPromise, timeoutPromise]);
}

/**
 * Logout the current user
 */
export async function logout() {
  await signOut(auth);
}

/**
 * Send password reset email
 */
export async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email.trim());
}

/**
 * Listen for authentication state changes
 */
export function onAuthChange(callback) {
  return onAuthStateChanged(auth, callback);
}

/**
 * Get the current authenticated user
 */
export function getCurrentUser() {
  return auth.currentUser;
}

/**
 * Update user profile (display name)
 */
export async function updateUserProfile(name) {
  const user = auth.currentUser;
  if (!user) throw new Error('No user signed in');
  await firebaseUpdateProfile(user, { displayName: name.trim() });
}

/**
 * Change password (requires re-authentication)
 */
export async function changePassword(currentPassword, newPassword) {
  const user = auth.currentUser;
  if (!user) throw new Error('No user signed in');

  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  await reauthenticateWithCredential(user, credential);
  await updatePassword(user, newPassword);
}

/**
 * Delete account and all associated data
 */
export async function deleteAccount(currentPassword) {
  const user = auth.currentUser;
  if (!user) throw new Error('No user signed in');

  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  await reauthenticateWithCredential(user, credential);
  await deleteUserData(user.uid);
  await deleteUser(user);
}

/**
 * Get a user-friendly error message from Firebase errors
 */
export function getAuthErrorMessage(error) {
  if (error?.code || error?.message) {
    console.error('Firebase Auth Error:', {
      code: error?.code,
      message: error?.message
    });
  }

  const code = error?.code || '';
  const messages = {
    'auth/invalid-credential': 'Invalid email or password.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect email or password.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/user-disabled': 'This account has been disabled.',
    'auth/too-many-requests': 'Too many login attempts. Please try again later.',
    'auth/network-request-failed': 'Network error. Check your internet connection.',
    'auth/email-already-in-use': 'An account with this email already exists. Please Log In.',
    'auth/weak-password': 'Password is too weak.',
    'auth/operation-not-allowed': 'Email/Password sign-in is not enabled in Firebase Console.',
    'auth/requires-recent-login': 'Please logout and login again before performing this action.',
    'auth/popup-closed-by-user': 'Sign-in popup was closed before completing.',
    'auth/unauthorized-domain': 'This domain is not authorized in Firebase Console.',
    'auth/profile-create-failed': 'Account created, but your profile could not be saved. Please retry.',
    'auth/config-incomplete': error?.message || 'Firebase configuration is incomplete.',
    'auth/timeout': error?.message || 'Authentication request timed out. Please try again.'
  };

  if (messages[code]) return messages[code];

  if (error?.message) {
    const rawMsg = String(error.message);
    const cleaned = rawMsg.replace(/^Firebase:\s*/i, '').replace(/\s*\([^\)]*\)/g, '').trim();
    if (cleaned && cleaned !== 'Error') {
      return cleaned;
    }
  }

  return 'Unable to log in. Please try again.';
}
