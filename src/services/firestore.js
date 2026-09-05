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
import { db, getDb } from '../config/firebase.js';
import { calculateAccountHistory } from '../utils/calculations.js';

function firestoreDb() {
  return db || getDb();
}

// ─── User Profile ──────────────────────────────

export async function createUserProfile(uid, data) {
  if (!uid) return;
  const name = (data && data.name) ? String(data.name).trim() : 'User';
  const email = (data && data.email) ? String(data.email).trim() : '';

  await setDoc(doc(firestoreDb(), 'users', uid), {
    name: name,
    email: email,
    createdAt: (data && data.createdAt) ? data.createdAt : new Date().toISOString(),
    settings: {
      currency: 'INR',
      theme: 'dark',
      notifications: true,
      budgetAlerts: true,
      lowBalanceAlert: true,
      lowBalanceThreshold: 500,
      allowNegativeBalance: false
    }
  }, { merge: true });
}

export async function getUserProfile(uid) {
  if (!uid) return null;
  try {
    const docSnap = await getDoc(doc(firestoreDb(), 'users', uid));
    if (docSnap && docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    }
  } catch (e) {
    console.warn('getUserProfile warning:', e);
  }
  return null;
}

export async function updateUserProfile(uid, data) {
  if (!uid) return;
  await updateDoc(doc(firestoreDb(), 'users', uid), data);
}

/**
 * Set the initial balance for a user and seed default Cash account
 */
export async function setInitialBalance(uid, amount) {
  if (!uid) return;
  await updateDoc(doc(firestoreDb(), 'users', uid), {
    initialBalance: Number(amount)
  });
  await ensureDefaultAccounts(uid, amount);
}

export async function updateUserSettings(uid, settings) {
  if (!uid) return;
  const profile = await getUserProfile(uid);
  const currentSettings = profile?.settings || {};
  await updateDoc(doc(firestoreDb(), 'users', uid), {
    settings: { ...currentSettings, ...settings }
  });
}

export async function deleteUserData(uid) {
  if (!uid) return;
  const batch = writeBatch(firestoreDb());

  // Delete all accounts
  const accSnap = await getDocs(collection(firestoreDb(), 'users', uid, 'accounts'));
  accSnap.forEach((d) => batch.delete(d.ref));

  // Delete all transactions
  const txSnap = await getDocs(collection(firestoreDb(), 'users', uid, 'transactions'));
  txSnap.forEach((d) => batch.delete(d.ref));

  // Delete all budgets
  const budgetSnap = await getDocs(collection(firestoreDb(), 'users', uid, 'budgets'));
  budgetSnap.forEach((d) => batch.delete(d.ref));

  // Delete user document
  batch.delete(doc(firestoreDb(), 'users', uid));

  await batch.commit();
}

// ─── Accounts CRUD ──────────────────────────────

/**
 * Create a new account
 */
export async function createAccount(uid, data) {
  if (!uid) return null;
  const accRef = collection(firestoreDb(), 'users', uid, 'accounts');
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
  if (!uid || !accountId) return;
  const accRef = doc(firestoreDb(), 'users', uid, 'accounts', accountId);
  const updateData = {
    name: data.name.trim(),
    type: data.type,
    bankName: (data.bankName || '').trim(),
    last4Digits: (data.last4Digits || '').trim(),
    icon: data.icon || getAccountTypeDefaultIcon(data.type),
    updatedAt: new Date().toISOString()
  };
  if (data.notes !== undefined) {
    updateData.notes = (data.notes || '').trim();
  }
  if (data.initialBalance !== undefined) {
    updateData.initialBalance = Number(data.initialBalance) || 0;
  }
  await updateDoc(accRef, updateData);
}

/**
 * Delete account
 */
export async function deleteAccountDoc(uid, accountId) {
  if (!uid || !accountId) return;
  await deleteDoc(doc(firestoreDb(), 'users', uid, 'accounts', accountId));
}

/**
 * Get all accounts for a user
 */
export async function getAccounts(uid) {
  if (!uid) return [];
  const accRef = collection(firestoreDb(), 'users', uid, 'accounts');
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
  if (!uid) {
    callback([]);
    return () => {};
  }
  const accRef = collection(firestoreDb(), 'users', uid, 'accounts');
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
  if (!uid) return;
  const accounts = await getAccounts(uid);
  if (accounts.length === 0) {
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
 */
export async function addTransaction(uid, data) {
  if (!uid) return null;
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  if (data.date !== todayStr) {
    throw new Error('⚠️ Invalid transaction date. New transactions can only be created for today.');
  }

  const accounts = await getAccounts(uid);
  const txSnap = await getDocs(query(collection(firestoreDb(), 'users', uid, 'transactions'), orderBy('createdAt', 'asc')));
  const existingTx = [];
  txSnap.forEach(d => existingTx.push({ id: d.id, ...d.data() }));

  const amount = Number(data.amount);
  const txRef = collection(firestoreDb(), 'users', uid, 'transactions');
  const txData = {
    type: data.type, // 'INCOME' | 'EXPENSE' | 'TRANSFER'
    amount: amount,
    date: data.date,
    reason: (data.reason || '').trim(),
    category: data.category || (data.type === 'TRANSFER' ? 'Transfer' : 'Other'),
    notes: (data.notes || '').trim(),
    createdAt: new Date().toISOString()
  };

  if (data.type === 'INCOME') {
    txData.destinationAccountId = data.destinationAccountId;
    const targetAcc = accounts.find(a => a.id === data.destinationAccountId);
    if (targetAcc) {
      const history = calculateAccountHistory(targetAcc, existingTx, accounts);
      txData.previousBalance = history.balance;
      txData.balanceAfter = history.balance + amount;
    }
  } else if (data.type === 'EXPENSE') {
    txData.sourceAccountId = data.sourceAccountId;
    const srcAcc = accounts.find(a => a.id === data.sourceAccountId);
    if (srcAcc) {
      const history = calculateAccountHistory(srcAcc, existingTx, accounts);
      txData.previousBalance = history.balance;
      txData.balanceAfter = history.balance - amount;
    }
  } else if (data.type === 'TRANSFER') {
    txData.sourceAccountId = data.sourceAccountId;
    txData.destinationAccountId = data.destinationAccountId;
    const srcAcc = accounts.find(a => a.id === data.sourceAccountId);
    const destAcc = accounts.find(a => a.id === data.destinationAccountId);
    if (srcAcc) {
      const srcHistory = calculateAccountHistory(srcAcc, existingTx, accounts);
      txData.sourcePreviousBalance = srcHistory.balance;
      txData.sourceBalanceAfter = srcHistory.balance - amount;
    }
    if (destAcc) {
      const destHistory = calculateAccountHistory(destAcc, existingTx, accounts);
      txData.destinationPreviousBalance = destHistory.balance;
      txData.destinationBalanceAfter = destHistory.balance + amount;
    }
  }

  const docRef = await addDoc(txRef, txData);
  return docRef.id;
}

/**
 * Update transaction
 */
export async function updateTransaction(uid, txId, data) {
  if (!uid || !txId) return;
  const txRef = doc(firestoreDb(), 'users', uid, 'transactions', txId);
  const txData = {
    amount: Number(data.amount),
    date: data.date,
    reason: (data.reason || '').trim(),
    category: data.category || (data.type === 'TRANSFER' ? 'Transfer' : 'Other'),
    notes: (data.notes || '').trim(),
    updatedAt: new Date().toISOString()
  };

  if (data.type !== undefined) txData.type = data.type;
  if (data.sourceAccountId !== undefined) txData.sourceAccountId = data.sourceAccountId;
  if (data.destinationAccountId !== undefined) txData.destinationAccountId = data.destinationAccountId;

  await updateDoc(txRef, txData);
}

/**
 * Delete transaction
 */
export async function deleteTransaction(uid, txId) {
  if (!uid || !txId) return;
  await deleteDoc(doc(firestoreDb(), 'users', uid, 'transactions', txId));
}

/**
 * Subscribe to real-time transaction updates
 */
export function subscribeToTransactions(uid, callback) {
  if (!uid) {
    callback([]);
    return () => {};
  }
  const txRef = collection(firestoreDb(), 'users', uid, 'transactions');
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
  if (!uid) return;
  const budgetId = budgetData.category || 'monthly';
  await setDoc(doc(firestoreDb(), 'users', uid, 'budgets', budgetId), {
    category: budgetData.category || 'monthly',
    amount: Number(budgetData.amount),
    month: budgetData.month,
    updatedAt: new Date().toISOString()
  });
}

export async function getBudgets(uid) {
  if (!uid) return [];
  const budgetRef = collection(firestoreDb(), 'users', uid, 'budgets');
  const snapshot = await getDocs(budgetRef);

  const budgets = [];
  snapshot.forEach((doc) => {
    budgets.push({ id: doc.id, ...doc.data() });
  });
  return budgets;
}

export async function deleteBudget(uid, budgetId) {
  if (!uid || !budgetId) return;
  await deleteDoc(doc(firestoreDb(), 'users', uid, 'budgets', budgetId));
}
