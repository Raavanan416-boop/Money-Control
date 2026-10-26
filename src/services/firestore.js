// ============================================
// 💰 Money Control — Firestore Service & Local-First Bridge
// Offline-first architecture: writes to IndexedDB immediately, updates UI instantly,
// and synchronizes to Firebase automatically with idempotent operations.
// ============================================

import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  deleteDoc,
  collection,
  query,
  orderBy,
  onSnapshot,
  getDocs,
  writeBatch,
  deleteField
} from 'firebase/firestore';
import { db, getDb, auth } from '../config/firebase.js';
import { calculateAccountHistory } from '../utils/calculations.js';
import {
  putItem,
  getItem,
  deleteItem,
  getItemsByUserId,
  putItems,
  enqueueSyncOperation,
  generateLocalId,
  clearUserDataLocally
} from './local-db.js';
import { syncPendingOperations } from './sync-engine.js';

function firestoreDb() {
  return db || getDb();
}

// ─── User Profile ──────────────────────────────

export async function createUserProfile(uid, data) {
  if (!uid) return;
  const name = (data && data.name) ? String(data.name).trim() : 'User';
  const email = (data && data.email) ? String(data.email).trim() : '';

  const profileData = {
    uid,
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
  };

  // 1. Save to localStorage for instant synchronous recovery
  try {
    localStorage.setItem(`mc_profile_${uid}`, JSON.stringify(profileData));
  } catch (e) {}

  // 2. Save to local IndexedDB immediately
  await putItem('users', profileData);

  // 3. Queue sync operation
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'profile',
    action: 'UPDATE',
    entityId: uid,
    payload: profileData
  });

  // 4. Sync if online
  syncPendingOperations(false).catch(() => {});
}

export async function getUserProfile(uid) {
  if (!uid) return null;

  // 1. Try localStorage first for instantaneous 0ms synchronous response
  try {
    const cachedRaw = localStorage.getItem(`mc_profile_${uid}`);
    if (cachedRaw) {
      const cached = JSON.parse(cachedRaw);
      if (cached && cached.name) {
        // Asynchronously check IndexedDB/network in background
        getItem('users', uid).then(local => {
          if (!local) putItem('users', cached);
        }).catch(() => {});
        return cached;
      }
    }
  } catch (e) {}

  // 2. Try local IndexedDB
  try {
    const localProfile = await getItem('users', uid);
    if (localProfile) {
      try {
        localStorage.setItem(`mc_profile_${uid}`, JSON.stringify(localProfile));
      } catch (e) {}

      // If online, fetch fresh profile in background without blocking UI
      if (typeof navigator !== 'undefined' && navigator.onLine) {
        getDoc(doc(firestoreDb(), 'users', uid)).then(snap => {
          if (snap && snap.exists()) {
            const fresh = { uid, id: snap.id, ...snap.data() };
            putItem('users', fresh);
            try { localStorage.setItem(`mc_profile_${uid}`, JSON.stringify(fresh)); } catch (e) {}
          }
        }).catch(() => {});
      }
      return localProfile;
    }
  } catch (e) {
    console.warn('[Firestore] getUserProfile local error:', e);
  }

  // 3. If offline, do NOT block on network getDoc
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return null;
  }

  // 4. Fallback to Firestore if not cached locally and online
  try {
    const fetchPromise = getDoc(doc(firestoreDb(), 'users', uid));
    const timeoutPromise = new Promise(resolve => setTimeout(() => resolve(null), 2000));
    const docSnap = await Promise.race([fetchPromise, timeoutPromise]);

    if (docSnap && docSnap.exists()) {
      const profile = { uid, id: docSnap.id, ...docSnap.data() };
      await putItem('users', profile);
      try { localStorage.setItem(`mc_profile_${uid}`, JSON.stringify(profile)); } catch (e) {}
      return profile;
    }
  } catch (e) {
    console.warn('[Firestore] getUserProfile network warning:', e);
  }

  return null;
}

export async function updateUserProfile(uid, data) {
  if (!uid) return;

  const current = (await getItem('users', uid)) || { uid };
  const updated = { ...current, ...data, updatedAt: new Date().toISOString() };
  try {
    localStorage.setItem(`mc_profile_${uid}`, JSON.stringify(updated));
  } catch (e) {}
  await putItem('users', updated);

  await enqueueSyncOperation({
    userId: uid,
    entityType: 'profile',
    action: 'UPDATE',
    entityId: uid,
    payload: data
  });

  syncPendingOperations(false).catch(() => {});
}

/**
 * Set the initial balance for a user and seed default Cash account
 */
export async function setInitialBalance(uid, amount) {
  if (!uid) return;
  const numAmount = Number(amount) || 0;

  await updateUserProfile(uid, { initialBalance: numAmount });
  await ensureDefaultAccounts(uid, numAmount);
}

export async function updateUserSettings(uid, settings) {
  if (!uid) return;
  const profile = await getUserProfile(uid);
  const currentSettings = profile?.settings || {};
  const updatedSettings = { ...currentSettings, ...settings };

  await updateUserProfile(uid, { settings: updatedSettings });
}

export async function deleteUserData(uid) {
  if (!uid) return;

  // Clear local database
  await clearUserDataLocally(uid);

  // If online, delete in Firestore
  try {
    const batch = writeBatch(firestoreDb());
    const accSnap = await getDocs(collection(firestoreDb(), 'users', uid, 'accounts')).catch(() => null);
    if (accSnap) accSnap.forEach(d => batch.delete(d.ref));

    const txSnap = await getDocs(collection(firestoreDb(), 'users', uid, 'transactions')).catch(() => null);
    if (txSnap) txSnap.forEach(d => batch.delete(d.ref));

    const budgetSnap = await getDocs(collection(firestoreDb(), 'users', uid, 'budgets')).catch(() => null);
    if (budgetSnap) budgetSnap.forEach(d => batch.delete(d.ref));

    batch.delete(doc(firestoreDb(), 'users', uid));
    await batch.commit();
  } catch (e) {
    console.warn('[Firestore] deleteUserData online cleanup warning:', e);
  }
}

// ─── Accounts CRUD ──────────────────────────────

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
 * Create a new account (Local-first with persistent ID)
 */
export async function createAccount(uid, data) {
  if (!uid) return null;
  const accId = generateLocalId('acc');
  const now = new Date().toISOString();

  const account = {
    id: accId,
    userId: uid,
    name: data.name.trim(),
    type: data.type, // 'Cash' | 'Bank' | 'UPI' | 'Other'
    initialBalance: Number(data.initialBalance) || 0,
    bankName: (data.bankName || '').trim(),
    last4Digits: (data.last4Digits || '').trim(),
    icon: data.icon || getAccountTypeDefaultIcon(data.type),
    syncStatus: 'pending',
    createdAt: now,
    updatedAt: now
  };

  // 1. Save to local IndexedDB
  await putItem('accounts', account);

  // 2. Queue for Firebase synchronization
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'account',
    action: 'CREATE',
    entityId: accId,
    payload: account
  });

  // 3. Update in-memory state
  if (typeof window !== 'undefined' && window.appState) {
    window.appState.accounts = [...(window.appState.accounts || []), account];
  }

  // 4. Trigger sync in background
  syncPendingOperations(false).catch(() => {});

  return accId;
}

/**
 * Update account
 */
export async function updateAccount(uid, accountId, data) {
  if (!uid || !accountId) return;

  const localAcc = await getItem('accounts', accountId);
  const now = new Date().toISOString();
  const updateData = {
    ...(localAcc || {}),
    id: accountId,
    userId: uid,
    name: data.name.trim(),
    type: data.type,
    bankName: (data.bankName || '').trim(),
    last4Digits: (data.last4Digits || '').trim(),
    icon: data.icon || getAccountTypeDefaultIcon(data.type),
    syncStatus: 'pending',
    updatedAt: now
  };
  if (data.notes !== undefined) {
    updateData.notes = (data.notes || '').trim();
  }
  if (data.initialBalance !== undefined) {
    updateData.initialBalance = Number(data.initialBalance) || 0;
  }

  // Save to IndexedDB
  await putItem('accounts', updateData);

  // Queue sync
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'account',
    action: 'UPDATE',
    entityId: accountId,
    payload: updateData
  });

  // Update in-memory state
  if (typeof window !== 'undefined' && window.appState && window.appState.accounts) {
    window.appState.accounts = window.appState.accounts.map(a => a.id === accountId ? updateData : a);
  }

  syncPendingOperations(false).catch(() => {});
}

/**
 * Delete account
 */
export async function deleteAccountDoc(uid, accountId) {
  if (!uid || !accountId) return;

  // Delete from IndexedDB
  await deleteItem('accounts', accountId);

  // Queue delete sync operation
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'account',
    action: 'DELETE',
    entityId: accountId,
    payload: { id: accountId }
  });

  if (typeof window !== 'undefined' && window.appState && window.appState.accounts) {
    window.appState.accounts = window.appState.accounts.filter(a => a.id !== accountId);
  }

  syncPendingOperations(false).catch(() => {});
}

/**
 * Get all accounts for a user (Local-first)
 */
export async function getAccounts(uid) {
  if (!uid) return [];
  const local = await getItemsByUserId('accounts', uid);
  if (local && local.length > 0) {
    return local.sort((a, b) => (a.createdAt || '').localeCompare(b.createdAt || ''));
  }

  // If offline, do NOT attempt network fetch
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return local || [];
  }

  // If local is empty and online, fetch from Firestore
  try {
    const accRef = collection(firestoreDb(), 'users', uid, 'accounts');
    const q = query(accRef, orderBy('createdAt', 'asc'));
    const snapshot = await getDocs(q);

    const accounts = [];
    snapshot.forEach((d) => {
      accounts.push({ id: d.id, userId: uid, syncStatus: 'synced', ...d.data() });
    });
    if (accounts.length > 0) {
      await putItems('accounts', accounts);
    }
    return accounts;
  } catch (e) {
    return [];
  }
}

/**
 * Subscribe to accounts in real-time (Emits local cache immediately, then listens online)
 */
export function subscribeToAccounts(uid, callback) {
  if (!uid) {
    callback([]);
    return () => {};
  }

  // 1. Immediately emit cached accounts from IndexedDB
  getItemsByUserId('accounts', uid).then(localAccounts => {
    if (localAccounts && localAccounts.length > 0) {
      callback(localAccounts.sort((a, b) => (a.createdAt || '').localeCompare(b.createdAt || '')));
    }
  }).catch(() => {});

  // 2. Set up Firestore onSnapshot for real-time remote updates
  let unsubscribeFirestore = () => {};
  try {
    const accRef = collection(firestoreDb(), 'users', uid, 'accounts');
    const q = query(accRef, orderBy('createdAt', 'asc'));

    unsubscribeFirestore = onSnapshot(q, async (snapshot) => {
      const serverAccounts = [];
      snapshot.forEach((doc) => {
        serverAccounts.push({ id: doc.id, userId: uid, syncStatus: 'synced', ...doc.data() });
      });

      // Merge with pending local accounts so unsynced accounts are not lost
      const localAccs = await getItemsByUserId('accounts', uid).catch(() => []);
      const pendingAccs = localAccs.filter(a => a.syncStatus === 'pending');
      const mergedMap = new Map();

      serverAccounts.forEach(a => mergedMap.set(a.id, a));
      pendingAccs.forEach(a => mergedMap.set(a.id, a));

      const merged = Array.from(mergedMap.values()).sort((a, b) =>
        (a.createdAt || '').localeCompare(b.createdAt || '')
      );

      await putItems('accounts', merged).catch(() => {});
      callback(merged);
    }, (error) => {
      console.warn('[Firestore] Account subscription offline/error:', error);
      // Fall back to local accounts
      getItemsByUserId('accounts', uid).then(callback).catch(() => callback([]));
    });
  } catch (e) {
    console.warn('[Firestore] subscribeToAccounts setup warning:', e);
  }

  return () => {
    unsubscribeFirestore();
  };
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
 * Local-first: Saves to IndexedDB immediately, updates balance instantly,
 * and queues for idempotent Firebase synchronization.
 */
export async function addTransaction(uid, data) {
  if (!uid) return null;
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  if (data.date !== todayStr) {
    throw new Error('⚠️ Invalid transaction date. New transactions can only be created for today.');
  }

  const accounts = await getAccounts(uid);
  const existingTx = await getItemsByUserId('transactions', uid);

  const amount = Number(data.amount);
  const txId = generateLocalId('tx');
  const nowIso = data.createdAt || now.toISOString();

  const txData = {
    id: txId,
    userId: uid,
    type: data.type, // 'INCOME' | 'EXPENSE' | 'TRANSFER'
    amount: amount,
    date: data.date,
    reason: (data.reason || '').trim(),
    category: data.category || (data.type === 'TRANSFER' ? 'Transfer' : 'Other'),
    notes: (data.notes || '').trim(),
    syncStatus: 'pending',
    createdAt: nowIso
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

  // 1. Store in IndexedDB immediately
  await putItem('transactions', txData);

  // 2. Queue for Firebase synchronization
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'transaction',
    action: 'CREATE',
    entityId: txId,
    payload: txData
  });

  // 3. Update in-memory state immediately so UI updates with zero delay
  if (typeof window !== 'undefined' && window.appState) {
    window.appState.transactions = [txData, ...(window.appState.transactions || [])];
  }

  // 4. Trigger synchronization in background if online
  syncPendingOperations(false).catch(() => {});

  return txId;
}

/**
 * Update transaction (Unprotected fields or local edit)
 */
export async function updateTransaction(uid, txId, data) {
  if (!uid || !txId) return;

  const existing = await getItem('transactions', txId);
  const nowIso = new Date().toISOString();

  const updatedTx = {
    ...(existing || {}),
    id: txId,
    userId: uid,
    amount: Number(data.amount !== undefined ? data.amount : existing?.amount || 0),
    date: data.date || existing?.date,
    reason: data.reason !== undefined ? String(data.reason).trim() : existing?.reason,
    category: data.category !== undefined ? data.category : existing?.category,
    notes: data.notes !== undefined ? String(data.notes).trim() : existing?.notes,
    syncStatus: 'pending',
    updatedAt: nowIso,
    baseUpdatedAt: existing?.updatedAt || existing?.createdAt || nowIso
  };

  if (data.type !== undefined) updatedTx.type = data.type;
  if (data.sourceAccountId !== undefined) updatedTx.sourceAccountId = data.sourceAccountId;
  if (data.destinationAccountId !== undefined) updatedTx.destinationAccountId = data.destinationAccountId;

  // 1. Save to IndexedDB immediately
  await putItem('transactions', updatedTx);

  // 2. Queue for synchronization
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'transaction',
    action: 'UPDATE',
    entityId: txId,
    payload: updatedTx
  });

  // 3. Update in-memory state
  if (typeof window !== 'undefined' && window.appState && window.appState.transactions) {
    window.appState.transactions = window.appState.transactions.map(t => t.id === txId ? updatedTx : t);
  }

  syncPendingOperations(false).catch(() => {});
}

/**
 * Update transaction with correction (OTP verified protected fields)
 */
export async function updateTransactionWithCorrection(uid, txId, originalTx, correctedData) {
  if (!uid || !txId) return;

  const existing = await getItem('transactions', txId);
  const nowIso = new Date().toISOString();

  const updatedTx = {
    ...(existing || {}),
    id: txId,
    userId: uid,
    amount: Number(correctedData.amount),
    date: correctedData.date,
    reason: (correctedData.reason || '').trim(),
    category: correctedData.category || (correctedData.type === 'TRANSFER' ? 'Transfer' : 'Other'),
    notes: correctedData.notes !== undefined ? (correctedData.notes || '').trim() : (originalTx.notes || '').trim(),
    syncStatus: 'pending',
    updatedAt: nowIso,
    correctedAt: nowIso,
    baseUpdatedAt: existing?.updatedAt || existing?.createdAt || nowIso,
    correctedFrom: {
      amount: originalTx.amount,
      date: originalTx.date,
      sourceAccountId: originalTx.sourceAccountId || null,
      destinationAccountId: originalTx.destinationAccountId || null,
      category: originalTx.category || null,
      reason: originalTx.reason || ''
    }
  };

  const targetType = correctedData.type || originalTx.type;
  updatedTx.type = targetType;

  if (targetType === 'INCOME') {
    if (correctedData.destinationAccountId !== undefined) {
      updatedTx.destinationAccountId = correctedData.destinationAccountId;
    }
    delete updatedTx.sourceAccountId;
  } else if (targetType === 'EXPENSE') {
    if (correctedData.sourceAccountId !== undefined) {
      updatedTx.sourceAccountId = correctedData.sourceAccountId;
    }
    delete updatedTx.destinationAccountId;
  } else if (targetType === 'TRANSFER') {
    if (correctedData.sourceAccountId !== undefined) {
      updatedTx.sourceAccountId = correctedData.sourceAccountId;
    }
    if (correctedData.destinationAccountId !== undefined) {
      updatedTx.destinationAccountId = correctedData.destinationAccountId;
    }
  }

  if (correctedData.createdAt) {
    updatedTx.createdAt = correctedData.createdAt;
  }

  // 1. Save to local IndexedDB
  await putItem('transactions', updatedTx);

  // 2. Queue sync operation
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'transaction',
    action: 'UPDATE',
    entityId: txId,
    payload: updatedTx
  });

  // 3. Update in-memory state
  if (typeof window !== 'undefined' && window.appState && window.appState.transactions) {
    window.appState.transactions = window.appState.transactions.map(t => t.id === txId ? updatedTx : t);
  }

  syncPendingOperations(false).catch(() => {});
}

/**
 * Delete transaction (Local-first with safe queueing)
 */
export async function deleteTransaction(uid, txId) {
  if (!uid || !txId) return;

  // Remove from IndexedDB
  await deleteItem('transactions', txId);

  // Queue delete sync operation
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'transaction',
    action: 'DELETE',
    entityId: txId,
    payload: { id: txId }
  });

  if (typeof window !== 'undefined' && window.appState && window.appState.transactions) {
    window.appState.transactions = window.appState.transactions.filter(t => t.id !== txId);
  }

  syncPendingOperations(false).catch(() => {});
}

/**
 * Subscribe to real-time transaction updates (Local-first instant load)
 */
export function subscribeToTransactions(uid, callback) {
  if (!uid) {
    callback([]);
    return () => {};
  }

  // 1. Immediately emit transactions from IndexedDB
  getItemsByUserId('transactions', uid).then(localTx => {
    if (localTx && localTx.length > 0) {
      const sorted = localTx.sort((a, b) => {
        const dateCmp = (b.date || '').localeCompare(a.date || '');
        if (dateCmp !== 0) return dateCmp;
        return (b.createdAt || '').localeCompare(a.createdAt || '');
      });
      callback(sorted);
    }
  }).catch(() => {});

  // 2. Remote Firestore onSnapshot listener
  let unsubscribeFirestore = () => {};
  try {
    const txRef = collection(firestoreDb(), 'users', uid, 'transactions');
    const q = query(txRef, orderBy('createdAt', 'desc'));

    unsubscribeFirestore = onSnapshot(q, async (snapshot) => {
      const serverTx = [];
      snapshot.forEach((doc) => {
        serverTx.push({ id: doc.id, userId: uid, syncStatus: 'synced', ...doc.data() });
      });

      // Merge with pending local transactions so unsynced offline records are preserved
      const localList = await getItemsByUserId('transactions', uid).catch(() => []);
      const pendingList = localList.filter(t => t.syncStatus === 'pending' || t.syncStatus === 'syncing');
      const txMap = new Map();

      serverTx.forEach(t => txMap.set(t.id, t));
      pendingList.forEach(t => txMap.set(t.id, t)); // preserve pending

      const merged = Array.from(txMap.values()).sort((a, b) => {
        const dateCmp = (b.date || '').localeCompare(a.date || '');
        if (dateCmp !== 0) return dateCmp;
        return (b.createdAt || '').localeCompare(a.createdAt || '');
      });

      await putItems('transactions', merged).catch(() => {});
      callback(merged);
    }, (error) => {
      console.warn('[Firestore] Transaction subscription offline/error:', error);
      getItemsByUserId('transactions', uid).then(callback).catch(() => callback([]));
    });
  } catch (e) {
    console.warn('[Firestore] subscribeToTransactions setup warning:', e);
  }

  return () => {
    unsubscribeFirestore();
  };
}

// ─── Budgets CRUD ──────────────────────────────

export async function setBudget(uid, budgetData) {
  if (!uid) return;
  const budgetId = budgetData.category || 'monthly';
  const payload = {
    id: budgetId,
    userId: uid,
    category: budgetData.category || 'monthly',
    amount: Number(budgetData.amount),
    month: budgetData.month,
    updatedAt: new Date().toISOString()
  };

  await putItem('budgets', payload);
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'budget',
    action: 'CREATE',
    entityId: budgetId,
    payload
  });

  syncPendingOperations(false).catch(() => {});
}

export async function getBudgets(uid) {
  if (!uid) return [];
  const local = await getItemsByUserId('budgets', uid);
  if (local && local.length > 0) return local;

  // If offline, do NOT attempt network fetch
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return local || [];
  }

  try {
    const budgetRef = collection(firestoreDb(), 'users', uid, 'budgets');
    const snapshot = await getDocs(budgetRef);

    const budgets = [];
    snapshot.forEach((doc) => {
      budgets.push({ id: doc.id, userId: uid, ...doc.data() });
    });
    if (budgets.length > 0) {
      await putItems('budgets', budgets);
    }
    return budgets;
  } catch (e) {
    return [];
  }
}

export async function deleteBudget(uid, budgetId) {
  if (!uid || !budgetId) return;
  await deleteItem('budgets', budgetId);
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'budget',
    action: 'DELETE',
    entityId: budgetId,
    payload: { id: budgetId }
  });
  syncPendingOperations(false).catch(() => {});
}
