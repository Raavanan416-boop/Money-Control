// ============================================
// 💰 Money Control — Synchronization Engine
// Automatic online synchronization, background sync, conflict detection,
// idempotent Firebase writes, and controlled exponential backoff.
// ============================================

import { doc, setDoc, getDoc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import { db, getDb, auth } from '../config/firebase.js';
import {
  getPendingSyncOperations,
  updateSyncOperationStatus,
  removeSyncOperation,
  getUnsyncedCount,
  getItem,
  putItem,
  putItems,
  deleteItem,
  getItemsByUserId,
  setLocalMeta,
  getLocalMeta
} from './local-db.js';

function firestoreDb() {
  return db || getDb();
}

// ─── Status Constants ──────────────────────────────────────────────────────

export const SYNC_STATES = {
  ONLINE_SYNCED: 'ONLINE_SYNCED',   // 🟢 Online — Synced
  OFFLINE: 'OFFLINE',               // 🟠 Offline — Saved on This Device
  SYNCING: 'SYNCING',               // 🔵 Syncing Changes
  SYNC_FAILED: 'SYNC_FAILED',       // 🔴 Sync Failed — Retry Required
  PENDING: 'PENDING'                // 🟡 Pending Changes
};

// Internal engine state
let currentSyncState = SYNC_STATES.ONLINE_SYNCED;
let isSyncInProgress = false;
let backoffTimer = null;
let retryAttempts = 0;
let lastSyncTimestamp = null;
let lastSyncError = null;
const statusListeners = new Set();

/**
 * Get current sync engine state
 */
export function getSyncStatus() {
  const isBrowserOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;
  return {
    state: currentSyncState,
    isOnline: isBrowserOnline,
    isSyncing: isSyncInProgress,
    retryAttempts,
    lastSyncTime: lastSyncTimestamp,
    lastError: lastSyncError
  };
}

/**
 * Subscribe to sync engine status changes
 * @param {Function} callback - ({ state, isOnline, isSyncing, pendingCount, lastSyncTime, lastError }) => void
 * @returns {Function} unsubscribe function
 */
export function subscribeSyncStatus(callback) {
  statusListeners.add(callback);
  // Send immediate initial status
  try {
    const uid = auth?.currentUser?.uid || window.appState?.user?.uid;
    getUnsyncedCount(uid).then(count => {
      callback({
        ...getSyncStatus(),
        pendingCount: count
      });
    }).catch(() => {
      callback({
        ...getSyncStatus(),
        pendingCount: 0
      });
    });
  } catch (e) {
    callback({
      ...getSyncStatus(),
      pendingCount: 0
    });
  }

  return () => {
    statusListeners.delete(callback);
  };
}

/**
 * Broadcast status update to all registered listeners
 */
async function notifyStatusChange() {
  const uid = auth?.currentUser?.uid || window.appState?.user?.uid;
  let pendingCount = 0;
  if (uid) {
    try {
      pendingCount = await getUnsyncedCount(uid);
    } catch (e) {
      // Ignore
    }
  }

  // Update overall state based on connectivity and pending operations
  const isBrowserOnline = typeof navigator !== 'undefined' ? navigator.onLine : true;

  if (isSyncInProgress) {
    currentSyncState = SYNC_STATES.SYNCING;
  } else if (!isBrowserOnline) {
    currentSyncState = SYNC_STATES.OFFLINE;
  } else if (lastSyncError && pendingCount > 0) {
    currentSyncState = SYNC_STATES.SYNC_FAILED;
  } else if (pendingCount > 0) {
    currentSyncState = SYNC_STATES.PENDING;
  } else {
    currentSyncState = SYNC_STATES.ONLINE_SYNCED;
  }

  const statusPayload = {
    ...getSyncStatus(),
    pendingCount
  };

  statusListeners.forEach(listener => {
    try {
      listener(statusPayload);
    } catch (err) {
      console.warn('[SyncEngine] Listener error:', err);
    }
  });

  // Also dispatch window DOM event for components
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('sync-status-changed', { detail: statusPayload }));
  }
}

// ─── Real Internet / Firebase Connectivity Verification ───────────────────

/**
 * Actively verify if Firebase / Internet is genuinely reachable
 * (guards against captive portals, dead wifi, or offline networks)
 * @returns {Promise<boolean>}
 */
export async function verifyConnectivity() {
  if (typeof navigator !== 'undefined' && !navigator.onLine) {
    return false;
  }

  try {
    // 3-second timeout ping to a reliable Google / Firebase public endpoint
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);

    // Try a lightweight HEAD or GET with cache busting
    await fetch(`https://firestore.googleapis.com/?_t=${Date.now()}`, {
      method: 'GET',
      mode: 'no-cors',
      cache: 'no-store',
      signal: controller.signal
    });

    clearTimeout(timeoutId);
    return true;
  } catch (err) {
    // If fetch failed due to offline/timeout, return false
    return false;
  }
}

// ─── Background Sync Registration ──────────────────────────────────────────

/**
 * Register Background Sync with Service Worker if supported
 */
export async function registerBackgroundSync() {
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;
  if (!('SyncManager' in window)) return;

  try {
    const registration = await navigator.serviceWorker.ready;
    if (registration.sync) {
      await registration.sync.register('sync-pending-transactions');
      console.log('[SyncEngine] Background Sync registered successfully.');
    }
  } catch (err) {
    console.warn('[SyncEngine] Background Sync registration warning:', err);
  }
}

// ─── Core Queue Synchronization Logic ──────────────────────────────────────

/**
 * Process all pending operations in the sync queue for the active user
 * @param {boolean} isManual - whether triggered manually by user ("Sync Now")
 * @returns {Promise<{ success: boolean, syncedCount: number, error: string|null }>}
 */
export async function syncPendingOperations(isManual = false) {
  const uid = auth?.currentUser?.uid || window.appState?.user?.uid;
  if (!uid) {
    console.warn('[SyncEngine] No authenticated user. Sync skipped.');
    return { success: false, syncedCount: 0, error: 'No authenticated user session.' };
  }

  if (isSyncInProgress) {
    console.log('[SyncEngine] Sync already in progress, skipping concurrent call.');
    return { success: false, syncedCount: 0, error: 'Sync already in progress.' };
  }

  // Verify real connectivity before starting
  const hasConnection = await verifyConnectivity();
  if (!hasConnection) {
    currentSyncState = SYNC_STATES.OFFLINE;
    await notifyStatusChange();
    return { success: false, syncedCount: 0, error: 'No internet connection.' };
  }

  isSyncInProgress = true;
  lastSyncError = null;
  await notifyStatusChange();

  let syncedCount = 0;
  let fatalError = null;

  try {
    const queue = await getPendingSyncOperations(uid);
    if (queue.length === 0) {
      // Nothing to sync from queue, still refresh server cache
      await refreshServerData(uid);
      lastSyncTimestamp = Date.now();
      await setLocalMeta(`last_sync_${uid}`, lastSyncTimestamp);
      retryAttempts = 0;
      isSyncInProgress = false;
      await notifyStatusChange();
      return { success: true, syncedCount: 0, error: null };
    }

    console.log(`[SyncEngine] Starting synchronization of ${queue.length} pending operations...`);

    for (const op of queue) {
      // Mark operation as syncing
      await updateSyncOperationStatus(op.id, 'syncing');

      try {
        await processSingleOperation(uid, op);
        // On success: remove from syncQueue
        await removeSyncOperation(op.id);
        syncedCount++;
      } catch (opErr) {
        console.error(`[SyncEngine] Failed operation ${op.id} (${op.entityType} ${op.action}):`, opErr);
        await updateSyncOperationStatus(op.id, 'failed', opErr.message || 'Operation failed');
        fatalError = opErr;
        // Do not discard! Break out to allow backoff retry
        break;
      }
    }

    if (!fatalError) {
      // All pending queue operations completed successfully!
      // Refresh local cache with latest server changes to ensure complete consistency
      await refreshServerData(uid);
      lastSyncTimestamp = Date.now();
      await setLocalMeta(`last_sync_${uid}`, lastSyncTimestamp);
      retryAttempts = 0;
      if (backoffTimer) {
        clearTimeout(backoffTimer);
        backoffTimer = null;
      }
      console.log(`[SyncEngine] Successfully synced ${syncedCount} operations to Firebase.`);
    } else {
      // Controlled exponential backoff retry
      lastSyncError = fatalError.message || 'Synchronization failed.';
      scheduleExponentialBackoff();
    }
  } catch (err) {
    console.error('[SyncEngine] Sync process encountered unexpected error:', err);
    lastSyncError = err.message || 'Unexpected sync error.';
    fatalError = err;
    scheduleExponentialBackoff();
  } finally {
    isSyncInProgress = false;
    await notifyStatusChange();
  }

  return {
    success: !fatalError,
    syncedCount,
    error: fatalError ? fatalError.message : null
  };
}

/**
 * Process a single operation idempotently against Firebase Firestore
 */
async function processSingleOperation(uid, op) {
  const { entityType, action, entityId, payload } = op;
  const db = firestoreDb();

  switch (entityType) {
    case 'transaction': {
      const txRef = doc(db, 'users', uid, 'transactions', entityId);

      if (action === 'CREATE') {
        // Idempotent write using persistent entityId: setDoc with merge: true
        const cleanPayload = { ...payload };
        delete cleanPayload.syncStatus;
        delete cleanPayload.localOnly;
        delete cleanPayload.userId;
        await setDoc(txRef, cleanPayload, { merge: true });

        // Update local transaction sync status to 'synced'
        const localTx = await getItem('transactions', entityId);
        if (localTx) {
          localTx.syncStatus = 'synced';
          await putItem('transactions', localTx);
        }
      } else if (action === 'UPDATE') {
        // Safe conflict detection: check server timestamp
        const serverSnap = await getDoc(txRef).catch(() => null);
        if (serverSnap && serverSnap.exists()) {
          const serverData = serverSnap.data();
          const serverUpdated = new Date(serverData.updatedAt || 0).getTime();
          const baseUpdated = new Date(op.payload.baseUpdatedAt || 0).getTime();

          if (serverUpdated > baseUpdated && serverData.updatedAt !== op.payload.updatedAt) {
            console.warn(`[SyncEngine] Conflict detected on transaction ${entityId}. Merging changes.`);
            // Merge safe non-conflicting fields, preserving newer server updates
            const merged = { ...serverData, ...payload, updatedAt: new Date().toISOString() };
            delete merged.syncStatus;
            delete merged.baseUpdatedAt;
            await setDoc(txRef, merged, { merge: true });
          } else {
            const cleanPayload = { ...payload };
            delete cleanPayload.syncStatus;
            delete cleanPayload.baseUpdatedAt;
            await setDoc(txRef, cleanPayload, { merge: true });
          }
        } else {
          const cleanPayload = { ...payload };
          delete cleanPayload.syncStatus;
          await setDoc(txRef, cleanPayload, { merge: true });
        }

        const localTx = await getItem('transactions', entityId);
        if (localTx) {
          localTx.syncStatus = 'synced';
          await putItem('transactions', localTx);
        }
      } else if (action === 'DELETE') {
        // Safe deletion
        await deleteDoc(txRef);
        // Permanently remove from local IndexedDB only AFTER server confirms
        await deleteItem('transactions', entityId);
      }
      break;
    }

    case 'account': {
      const accRef = doc(db, 'users', uid, 'accounts', entityId);

      if (action === 'CREATE' || action === 'UPDATE') {
        const cleanPayload = { ...payload };
        delete cleanPayload.syncStatus;
        delete cleanPayload.userId;
        await setDoc(accRef, cleanPayload, { merge: true });

        const localAcc = await getItem('accounts', entityId);
        if (localAcc) {
          localAcc.syncStatus = 'synced';
          await putItem('accounts', localAcc);
        }
      } else if (action === 'DELETE') {
        await deleteDoc(accRef);
        await deleteItem('accounts', entityId);
      }
      break;
    }

    case 'friendMoney': {
      const fmRef = doc(db, 'users', uid, 'friendMoney', entityId);

      if (action === 'CREATE' || action === 'UPDATE') {
        const cleanPayload = { ...payload };
        delete cleanPayload.syncStatus;
        delete cleanPayload.userId;
        await setDoc(fmRef, cleanPayload, { merge: true });

        const localFm = await getItem('friendMoney', entityId);
        if (localFm) {
          localFm.syncStatus = 'synced';
          await putItem('friendMoney', localFm);
        }
      } else if (action === 'DELETE') {
        await deleteDoc(fmRef);
        await deleteItem('friendMoney', entityId);
      }
      break;
    }

    case 'splitExpense': {
      const splitRef = doc(db, 'users', uid, 'splitExpenses', entityId);
      if (action === 'CREATE' || action === 'UPDATE') {
        const cleanPayload = { ...payload };
        delete cleanPayload.syncStatus;
        delete cleanPayload.userId;
        await setDoc(splitRef, cleanPayload, { merge: true });

        const localSplit = await getItem('splitExpenses', entityId);
        if (localSplit) {
          localSplit.syncStatus = 'synced';
          await putItem('splitExpenses', localSplit);
        }
      } else if (action === 'DELETE') {
        await deleteDoc(splitRef);
        await deleteItem('splitExpenses', entityId);
      }
      break;
    }

    case 'template': {
      const tmplRef = doc(db, 'users', uid, 'templates', entityId);
      if (action === 'CREATE' || action === 'UPDATE') {
        const cleanPayload = { ...payload };
        delete cleanPayload.syncStatus;
        delete cleanPayload.userId;
        await setDoc(tmplRef, cleanPayload, { merge: true });

        const localTmpl = await getItem('templates', entityId);
        if (localTmpl) {
          localTmpl.syncStatus = 'synced';
          await putItem('templates', localTmpl);
        }
      } else if (action === 'DELETE') {
        await deleteDoc(tmplRef);
        await deleteItem('templates', entityId);
      }
      break;
    }

    case 'budget': {
      const budgetRef = doc(db, 'users', uid, 'budgets', entityId);
      if (action === 'CREATE' || action === 'UPDATE') {
        const cleanPayload = { ...payload };
        delete cleanPayload.userId;
        await setDoc(budgetRef, cleanPayload, { merge: true });
      } else if (action === 'DELETE') {
        await deleteDoc(budgetRef);
        await deleteItem('budgets', entityId);
      }
      break;
    }

    case 'profile': {
      const userRef = doc(db, 'users', uid);
      await setDoc(userRef, payload, { merge: true });
      break;
    }

    default:
      console.warn(`[SyncEngine] Unknown entity type: ${entityType}`);
  }
}

// ─── Server Data Refresh & Cache Reconciliation ───────────────────────────

/**
 * Fetch authoritative server data from Firestore and update IndexedDB cache,
 * ensuring any local pending records are preserved and not overwritten.
 */
export async function refreshServerData(uid) {
  if (!uid) return;
  const db = firestoreDb();

  try {
    // 1. Fetch Accounts
    const accSnap = await getDocs(collection(db, 'users', uid, 'accounts')).catch(() => null);
    if (accSnap) {
      const serverAccounts = [];
      accSnap.forEach(d => serverAccounts.push({ id: d.id, userId: uid, syncStatus: 'synced', ...d.data() }));

      // Merge with any local pending accounts
      const localAccounts = await getItemsByUserId('accounts', uid);
      const pendingAccounts = localAccounts.filter(a => a.syncStatus === 'pending');
      const accountMap = new Map();

      serverAccounts.forEach(a => accountMap.set(a.id, a));
      pendingAccounts.forEach(a => accountMap.set(a.id, a)); // pending overrides server if not synced yet

      await putItems('accounts', Array.from(accountMap.values()));
      if (window.appState) {
        window.appState.accounts = Array.from(accountMap.values());
      }
    }

    // 2. Fetch Transactions
    const txSnap = await getDocs(collection(db, 'users', uid, 'transactions')).catch(() => null);
    if (txSnap) {
      const serverTx = [];
      txSnap.forEach(d => serverTx.push({ id: d.id, userId: uid, syncStatus: 'synced', ...d.data() }));

      // Merge with any local pending transactions
      const localTx = await getItemsByUserId('transactions', uid);
      const pendingTx = localTx.filter(t => t.syncStatus === 'pending' || t.syncStatus === 'syncing');
      const txMap = new Map();

      serverTx.forEach(t => txMap.set(t.id, t));
      pendingTx.forEach(t => txMap.set(t.id, t)); // preserve pending

      // Sort descending by date / createdAt
      const mergedTx = Array.from(txMap.values()).sort((a, b) => {
        const dateCmp = (b.date || '').localeCompare(a.date || '');
        if (dateCmp !== 0) return dateCmp;
        return (b.createdAt || '').localeCompare(a.createdAt || '');
      });

      await putItems('transactions', mergedTx);
      if (window.appState) {
        window.appState.transactions = mergedTx;
      }
    }

    // 3. Fetch Friend Money Records
    const fmSnap = await getDocs(collection(db, 'users', uid, 'friendMoney')).catch(() => null);
    if (fmSnap) {
      const serverFm = [];
      fmSnap.forEach(d => serverFm.push({ id: d.id, userId: uid, syncStatus: 'synced', ...d.data() }));

      const localFm = await getItemsByUserId('friendMoney', uid);
      const pendingFm = localFm.filter(f => f.syncStatus === 'pending');
      const fmMap = new Map();

      serverFm.forEach(f => fmMap.set(f.id, f));
      pendingFm.forEach(f => fmMap.set(f.id, f));

      await putItems('friendMoney', Array.from(fmMap.values()));
      if (window.appState) {
        window.appState.friendMoneyRecords = Array.from(fmMap.values());
      }
    }

    // 4. Fetch Templates
    const tmplSnap = await getDocs(collection(db, 'users', uid, 'templates')).catch(() => null);
    if (tmplSnap) {
      const serverTmpl = [];
      tmplSnap.forEach(d => serverTmpl.push({ id: d.id, userId: uid, syncStatus: 'synced', ...d.data() }));
      await putItems('templates', serverTmpl);
    }

    // 5. Fetch Split Expenses
    const splitSnap = await getDocs(collection(db, 'users', uid, 'splitExpenses')).catch(() => null);
    if (splitSnap) {
      const serverSplit = [];
      splitSnap.forEach(d => serverSplit.push({ id: d.id, userId: uid, syncStatus: 'synced', ...d.data() }));
      await putItems('splitExpenses', serverSplit);
    }

    // Re-render layout if appState exists
    if (typeof window !== 'undefined' && window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('local-data-refreshed'));
    }
  } catch (err) {
    console.warn('[SyncEngine] Error during server data refresh:', err);
  }
}

// ─── Exponential Backoff Retry Management ──────────────────────────────────

function scheduleExponentialBackoff() {
  if (backoffTimer) {
    clearTimeout(backoffTimer);
    backoffTimer = null;
  }

  retryAttempts++;
  // Exponential backoff: 2s, 4s, 8s, 16s, up to 32s max + jitter
  const baseDelay = Math.min(32000, 1000 * Math.pow(2, retryAttempts));
  const jitter = Math.floor(Math.random() * 1000);
  const delay = baseDelay + jitter;

  console.log(`[SyncEngine] Scheduling sync retry attempt #${retryAttempts} in ${Math.round(delay / 1000)}s...`);

  backoffTimer = setTimeout(() => {
    syncPendingOperations(false).catch(err => {
      console.warn('[SyncEngine] Automatic retry failed:', err);
    });
  }, delay);
}

// ─── Lifecycle Initialization & Event Listeners ───────────────────────────

let isInitialized = false;

/**
 * Initialize sync engine event listeners (call once at app launch)
 */
export function initSyncEngine() {
  if (isInitialized) return;
  isInitialized = true;

  // 1. Listen for browser online event
  window.addEventListener('online', async () => {
    console.log('[SyncEngine] Browser reported ONLINE. Verifying connectivity...');
    const hasConnection = await verifyConnectivity();
    if (hasConnection) {
      currentSyncState = SYNC_STATES.PENDING;
      await notifyStatusChange();
      // Start auto-sync immediately
      syncPendingOperations(false);
    }
  });

  // 2. Listen for browser offline event
  window.addEventListener('offline', () => {
    console.log('[SyncEngine] Browser reported OFFLINE.');
    currentSyncState = SYNC_STATES.OFFLINE;
    notifyStatusChange();
  });

  // 3. Listen for Service Worker background sync notification
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'TRIGGER_FOREGROUND_SYNC') {
        console.log('[SyncEngine] Service Worker requested sync.');
        syncPendingOperations(false);
      }
    });
  }

  // 4. Initial status check & sync after launch
  setTimeout(async () => {
    const uid = auth?.currentUser?.uid || window.appState?.user?.uid;
    if (uid) {
      lastSyncTimestamp = await getLocalMeta(`last_sync_${uid}`);
      await notifyStatusChange();
      const hasConnection = await verifyConnectivity();
      if (hasConnection) {
        syncPendingOperations(false);
      }
    }
  }, 1500);

  // 5. Periodic check every 3 minutes while app is running
  setInterval(async () => {
    const uid = auth?.currentUser?.uid || window.appState?.user?.uid;
    if (uid && !isSyncInProgress) {
      const pendingCount = await getUnsyncedCount(uid);
      if (pendingCount > 0) {
        const hasConnection = await verifyConnectivity();
        if (hasConnection) {
          syncPendingOperations(false);
        }
      }
    }
  }, 3 * 60 * 1000);
}
