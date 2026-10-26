// ============================================
// 🤝 Money Control — Friends Money Service & Local-First Bridge
// Immediate offline IndexedDB persistence, instant balance updates,
// and idempotent Firebase synchronization.
// ============================================

import {
  collection,
  query,
  orderBy,
  onSnapshot
} from 'firebase/firestore';
import { db, getDb } from '../config/firebase.js';
import {
  putItem,
  getItem,
  deleteItem,
  getItemsByUserId,
  putItems,
  enqueueSyncOperation,
  generateLocalId
} from './local-db.js';
import { syncPendingOperations } from './sync-engine.js';
import { getTodayDate } from '../utils/formatters.js';

function firestoreDb() {
  return db || getDb();
}

// ─── Friend Money CRUD ──────────────────────────

/**
 * Add a new friend money record + create a balance-adjusting transaction.
 * Local-first: Saves to IndexedDB immediately, updates balance instantly,
 * and queues for idempotent Firebase synchronization.
 *
 * Type "GAVE"     → EXPENSE from account (money leaves my hand)
 * Type "BORROWED" → INCOME to account   (money enters my hand)
 */
export async function addFriendMoney(uid, data) {
  if (!uid) return null;

  const amount = Number(data.amount);
  const now = new Date();
  const todayStr = data.date || getTodayDate();
  const fmId = generateLocalId('fm');
  const txId = generateLocalId('tx');

  // 1. Create friend money record
  const record = {
    id: fmId,
    userId: uid,
    friendName: (data.friendName || '').trim(),
    amount: amount,
    type: data.type, // 'GAVE' | 'BORROWED'
    reason: (data.reason || '').trim(),
    date: todayStr,
    createdAt: now.toISOString(),
    returnedAmount: 0,
    remainingAmount: amount,
    status: 'pending',
    accountId: data.accountId || '',
    repayments: [],
    syncStatus: 'pending'
  };

  await putItem('friendMoney', record);
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'friendMoney',
    action: 'CREATE',
    entityId: fmId,
    payload: record
  });

  // 2. Create balance-adjusting transaction (flagged so analytics ignores it)
  const isGave = data.type === 'GAVE';
  const txPayload = {
    id: txId,
    userId: uid,
    type: isGave ? 'EXPENSE' : 'INCOME',
    amount: amount,
    date: todayStr,
    reason: isGave ? `Friend Money: Gave to ${record.friendName}` : `Friend Money: Borrowed from ${record.friendName}`,
    category: 'Friend Money',
    notes: record.reason || '',
    isFriendMoney: true,
    friendMoneyId: fmId,
    syncStatus: 'pending',
    createdAt: now.toISOString()
  };

  if (isGave) {
    txPayload.sourceAccountId = data.accountId;
  } else {
    txPayload.destinationAccountId = data.accountId;
  }

  await putItem('transactions', txPayload);
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'transaction',
    action: 'CREATE',
    entityId: txId,
    payload: txPayload
  });

  // 3. Update in-memory state immediately
  if (typeof window !== 'undefined' && window.appState) {
    window.appState.friendMoneyRecords = [record, ...(window.appState.friendMoneyRecords || [])];
    window.appState.transactions = [txPayload, ...(window.appState.transactions || [])];
  }

  // 4. Trigger sync in background if online
  syncPendingOperations(false).catch(() => {});

  return fmId;
}

/**
 * Add a repayment to an existing friend money record.
 * Local-first: updates IndexedDB immediately, adds repayment transaction,
 * and queues for synchronization.
 *
 * "GAVE"     repayment → friend returns money → INCOME to my account
 * "BORROWED" repayment → I return money       → EXPENSE from my account
 */
export async function addRepayment(uid, recordId, repayAmount, accountId, record) {
  if (!uid || !recordId) return;

  const amount = Number(repayAmount);
  const now = new Date();
  const todayStr = getTodayDate();
  const txId = generateLocalId('tx');

  const newReturnedAmount = (Number(record.returnedAmount) || 0) + amount;
  const newRemainingAmount = Number(record.amount) - newReturnedAmount;
  const isSettled = newRemainingAmount <= 0;

  // 1. Update the friend money record locally
  const repayments = [...(record.repayments || []), {
    amount: amount,
    date: todayStr,
    createdAt: now.toISOString()
  }];

  const updatedRecord = {
    ...record,
    id: recordId,
    userId: uid,
    returnedAmount: newReturnedAmount,
    remainingAmount: Math.max(0, newRemainingAmount),
    status: isSettled ? 'settled' : 'pending',
    repayments: repayments,
    syncStatus: 'pending',
    updatedAt: now.toISOString()
  };

  await putItem('friendMoney', updatedRecord);
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'friendMoney',
    action: 'UPDATE',
    entityId: recordId,
    payload: updatedRecord
  });

  // 2. Create balance-adjusting transaction
  const isGave = record.type === 'GAVE';
  const txPayload = {
    id: txId,
    userId: uid,
    type: isGave ? 'INCOME' : 'EXPENSE',
    amount: amount,
    date: todayStr,
    reason: isGave ? `Friend Money: ${record.friendName} returned` : `Friend Money: Returned to ${record.friendName}`,
    category: 'Friend Money',
    notes: '',
    isFriendMoney: true,
    friendMoneyId: recordId,
    syncStatus: 'pending',
    createdAt: now.toISOString()
  };

  if (isGave) {
    txPayload.destinationAccountId = accountId || record.accountId;
  } else {
    txPayload.sourceAccountId = accountId || record.accountId;
  }

  await putItem('transactions', txPayload);
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'transaction',
    action: 'CREATE',
    entityId: txId,
    payload: txPayload
  });

  // 3. Update in-memory state
  if (typeof window !== 'undefined' && window.appState) {
    if (window.appState.friendMoneyRecords) {
      window.appState.friendMoneyRecords = window.appState.friendMoneyRecords.map(r => r.id === recordId ? updatedRecord : r);
    }
    window.appState.transactions = [txPayload, ...(window.appState.transactions || [])];
  }

  syncPendingOperations(false).catch(() => {});
}

/**
 * Delete a friend money record
 */
export async function deleteFriendRecord(uid, recordId) {
  if (!uid || !recordId) return;

  await deleteItem('friendMoney', recordId);
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'friendMoney',
    action: 'DELETE',
    entityId: recordId,
    payload: { id: recordId }
  });

  if (typeof window !== 'undefined' && window.appState && window.appState.friendMoneyRecords) {
    window.appState.friendMoneyRecords = window.appState.friendMoneyRecords.filter(r => r.id !== recordId);
  }

  syncPendingOperations(false).catch(() => {});
}

/**
 * Subscribe to friend money records in real-time (Local-first immediate load)
 */
export function subscribeFriendMoney(uid, callback) {
  if (!uid) {
    callback([]);
    return () => {};
  }

  // 1. Immediately emit from local IndexedDB
  getItemsByUserId('friendMoney', uid).then(localRecords => {
    if (localRecords && localRecords.length > 0) {
      callback(localRecords.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || '')));
    }
  }).catch(() => {});

  // 2. Set up Firestore onSnapshot listener
  let unsubscribeFirestore = () => {};
  try {
    const fmRef = collection(firestoreDb(), 'users', uid, 'friendMoney');
    const q = query(fmRef, orderBy('createdAt', 'desc'));

    unsubscribeFirestore = onSnapshot(q, async (snapshot) => {
      const serverRecords = [];
      snapshot.forEach((doc) => {
        serverRecords.push({ id: doc.id, userId: uid, syncStatus: 'synced', ...doc.data() });
      });

      // Merge with pending local records
      const localList = await getItemsByUserId('friendMoney', uid).catch(() => []);
      const pendingList = localList.filter(r => r.syncStatus === 'pending');
      const map = new Map();

      serverRecords.forEach(r => map.set(r.id, r));
      pendingList.forEach(r => map.set(r.id, r)); // preserve pending

      const merged = Array.from(map.values()).sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
      await putItems('friendMoney', merged).catch(() => {});
      callback(merged);
    }, (error) => {
      console.warn('[Firestore] Friend money subscription offline/error:', error);
      getItemsByUserId('friendMoney', uid).then(callback).catch(() => callback([]));
    });
  } catch (e) {
    console.warn('[Firestore] subscribeFriendMoney setup warning:', e);
  }

  return () => {
    unsubscribeFirestore();
  };
}

/**
 * Calculate friend money summary from records
 */
export function getFriendMoneySummary(records) {
  let theyOweMe = 0;
  let iOwe = 0;
  let pendingCount = 0;
  let settledCount = 0;

  (records || []).forEach(r => {
    if (r.status === 'pending') {
      pendingCount++;
      if (r.type === 'GAVE') {
        theyOweMe += (Number(r.remainingAmount) || 0);
      } else if (r.type === 'BORROWED') {
        iOwe += (Number(r.remainingAmount) || 0);
      }
    } else {
      settledCount++;
    }
  });

  return { theyOweMe, iOwe, pendingCount, settledCount };
}

/**
 * Get per-friend summary from records
 */
export function getFriendSummaries(records) {
  const friendMap = {};

  (records || []).forEach(r => {
    const name = r.friendName || 'Unknown';
    if (!friendMap[name]) {
      friendMap[name] = { friendName: name, theyOweMe: 0, iOwe: 0, pendingCount: 0, records: [] };
    }
    friendMap[name].records.push(r);
    if (r.status === 'pending') {
      friendMap[name].pendingCount++;
      if (r.type === 'GAVE') {
        friendMap[name].theyOweMe += (Number(r.remainingAmount) || 0);
      } else {
        friendMap[name].iOwe += (Number(r.remainingAmount) || 0);
      }
    }
  });

  return Object.values(friendMap);
}
