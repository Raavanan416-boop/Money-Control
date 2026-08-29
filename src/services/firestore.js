// ============================================
// 💰 Money Control V2 — Firestore Service
// ============================================

import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  getDocs,
  writeBatch
} from 'firebase/firestore';
import { db } from '../config/firebase.js';

// ─── User Profile ──────────────────────────────

export async function createUserProfile(uid, data) {
  await setDoc(doc(db, 'users', uid), {
    name: data.name,
    email: data.email,
    createdAt: data.createdAt || new Date().toISOString(),
    settings: {
      currency: 'INR',
      theme: 'light',
      notifications: true,
      budgetAlerts: true,
      lowBalanceAlert: true,
      lowBalanceThreshold: 500,
      allowNegativeBalance: false
    }
  });
}

export async function getUserProfile(uid) {
  const docSnap = await getDoc(doc(db, 'users', uid));
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
  return null;
}

export async function updateUserProfile(uid, data) {
  await updateDoc(doc(db, 'users', uid), data);
}

/**
 * Set the initial balance for a user and seed default Cash account
 */
export async function setInitialBalance(uid, amount) {
  await updateDoc(doc(db, 'users', uid), {
    initialBalance: Number(amount)
  });
  await ensureDefaultAccounts(uid, amount);
}

export async function updateUserSettings(uid, settings) {
  const profile = await getUserProfile(uid);
  const currentSettings = profile?.settings || {};
  await updateDoc(doc(db, 'users', uid), {
    settings: { ...currentSettings, ...settings }
  });
}

export async function deleteUserData(uid) {
  const batch = writeBatch(db);

  // Delete all accounts
  const accSnap = await getDocs(collection(db, 'users', uid, 'accounts'));
  accSnap.forEach((d) => batch.delete(d.ref));

  // Delete all transactions
  const txSnap = await getDocs(collection(db, 'users', uid, 'transactions'));
  txSnap.forEach((d) => batch.delete(d.ref));

  // Delete all budgets
  const budgetSnap = await getDocs(collection(db, 'users', uid, 'budgets'));
  budgetSnap.forEach((d) => batch.delete(d.ref));

  // Delete user document
  batch.delete(doc(db, 'users', uid));

  await batch.commit();
}

// ─── Accounts CRUD ──────────────────────────────

/**
 * Create a new account
 */
export async function createAccount(uid, data) {
  const accRef = collection(db, 'users', uid, 'accounts');
  const docRef = await addDoc(accRef, {
    name: data.name.trim(),
    type: data.type, // 'Cash' | 'Bank' | 'UPI' | 'Other'
    initialBalance: Number(data.initialBalance) || 0,
    bankName: (data.bankName || '').trim(),
    last4Digits: (data.last4Digits || '').trim(),
    icon: data.icon || getAccountTypeDefaultIcon(data.type),
    createdAt: new Date().toISOString()
  });
  return docRef.id;
}

/**
 * Get default account icon
 */
function getAccountTypeDefaultIcon(type) {
  switch (type) {
    case 'Cash': return '💵';
    case 'Bank': return '🏦';
    case 'UPI': return '📱';
    case 'Other': return '💳';
    default: return '💰';
  }
}

/**
 * Update account
 */
export async function updateAccount(uid, accountId, data) {
  const accRef = doc(db, 'users', uid, 'accounts', accountId);
  await updateDoc(accRef, {
    name: data.name.trim(),
    type: data.type,
    initialBalance: Number(data.initialBalance) || 0,
    bankName: (data.bankName || '').trim(),
    last4Digits: (data.last4Digits || '').trim(),
    icon: data.icon || getAccountTypeDefaultIcon(data.type),
    updatedAt: new Date().toISOString()
  });
}

/**
 * Delete account
 */
export async function deleteAccountDoc(uid, accountId) {
  await deleteDoc(doc(db, 'users', uid, 'accounts', accountId));
}

/**
 * Get all accounts for a user
 */
export async function getAccounts(uid) {
  const accRef = collection(db, 'users', uid, 'accounts');
  const q = query(accRef, orderBy('createdAt', 'asc'));
  const snapshot = await getDocs(q);

  const accounts = [];
  snapshot.forEach((doc) => {
    accounts.push({ id: doc.id, ...doc.data() });
  });
  return accounts;
}

/**
 * Subscribe to accounts in real-time
 */
export function subscribeToAccounts(uid, callback) {
  const accRef = collection(db, 'users', uid, 'accounts');
  const q = query(accRef, orderBy('createdAt', 'asc'));

  return onSnapshot(q, (snapshot) => {
    const accounts = [];
    snapshot.forEach((doc) => {
      accounts.push({ id: doc.id, ...doc.data() });
    });
    callback(accounts);
  }, (error) => {
    console.error('Account subscription error:', error);
    callback([], error);
  });
}

/**
 * Ensure default Cash account exists for user
 */
export async function ensureDefaultAccounts(uid, initialBalance = 0) {
  const accounts = await getAccounts(uid);
  if (accounts.length === 0) {
    // Create Cash Account as default
    await createAccount(uid, {
      name: 'Cash',
      type: 'Cash',
      initialBalance: Number(initialBalance) || 0,
      icon: '💵'
    });
  }
}

// ─── Transactions CRUD ──────────────────────────

/**
 * Add a new transaction (INCOME, EXPENSE, TRANSFER)
 * V3: Validates that date is today's local date
 */
export async function addTransaction(uid, data) {
  // V3: Backend date validation — new transactions must be today
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  if (data.date !== todayStr) {
    throw new Error('⚠️ Invalid transaction date. New transactions can only be created for today.');
  }

  const txRef = collection(db, 'users', uid, 'transactions');
  const txData = {
    type: data.type, // 'INCOME' | 'EXPENSE' | 'TRANSFER'
    amount: Number(data.amount),
    date: data.date,
    reason: data.reason.trim(),
    category: data.category || (data.type === 'TRANSFER' ? 'Transfer' : 'Other'),
    notes: (data.notes || '').trim(),
    createdAt: new Date().toISOString()
  };

  if (data.type === 'INCOME') {
    txData.destinationAccountId = data.destinationAccountId;
  } else if (data.type === 'EXPENSE') {
    txData.sourceAccountId = data.sourceAccountId;
  } else if (data.type === 'TRANSFER') {
    txData.sourceAccountId = data.sourceAccountId;
    txData.destinationAccountId = data.destinationAccountId;
  }

  const docRef = await addDoc(txRef, txData);
  return docRef.id;
}

/**
 * Update transaction
 */
export async function updateTransaction(uid, txId, data) {
  const txRef = doc(db, 'users', uid, 'transactions', txId);
  const txData = {
    amount: Number(data.amount),
    date: data.date,
    reason: data.reason.trim(),
    category: data.category || (data.type === 'TRANSFER' ? 'Transfer' : 'Other'),
    notes: (data.notes || '').trim(),
    updatedAt: new Date().toISOString()
  };

  if (data.sourceAccountId !== undefined) txData.sourceAccountId = data.sourceAccountId;
  if (data.destinationAccountId !== undefined) txData.destinationAccountId = data.destinationAccountId;

  await updateDoc(txRef, txData);
}

/**
 * Delete transaction
 */
export async function deleteTransaction(uid, txId) {
  await deleteDoc(doc(db, 'users', uid, 'transactions', txId));
}

/**
 * Subscribe to real-time transaction updates
 */
export function subscribeToTransactions(uid, callback) {
  const txRef = collection(db, 'users', uid, 'transactions');
  const q = query(txRef, orderBy('createdAt', 'desc'));

  return onSnapshot(q, (snapshot) => {
    const transactions = [];
    snapshot.forEach((doc) => {
      transactions.push({ id: doc.id, ...doc.data() });
    });
    callback(transactions);
  }, (error) => {
    console.error('Transaction subscription error:', error);
    callback([], error);
  });
}

// ─── Budgets CRUD ──────────────────────────────

export async function setBudget(uid, budgetData) {
  const budgetId = budgetData.category || 'monthly';
  await setDoc(doc(db, 'users', uid, 'budgets', budgetId), {
    category: budgetData.category || 'monthly',
    amount: Number(budgetData.amount),
    month: budgetData.month,
    updatedAt: new Date().toISOString()
  });
}

export async function getBudgets(uid) {
  const budgetRef = collection(db, 'users', uid, 'budgets');
  const snapshot = await getDocs(budgetRef);

  const budgets = [];
  snapshot.forEach((doc) => {
    budgets.push({ id: doc.id, ...doc.data() });
  });
  return budgets;
}

export async function deleteBudget(uid, budgetId) {
  await deleteDoc(doc(db, 'users', uid, 'budgets', budgetId));
}
