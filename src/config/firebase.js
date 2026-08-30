// ============================================
// 💰 Money Control — Firebase Configuration
// ============================================

import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env?.VITE_FIREBASE_API_KEY || "AIzaSyCNi1a6jLObH6P89o-Bpw1zpViF-iS0_-k",
  authDomain: import.meta.env?.VITE_FIREBASE_AUTH_DOMAIN || "money-control-e6af5.firebaseapp.com",
  databaseURL: import.meta.env?.VITE_FIREBASE_DATABASE_URL || "https://money-control-e6af5-default-rtdb.firebaseio.com",
  projectId: import.meta.env?.VITE_FIREBASE_PROJECT_ID || "money-control-e6af5",
  storageBucket: import.meta.env?.VITE_FIREBASE_STORAGE_BUCKET || "money-control-e6af5.firebasestorage.app",
  messagingSenderId: import.meta.env?.VITE_FIREBASE_MESSAGING_SENDER_ID || "490577558965",
  appId: import.meta.env?.VITE_FIREBASE_APP_ID || "1:490577558965:web:09275a065a09844f1eadfc",
  measurementId: import.meta.env?.VITE_FIREBASE_MEASUREMENT_ID || "G-JTLBM89W1W"
};

/**
 * Validate that essential public Firebase configuration values are present.
 */
export function validateFirebaseConfig() {
  const requiredKeys = ['apiKey', 'authDomain', 'projectId', 'appId'];
  const missing = requiredKeys.filter(key => !firebaseConfig[key] || String(firebaseConfig[key]).includes('YOUR_'));
  
  if (missing.length > 0) {
    console.error('⚠️ Firebase configuration is incomplete. Missing fields:', missing.join(', '));
    return { isValid: false, missing };
  }
  return { isValid: true, missing: [] };
}

// Initialize Firebase App instance as a singleton (prevents HMR duplicate app errors)
export const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Services as singletons
export const auth = getAuth(app);

// Safely configure persistence with fallback to prevent IndexedDB lock stalls
try {
  setPersistence(auth, browserLocalPersistence).catch((err) => {
    console.warn('browserLocalPersistence warning:', err);
  });
} catch (e) {
  console.warn('setPersistence warning:', e);
}

export const db = getFirestore(app);

export function getDb() {
  return db || getFirestore(app);
}

export default app;
