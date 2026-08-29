// ============================================
// 💰 Money Control — Authentication Service
// ============================================

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
  setPersistence,
  browserLocalPersistence,
  updateProfile as firebaseUpdateProfile,
  updatePassword,
  deleteUser,
  EmailAuthProvider,
  reauthenticateWithCredential
} from 'firebase/auth';
import { auth } from '../config/firebase.js';
import { createUserProfile, deleteUserData } from './firestore.js';

// Enforce browser local persistence safely without blocking module import
setPersistence(auth, browserLocalPersistence).catch((err) => {
  console.warn('Firebase setPersistence warning:', err);
});

/**
 * Register a new user with email/password and create Firestore profile
 */
export async function register(name, email, password) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject({ code: 'auth/network-request-failed', message: 'Registration request timed out.' });
    }, 15000);
  });

  const regPromise = (async () => {
    const userCredential = await createUserWithEmailAndPassword(auth, email.trim(), password);
    const user = userCredential.user;

    // Set display name
    await firebaseUpdateProfile(user, { displayName: name.trim() });

    // Create Firestore user profile
    await createUserProfile(user.uid, {
      name: name.trim(),
      email: email.trim(),
      createdAt: new Date().toISOString()
    });

    return user;
  })();

  return await Promise.race([regPromise, timeoutPromise]);
}

/**
 * Login with email/password (with 15s safety timeout)
 */
export async function login(email, password) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject({ code: 'auth/network-request-failed', message: 'Login request timed out.' });
    }, 15000);
  });

  const loginPromise = signInWithEmailAndPassword(auth, email.trim(), password);
  const userCredential = await Promise.race([loginPromise, timeoutPromise]);
  return userCredential.user;
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

  // Re-authenticate
  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  await reauthenticateWithCredential(user, credential);

  // Update password
  await updatePassword(user, newPassword);
}

/**
 * Delete account and all associated data
 */
export async function deleteAccount(currentPassword) {
  const user = auth.currentUser;
  if (!user) throw new Error('No user signed in');

  // Re-authenticate
  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  await reauthenticateWithCredential(user, credential);

  // Delete Firestore data
  await deleteUserData(user.uid);

  // Delete auth account
  await deleteUser(user);
}

/**
 * Get a user-friendly error message from Firebase errors
 */
export function getAuthErrorMessage(error) {
  const code = error?.code || '';
  const messages = {
    'auth/email-already-in-use': 'This email is already registered. Try logging in instead.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/user-disabled': 'This account has been disabled. Contact support.',
    'auth/user-not-found': 'No account found with this email. Click "Create Account" below to register.',
    'auth/wrong-password': 'Incorrect password. Please check your password or click "Forgot Password?".',
    'auth/invalid-credential': 'No account found or invalid credentials. If you haven\'t created an account yet, click "Create Account" below.',
    'auth/too-many-requests': 'Too many failed attempts. Please wait a moment and try again.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/network-request-failed': 'Network timeout or connection error. Please check your internet connection.',
    'auth/requires-recent-login': 'Please logout and login again before this action.',
    'auth/operation-not-allowed': 'Email/password sign-in is not enabled. Enable it in Firebase Console.',
  };

  return messages[code] || error?.message || 'Unable to log in. Check your credentials or click "Create Account".';
}
