// ============================================
// 💰 Money Control V3 — Backup & Restore Service
// ============================================
// Backup NEVER includes: PIN hash, auth tokens, passwords.
// All data is financial records only.

import {
  doc,
  collection,
  addDoc,
  setDoc,
  getDocs,
  query,
  orderBy,
  writeBatch
} from 'firebase/firestore';
import { db, getDb } from '../config/firebase.js';

const BACKUP_VERSION = '3.0';

function firestoreDb() {
  return db || getDb();
}

/**
 * Create a full backup of the user's financial data.
 * Excludes: PIN hash, auth tokens, passwords, security credentials.
 * @param {string} uid
 * @param {Array} accounts
 * @param {Array} transactions
 * @param {Array} friendMoneyRecords
 * @param {Object} profile
 * @returns {void} — triggers a file download
 */
export function createBackup(uid, accounts, transactions, friendMoneyRecords, profile) {
  if (!uid) throw new Error('User not authenticated.');

  const now = new Date();

  // Strip sensitive fields from profile
  const safeProfile = {
    name: profile?.name || '',
    email: profile?.email || '',
    initialBalance: profile?.initialBalance || 0,
    settings: {
      currency: profile?.settings?.currency || 'INR',
      allowNegativeBalance: profile?.settings?.allowNegativeBalance || false,
    },
    createdAt: profile?.createdAt || now.toISOString()
  };

  const backupData = {
    version: BACKUP_VERSION,
    exportedAt: now.toISOString(),
    exportedAtDisplay: now.toLocaleString('en-IN', {
      dateStyle: 'long',
      timeStyle: 'short'
    }),
    uid_prefix: uid.substring(0, 6) + '...', // partial UID for identification
    profile: safeProfile,
    accounts: (accounts || []).map(acc => ({
      id: acc.id,
      name: acc.name,
      type: acc.type,
      initialBalance: acc.initialBalance || 0,
      bankName: acc.bankName || '',
      last4Digits: acc.last4Digits || '',
      icon: acc.icon || '💰',
      createdAt: acc.createdAt || now.toISOString()
    })),
    transactions: (transactions || []).map(tx => ({
      id: tx.id,
      type: tx.type,
      amount: tx.amount,
      date: tx.date,
      reason: tx.reason || '',
      category: tx.category || '',
      notes: tx.notes || '',
      sourceAccountId: tx.sourceAccountId || null,
      destinationAccountId: tx.destinationAccountId || null,
      isFriendMoney: tx.isFriendMoney || false,
      friendMoneyId: tx.friendMoneyId || null,
      createdAt: tx.createdAt || now.toISOString()
    })),
    friendMoney: (friendMoneyRecords || []).map(r => ({
      id: r.id,
      friendName: r.friendName || '',
      amount: r.amount || 0,
      type: r.type,
      reason: r.reason || '',
      date: r.date || '',
      createdAt: r.createdAt || now.toISOString(),
      returnedAmount: r.returnedAmount || 0,
      remainingAmount: r.remainingAmount || 0,
      status: r.status || 'pending',
      accountId: r.accountId || '',
      repayments: r.repayments || []
    }))
  };

  const jsonString = JSON.stringify(backupData, null, 2);
  const dateStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const filename = `money-control-backup-${dateStr}.json`;

  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  return {
    filename,
    exportedAt: now.toISOString(),
    recordCounts: {
      accounts: backupData.accounts.length,
      transactions: backupData.transactions.length,
      friendMoney: backupData.friendMoney.length
    }
  };
}

/**
 * Validate a backup file's structure before restoring.
 * @param {Object} backupData — parsed JSON from backup file
 * @returns {{ valid: boolean, error?: string, version?: string }}
 */
export function validateBackup(backupData) {
  if (!backupData || typeof backupData !== 'object') {
    return { valid: false, error: 'Invalid backup file: not a valid JSON object.' };
  }
  if (!backupData.version) {
    return { valid: false, error: 'Invalid backup file: missing version field.' };
  }
  if (!Array.isArray(backupData.accounts)) {
    return { valid: false, error: 'Invalid backup file: accounts data is missing or corrupted.' };
  }
  if (!Array.isArray(backupData.transactions)) {
    return { valid: false, error: 'Invalid backup file: transactions data is missing or corrupted.' };
  }
  if (!Array.isArray(backupData.friendMoney)) {
    return { valid: false, error: 'Invalid backup file: friend money data is missing or corrupted.' };
  }

  return {
    valid: true,
    version: backupData.version,
    exportedAt: backupData.exportedAtDisplay || backupData.exportedAt,
    recordCounts: {
      accounts: backupData.accounts.length,
      transactions: backupData.transactions.length,
      friendMoney: backupData.friendMoney.length
    }
  };
}

/**
 * Parse a backup JSON file from a File object.
 * @param {File} file
 * @returns {Promise<Object>}
 */
export function parseBackupFile(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('No file provided.'));
      return;
    }
    if (!file.name.endsWith('.json')) {
      reject(new Error('Invalid file type. Please select a .json backup file.'));
      return;
    }
    if (file.size > 50 * 1024 * 1024) { // 50MB max
      reject(new Error('Backup file is too large (max 50MB).'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        resolve(data);
      } catch (err) {
        reject(new Error('Could not parse backup file. The file may be corrupted.'));
      }
    };
    reader.onerror = () => reject(new Error('Failed to read the backup file.'));
    reader.readAsText(file);
  });
}

/**
 * Restore backup data to Firestore.
 * This REPLACES all accounts, transactions, and friend money records.
 * @param {string} uid
 * @param {Object} backupData — validated backup object
 * @param {Function} onProgress — optional progress callback(message)
 */
export async function restoreBackup(uid, backupData, onProgress) {
  if (!uid) throw new Error('User not authenticated.');

  const progress = (msg) => { if (onProgress) onProgress(msg); };

  const database = firestoreDb();

  // Helper to delete collection in chunks of 400 (under Firestore limit of 500)
  async function deleteCollectionInBatches(collRef) {
    const snap = await getDocs(collRef);
    const docs = snap.docs;
    const chunks = chunkArray(docs, 400);
    for (const chunk of chunks) {
      const batch = writeBatch(database);
      chunk.forEach(d => batch.delete(d.ref));
      await batch.commit();
    }
  }

  // === Step 1: Delete existing accounts ===
  progress('Clearing existing accounts...');
  await deleteCollectionInBatches(collection(database, 'users', uid, 'accounts'));

  // === Step 2: Delete existing transactions ===
  progress('Clearing existing transactions...');
  await deleteCollectionInBatches(collection(database, 'users', uid, 'transactions'));

  // === Step 3: Delete existing friend money ===
  progress('Clearing existing friend money records...');
  await deleteCollectionInBatches(collection(database, 'users', uid, 'friendMoney'));

  // === Step 4: Restore accounts (preserve original IDs) ===
  progress(`Restoring ${backupData.accounts.length} accounts...`);
  const accountChunks = chunkArray(backupData.accounts, 400);
  for (const chunk of accountChunks) {
    const batch = writeBatch(database);
    for (const acc of chunk) {
      const accData = {
        name: acc.name || 'Account',
        type: acc.type || 'Cash',
        initialBalance: Number(acc.initialBalance) || 0,
        bankName: acc.bankName || '',
        last4Digits: acc.last4Digits || '',
        icon: acc.icon || '💰',
        createdAt: acc.createdAt || new Date().toISOString()
      };
      const ref = acc.id
        ? doc(database, 'users', uid, 'accounts', acc.id)
        : doc(collection(database, 'users', uid, 'accounts'));
      batch.set(ref, accData);
    }
    await batch.commit();
  }

  // === Step 5: Restore transactions ===
  progress(`Restoring ${backupData.transactions.length} transactions...`);
  const txBatchSize = 400;
  const txChunks = chunkArray(backupData.transactions, txBatchSize);
  for (const chunk of txChunks) {
    const batch = writeBatch(database);
    for (const tx of chunk) {
      const txData = {
        type: tx.type,
        amount: Number(tx.amount) || 0,
        date: tx.date || '',
        reason: tx.reason || '',
        category: tx.category || 'Other',
        notes: tx.notes || '',
        createdAt: tx.createdAt || new Date().toISOString()
      };
      if (tx.sourceAccountId) txData.sourceAccountId = tx.sourceAccountId;
      if (tx.destinationAccountId) txData.destinationAccountId = tx.destinationAccountId;
      if (tx.isFriendMoney) txData.isFriendMoney = true;
      if (tx.friendMoneyId) txData.friendMoneyId = tx.friendMoneyId;

      const ref = tx.id
        ? doc(database, 'users', uid, 'transactions', tx.id)
        : doc(collection(database, 'users', uid, 'transactions'));
      batch.set(ref, txData);
    }
    await batch.commit();
  }

  // === Step 6: Restore friend money ===
  progress(`Restoring ${backupData.friendMoney.length} friend money records...`);
  const fmChunks = chunkArray(backupData.friendMoney, 400);
  for (const chunk of fmChunks) {
    const batch = writeBatch(database);
    for (const r of chunk) {
      const fmData = {
        friendName: r.friendName || '',
        amount: Number(r.amount) || 0,
        type: r.type || 'GAVE',
        reason: r.reason || '',
        date: r.date || '',
        createdAt: r.createdAt || new Date().toISOString(),
        returnedAmount: Number(r.returnedAmount) || 0,
        remainingAmount: Number(r.remainingAmount) || 0,
        status: r.status || 'pending',
        accountId: r.accountId || '',
        repayments: r.repayments || []
      };
      const ref = r.id
        ? doc(database, 'users', uid, 'friendMoney', r.id)
        : doc(collection(database, 'users', uid, 'friendMoney'));
      batch.set(ref, fmData);
    }
    await batch.commit();
  }

  // === Step 7: Update profile initial balance if present ===
  if (backupData.profile?.initialBalance !== undefined) {
    progress('Restoring profile settings...');
    const { updateDoc } = await import('firebase/firestore');
    await updateDoc(doc(database, 'users', uid), {
      initialBalance: Number(backupData.profile.initialBalance) || 0
    });
  }

  progress('Restore complete!');
}

/**
 * Split array into chunks of maxSize
 */
function chunkArray(arr, maxSize) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += maxSize) {
    chunks.push(arr.slice(i, i + maxSize));
  }
  return chunks;
}
