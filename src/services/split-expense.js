// ============================================
// 💰 Money Control — Split Expense Service
// Local-first Split Expense management with offline IndexedDB & Firebase sync.
// Accounting Rule: Full initial bill is deducted from user's account,
// and friend receivables/repayments are tracked separately.
// ============================================

import {
  putItem,
  getItem,
  getItemsByUserId,
  enqueueSyncOperation,
  generateLocalId
} from './local-db.js';
import { syncPendingOperations } from './sync-engine.js';
import { getTodayDate } from '../utils/formatters.js';

/**
 * Create a new Split Expense record.
 * 
 * Flow:
 * 1. Creates an EXPENSE transaction for the FULL bill amount from the selected account.
 * 2. For each friend included in the split, creates a Friends Money "GAVE" record (receivable).
 * 3. Creates the parent Split Expense record linking the transaction and friends.
 * 
 * @param {string} uid - Authenticated User ID
 * @param {Object} data
 * @param {number} data.totalAmount - Full initial bill amount
 * @param {string} data.accountId - Account from which full bill was paid
 * @param {string} data.category - Expense category (e.g. 'Food', 'Travel')
 * @param {string} data.reason - Description / title of the split
 * @param {string} [data.notes] - Additional details
 * @param {Array<{ friendName: string, amount: number }>} data.friends - Array of friend shares
 * @param {number} data.myShare - The user's own share of the bill
 * @returns {Promise<{ splitId: string, txId: string, friendRecordIds: string[] }>}
 */
export async function createSplitExpense(uid, data) {
  if (!uid) throw new Error('User ID is required.');
  const totalAmount = Number(data.totalAmount);
  if (!totalAmount || totalAmount <= 0) throw new Error('Valid total amount is required.');
  if (!data.accountId) throw new Error('Payment account is required.');

  const now = new Date();
  const todayStr = getTodayDate();
  const splitId = generateLocalId('split');
  const mainTxId = generateLocalId('tx');

  // 1. Create the primary EXPENSE transaction (Deducts full bill from account immediately)
  const mainTx = {
    id: mainTxId,
    userId: uid,
    type: 'EXPENSE',
    amount: totalAmount,
    date: todayStr,
    reason: `Split Expense: ${(data.reason || 'Group Expense').trim()}`,
    category: data.category || 'Food',
    notes: data.notes || `Total: ₹${totalAmount}. My share: ₹${data.myShare || 0}`,
    sourceAccountId: data.accountId,
    isSplitExpense: true,
    splitExpenseId: splitId,
    syncStatus: 'pending',
    createdAt: now.toISOString()
  };

  await putItem('transactions', mainTx);
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'transaction',
    action: 'CREATE',
    entityId: mainTxId,
    payload: mainTx
  });

  // 2. Create Friends Money "GAVE" records for each friend's share
  const friendRecordIds = [];
  const friendShares = data.friends || [];

  for (const friend of friendShares) {
    const friendAmt = Number(friend.amount);
    if (!friendAmt || friendAmt <= 0) continue;

    const fmId = generateLocalId('fm');
    friendRecordIds.push(fmId);

    const fmRecord = {
      id: fmId,
      userId: uid,
      friendName: (friend.friendName || 'Friend').trim(),
      amount: friendAmt,
      type: 'GAVE', // They owe me
      reason: `Split: ${(data.reason || 'Expense').trim()}`,
      date: todayStr,
      returnedAmount: 0,
      remainingAmount: friendAmt,
      status: 'pending',
      accountId: data.accountId,
      repayments: [],
      isSplitShare: true,
      splitExpenseId: splitId,
      syncStatus: 'pending',
      createdAt: now.toISOString()
    };

    await putItem('friendMoney', fmRecord);
    await enqueueSyncOperation({
      userId: uid,
      entityType: 'friendMoney',
      action: 'CREATE',
      entityId: fmId,
      payload: fmRecord
    });
  }

  // 3. Create Split Expense tracking record
  const splitRecord = {
    id: splitId,
    userId: uid,
    totalAmount,
    myShare: Number(data.myShare) || 0,
    accountId: data.accountId,
    category: data.category || 'Food',
    reason: (data.reason || '').trim(),
    notes: (data.notes || '').trim(),
    transactionId: mainTxId,
    friendRecordIds,
    friends: friendShares,
    syncStatus: 'pending',
    createdAt: now.toISOString()
  };

  await putItem('splitExpenses', splitRecord);
  await enqueueSyncOperation({
    userId: uid,
    entityType: 'splitExpense',
    action: 'CREATE',
    entityId: splitId,
    payload: splitRecord
  });

  // Update in-memory appState immediately if active
  if (typeof window !== 'undefined' && window.appState) {
    window.appState.transactions = [mainTx, ...(window.appState.transactions || [])];
    const newFmRecords = await getItemsByUserId('friendMoney', uid);
    window.appState.friendMoneyRecords = newFmRecords;
  }

  // Trigger sync if online
  syncPendingOperations(false).catch(() => {});

  return { splitId, txId: mainTxId, friendRecordIds };
}

/**
 * Get all split expense records for a user
 */
export async function getSplitExpenses(uid) {
  if (!uid) return [];
  const list = await getItemsByUserId('splitExpenses', uid);
  return list.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
}
