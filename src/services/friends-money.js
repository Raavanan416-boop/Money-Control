// ============================================
// 🤝 Money Control — Friends Money Service
// ============================================

import {
  doc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  onSnapshot,
  getDocs
} from 'firebase/firestore';
import { db, getDb } from '../config/firebase.js';

function firestoreDb() {
  return db || getDb();
}

// ─── Friend Money CRUD ──────────────────────────

/**
 * Add a new friend money record + create a balance-adjusting transaction.
 *
 * Type "GAVE"     → EXPENSE from account (money leaves my hand)
 * Type "BORROWED" → INCOME to account   (money enters my hand)
 */
export async function addFriendMoney(uid, data) {
  if (!uid) return null;

  const amount = Number(data.amount);
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  // 1. Create friend money record
  const fmRef = collection(firestoreDb(), 'users', uid, 'friendMoney');
  const record = {
    friendName: (data.friendName || '').trim(),
    amount: amount,
    type: data.type, // 'GAVE' | 'BORROWED'
    reason: (data.reason || '').trim(),
    date: data.date || todayStr,
    createdAt: now.toISOString(),
    returnedAmount: 0,
    remainingAmount: amount,
    status: 'pending',
    accountId: data.accountId || '',
    repayments: []
  };
  const docRef = await addDoc(fmRef, record);

  // 2. Create balance-adjusting transaction (flagged so analytics ignores it)
  const txRef = collection(firestoreDb(), 'users', uid, 'transactions');
  if (data.type === 'GAVE') {
    // Money leaves the account
    await addDoc(txRef, {
      type: 'EXPENSE',
      amount: amount,
      date: todayStr,
      reason: `Friend Money: Gave to ${record.friendName}`,
      category: 'Friend Money',
      notes: record.reason || '',
      sourceAccountId: data.accountId,
      isFriendMoney: true,
      friendMoneyId: docRef.id,
      createdAt: now.toISOString()
    });
  } else if (data.type === 'BORROWED') {
    // Money enters the account
    await addDoc(txRef, {
      type: 'INCOME',
      amount: amount,
      date: todayStr,
      reason: `Friend Money: Borrowed from ${record.friendName}`,
      category: 'Friend Money',
      notes: record.reason || '',
      destinationAccountId: data.accountId,
      isFriendMoney: true,
      friendMoneyId: docRef.id,
      createdAt: now.toISOString()
    });
  }

  return docRef.id;
}

/**
 * Add a repayment to an existing friend money record.
 *
 * "GAVE"     repayment → friend returns money → INCOME to my account
 * "BORROWED" repayment → I return money       → EXPENSE from my account
 */
export async function addRepayment(uid, recordId, repayAmount, accountId, record) {
  if (!uid || !recordId) return;

  const amount = Number(repayAmount);
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  const newReturnedAmount = (Number(record.returnedAmount) || 0) + amount;
  const newRemainingAmount = Number(record.amount) - newReturnedAmount;
  const isSettled = newRemainingAmount <= 0;

  // 1. Update the friend money record
  const repayments = [...(record.repayments || []), {
    amount: amount,
    date: todayStr,
    createdAt: now.toISOString()
  }];

  const fmDocRef = doc(firestoreDb(), 'users', uid, 'friendMoney', recordId);
  await updateDoc(fmDocRef, {
    returnedAmount: newReturnedAmount,
    remainingAmount: Math.max(0, newRemainingAmount),
    status: isSettled ? 'settled' : 'pending',
    repayments: repayments
  });

  // 2. Create balance-adjusting transaction
  const txRef = collection(firestoreDb(), 'users', uid, 'transactions');
  if (record.type === 'GAVE') {
    // Friend is returning money to me → income
    await addDoc(txRef, {
      type: 'INCOME',
      amount: amount,
      date: todayStr,
      reason: `Friend Money: ${record.friendName} returned`,
      category: 'Friend Money',
      notes: '',
      destinationAccountId: accountId || record.accountId,
      isFriendMoney: true,
      friendMoneyId: recordId,
      createdAt: now.toISOString()
    });
  } else if (record.type === 'BORROWED') {
    // I am returning money to friend → expense
    await addDoc(txRef, {
      type: 'EXPENSE',
      amount: amount,
      date: todayStr,
      reason: `Friend Money: Returned to ${record.friendName}`,
      category: 'Friend Money',
      notes: '',
      sourceAccountId: accountId || record.accountId,
      isFriendMoney: true,
      friendMoneyId: recordId,
      createdAt: now.toISOString()
    });
  }
}

/**
 * Delete a friend money record
 */
export async function deleteFriendRecord(uid, recordId) {
  if (!uid || !recordId) return;
  await deleteDoc(doc(firestoreDb(), 'users', uid, 'friendMoney', recordId));
}

/**
 * Subscribe to friend money records in real-time
 */
export function subscribeFriendMoney(uid, callback) {
  if (!uid) {
    callback([]);
    return () => {};
  }
  const fmRef = collection(firestoreDb(), 'users', uid, 'friendMoney');
  const q = query(fmRef, orderBy('createdAt', 'desc'));

  return onSnapshot(q, (snapshot) => {
    const records = [];
    snapshot.forEach((doc) => {
      records.push({ id: doc.id, ...doc.data() });
    });
    callback(records);
  }, (error) => {
    console.error('Friend money subscription error:', error);
    callback([], error);
  });
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
