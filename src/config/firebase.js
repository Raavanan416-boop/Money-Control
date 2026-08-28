// ============================================
// 💰 Money Control — Firebase Configuration
// ============================================
// 
// ⚠️ SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com
// 2. Create a new project (or use an existing one)
// 3. Add a Web App in Project Settings > General > Your Apps
// 4. Copy the config object and paste it below
// 5. Enable Authentication > Email/Password in the Firebase Console
// 6. Create a Firestore Database (start in test mode, then apply security rules)
//
// Replace the placeholder values below with your actual Firebase config:

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyCNi1a6jLObH6P89o-Bpw1zpViF-iS0_-k",
    authDomain: "money-control-e6af5.firebaseapp.com",
    databaseURL: "https://money-control-e6af5-default-rtdb.firebaseio.com",
    projectId: "money-control-e6af5",
    storageBucket: "money-control-e6af5.firebasestorage.app",
    messagingSenderId: "490577558965",
    appId: "1:490577558965:web:09275a065a09844f1eadfc",
    measurementId: "G-JTLBM89W1W"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
