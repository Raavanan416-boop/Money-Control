// ============================================
// 💰 Money Control — Secure Delete Modal Flow
// Two-step verification: Exact Name + Gmail OTP
// Single-modal implementation to avoid timer cancellation
// ============================================

import { openModal, closeModal } from './modal.js';
import { maskEmail, createDeleteSession, verifyDeleteOtp, cleanupDeleteSession } from '../services/secure-delete.js';
import { toast } from '../utils/toast.js';
import { escapeHtml } from '../utils/formatters.js';

/**
 * Open the Two-Step Secure Delete Flow
 * 
 * @param {Object} options
 * @param {string} [options.title] - e.g. "Delete Account?"
 * @param {string} options.itemType - e.g. "Account", "Budget", "Transaction"
 * @param {string} options.itemName - Exact name of the item to delete (case-sensitive)
 * @param {string} [options.impactMessage] - Optional impact description
 * @param {string} options.targetId - Document ID in Firestore
 * @param {string} options.uid - User UID
 * @param {string} options.userEmail - User's registered Gmail address
 * @param {Function} options.onVerifyAndDelete - Async function to execute actual deletion
 */
export function requestSecureDelete({
  title,
  itemType = 'Account',
  itemName,
  impactMessage,
  targetId,
  uid,
  userEmail,
  onVerifyAndDelete
}) {
  if (!itemName || !targetId || !uid) {
    console.error('requestSecureDelete: Missing required parameters', { itemName, targetId, uid });
    toast.error('Unable to initiate deletion. Missing parameters.');
    return;
  }

  const effectiveTitle = title || `Delete ${itemType}?`;
  const maskedEmail = maskEmail(userEmail || 'user@example.com');
  let resendTimer = null;
  let countdownSeconds = 30;
  let isCompleted = false;

  function clearActiveTimer() {
    if (resendTimer) {
      clearInterval(resendTimer);
      resendTimer = null;
    }
  }

  // --- Step 1 HTML Template ---
  function getStep1Html() {
    return `
      <div id="secure-delete-step1">
        <div style="background: rgba(239, 68, 68, 0.08); border: 1px solid rgba(239, 68, 68, 0.25); border-radius: var(--radius-lg); padding: var(--space-4); margin-bottom: var(--space-4); text-align: center;">
          <div style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 4px;">
            You are about to permanently delete:
          </div>
          <div style="font-size: 1.25rem; font-weight: 700; color: var(--expense); letter-spacing: 0.2px;">
            ${escapeHtml(itemName)}
          </div>
          ${impactMessage ? `
            <div style="font-size: 0.8125rem; color: var(--text-tertiary); margin-top: 6px; line-height: 1.4;">
              ${escapeHtml(impactMessage)}
            </div>
          ` : ''}
        </div>

        <div style="margin-bottom: var(--space-4);">
          <label class="form-label" for="secure-delete-name-input" style="font-size: 0.875rem; color: var(--text-secondary); margin-bottom: 8px;">
            To continue, enter the exact name below:
          </label>
          <input
            type="text"
            id="secure-delete-name-input"
            class="form-input"
            placeholder='Enter "${escapeHtml(itemName)}"'
            autocomplete="off"
            spellcheck="false"
            style="font-size: 1rem; font-weight: 500;"
          />
          <div id="secure-delete-name-error" style="display: none; color: var(--expense); font-size: 0.8125rem; margin-top: 8px; line-height: 1.4; padding: 6px 10px; background: rgba(239, 68, 68, 0.1); border-radius: var(--radius-md);">
            ❌ Name doesn't match.<br />Please enter the exact name to continue.
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          <button type="button" id="btn-secure-delete-step1-continue" class="btn btn-danger btn-block" disabled>
            Continue
          </button>
          <button type="button" id="btn-secure-delete-step1-cancel" class="btn btn-ghost btn-block">
            Cancel
          </button>
        </div>
      </div>
    `;
  }

  // --- Step 2 HTML Template ---
  function getStep2Html() {
    return `
      <div id="secure-delete-step2">
        <div style="text-align: center; margin-bottom: var(--space-4);">
          <div style="font-size: 2.25rem; margin-bottom: 8px;">🔐</div>
          <div style="font-size: 0.9375rem; color: var(--text-secondary); margin-bottom: 4px;">
            We sent a verification code to:
          </div>
          <div style="font-size: 1.125rem; font-weight: 700; color: var(--primary); letter-spacing: 0.5px;">
            ${escapeHtml(maskedEmail)}
          </div>
          <div style="font-size: 0.8125rem; color: var(--text-tertiary); margin-top: 4px;">
            Enter the 6-digit OTP to confirm permanent deletion of <strong>${escapeHtml(itemName)}</strong>
          </div>
        </div>

        <div class="form-group" style="margin-bottom: var(--space-3);">
          <input
            type="text"
            id="secure-delete-otp-input"
            class="form-input"
            maxlength="6"
            inputmode="numeric"
            pattern="[0-9]*"
            placeholder="••••••"
            autocomplete="one-time-code"
            style="font-size: 1.75rem; letter-spacing: 10px; text-align: center; font-weight: 700; font-family: monospace; height: 56px;"
          />
          <div id="secure-delete-otp-error" style="color: var(--expense); font-size: 0.875rem; text-align: center; margin-top: 8px; min-height: 20px; font-weight: 500;"></div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-4); padding: 0 4px;">
          <span id="otp-timer-display" style="font-size: 0.8125rem; color: var(--text-secondary); font-weight: 500;">
            Resend OTP in 30s
          </span>
          <button type="button" id="btn-otp-resend" class="btn btn-ghost btn-sm" disabled style="padding: 4px 10px; font-size: 0.8125rem;">
            Resend OTP
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          <button type="button" id="btn-otp-verify" class="btn btn-danger btn-block btn-lg" disabled>
            Verify OTP
          </button>
          <button type="button" id="btn-otp-cancel" class="btn btn-ghost btn-block">
            Cancel
          </button>
        </div>

        <p style="font-size: 0.75rem; color: var(--text-tertiary); text-align: center; margin: 12px 0 0; line-height: 1.4;">
          💡 Didn't receive the email? Check your <strong>Spam</strong>, <strong>Promotions</strong>, or <strong>All Mail</strong> folders.
        </p>
      </div>
    `;
  }

  // --- Attach Step 1 Listeners ---
  function attachStep1(modal) {
    const input = modal.querySelector('#secure-delete-name-input');
    const continueBtn = modal.querySelector('#btn-secure-delete-step1-continue');
    const cancelBtn = modal.querySelector('#btn-secure-delete-step1-cancel');
    const errorEl = modal.querySelector('#secure-delete-name-error');

    if (input) {
      input.focus();

      input.addEventListener('input', () => {
        const val = input.value;
        // Strict exact case-sensitive match
        if (val === itemName) {
          continueBtn.disabled = false;
          errorEl.style.display = 'none';
          input.style.borderColor = 'var(--income)';
        } else {
          continueBtn.disabled = true;
          input.style.borderColor = '';
          if (val.length > 0) {
            errorEl.style.display = 'block';
          } else {
            errorEl.style.display = 'none';
          }
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !continueBtn.disabled) {
          e.preventDefault();
          continueBtn.click();
        }
      });
    }

    if (cancelBtn) {
      cancelBtn.onclick = () => {
        closeModal();
      };
    }

    if (continueBtn) {
      continueBtn.onclick = async () => {
        if (!input || input.value !== itemName) return;

        if (typeof navigator !== 'undefined' && !navigator.onLine) {
          toast.error('Internet connection is required to receive the Gmail verification OTP for deletion.');
          return;
        }

        continueBtn.disabled = true;
        continueBtn.innerHTML = '<span class="spinner"></span> Sending OTP...';

        try {
          await createDeleteSession({
            uid,
            targetId,
            targetName: itemName,
            targetType: itemType,
            userEmail
          });

          // Show accurate success status message only after email delivery confirmed
          toast.success('OTP sent successfully! Check your email.');

          // Transition to Step 2 within the exact same modal (no closeModal to prevent premature onClose)
          renderStep2InModal(modal);
        } catch (err) {
          console.error(`[SecureDelete] Session creation failed: code=${err?.code || 'UNKNOWN'}, operation=create_${itemType ? itemType.toLowerCase() : 'budget'}_session`);
          let errorMsg = err?.message || 'Unable to send OTP. Please try again.';
          if (err?.code === 'permission-denied') {
            errorMsg = `You do not have permission to delete this ${itemType ? itemType.toLowerCase() : 'budget'}.`;
          } else if (err?.code === 'unauthenticated' || err?.message?.includes('session expired')) {
            errorMsg = 'Your session expired. Please sign in again.';
          }
          toast.error(errorMsg);
          continueBtn.disabled = false;
          continueBtn.innerHTML = 'Continue';
        }
      };
    }
  }

  // --- Transition to Step 2 Inside Single Modal ---
  function renderStep2InModal(modal) {
    // 1. Update Title
    const titleEl = modal.querySelector('.modal-title');
    if (titleEl) {
      titleEl.textContent = '🔐 Verify Your Identity';
    }

    // 2. Replace Body
    const container = modal.querySelector('#secure-delete-container');
    if (!container) return;
    container.innerHTML = getStep2Html();

    // 3. Grab Elements
    const otpInput = modal.querySelector('#secure-delete-otp-input');
    const verifyBtn = modal.querySelector('#btn-otp-verify');
    const resendBtn = modal.querySelector('#btn-otp-resend');
    const cancelBtn = modal.querySelector('#btn-otp-cancel');
    const errorEl = modal.querySelector('#secure-delete-otp-error');
    const timerDisplay = modal.querySelector('#otp-timer-display');

    // 4. Start 30s Countdown Timer
    function startTimer() {
      clearActiveTimer();
      countdownSeconds = 30;
      if (timerDisplay) timerDisplay.textContent = `Resend OTP in ${countdownSeconds}s`;
      if (resendBtn) resendBtn.disabled = true;

      resendTimer = setInterval(() => {
        countdownSeconds--;
        if (countdownSeconds > 0) {
          if (timerDisplay) timerDisplay.textContent = `Resend OTP in ${countdownSeconds}s`;
        } else {
          clearActiveTimer();
          if (timerDisplay) timerDisplay.textContent = "Didn't receive the code?";
          if (resendBtn) resendBtn.disabled = false;
        }
      }, 1000);
    }

    // Start timer immediately upon entering Step 2
    startTimer();

    // 5. Input Handling
    if (otpInput) {
      otpInput.focus();

      otpInput.addEventListener('input', () => {
        // Strip non-numeric characters and limit to 6 digits
        otpInput.value = otpInput.value.replace(/\D/g, '').slice(0, 6);
        if (errorEl) errorEl.textContent = '';

        if (otpInput.value.length === 6) {
          verifyBtn.disabled = false;
        } else {
          verifyBtn.disabled = true;
        }
      });

      otpInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !verifyBtn.disabled) {
          e.preventDefault();
          verifyBtn.click();
        }
      });
    }

    // 6. Resend OTP Handler
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
          await createDeleteSession({
            uid,
            targetId,
            targetName: itemName,
            targetType: itemType,
            userEmail
          });

          toast.success('OTP sent successfully! Check your email.');
          startTimer();
        } catch (err) {
          console.error('Error resending OTP:', err);
          const msg = err.message || 'Unable to send OTP. Please try again.';
          toast.error(msg);
          if (errorEl) errorEl.textContent = msg;
          resendBtn.disabled = false;
        }
      };
    }

    // 7. Cancel Button
    if (cancelBtn) {
      cancelBtn.onclick = () => {
        closeModal();
      };
    }

    // 8. Verify & Delete Handler
    let isProcessing = false;
    if (verifyBtn) {
      verifyBtn.onclick = async () => {
        if (isProcessing) return;
        const code = otpInput ? otpInput.value.trim() : '';
        if (code.length !== 6) return;

        isProcessing = true;
        verifyBtn.disabled = true;
        verifyBtn.innerHTML = '<span class="spinner"></span> Verifying OTP...';
        if (errorEl) errorEl.textContent = '';

        try {
          const result = await verifyDeleteOtp({ uid, targetId, enteredOtp: code });

          if (!result.success) {
            isProcessing = false;
            if (errorEl) errorEl.textContent = result.error || 'OTP verification failed. Please check the code.';
            verifyBtn.disabled = false;
            verifyBtn.innerHTML = 'Verify OTP';
            return;
          }

          verifyBtn.innerHTML = '<span class="spinner"></span> Deleting permanently...';

          await onVerifyAndDelete();
          isCompleted = true;
          await cleanupDeleteSession(uid, targetId);
          clearActiveTimer();
          closeModal();

          // Final Success Notification
          toast.success(`✅ Deleted Successfully\n"${itemName}" has been permanently deleted.`);
        } catch (err) {
          isProcessing = false;
          console.error(`[SecureDelete] Deletion failed: code=${err?.code || 'UNKNOWN'}, operation=delete_${itemType ? itemType.toLowerCase() : 'budget'}`);

          let displayMsg = 'Budget deletion failed. Your data has not been removed.';
          if (err?.code === 'permission-denied' || (err?.message && err.message.toLowerCase().includes('permission'))) {
            displayMsg = `You do not have permission to delete this ${itemType ? itemType.toLowerCase() : 'budget'}.`;
          } else if (err?.code === 'unauthenticated' || (err?.message && (err.message.includes('session expired') || err.message.includes('sign in')))) {
            displayMsg = 'Your session expired. Please sign in again.';
          } else if (err?.message && !err.message.includes('Firebase: Error') && !err.message.includes('Missing or insufficient permissions')) {
            displayMsg = err.message;
          }

          if (errorEl) errorEl.textContent = displayMsg;
          verifyBtn.disabled = false;
          verifyBtn.innerHTML = 'Verify OTP';
        }
      };
    }
  }

  // ===== OPEN SINGLE MODAL =====
  openModal({
    title: `🗑️ ${effectiveTitle}`,
    content: `<div id="secure-delete-container">${getStep1Html()}</div>`,
    onOpen: (modal) => {
      attachStep1(modal);
    },
    onClose: () => {
      clearActiveTimer();
      // Only clean up session and display cancel toast if deletion was NOT completed
      if (!isCompleted) {
        cleanupDeleteSession(uid, targetId);
        toast.info('Deletion cancelled.');
      }
    }
  });
}
