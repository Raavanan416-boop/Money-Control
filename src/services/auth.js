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
import { auth } from '../config/firebase.js';
import { createUserProfile, deleteUserData } from './firestore.js';

/**
 * Register a new user with email/password and create Firestore profile
 */
export async function register(name, email, password) {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Set display name
  await firebaseUpdateProfile(user, { displayName: name });

  // Create Firestore user profile
  await createUserProfile(user.uid, {
    name,
    email,
    createdAt: new Date().toISOString()
  });

  return user;
}

/**
 * Login with email/password
 */
export async function login(email, password) {
  const userCredential = await signInWithEmailAndPassword(auth, email, password);
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
  await sendPasswordResetEmail(auth, email);
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
  await firebaseUpdateProfile(user, { displayName: name });
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
  const code = error.code || '';
  const messages = {
    'auth/email-already-in-use': 'This email is already registered. Try logging in instead.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/user-disabled': 'This account has been disabled. Contact support.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/invalid-credential': 'Invalid email or password. Please try again.',
    'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/network-request-failed': 'Network error. Check your internet connection.',
    'auth/requires-recent-login': 'Please logout and login again before this action.',
    'auth/operation-not-allowed': 'Email/password sign-in is not enabled. Enable it in Firebase Console.',
  };

  return messages[code] || 'Something went wrong. Please try again.';
}
