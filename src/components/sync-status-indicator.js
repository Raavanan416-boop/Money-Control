// ============================================
// 💰 Money Control — Sync & Connection Status Indicator
// Compact status pill in the header with detailed sync modal
// ============================================

import {
  getSyncStatus,
  subscribeSyncStatus,
  syncPendingOperations,
  SYNC_STATES
} from '../services/sync-engine.js';
import { openModal, closeModal } from './modal.js';
import { formatDate, formatTime } from '../utils/formatters.js';
import { toast } from '../utils/toast.js';

let currentStatus = {
  state: SYNC_STATES.ONLINE_SYNCED,
  isOnline: true,
  isSyncing: false,
  pendingCount: 0,
  lastSyncTime: null,
  lastError: null
};

// Initialize listener
if (typeof window !== 'undefined') {
  subscribeSyncStatus((status) => {
    currentStatus = { ...currentStatus, ...status };
    updateSyncPillDOM();
  });
}

/**
 * Format timestamp into user-friendly string
 */
function formatSyncTime(timestamp) {
  if (!timestamp) return 'Never';
  const diffSec = Math.floor((Date.now() - timestamp) / 1000);
  if (diffSec < 15) return 'Just now';
  if (diffSec < 60) return `${diffSec}s ago`;
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
  const d = new Date(timestamp);
  return `${d.toLocaleDateString([], { month: 'short', day: 'numeric' })} at ${d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}

/**
 * Get config for current state
 */
export function getSyncDisplayConfig(status = currentStatus) {
  const { state, pendingCount, isOnline } = status;

  if (state === SYNC_STATES.SYNCING) {
    return {
      dotClass: 'sync-dot-syncing',
      emoji: '🔵',
      shortText: pendingCount > 0 ? `Syncing ${pendingCount}...` : 'Syncing...',
      fullText: pendingCount > 0 ? `Syncing ${pendingCount} pending change${pendingCount === 1 ? '' : 's'}...` : 'Syncing with Firebase...',
      themeClass: 'sync-badge-syncing'
    };
  }

  if (state === SYNC_STATES.OFFLINE || !isOnline) {
    return {
      dotClass: 'sync-dot-offline',
      emoji: '🟠',
      shortText: pendingCount > 0 ? `Offline (${pendingCount})` : 'Offline',
      fullText: 'Offline Mode — Changes saved on this device.',
      themeClass: 'sync-badge-offline'
    };
  }

  if (state === SYNC_STATES.SYNC_FAILED) {
    return {
      dotClass: 'sync-dot-failed',
      emoji: '🔴',
      shortText: 'Sync Failed',
      fullText: pendingCount > 0 ? `${pendingCount} change${pendingCount === 1 ? '' : 's'} could not sync. Your local data is preserved.` : 'Sync failed — retry required.',
      themeClass: 'sync-badge-failed'
    };
  }

  if (pendingCount > 0 || state === SYNC_STATES.PENDING) {
    return {
      dotClass: 'sync-dot-pending',
      emoji: '🟡',
      shortText: `${pendingCount} Pending`,
      fullText: `${pendingCount} change${pendingCount === 1 ? '' : 's'} saved locally, waiting to sync.`,
      themeClass: 'sync-badge-pending'
    };
  }

  return {
    dotClass: 'sync-dot-synced',
    emoji: '🟢',
    shortText: 'Synced',
    fullText: 'All changes synced successfully.',
    themeClass: 'sync-badge-synced'
  };
}

/**
 * Render HTML for the compact header pill badge
 */
export function renderSyncStatusPill() {
  const config = getSyncDisplayConfig(currentStatus);

  return `
    <button class="sync-status-pill ${config.themeClass}" id="btn-sync-status-indicator" title="${config.fullText}" aria-label="Cloud sync status: ${config.shortText}">
      <span class="sync-status-dot ${config.dotClass}"></span>
      <span class="sync-status-label">${config.shortText}</span>
    </button>
  `;
}

/**
 * Update the DOM element directly when status changes
 */
function updateSyncPillDOM() {
  const pill = document.getElementById('btn-sync-status-indicator');
  if (!pill) return;

  const config = getSyncDisplayConfig(currentStatus);
  pill.className = `sync-status-pill ${config.themeClass}`;
  pill.title = config.fullText;
  pill.setAttribute('aria-label', `Cloud sync status: ${config.shortText}`);

  const dot = pill.querySelector('.sync-status-dot');
  if (dot) dot.className = `sync-status-dot ${config.dotClass}`;

  const label = pill.querySelector('.sync-status-label');
  if (label) label.textContent = config.shortText;
}

/**
 * Open the detailed Sync Management Modal
 */
export function openSyncStatusModal() {
  const config = getSyncDisplayConfig(currentStatus);
  const isOnline = currentStatus.isOnline;
  const pendingCount = currentStatus.pendingCount || 0;
  const lastSyncStr = formatSyncTime(currentStatus.lastSyncTime);

  const content = `
    <div class="sync-modal-body" style="padding: 8px 0;">
      <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px; padding: 16px; border-radius: 16px; background: var(--bg-tertiary);">
        <div style="font-size: 2.2rem; line-height: 1;">${config.emoji}</div>
        <div style="flex: 1;">
          <div style="font-size: 1.05rem; font-weight: 800; color: var(--text-primary); margin-bottom: 4px;">
            ${config.shortText}
          </div>
          <div style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.4;">
            ${config.fullText}
          </div>
        </div>
      </div>

      <div class="card card-flat" style="padding: 14px 16px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--border-color);">
          <span style="font-size: 0.875rem; color: var(--text-secondary);">Network Connection</span>
          <span style="font-size: 0.875rem; font-weight: 700; color: ${isOnline ? 'var(--income)' : '#f97316'}; display: flex; align-items: center; gap: 6px;">
            <span style="width: 8px; height: 8px; border-radius: 50%; background: ${isOnline ? 'var(--income)' : '#f97316'}; display: inline-block;"></span>
            ${isOnline ? 'Connected' : 'Disconnected (Offline)'}
          </span>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid var(--border-color);">
          <span style="font-size: 0.875rem; color: var(--text-secondary);">Local Changes Pending</span>
          <span style="font-size: 0.875rem; font-weight: 700; color: ${pendingCount > 0 ? '#eab308' : 'var(--text-primary)'};">
            ${pendingCount} operation${pendingCount === 1 ? '' : 's'}
          </span>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0;">
          <span style="font-size: 0.875rem; color: var(--text-secondary);">Last Cloud Sync</span>
          <span style="font-size: 0.875rem; font-weight: 600; color: var(--text-primary);">${lastSyncStr}</span>
        </div>
      </div>

      ${currentStatus.lastError ? `
        <div class="alert-banner alert-banner-danger" style="margin-bottom: 16px; font-size: 0.8125rem;">
          <span class="alert-banner-icon">⚠️</span>
          <div class="alert-banner-text">
            ${currentStatus.lastError}
          </div>
        </div>
      ` : ''}

      <div style="display: flex; flex-direction: column; gap: 10px;">
        <button class="btn btn-primary btn-block btn-lg" id="btn-manual-sync-now" ${!isOnline || currentStatus.isSyncing ? 'disabled' : ''}>
          ${currentStatus.isSyncing ? '<span class="spinner"></span> Syncing...' : '🔄 Sync Now'}
        </button>
        <button class="btn btn-ghost btn-block" id="btn-close-sync-modal">
          Close
        </button>
      </div>

      <div style="margin-top: 16px; padding: 12px; border-radius: 12px; background: rgba(108, 99, 255, 0.08); font-size: 0.775rem; color: var(--text-secondary); line-height: 1.5;">
        💡 <strong>Offline Guarantee:</strong> Your transactions, balances, and records are always saved securely on this device first. When internet connection returns, Money Control synchronizes automatically in the background.
      </div>
    </div>
  `;

  openModal({
    title: '☁️ Cloud Sync & Offline Status',
    content,
    onOpen: (modal) => {
      const syncBtn = modal.querySelector('#btn-manual-sync-now');
      const closeBtn = modal.querySelector('#btn-close-sync-modal');

      if (closeBtn) closeBtn.onclick = () => closeModal();

      if (syncBtn) {
        syncBtn.onclick = async () => {
          syncBtn.disabled = true;
          syncBtn.innerHTML = '<span class="spinner"></span> Syncing with Firebase...';

          try {
            const res = await syncPendingOperations(true);
            if (res.success) {
              toast.success('✅ All changes synced to Firebase successfully!');
              closeModal();
            } else {
              toast.error(res.error || 'Sync could not be completed.');
              syncBtn.disabled = false;
              syncBtn.innerHTML = '🔄 Try Again';
            }
          } catch (e) {
            toast.error('Sync failed. Please check connection.');
            syncBtn.disabled = false;
            syncBtn.innerHTML = '🔄 Try Again';
          }
        };
      }
    }
  });
}

/**
 * Attach listener to the pill badge
 */
export function attachSyncPillListener() {
  const pill = document.getElementById('btn-sync-status-indicator');
  if (pill) {
    pill.onclick = () => {
      openSyncStatusModal();
    };
  }
}
