// ============================================
// 💰 Money Control — Transaction Edit Modal
// Individual Field Unlock via Gmail OTP Verification
// ============================================

import { openModal, closeModal } from './modal.js';
import { maskEmail } from '../services/secure-delete.js';
import { auth } from '../config/firebase.js';
import {
  createFieldEditSession,
  verifyFieldEditOtp,
  cleanupFieldEditSessions,
  saveCorrectionAudit
} from '../services/transaction-edit-session.js';
import { updateTransaction, updateTransactionWithCorrection } from '../services/firestore.js';
import {
  formatCurrency,
  formatDate,
  getTransactionTime,
  escapeHtml,
  getCategoryEmoji,
  EXPENSE_CATEGORIES,
  INCOME_CATEGORIES
} from '../utils/formatters.js';
import { toast } from '../utils/toast.js';

/**
 * Extract 24-hour HH:mm string from transaction for <input type="time">
 */
function extractTimeValue(tx) {
  if (!tx) return '12:00';
  const raw = tx.createdAt || tx.timestamp || tx.time;
  if (!raw) return '12:00';
  if (typeof raw === 'string' && /^\d{2}:\d{2}$/.test(raw.trim())) {
    return raw.trim();
  }
  const d = new Date(raw);
  if (!isNaN(d.getTime())) {
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  }
  return '12:00';
}

/**
 * Open Transaction Details modal with individual field OTP unlock.
 *
 * @param {Object} tx - The transaction object
 * @param {Object} options
 * @param {Function} options.onSaveSuccess - Callback after successful save (e.g. refreshData)
 * @param {Object} options.state - App state with user, profile, accounts, transactions
 */
export function openTransactionEditModal(tx, { onSaveSuccess, state }) {
  let currentType = tx.type || 'EXPENSE';
  const accounts = state.accounts || [];
  const uid = state.user?.uid || auth?.currentUser?.uid;
  const userEmail = (state.user?.email || state.profile?.email || auth?.currentUser?.email || '').trim();

  // Deep clone the original tx for comparison and rollback
  const originalTx = JSON.parse(JSON.stringify(tx));

  const typeLabel = currentType === 'INCOME' ? 'Income' : currentType === 'EXPENSE' ? 'Expense' : 'Transfer';
  const emoji = tx.type === 'TRANSFER' ? '↔' : (tx.type === 'INCOME' ? '💰' : getCategoryEmoji(tx.category));
  const timeStr = getTransactionTime(tx);
  const initialTimeVal = extractTimeValue(tx);
  const dateStr = formatDate(tx.date);
  const maskedEmailStr = maskEmail(userEmail);

  // Separate, independent authorization states for every protected field
  const unlockState = {
    amountUnlocked: false,
    accountUnlocked: false,
    dateUnlocked: false,
    timeUnlocked: false,
    typeUnlocked: false
  };

  let resendTimer = null;
  let modalInstance = null;

  function updateHeaderEmoji() {
    if (!modalInstance) return;
    const headerEmoji = modalInstance.querySelector('#details-tx-header-emoji');
    if (!headerEmoji) return;
    const catSelect = modalInstance.querySelector('#details-tx-category');
    const currentCat = catSelect ? catSelect.value : tx.category;
    headerEmoji.textContent = currentType === 'TRANSFER' ? '↔' : (currentType === 'INCOME' ? '💰' : getCategoryEmoji(currentCat));
  }

  function clearActiveTimer() {
    if (resendTimer) {
      clearInterval(resendTimer);
      resendTimer = null;
    }
  }

  const getAccountDisplay = (accountId) => {
    const acc = accounts.find(a => a.id === accountId);
    return acc ? `${acc.icon || '🏦'} ${escapeHtml(acc.name)}` : 'Select Account';
  };

  const getAccountOptions = (selectedId) => {
    return accounts.map(a => `
      <option value="${a.id}" ${selectedId === a.id ? 'selected' : ''}>
        ${a.icon || '🏦'} ${escapeHtml(a.name)}
      </option>
    `).join('');
  };

  const renderCategoryOptions = (type, selectedCat) => {
    if (type === 'TRANSFER') {
      return `<option value="Transfer" selected>Transfer</option>`;
    }
    const list = type === 'INCOME' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
    return list.map(c => `
      <option value="${c.value}" ${selectedCat === c.value ? 'selected' : ''}>
        ${escapeHtml(c.label)}
      </option>
    `).join('');
  };

  // Render Account fields with independent unlock state
  const renderAccountFields = (type, isUnlocked, preservedAccountId, preservedDestId) => {
    if (type === 'INCOME') {
      const selectedId = preservedDestId || preservedAccountId || tx.destinationAccountId || tx.sourceAccountId || (accounts[0] && accounts[0].id);
      const accDisplay = getAccountDisplay(selectedId);
      return `
        <div class="form-group">
          <label class="form-label" for="details-tx-account">Received Into Account</label>
          <div class="form-input tx-locked-field clickable-locked-field" id="tx-account-locked" data-field="account" data-label="Account" title="Click lock to edit" style="display: ${isUnlocked ? 'none' : 'flex'}; align-items: center; justify-content: space-between; cursor: pointer;">
            <span id="tx-account-locked-text">${accDisplay}</span>
            <span class="tx-lock-hint">🔒 Tap unlock</span>
          </div>
          <select id="details-tx-account" class="form-select tx-unlocked-field" style="display: ${isUnlocked ? 'block' : 'none'};" required>
            ${getAccountOptions(selectedId)}
          </select>
        </div>
      `;
    } else if (type === 'EXPENSE') {
      const selectedId = preservedAccountId || preservedDestId || tx.sourceAccountId || tx.destinationAccountId || (accounts[0] && accounts[0].id);
      const accDisplay = getAccountDisplay(selectedId);
      return `
        <div class="form-group">
          <label class="form-label" for="details-tx-account">Paid From Account</label>
          <div class="form-input tx-locked-field clickable-locked-field" id="tx-account-locked" data-field="account" data-label="Account" title="Click lock to edit" style="display: ${isUnlocked ? 'none' : 'flex'}; align-items: center; justify-content: space-between; cursor: pointer;">
            <span id="tx-account-locked-text">${accDisplay}</span>
            <span class="tx-lock-hint">🔒 Tap unlock</span>
          </div>
          <select id="details-tx-account" class="form-select tx-unlocked-field" style="display: ${isUnlocked ? 'block' : 'none'};" required>
            ${getAccountOptions(selectedId)}
          </select>
        </div>
      `;
    } else {
      const fromId = preservedAccountId || tx.sourceAccountId || (accounts[0] && accounts[0].id);
      const toId = preservedDestId || tx.destinationAccountId || (accounts[1] ? accounts[1].id : accounts[0]?.id);
      const fromDisplay = getAccountDisplay(fromId);
      const toDisplay = getAccountDisplay(toId);
      return `
        <div class="form-group">
          <label class="form-label">Accounts</label>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 4px;">
            <div>
              <label class="form-label" for="details-tx-from-account" style="font-size: 0.75rem; color: var(--text-tertiary); margin-bottom: 4px;">From Account</label>
              <div class="form-input tx-locked-field clickable-locked-field" id="tx-from-account-locked" data-field="account" data-label="Account" title="Click lock to edit" style="display: ${isUnlocked ? 'none' : 'flex'}; align-items: center; justify-content: space-between; cursor: pointer;">
                <span>${fromDisplay}</span>
                <span class="tx-lock-hint">🔒 Tap unlock</span>
              </div>
              <select id="details-tx-from-account" class="form-select tx-unlocked-field" style="display: ${isUnlocked ? 'block' : 'none'};" required>
                ${getAccountOptions(fromId)}
              </select>
            </div>
            <div>
              <label class="form-label" for="details-tx-to-account" style="font-size: 0.75rem; color: var(--text-tertiary); margin-bottom: 4px;">To Account</label>
              <div class="form-input tx-locked-field clickable-locked-field" id="tx-to-account-locked" data-field="account" data-label="Account" title="Click lock to edit" style="display: ${isUnlocked ? 'none' : 'flex'}; align-items: center; justify-content: space-between; cursor: pointer;">
                <span>${toDisplay}</span>
                <span class="tx-lock-hint">🔒 Tap unlock</span>
              </div>
              <select id="details-tx-to-account" class="form-select tx-unlocked-field" style="display: ${isUnlocked ? 'block' : 'none'};" required>
                ${getAccountOptions(toId)}
              </select>
            </div>
          </div>
        </div>
      `;
    }
  };

  // Build the form content (NO light red locked badges on top!)
  function buildFormContent() {
    return `
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color);">
        <div id="details-tx-header-emoji" style="width: 44px; height: 44px; border-radius: var(--radius-lg); background: var(--bg-tertiary); display: flex; align-items: center; justify-content: center; font-size: 22px;">
          ${emoji}
        </div>
        <div style="flex: 1;">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em;">Transaction Details</div>
          <div style="font-size: 1.125rem; font-weight: 800; color: var(--text-primary);">${escapeHtml(tx.reason || tx.category || 'Transaction')}</div>
        </div>
      </div>

      <form id="details-tx-form" novalidate>
        <!-- Reason (Unprotected) -->
        <div class="form-group">
          <label class="form-label" for="details-tx-reason">Reason (Optional)</label>
          <input type="text" id="details-tx-reason" class="form-input" value="${escapeHtml(tx.reason || '')}" placeholder="Reason (Optional)" />
        </div>

        <!-- Transaction Type (Protected with individual lock) -->
        <div class="form-group">
          <label class="form-label">Transaction Type</label>
          <!-- Locked display -->
          <div class="form-input tx-locked-field clickable-locked-field" id="tx-type-locked" data-field="type" data-label="Transaction Type" title="Click lock to edit" style="display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
            <span id="tx-type-locked-text">${typeLabel}</span>
            <span class="tx-lock-hint">🔒 Tap unlock</span>
          </div>
          <!-- Unlocked toggle buttons -->
          <div id="tx-type-unlocked" class="tx-unlockable-field" style="display: none; margin-top: 4px;">
            <div class="tx-type-selector">
              <button type="button" class="btn-type-toggle ${currentType === 'EXPENSE' ? 'active-expense' : ''}" data-type="EXPENSE">
                💸 Expense
              </button>
              <button type="button" class="btn-type-toggle ${currentType === 'INCOME' ? 'active-income' : ''}" data-type="INCOME">
                💰 Income
              </button>
              <button type="button" class="btn-type-toggle ${currentType === 'TRANSFER' ? 'active-transfer' : ''}" data-type="TRANSFER">
                ↔️ Transfer
              </button>
            </div>
          </div>
        </div>

        <!-- Account (Protected with individual lock) -->
        <div id="details-account-container">
          ${renderAccountFields(currentType, unlockState.accountUnlocked)}
        </div>

        <!-- Category (Unprotected for Income / Expense) -->
        <div class="form-group" id="details-category-group" style="${currentType === 'TRANSFER' ? 'display: none;' : ''}">
          <label class="form-label" for="details-tx-category">Category</label>
          <select id="details-tx-category" class="form-select">
            ${renderCategoryOptions(currentType, tx.category)}
          </select>
        </div>

        <!-- Amount (Protected with individual lock) -->
        <div class="form-group">
          <label class="form-label">Amount</label>
          <!-- Locked display -->
          <div class="form-input tx-locked-field clickable-locked-field" id="tx-amount-locked" data-field="amount" data-label="Amount" title="Click lock to edit" style="display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
            <span style="font-weight: 700;">${formatCurrency(tx.amount)}</span>
            <span class="tx-lock-hint">🔒 Tap unlock</span>
          </div>
          <!-- Unlocked input -->
          <input type="number" id="details-tx-amount" class="form-input tx-unlockable-field tx-unlocked-field" value="${tx.amount}" min="0.01" step="0.01" style="display: none; font-weight: 700;" placeholder="0.00" />
        </div>

        <!-- Date & Time (Protected with individual locks) -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <!-- Date -->
          <div class="form-group">
            <label class="form-label">Date</label>
            <!-- Locked display -->
            <div class="form-input tx-locked-field clickable-locked-field" id="tx-date-locked" data-field="date" data-label="Date" title="Click lock to edit" style="display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
              <span id="tx-date-display">📅 ${dateStr}</span>
              <span class="tx-lock-hint">🔒 Tap unlock</span>
            </div>
            <!-- Unlocked input -->
            <input type="date" id="details-tx-date" class="form-input tx-unlockable-field tx-unlocked-field" value="${tx.date || ''}" style="display: none;" />
          </div>

          <!-- Time -->
          <div class="form-group">
            <label class="form-label">Time</label>
            <!-- Locked display -->
            <div class="form-input tx-locked-field clickable-locked-field" id="tx-time-locked" data-field="time" data-label="Time" title="Click lock to edit" style="display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
              <span id="tx-time-display">⏰ ${timeStr}</span>
              <span class="tx-lock-hint">🔒 Tap unlock</span>
            </div>
            <!-- Unlocked input -->
            <input type="time" id="details-tx-time" class="form-input tx-unlockable-field tx-unlocked-field" value="${initialTimeVal}" style="display: none;" />
          </div>
        </div>

        <!-- Action Buttons (Cancel and Save Changes) -->
        <div style="display: flex; gap: 12px; margin-top: 24px;">
          <button type="button" class="btn btn-outline" id="details-tx-cancel" style="flex: 1;">Cancel</button>
          <button type="submit" class="btn btn-primary" id="details-tx-save" style="flex: 1;">Save Changes</button>
        </div>
      </form>
    `;
  }

  // --- Field-Specific OTP Verification Popup ---
  function openFieldOtpPopup(modal, field, fieldLabel) {
    const container = modal.querySelector('#tx-edit-otp-container');
    if (!container) return;

    const displayField = fieldLabel || (field.charAt(0).toUpperCase() + field.slice(1));

    container.innerHTML = `
      <div class="tx-otp-overlay" id="tx-otp-overlay" role="dialog" aria-modal="true" aria-labelledby="tx-otp-title">
        <div class="tx-otp-popup animate-fade-in">
          <div class="tx-otp-header">
            <div style="font-size: 2.25rem; margin-bottom: 6px;">🔐</div>
            <h3 id="tx-otp-title" style="font-size: 1.125rem; font-weight: 800; color: var(--text-primary); margin: 0 0 6px;">
              Verify your email to unlock ${escapeHtml(displayField)}
            </h3>
            <p style="font-size: 0.8125rem; color: var(--text-secondary); margin: 0; line-height: 1.4;">
              Gmail OTP verification is required to unlock the <strong>${escapeHtml(displayField)}</strong> field for editing.
            </p>
          </div>

          <div class="tx-otp-email-display">
            <span style="font-size: 0.75rem; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Registered Email</span>
            <span style="font-size: 0.95rem; font-weight: 700; color: var(--primary); letter-spacing: 0.5px;">${escapeHtml(maskedEmailStr)}</span>
          </div>

          <div id="tx-otp-send-section">
            <button type="button" id="btn-send-edit-otp" class="btn btn-primary btn-block" style="margin-bottom: 12px; min-height: 44px;">
              📧 Send OTP
            </button>
          </div>

          <div id="tx-otp-input-section" style="display: none;">
            <div class="form-group" style="margin-bottom: 8px;">
              <input
                type="text"
                id="tx-edit-otp-input"
                class="form-input tx-otp-input"
                maxlength="6"
                inputmode="numeric"
                pattern="[0-9]*"
                placeholder="••••••"
                autocomplete="one-time-code"
                aria-label="Enter 6-digit OTP"
              />
            </div>
            <div id="tx-edit-otp-error" class="tx-otp-error"></div>

            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px; padding: 0 4px;">
              <span id="tx-edit-otp-timer" style="font-size: 0.8125rem; color: var(--text-secondary); font-weight: 500;">
                Resend OTP in 60s
              </span>
              <button type="button" id="btn-resend-edit-otp" class="btn btn-ghost btn-sm" disabled style="padding: 4px 10px; font-size: 0.8125rem;">
                Resend OTP
              </button>
            </div>

            <button type="button" id="btn-verify-edit-otp" class="btn btn-primary btn-block" disabled style="min-height: 44px;">
              ✅ Verify OTP
            </button>

            <p style="font-size: 0.75rem; color: var(--text-tertiary); text-align: center; margin: 12px 0 0; line-height: 1.4;">
              💡 Didn't receive the email? Check your <strong>Spam</strong>, <strong>Promotions</strong>, or <strong>All Mail</strong> folders.
            </p>
          </div>

          <button type="button" id="btn-cancel-edit-otp" class="btn btn-ghost btn-block" style="margin-top: 8px; min-height: 40px;">
            Cancel
          </button>
        </div>
      </div>
    `;

    container.style.display = 'block';
    attachFieldOtpListeners(modal, field, displayField);
  }

  function attachFieldOtpListeners(modal, field, displayField) {
    const sendBtn = modal.querySelector('#btn-send-edit-otp');
    const sendSection = modal.querySelector('#tx-otp-send-section');
    const inputSection = modal.querySelector('#tx-otp-input-section');
    const otpInput = modal.querySelector('#tx-edit-otp-input');
    const verifyBtn = modal.querySelector('#btn-verify-edit-otp');
    const resendBtn = modal.querySelector('#btn-resend-edit-otp');
    const cancelBtn = modal.querySelector('#btn-cancel-edit-otp');
    const errorEl = modal.querySelector('#tx-edit-otp-error');
    const timerDisplay = modal.querySelector('#tx-edit-otp-timer');

    function startTimer() {
      clearActiveTimer();
      let countdown = 60;
      if (timerDisplay) timerDisplay.textContent = `Resend OTP in ${countdown}s`;
      if (resendBtn) resendBtn.disabled = true;

      resendTimer = setInterval(() => {
        countdown--;
        if (countdown > 0) {
          if (timerDisplay) timerDisplay.textContent = `Resend OTP in ${countdown}s`;
        } else {
          clearActiveTimer();
          if (timerDisplay) timerDisplay.textContent = "Didn't receive the code?";
          if (resendBtn) resendBtn.disabled = false;
        }
      }, 1000);
    }

    // Send OTP
    if (sendBtn) {
      sendBtn.onclick = async () => {
        sendBtn.disabled = true;
        sendBtn.innerHTML = '<span class="spinner"></span> Sending OTP...';

        try {
          await createFieldEditSession({
            uid,
            transactionId: tx.id,
            field,
            fieldLabel: displayField,
            transactionName: tx.reason || tx.category || 'Transaction',
            userEmail
          });

          // Show accurate success status message only after email delivery confirmed
          toast.success('OTP sent successfully! Check your email.');

          if (sendSection) sendSection.style.display = 'none';
          if (inputSection) inputSection.style.display = 'block';
          if (otpInput) {
            otpInput.value = '';
            otpInput.focus();
          }
          startTimer();
        } catch (err) {
          console.error('Error sending field edit OTP:', err);
          const msg = err.message?.includes('Please wait') ? err.message : 'Unable to send OTP. Please try again.';
          toast.error(msg);
          sendBtn.disabled = false;
          sendBtn.innerHTML = '📧 Send OTP';
        }
      };
    }

    // OTP input typing
    if (otpInput) {
      otpInput.addEventListener('input', () => {
        otpInput.value = otpInput.value.replace(/\D/g, '').slice(0, 6);
        if (errorEl) errorEl.textContent = '';
        if (verifyBtn) verifyBtn.disabled = otpInput.value.length !== 6;
      });

      otpInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && verifyBtn && !verifyBtn.disabled) {
          e.preventDefault();
          verifyBtn.click();
        }
      });
    }

    // Resend OTP
    if (resendBtn) {
      resendBtn.onclick = async () => {
        resendBtn.disabled = true;
        if (errorEl) errorEl.textContent = '';
        if (otpInput) {
          otpInput.value = '';
          otpInput.focus();
        }
        if (verifyBtn) verifyBtn.disabled = true;

        try {
          await createFieldEditSession({
            uid,
            transactionId: tx.id,
            field,
            fieldLabel: displayField,
            transactionName: tx.reason || tx.category || 'Transaction',
            userEmail
          });

          toast.success('OTP sent successfully! Check your email.');
          startTimer();
        } catch (err) {
          console.error('Error resending edit OTP:', err);
          const msg = err.message?.includes('Please wait') ? err.message : 'Unable to send OTP. Please try again.';
          toast.error(msg);
          if (errorEl) errorEl.textContent = msg;
          resendBtn.disabled = false;
        }
      };
    }

    // Verify OTP
    if (verifyBtn) {
      verifyBtn.onclick = async () => {
        const code = otpInput ? otpInput.value.trim() : '';
        if (code.length !== 6) return;

        verifyBtn.disabled = true;
        verifyBtn.innerHTML = '<span class="spinner"></span> Verifying...';
        if (errorEl) errorEl.textContent = '';

        try {
          const result = await verifyFieldEditOtp({
            uid,
            transactionId: tx.id,
            field,
            enteredOtp: code
          });

          if (!result.success) {
            if (errorEl) errorEl.textContent = result.error || 'Incorrect OTP. Please try again.';
            verifyBtn.disabled = false;
            verifyBtn.innerHTML = '✅ Verify OTP';
            return;
          }

          // OTP verified successfully for THIS field only!
          clearActiveTimer();

          // Close OTP overlay
          const overlay = modal.querySelector('#tx-otp-overlay');
          if (overlay) overlay.remove();
          const otpContainer = modal.querySelector('#tx-edit-otp-container');
          if (otpContainer) otpContainer.style.display = 'none';

          // Unlock ONLY this specific field
          unlockSingleField(modal, field, displayField);

          toast.success(`✅ ${displayField} unlocked successfully!`);
        } catch (err) {
          console.error('Field OTP verification error:', err);
          if (errorEl) errorEl.textContent = err.message || 'Verification failed. Please try again.';
          verifyBtn.disabled = false;
          verifyBtn.innerHTML = '✅ Verify OTP';
        }
      };
    }

    // Cancel OTP popup — field stays locked
    if (cancelBtn) {
      cancelBtn.onclick = () => {
        const overlay = modal.querySelector('#tx-otp-overlay');
        if (overlay) overlay.remove();
        const otpContainer = modal.querySelector('#tx-edit-otp-container');
        if (otpContainer) otpContainer.style.display = 'none';
        clearActiveTimer();
      };
    }
  }

  // --- Unlock a single field independently ---
  function unlockSingleField(modal, field, displayField) {
    if (field === 'amount') {
      unlockState.amountUnlocked = true;
      const lockedDisplay = modal.querySelector('#tx-amount-locked');
      const inputEl = modal.querySelector('#details-tx-amount');
      if (lockedDisplay) lockedDisplay.style.display = 'none';
      if (inputEl) {
        inputEl.style.display = 'block';
        inputEl.focus();
      }
    } else if (field === 'date') {
      unlockState.dateUnlocked = true;
      const lockedDisplay = modal.querySelector('#tx-date-locked');
      const inputEl = modal.querySelector('#details-tx-date');
      if (lockedDisplay) lockedDisplay.style.display = 'none';
      if (inputEl) {
        inputEl.style.display = 'block';
        inputEl.focus();
      }
    } else if (field === 'time') {
      unlockState.timeUnlocked = true;
      const lockedDisplay = modal.querySelector('#tx-time-locked');
      const inputEl = modal.querySelector('#details-tx-time');
      if (lockedDisplay) lockedDisplay.style.display = 'none';
      if (inputEl) {
        inputEl.style.display = 'block';
        inputEl.focus();
      }
    } else if (field === 'account') {
      unlockState.accountUnlocked = true;
      const lockedBox = modal.querySelector('#tx-account-locked');
      const accSelect = modal.querySelector('#details-tx-account');
      if (lockedBox) lockedBox.style.display = 'none';
      if (accSelect) {
        accSelect.style.display = 'block';
        accSelect.focus();
      }
      const fromLocked = modal.querySelector('#tx-from-account-locked');
      const toLocked = modal.querySelector('#tx-to-account-locked');
      const fromSelect = modal.querySelector('#details-tx-from-account');
      const toSelect = modal.querySelector('#details-tx-to-account');
      if (fromLocked) fromLocked.style.display = 'none';
      if (toLocked) toLocked.style.display = 'none';
      if (fromSelect) fromSelect.style.display = 'block';
      if (toSelect) toSelect.style.display = 'block';
    } else if (field === 'type') {
      unlockState.typeUnlocked = true;
      const lockedDisplay = modal.querySelector('#tx-type-locked');
      const unlockedContainer = modal.querySelector('#tx-type-unlocked');
      if (lockedDisplay) lockedDisplay.style.display = 'none';
      if (unlockedContainer) unlockedContainer.style.display = 'block';
    }

    // Attach/re-attach type toggle handlers if type was unlocked
    attachTypeToggleListeners(modal);
  }

  function attachTypeToggleListeners(modal) {
    const typeButtons = modal.querySelectorAll('.btn-type-toggle');
    typeButtons.forEach(btn => {
      btn.onclick = () => {
        if (!unlockState.typeUnlocked) return;
        const newType = btn.getAttribute('data-type');
        if (newType === currentType) return;

        // Remember existing selected accounts before re-rendering
        const prevAccSelect = modal.querySelector('#details-tx-account');
        const prevFromSelect = modal.querySelector('#details-tx-from-account');
        const prevToSelect = modal.querySelector('#details-tx-to-account');
        const rememberedSrc = prevAccSelect?.value || prevFromSelect?.value || null;
        const rememberedDest = prevToSelect?.value || null;

        currentType = newType;

        // Update button active classes
        typeButtons.forEach(b => {
          b.classList.remove('active-expense', 'active-income', 'active-transfer');
          const t = b.getAttribute('data-type');
          if (t === currentType) {
            b.classList.add(t === 'EXPENSE' ? 'active-expense' : t === 'INCOME' ? 'active-income' : 'active-transfer');
          }
        });

        // Update Category options and visibility
        const categoryGroup = modal.querySelector('#details-category-group');
        const categorySelect = modal.querySelector('#details-tx-category');
        if (categoryGroup && categorySelect) {
          if (currentType === 'TRANSFER') {
            categoryGroup.style.display = 'none';
            categorySelect.innerHTML = '<option value="Transfer" selected>Transfer</option>';
          } else {
            categoryGroup.style.display = 'block';
            categorySelect.innerHTML = renderCategoryOptions(currentType, currentType === tx.type ? tx.category : '');
          }
        }

        // Re-render Account fields respecting unlockState.accountUnlocked
        const accountContainer = modal.querySelector('#details-account-container');
        if (accountContainer) {
          accountContainer.innerHTML = renderAccountFields(currentType, unlockState.accountUnlocked, rememberedSrc, rememberedDest);
          attachAccountLockListener(modal);
        }

        // Update header emoji
        updateHeaderEmoji();
      };
    });
  }

  function attachAccountLockListener(modal) {
    const accLocked = modal.querySelector('#tx-account-locked');
    if (accLocked && !unlockState.accountUnlocked) {
      accLocked.onclick = () => {
        openFieldOtpPopup(modal, 'account', 'Account');
      };
    }
    const fromLocked = modal.querySelector('#tx-from-account-locked');
    if (fromLocked && !unlockState.accountUnlocked) {
      fromLocked.onclick = () => {
        openFieldOtpPopup(modal, 'account', 'Account');
      };
    }
    const toLocked = modal.querySelector('#tx-to-account-locked');
    if (toLocked && !unlockState.accountUnlocked) {
      toLocked.onclick = () => {
        openFieldOtpPopup(modal, 'account', 'Account');
      };
    }
  }

  // --- Attach all individual lock click listeners ---
  function attachFieldLockListeners(modal) {
    // 1. Amount
    const amountLockedBox = modal.querySelector('#tx-amount-locked');
    if (amountLockedBox) {
      amountLockedBox.onclick = () => {
        if (!unlockState.amountUnlocked) openFieldOtpPopup(modal, 'amount', 'Amount');
      };
    }

    // 2. Date
    const dateLockedBox = modal.querySelector('#tx-date-locked');
    if (dateLockedBox) {
      dateLockedBox.onclick = () => {
        if (!unlockState.dateUnlocked) openFieldOtpPopup(modal, 'date', 'Date');
      };
    }

    // 3. Time
    const timeLockedBox = modal.querySelector('#tx-time-locked');
    if (timeLockedBox) {
      timeLockedBox.onclick = () => {
        if (!unlockState.timeUnlocked) openFieldOtpPopup(modal, 'time', 'Time');
      };
    }

    // 4. Type
    const typeLockedBox = modal.querySelector('#tx-type-locked');
    if (typeLockedBox) {
      typeLockedBox.onclick = () => {
        if (!unlockState.typeUnlocked) openFieldOtpPopup(modal, 'type', 'Transaction Type');
      };
    }

    // 5. Account
    attachAccountLockListener(modal);
  }

  // --- Build full modal content ---
  const content = `
    <div id="tx-edit-otp-container" style="display: none;"></div>
    ${buildFormContent()}
  `;

  openModal({
    title: 'Transaction Details',
    content,
    onOpen: (modal) => {
      modalInstance = modal;
      const cancelBtn = modal.querySelector('#details-tx-cancel');
      const form = modal.querySelector('#details-tx-form');
      const categorySelect = modal.querySelector('#details-tx-category');

      if (categorySelect) {
        categorySelect.onchange = () => {
          updateHeaderEmoji();
        };
      }

      // Attach lock box click handlers
      attachFieldLockListeners(modal);

      // Cancel button
      if (cancelBtn) {
        cancelBtn.onclick = () => {
          closeModal();
        };
      }

      // Form submission
      if (form) {
        form.onsubmit = async (e) => {
          e.preventDefault();
          const submitBtn = modal.querySelector('#details-tx-save');

          // Reason (unprotected)
          const newReason = modal.querySelector('#details-tx-reason').value.trim();

          // Category (unprotected for Income/Expense)
          const currentCatSelect = modal.querySelector('#details-tx-category');
          const newCategory = currentType === 'TRANSFER'
            ? 'Transfer'
            : (currentCatSelect ? currentCatSelect.value : tx.category);

          // Build payload
          const correctedPayload = {
            reason: newReason,
            category: newCategory,
            notes: tx.notes || ''
          };

          // 1. Amount: only modify if user verified Amount OTP
          if (unlockState.amountUnlocked) {
            const amountInput = modal.querySelector('#details-tx-amount');
            const newAmount = amountInput ? parseFloat(amountInput.value) : tx.amount;
            if (!newAmount || newAmount <= 0 || isNaN(newAmount)) {
              toast.error('Please enter a valid amount greater than 0.');
              return;
            }
            correctedPayload.amount = newAmount;
          } else {
            correctedPayload.amount = tx.amount;
          }

          // 2. Date: only modify if user verified Date OTP
          if (unlockState.dateUnlocked) {
            const dateInput = modal.querySelector('#details-tx-date');
            const newDate = dateInput ? dateInput.value : tx.date;
            if (!newDate) {
              toast.error('Please select a valid date.');
              return;
            }
            correctedPayload.date = newDate;
          } else {
            correctedPayload.date = tx.date;
          }

          // 3. Type: only modify if user verified Type OTP
          if (unlockState.typeUnlocked) {
            correctedPayload.type = currentType;
          } else {
            correctedPayload.type = tx.type || 'EXPENSE';
          }

          // 4. Accounts: only modify if user verified Account OTP
          const activeType = correctedPayload.type;
          if (unlockState.accountUnlocked) {
            if (activeType === 'INCOME') {
              const accSelect = modal.querySelector('#details-tx-account');
              correctedPayload.destinationAccountId = accSelect ? accSelect.value : (tx.destinationAccountId || tx.sourceAccountId);
              correctedPayload.sourceAccountId = null;
            } else if (activeType === 'EXPENSE') {
              const accSelect = modal.querySelector('#details-tx-account');
              correctedPayload.sourceAccountId = accSelect ? accSelect.value : (tx.sourceAccountId || tx.destinationAccountId);
              correctedPayload.destinationAccountId = null;
            } else if (activeType === 'TRANSFER') {
              const fromSelect = modal.querySelector('#details-tx-from-account');
              const toSelect = modal.querySelector('#details-tx-to-account');
              correctedPayload.sourceAccountId = fromSelect ? fromSelect.value : tx.sourceAccountId;
              correctedPayload.destinationAccountId = toSelect ? toSelect.value : tx.destinationAccountId;

              if (correctedPayload.sourceAccountId === correctedPayload.destinationAccountId) {
                toast.error('Source and destination accounts must be different for transfers.');
                return;
              }
            }
          } else {
            correctedPayload.sourceAccountId = tx.sourceAccountId || null;
            correctedPayload.destinationAccountId = tx.destinationAccountId || null;
          }

          // 5. Time: only modify if user verified Time OTP
          if (unlockState.timeUnlocked) {
            const timeInput = modal.querySelector('#details-tx-time');
            const timeVal = timeInput ? timeInput.value : '';
            if (timeVal) {
              const targetDate = correctedPayload.date || tx.date;
              const dateWithNewTime = new Date(`${targetDate}T${timeVal}:00`);
              if (!isNaN(dateWithNewTime.getTime())) {
                correctedPayload.createdAt = dateWithNewTime.toISOString();
              }
            }
          } else {
            correctedPayload.createdAt = tx.createdAt;
          }

          const hasProtectedChanges =
            unlockState.amountUnlocked ||
            unlockState.accountUnlocked ||
            unlockState.dateUnlocked ||
            unlockState.timeUnlocked ||
            unlockState.typeUnlocked;

          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner"></span> Saving...';

          try {
            if (hasProtectedChanges) {
              // Update transaction document with correction
              await updateTransactionWithCorrection(uid, tx.id, originalTx, correctedPayload);

              // Record audit history snapshot
              await saveCorrectionAudit({
                uid,
                transactionId: tx.id,
                previousValues: {
                  amount: originalTx.amount,
                  date: originalTx.date,
                  category: originalTx.category,
                  reason: originalTx.reason || '',
                  sourceAccountId: originalTx.sourceAccountId || null,
                  destinationAccountId: originalTx.destinationAccountId || null,
                  type: originalTx.type,
                  createdAt: originalTx.createdAt
                },
                updatedValues: {
                  amount: correctedPayload.amount,
                  date: correctedPayload.date,
                  category: correctedPayload.category,
                  reason: correctedPayload.reason,
                  sourceAccountId: correctedPayload.sourceAccountId || null,
                  destinationAccountId: correctedPayload.destinationAccountId || null,
                  type: correctedPayload.type,
                  createdAt: correctedPayload.createdAt
                },
                unlockedFields: { ...unlockState }
              });

              // Clean up edit sessions in Firestore
              await cleanupFieldEditSessions(uid, tx.id);
            } else {
              // Only unprotected fields (reason, category) changed
              await updateTransaction(uid, tx.id, correctedPayload);
            }

            // Update local object in-place
            Object.assign(tx, correctedPayload);

            closeModal();

            // Expected message per requirements
            toast.success('✅ Transaction updated successfully!');

            if (onSaveSuccess) onSaveSuccess();
          } catch (err) {
            console.error('Save transaction error:', err);
            toast.error(err.message || 'Unable to save transaction details.');
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Save Changes';
          }
        };
      }
    },
    onClose: () => {
      clearActiveTimer();
      // Relock and clean up any active sessions
      const anyUnlocked = Object.values(unlockState).some(Boolean);
      if (anyUnlocked && uid) {
        cleanupFieldEditSessions(uid, tx.id);
      }
      Object.keys(unlockState).forEach(k => { unlockState[k] = false; });
    }
  });
}
