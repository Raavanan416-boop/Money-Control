// ============================================
// 💰 Money Control — Onboarding Page
// ============================================

import { setInitialBalance } from '../services/firestore.js';
import { validateAmount } from '../utils/validators.js';
import { toast } from '../utils/toast.js';

/**
 * Render Onboarding HTML
 */
export function renderOnboardingPage() {
  return `
    <div class="onboarding-page">
      <div class="onboarding-container">
        <span class="onboarding-icon">💰</span>
        <h1 class="onboarding-title">Welcome to Money Control!</h1>
        <p class="onboarding-subtitle">To get started, let's set up your starting balance.</p>

        <div class="onboarding-card">
          <form id="onboarding-form" novalidate>
            <div class="form-group onboarding-amount">
              <label class="form-label" for="initial-balance" style="text-align: center; display: block; font-size: var(--fs-md);">
                How much money do you currently have?
              </label>
              <div class="form-input-group">
                <span class="input-prefix">₹</span>
                <input type="number" id="initial-balance" class="form-input" placeholder="0.00" step="any" min="0" required autofocus />
              </div>
              <div class="form-error" id="onboarding-error" style="justify-content: center; font-size: var(--fs-sm); margin-top: 8px;"></div>
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-start-tracking">
              Start Money Tracking
            </button>
          </form>
        </div>
      </div>
    </div>
  `;
}

/**
 * Attach Onboarding Event Listeners
 */
export function attachOnboardingListeners(userUid, onComplete) {
  const form = document.getElementById('onboarding-form');
  if (!form) return;

  form.onsubmit = async (e) => {
    e.preventDefault();
    const amountInput = document.getElementById('initial-balance');
    const errorDiv = document.getElementById('onboarding-error');
    errorDiv.textContent = '';

    const amount = amountInput.value;
    const err = validateAmount(amount, true);
    if (err) {
      errorDiv.textContent = err;
      return;
    }

    const submitBtn = document.getElementById('btn-start-tracking');
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span class="spinner"></span> Saving...`;

    try {
      await setInitialBalance(userUid, Number(amount));
      toast.success('Initial balance saved!');
      if (onComplete) onComplete();
    } catch (error) {
      console.error('Error setting initial balance:', error);
      toast.error('Unable to save initial balance. Please try again.');
      submitBtn.disabled = false;
      submitBtn.innerHTML = `Start Money Tracking`;
    }
  };
}
