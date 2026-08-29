// ============================================
// 💰 Money Control V3 — PIN Lock Screen
// ============================================

import { hashPin, savePinHash, verifyPin, removePin, markPinPromptShown, getPinData } from '../services/pin.js';
import { toast } from '../utils/toast.js';

let pinState = {
  mode: 'lock',      // 'lock' | 'setup-prompt' | 'create' | 'forgot'
  pin: '',
  confirmPin: '',
  step: 'enter',     // 'enter' | 'confirm'
  pinLength: 4,
  failedAttempts: 0,
  isProcessing: false,
  uid: null,
  storedHash: null,
  onUnlock: null,
  onSetupComplete: null
};

/**
 * Show the PIN setup prompt (first time after login)
 */
export function showPinSetupPrompt(uid, onSetupComplete) {
  pinState.mode = 'setup-prompt';
  pinState.uid = uid;
  pinState.onSetupComplete = onSetupComplete;
  renderPinOverlay();
}

/**
 * Show the PIN creation screen
 */
export function showCreatePinScreen(uid, onSetupComplete) {
  pinState.mode = 'create';
  pinState.uid = uid;
  pinState.pin = '';
  pinState.confirmPin = '';
  pinState.step = 'enter';
  pinState.pinLength = 4;
  pinState.onSetupComplete = onSetupComplete;
  renderPinOverlay();
}

/**
 * Show the PIN lock screen
 */
export function showPinLockScreen(uid, storedHash, onUnlock) {
  pinState.mode = 'lock';
  pinState.uid = uid;
  pinState.storedHash = storedHash;
  pinState.pin = '';
  pinState.failedAttempts = 0;
  pinState.isProcessing = false;
  pinState.onUnlock = onUnlock;
  renderPinOverlay();
}

/**
 * Hide the PIN overlay
 */
export function hidePinOverlay() {
  const overlay = document.getElementById('pin-lock-root');
  if (overlay) {
    overlay.classList.remove('show');
    setTimeout(() => { overlay.innerHTML = ''; }, 300);
  }
}

/**
 * Render the PIN overlay based on current state
 */
function renderPinOverlay() {
  const overlay = document.getElementById('pin-lock-root');
  if (!overlay) return;

  let content = '';

  switch (pinState.mode) {
    case 'setup-prompt':
      content = renderSetupPromptHTML();
      break;
    case 'create':
      content = renderCreatePinHTML();
      break;
    case 'lock':
      content = renderLockScreenHTML();
      break;
    case 'forgot':
      content = renderForgotPinHTML();
      break;
  }

  overlay.innerHTML = `<div class="pin-overlay">${content}</div>`;
  overlay.classList.add('show');

  attachPinListeners();
}

/**
 * Setup Prompt HTML — "Secure Your Money"
 */
function renderSetupPromptHTML() {
  return `
    <div class="pin-screen pin-setup-prompt animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">🔐 Secure Your Money</div>
      <p class="pin-subtitle">Protect your financial information with a PIN.</p>
      <p class="pin-description">Add an extra layer of security to keep your money data private.</p>
      <div class="pin-prompt-actions">
        <button class="pin-btn pin-btn-primary" id="pin-setup-set">
          🔒 Set PIN
        </button>
        <button class="pin-btn pin-btn-ghost" id="pin-setup-skip">
          Skip for now
        </button>
      </div>
    </div>
  `;
}

/**
 * Create PIN HTML — 4 or 6 digit selection + keypad
 */
function renderCreatePinHTML() {
  const isConfirm = pinState.step === 'confirm';
  const len = pinState.pinLength;
  const currentPin = isConfirm ? pinState.confirmPin : pinState.pin;

  return `
    <div class="pin-screen pin-create-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">${isConfirm ? 'Confirm Your PIN' : 'Create Your PIN'}</div>
      <p class="pin-subtitle">${isConfirm ? 'Enter your PIN again to confirm.' : 'Choose a secure PIN to protect your data.'}</p>

      ${!isConfirm ? `
        <div class="pin-length-selector">
          <button class="pin-length-btn ${len === 4 ? 'active' : ''}" data-len="4">4 Digits</button>
          <button class="pin-length-btn ${len === 6 ? 'active' : ''}" data-len="6">6 Digits</button>
        </div>
      ` : ''}

      <div class="pin-dots" id="pin-dots">
        ${renderPinDots(currentPin, len)}
      </div>

      <div class="pin-error" id="pin-create-error"></div>

      ${renderKeypad()}

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-create-back">
          ← Back
        </button>
      </div>
    </div>
  `;
}

/**
 * Lock Screen HTML — with numeric keypad
 */
function renderLockScreenHTML() {
  const len = pinState.storedHash ? (pinState.storedHash.length > 0 ? 4 : 4) : 4;
  // We don't know the PIN length from hash, so we'll use dynamic detection
  // Accept 4 or 6 digits based on what the user enters

  return `
    <div class="pin-screen pin-lock-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">Money Control</div>
      <p class="pin-subtitle">Welcome Back 👋</p>
      <p class="pin-description">Enter your PIN to unlock</p>

      <div class="pin-dots" id="pin-dots">
        ${renderPinDots(pinState.pin, 6)}
      </div>

      <div class="pin-error" id="pin-lock-error"></div>

      ${renderKeypad()}

      <button class="pin-btn pin-btn-primary pin-unlock-btn" id="pin-unlock-btn">
        🔓 Unlock
      </button>

      <div class="pin-footer-actions">
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-forgot-btn">
          Forgot PIN?
        </button>
      </div>
    </div>
  `;
}

/**
 * Forgot PIN HTML — requires Firebase password re-auth
 */
function renderForgotPinHTML() {
  return `
    <div class="pin-screen pin-forgot-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">Reset Your PIN</div>
      <p class="pin-subtitle">Verify your account password to reset your PIN.</p>

      <div class="pin-forgot-form">
        <div class="form-group">
          <label class="form-label" for="pin-forgot-password">Account Password</label>
          <input type="password" id="pin-forgot-password" class="form-input pin-forgot-input" placeholder="Enter your password" autocomplete="current-password" />
          <div class="form-error" id="pin-forgot-error"></div>
        </div>

        <button class="pin-btn pin-btn-primary" id="pin-forgot-verify">
          Verify & Reset PIN
        </button>
        <button class="pin-btn pin-btn-ghost pin-btn-sm" id="pin-forgot-back">
          ← Back to PIN Lock
        </button>
      </div>
    </div>
  `;
}

/**
 * Render PIN dot indicators
 */
function renderPinDots(currentValue, maxLength) {
  let dots = '';
  for (let i = 0; i < maxLength; i++) {
    const filled = i < currentValue.length;
    dots += `<span class="pin-dot ${filled ? 'filled' : ''}">●</span>`;
  }
  return dots;
}

/**
 * Render numeric keypad
 */
function renderKeypad() {
  return `
    <div class="pin-keypad">
      <button class="pin-key" data-key="1">1</button>
      <button class="pin-key" data-key="2">2</button>
      <button class="pin-key" data-key="3">3</button>
      <button class="pin-key" data-key="4">4</button>
      <button class="pin-key" data-key="5">5</button>
      <button class="pin-key" data-key="6">6</button>
      <button class="pin-key" data-key="7">7</button>
      <button class="pin-key" data-key="8">8</button>
      <button class="pin-key" data-key="9">9</button>
      <button class="pin-key pin-key-empty"></button>
      <button class="pin-key" data-key="0">0</button>
      <button class="pin-key pin-key-delete" data-key="delete">⌫</button>
    </div>
  `;
}

/**
 * Update dots display without full re-render
 */
function updateDots() {
  const dotsContainer = document.getElementById('pin-dots');
  if (!dotsContainer) return;

  let currentPin = '';
  let maxLen = 4;

  if (pinState.mode === 'create') {
    currentPin = pinState.step === 'confirm' ? pinState.confirmPin : pinState.pin;
    maxLen = pinState.pinLength;
  } else if (pinState.mode === 'lock') {
    currentPin = pinState.pin;
    maxLen = 6; // Show up to 6 dots dynamically
  }

  dotsContainer.innerHTML = renderPinDots(currentPin, maxLen);
}

/**
 * Attach event listeners to PIN UI elements
 */
function attachPinListeners() {
  // Setup prompt buttons
  const setBtn = document.getElementById('pin-setup-set');
  if (setBtn) {
    setBtn.onclick = () => {
      pinState.mode = 'create';
      pinState.pin = '';
      pinState.confirmPin = '';
      pinState.step = 'enter';
      renderPinOverlay();
    };
  }

  const skipBtn = document.getElementById('pin-setup-skip');
  if (skipBtn) {
    skipBtn.onclick = async () => {
      if (pinState.uid) {
        await markPinPromptShown(pinState.uid);
      }
      hidePinOverlay();
      if (pinState.onSetupComplete) pinState.onSetupComplete();
    };
  }

  // PIN length selector
  document.querySelectorAll('.pin-length-btn').forEach(btn => {
    btn.onclick = () => {
      const len = parseInt(btn.dataset.len);
      pinState.pinLength = len;
      pinState.pin = '';
      pinState.confirmPin = '';
      pinState.step = 'enter';
      renderPinOverlay();
    };
  });

  // Keypad buttons
  document.querySelectorAll('.pin-key[data-key]').forEach(btn => {
    btn.onclick = () => {
      if (pinState.isProcessing) return;

      const key = btn.dataset.key;
      btn.classList.add('pressed');
      setTimeout(() => btn.classList.remove('pressed'), 150);

      if (key === 'delete') {
        handleDeleteKey();
      } else {
        handleDigitKey(key);
      }
    };
  });

  // Create PIN back button
  const createBack = document.getElementById('pin-create-back');
  if (createBack) {
    createBack.onclick = () => {
      if (pinState.step === 'confirm') {
        pinState.step = 'enter';
        pinState.confirmPin = '';
        renderPinOverlay();
      } else {
        pinState.mode = 'setup-prompt';
        renderPinOverlay();
      }
    };
  }

  // Unlock button
  const unlockBtn = document.getElementById('pin-unlock-btn');
  if (unlockBtn) {
    unlockBtn.onclick = () => handleUnlock();
  }

  // Forgot PIN button
  const forgotBtn = document.getElementById('pin-forgot-btn');
  if (forgotBtn) {
    forgotBtn.onclick = () => {
      pinState.mode = 'forgot';
      renderPinOverlay();
    };
  }

  // Forgot PIN verify
  const verifyBtn = document.getElementById('pin-forgot-verify');
  if (verifyBtn) {
    verifyBtn.onclick = () => handleForgotPinVerify();
  }

  // Forgot PIN back
  const forgotBack = document.getElementById('pin-forgot-back');
  if (forgotBack) {
    forgotBack.onclick = () => {
      pinState.mode = 'lock';
      pinState.pin = '';
      renderPinOverlay();
    };
  }
}

/**
 * Handle digit key press
 */
function handleDigitKey(digit) {
  if (pinState.mode === 'create') {
    if (pinState.step === 'confirm') {
      if (pinState.confirmPin.length < pinState.pinLength) {
        pinState.confirmPin += digit;
        updateDots();
        if (pinState.confirmPin.length === pinState.pinLength) {
          handleCreatePinSubmit();
        }
      }
    } else {
      if (pinState.pin.length < pinState.pinLength) {
        pinState.pin += digit;
        updateDots();
        if (pinState.pin.length === pinState.pinLength) {
          // Auto-advance to confirm step
          setTimeout(() => {
            pinState.step = 'confirm';
            renderPinOverlay();
          }, 300);
        }
      }
    }
  } else if (pinState.mode === 'lock') {
    if (pinState.pin.length < 6) {
      pinState.pin += digit;
      updateDots();
    }
  }
}

/**
 * Handle delete key press
 */
function handleDeleteKey() {
  if (pinState.mode === 'create') {
    if (pinState.step === 'confirm') {
      pinState.confirmPin = pinState.confirmPin.slice(0, -1);
    } else {
      pinState.pin = pinState.pin.slice(0, -1);
    }
  } else if (pinState.mode === 'lock') {
    pinState.pin = pinState.pin.slice(0, -1);
  }
  updateDots();
}

/**
 * Handle Create PIN submission
 */
async function handleCreatePinSubmit() {
  const errorEl = document.getElementById('pin-create-error');

  if (pinState.pin !== pinState.confirmPin) {
    if (errorEl) errorEl.textContent = 'PINs do not match. Please try again.';
    pinState.confirmPin = '';
    updateDots();

    // Shake animation
    const dotsEl = document.getElementById('pin-dots');
    if (dotsEl) {
      dotsEl.classList.add('shake');
      setTimeout(() => dotsEl.classList.remove('shake'), 500);
    }
    return;
  }

  pinState.isProcessing = true;

  try {
    const pinHashValue = await hashPin(pinState.pin);
    await savePinHash(pinState.uid, pinHashValue);

    toast.success('🔐 PIN created successfully!');
    hidePinOverlay();

    // Clear sensitive data from state
    pinState.pin = '';
    pinState.confirmPin = '';
    pinState.isProcessing = false;

    if (pinState.onSetupComplete) pinState.onSetupComplete();
  } catch (err) {
    if (errorEl) errorEl.textContent = 'Failed to save PIN. Please try again.';
    pinState.isProcessing = false;
  }
}

/**
 * Handle PIN unlock
 */
async function handleUnlock() {
  if (pinState.isProcessing || !pinState.pin) return;

  const errorEl = document.getElementById('pin-lock-error');
  pinState.isProcessing = true;

  // Progressive delay after failed attempts
  if (pinState.failedAttempts >= 3) {
    const delayMs = Math.min(Math.pow(2, pinState.failedAttempts - 2) * 1000, 30000);
    const unlockBtn = document.getElementById('pin-unlock-btn');
    if (unlockBtn) {
      unlockBtn.disabled = true;
      unlockBtn.textContent = `Wait ${Math.ceil(delayMs / 1000)}s...`;
    }
    await new Promise(resolve => setTimeout(resolve, delayMs));
    if (unlockBtn) {
      unlockBtn.disabled = false;
      unlockBtn.textContent = '🔓 Unlock';
    }
  }

  try {
    const isCorrect = await verifyPin(pinState.pin, pinState.storedHash);

    if (isCorrect) {
      toast.success('🔓 Unlocked!');
      hidePinOverlay();
      pinState.pin = '';
      pinState.failedAttempts = 0;
      pinState.isProcessing = false;

      if (pinState.onUnlock) pinState.onUnlock();
    } else {
      pinState.failedAttempts++;
      pinState.pin = '';
      updateDots();

      if (errorEl) errorEl.textContent = 'Incorrect PIN. Try again.';

      // Shake animation
      const dotsEl = document.getElementById('pin-dots');
      if (dotsEl) {
        dotsEl.classList.add('shake');
        setTimeout(() => dotsEl.classList.remove('shake'), 500);
      }

      pinState.isProcessing = false;
    }
  } catch (err) {
    if (errorEl) errorEl.textContent = 'Verification failed. Try again.';
    pinState.pin = '';
    updateDots();
    pinState.isProcessing = false;
  }
}

/**
 * Handle Forgot PIN — verify password and reset
 */
async function handleForgotPinVerify() {
  const passwordInput = document.getElementById('pin-forgot-password');
  const errorEl = document.getElementById('pin-forgot-error');
  if (!passwordInput) return;

  const password = passwordInput.value;
  if (!password) {
    if (errorEl) errorEl.textContent = 'Please enter your password.';
    return;
  }

  const verifyBtn = document.getElementById('pin-forgot-verify');
  if (verifyBtn) {
    verifyBtn.disabled = true;
    verifyBtn.innerHTML = '<span class="spinner"></span> Verifying...';
  }

  try {
    // Re-authenticate using Firebase
    const { EmailAuthProvider, reauthenticateWithCredential } = await import('firebase/auth');
    const { auth } = await import('../config/firebase.js');
    const user = auth.currentUser;

    if (!user || !user.email) {
      if (errorEl) errorEl.textContent = 'No authenticated user found.';
      if (verifyBtn) { verifyBtn.disabled = false; verifyBtn.textContent = 'Verify & Reset PIN'; }
      return;
    }

    const credential = EmailAuthProvider.credential(user.email, password);
    await reauthenticateWithCredential(user, credential);

    // Password verified — remove PIN
    await removePin(pinState.uid);

    toast.success('🔐 PIN removed. You can set a new PIN in Settings.');
    hidePinOverlay();

    if (pinState.onUnlock) pinState.onUnlock();
  } catch (err) {
    if (errorEl) errorEl.textContent = 'Incorrect password. Please try again.';
    if (verifyBtn) {
      verifyBtn.disabled = false;
      verifyBtn.textContent = 'Verify & Reset PIN';
    }
  }
}
