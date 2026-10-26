// ============================================
// 💰 Money Control — IndexedDB Local Database Service
// Primary offline storage and transaction queue with user data isolation
// ============================================

const DB_NAME = 'MoneyControlDB';
const DB_VERSION = 1;

let dbInstance = null;
let dbInitPromise = null;

/**
 * Open or upgrade the IndexedDB database
 * @returns {Promise<IDBDatabase>}
 */
export function openLocalDB() {
  if (dbInstance) return Promise.resolve(dbInstance);
  if (dbInitPromise) return dbInitPromise;

  dbInitPromise = new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB is not supported in this environment.'));
      return;
    }

    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      // 1. Users Store: Profile and settings
      if (!db.objectStoreNames.contains('users')) {
        db.createObjectStore('users', { keyPath: 'uid' });
      }

      // 2. Accounts Store: Cash, Bank, UPI, etc.
      if (!db.objectStoreNames.contains('accounts')) {
        const store = db.createObjectStore('accounts', { keyPath: 'id' });
        store.createIndex('userId', 'userId', { unique: false });
        store.createIndex('createdAt', 'createdAt', { unique: false });
      }

      // 3. Transactions Store: Income, Expense, Transfer, Friend Money
      if (!db.objectStoreNames.contains('transactions')) {
        const store = db.createObjectStore('transactions', { keyPath: 'id' });
        store.createIndex('userId', 'userId', { unique: false });
        store.createIndex('userId_date', ['userId', 'date'], { unique: false });
        store.createIndex('syncStatus', 'syncStatus', { unique: false });
        store.createIndex('createdAt', 'createdAt', { unique: false });
      }

      // 4. Friend Money Store: Records of gave/borrowed and repayments
      if (!db.objectStoreNames.contains('friendMoney')) {
        const store = db.createObjectStore('friendMoney', { keyPath: 'id' });
        store.createIndex('userId', 'userId', { unique: false });
        store.createIndex('syncStatus', 'syncStatus', { unique: false });
        store.createIndex('createdAt', 'createdAt', { unique: false });
      }

      // 5. Split Expenses Store
      if (!db.objectStoreNames.contains('splitExpenses')) {
        const store = db.createObjectStore('splitExpenses', { keyPath: 'id' });
        store.createIndex('userId', 'userId', { unique: false });
        store.createIndex('createdAt', 'createdAt', { unique: false });
      }

      // 6. Transaction Templates Store
      if (!db.objectStoreNames.contains('templates')) {
        const store = db.createObjectStore('templates', { keyPath: 'id' });
        store.createIndex('userId', 'userId', { unique: false });
      }

      // 7. Budgets Store
      if (!db.objectStoreNames.contains('budgets')) {
        const store = db.createObjectStore('budgets', { keyPath: 'id' });
        store.createIndex('userId', 'userId', { unique: false });
      }

      // 8. Offline Synchronization Queue Store
      if (!db.objectStoreNames.contains('syncQueue')) {
        const store = db.createObjectStore('syncQueue', { keyPath: 'id' });
        store.createIndex('userId', 'userId', { unique: false });
        store.createIndex('status', 'status', { unique: false });
        store.createIndex('userId_status', ['userId', 'status'], { unique: false });
        store.createIndex('createdAt', 'createdAt', { unique: false });
      }

      // 9. Meta / Key-Value Store: lastSyncTime, device states, etc.
      if (!db.objectStoreNames.contains('meta')) {
        db.createObjectStore('meta', { keyPath: 'key' });
      }
    };

    request.onsuccess = (event) => {
      dbInstance = event.target.result;

      dbInstance.onversionchange = () => {
        dbInstance.close();
        dbInstance = null;
        dbInitPromise = null;
      };

      resolve(dbInstance);
    };

    request.onerror = (event) => {
      console.error('[IndexedDB] Failed to open database:', event.target.error);
      dbInitPromise = null;
      reject(event.target.error);
    };

    request.onblocked = () => {
      console.warn('[IndexedDB] Database upgrade blocked by another connection.');
    };
  });

  return dbInitPromise;
}

/**
 * Generate a cryptographically secure or collision-resistant unique ID
 * @param {string} prefix
 * @returns {string}
 */
export function generateLocalId(prefix = 'doc') {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return `${prefix}_${crypto.randomUUID()}`;
  }
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 10);
  return `${prefix}_${timestamp}_${random}`;
}

// ─── Generic Store Operations (Promise Wrappers) ───────────────────────────

/**
 * Put a single item into a store
 */
export async function putItem(storeName, item) {
  const db = await openLocalDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const req = store.put(item);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

/**
 * Put multiple items into a store in a single transaction
 */
export async function putItems(storeName, items) {
  if (!items || items.length === 0) return Promise.resolve();
  const db = await openLocalDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    items.forEach(item => store.put(item));
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

/**
 * Get a single item by key
 */
export async function getItem(storeName, key) {
  const db = await openLocalDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const req = store.get(key);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

/**
 * Delete an item by key
 */
export async function deleteItem(storeName, key) {
  const db = await openLocalDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
    const req = store.delete(key);
    req.onsuccess = () => resolve();
    req.onerror = () => reject(req.error);
  });
}

/**
 * Get all items from a store belonging to a specific userId
 */
export async function getItemsByUserId(storeName, userId) {
  if (!userId) return [];
  const db = await openLocalDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    if (!store.indexNames.contains('userId')) {
      // Fallback if no index
      const req = store.getAll();
      req.onsuccess = () => {
        const all = req.result || [];
        resolve(all.filter(item => item.userId === userId));
      };
      req.onerror = () => reject(req.error);
      return;
    }

    const index = store.index('userId');
    const req = index.getAll(IDBKeyRange.only(userId));
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

/**
 * Clear all items belonging to a specific userId across all stores
 */
export async function clearUserDataLocally(userId) {
  if (!userId) return;
  const stores = ['accounts', 'transactions', 'friendMoney', 'splitExpenses', 'templates', 'budgets', 'syncQueue'];
  const db = await openLocalDB();

  for (const storeName of stores) {
    const items = await getItemsByUserId(storeName, userId);
    if (items.length > 0) {
      const tx = db.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      items.forEach(item => store.delete(item.id));
      await new Promise((res, rej) => {
        tx.oncomplete = res;
        tx.onerror = rej;
      });
    }
  }

  // Clear user profile
  await deleteItem('users', userId);
  await deleteItem('meta', `last_sync_${userId}`);
}

// ─── Metadata Store Helpers ────────────────────────────────────────────────

export async function getLocalMeta(key) {
  const item = await getItem('meta', key);
  return item ? item.value : null;
}

export async function setLocalMeta(key, value) {
  return await putItem('meta', { key, value, updatedAt: Date.now() });
}

// ─── Sync Queue Operations ─────────────────────────────────────────────────

/**
 * Enqueue an operation to be synchronized to Firebase
 * @param {Object} op
 * @param {string} op.userId - Authenticated UID
 * @param {string} op.entityType - 'transaction' | 'account' | 'friendMoney' | 'repayment' | 'template' | 'splitExpense' | 'budget' | 'profile'
 * @param {string} op.action - 'CREATE' | 'UPDATE' | 'DELETE'
 * @param {string} op.entityId - Unique persistent entity identifier
 * @param {Object} op.payload - The data payload to sync
 * @returns {Promise<string>} Operation ID
 */
export async function enqueueSyncOperation({ userId, entityType, action, entityId, payload }) {
  if (!userId || !entityType || !action || !entityId) {
    throw new Error('Incomplete sync operation parameters.');
  }

  const opId = generateLocalId('sync_op');
  const syncOp = {
    id: opId,
    userId,
    entityType,
    action,
    entityId,
    payload: JSON.parse(JSON.stringify(payload || {})),
    status: 'pending', // 'pending' | 'syncing' | 'failed'
    attempts: 0,
    lastAttempt: null,
    lastError: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  await putItem('syncQueue', syncOp);
  return opId;
}

/**
 * Get all pending or failed sync operations for a user, ordered by creation time
 */
export async function getPendingSyncOperations(userId) {
  if (!userId) return [];
  const db = await openLocalDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction('syncQueue', 'readonly');
    const store = tx.objectStore('syncQueue');
    const index = store.index('userId');
    const req = index.getAll(IDBKeyRange.only(userId));
    req.onsuccess = () => {
      const ops = req.result || [];
      // Filter non-synced and sort chronologically
      const pending = ops
        .filter(op => op.status === 'pending' || op.status === 'failed')
        .sort((a, b) => (a.createdAt || '').localeCompare(b.createdAt || ''));
      resolve(pending);
    };
    req.onerror = () => reject(req.error);
  });
}

/**
 * Update the status of a sync queue item
 */
export async function updateSyncOperationStatus(opId, status, errorMsg = null) {
  const op = await getItem('syncQueue', opId);
  if (!op) return;
  op.status = status;
  op.lastAttempt = Date.now();
  if (status === 'syncing') {
    op.attempts = (op.attempts || 0) + 1;
  }
  if (errorMsg) {
    op.lastError = String(errorMsg);
  }
  op.updatedAt = new Date().toISOString();
  await putItem('syncQueue', op);
}

/**
 * Remove an operation from the sync queue after successful sync
 */
export async function removeSyncOperation(opId) {
  return await deleteItem('syncQueue', opId);
}

/**
 * Get count of unsynchronized operations for a user
 */
export async function getUnsyncedCount(userId) {
  const pending = await getPendingSyncOperations(userId);
  return pending.length;
}
