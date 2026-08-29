// ============================================
// 💰 Money Control V3 — PIN Lock Screen
// ============================================

import {
  hashPin,
  savePinHash,
  verifyPin,
  removePin,
  markPinPromptShown,
  PIN_LENGTH
} from '../services/pin.js';
import { toast } from '../utils/toast.js';

let pinState = {
  mode: 'lock', // 'lock' | 'setup-prompt' | 'create' | 'change' | 'forgot'
  pin: '',
  confirmPin: '',
  currentPinInput: '',
  step: 'enter', // 'enter' | 'confirm' | 'current'
  pinLength: PIN_LENGTH,
  failedAttempts: 0,
  isProcessing: false,
  uid: null,
  storedHash: null,
  onUnlock: null,
  onSetupComplete: null
};

let keydownListenerAttached = false;

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
  pinState.currentPinInput = '';
  pinState.step = 'enter';
  pinState.pinLength = PIN_LENGTH;
  pinState.onSetupComplete = onSetupComplete;
  renderPinOverlay();
}

/**
 * Show the PIN change screen (current PIN -> new PIN -> confirm new PIN)
 */
export function showChangePinScreen(uid, storedHash, onSetupComplete) {
  pinState.mode = 'change';
  pinState.uid = uid;
  pinState.storedHash = storedHash;
  pinState.currentPinInput = '';
  pinState.pin = '';
  pinState.confirmPin = '';
  pinState.step = storedHash ? 'current' : 'enter';
  pinState.pinLength = PIN_LENGTH;
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
    setTimeout(() => {
      overlay.innerHTML = '';
    }, 300);
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
    case 'change':
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
  setupGlobalKeyboardHandler();
}

/**
 * Global Keyboard Input Handler
 */
function setupGlobalKeyboardHandler() {
  if (keydownListenerAttached) return;
  keydownListenerAttached = true;

  window.addEventListener('keydown', (e) => {
    const overlay = document.getElementById('pin-lock-root');
    if (!overlay || !overlay.classList.contains('show')) return;

    // Do not capture keys if user is typing in text inputs (e.g. forgot password screen)
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key >= '0' && e.key <= '9') {
      if (pinState.isProcessing) return;
      handleDigitKey(e.key);
    } else if (e.key === 'Backspace') {
      if (pinState.isProcessing) return;
      handleDeleteKey();
    } else if (e.key === 'Enter') {
      if (pinState.isProcessing) return;
      if (pinState.mode === 'lock') {
        handleUnlock();
      }
    }
  });
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
      <p class="pin-subtitle">Protect your financial information with a 4-digit PIN.</p>
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
 * Create / Change PIN HTML
 */
function renderCreatePinHTML() {
  let title = 'Create Your PIN';
  let subtitle = 'Choose a 4-digit PIN to protect your data.';
  let currentPin = pinState.pin;

  if (pinState.mode === 'change') {
    if (pinState.step === 'current') {
      title = 'Current PIN';
      subtitle = 'Enter your current 4-digit PIN.';
      currentPin = pinState.currentPinInput;
    } else if (pinState.step === 'enter') {
      title = 'New PIN';
      subtitle = 'Enter your new 4-digit PIN.';
      currentPin = pinState.pin;
    } else if (pinState.step === 'confirm') {
      title = 'Confirm New PIN';
      subtitle = 'Confirm your new 4-digit PIN.';
      currentPin = pinState.confirmPin;
    }
  } else {
    if (pinState.step === 'confirm') {
      title = 'Confirm Your PIN';
      subtitle = 'Enter your 4-digit PIN again to confirm.';
      currentPin = pinState.confirmPin;
    } else {
      title = 'Enter Your PIN';
      subtitle = 'Enter a 4-digit PIN to protect your data.';
      currentPin = pinState.pin;
    }
  }

  return `
    <div class="pin-screen pin-create-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">${title}</div>
      <p class="pin-subtitle">${subtitle}</p>

      <div class="pin-dots" id="pin-dots">
        ${renderPinDots(currentPin, PIN_LENGTH)}
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
  return `
    <div class="pin-screen pin-lock-screen animate-fade-in">
      <div class="pin-logo">
        <img src="/icon-192.png" alt="Money Control" class="pin-logo-img" />
      </div>
      <div class="pin-title">Money Control</div>
      <p class="pin-subtitle">Welcome Back 👋</p>
      <p class="pin-description">Enter your PIN</p>

      <div class="pin-dots" id="pin-dots">
        ${renderPinDots(pinState.pin, PIN_LENGTH)}
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
function renderPinDots(currentValue, maxLength = PIN_LENGTH) {
  let dots = '';
  for (let i = 0; i < maxLength; i++) {
    const filled = i < currentValue.length;
    dots += `<span class="pin-dot ${filled ? 'filled' : ''}">${filled ? '●' : '○'}</span>`;
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

  if (pinState.mode === 'create') {
    currentPin = pinState.step === 'confirm' ? pinState.confirmPin : pinState.pin;
  } else if (pinState.mode === 'change') {
    if (pinState.step === 'current') {
      currentPin = pinState.currentPinInput;
    } else if (pinState.step === 'confirm') {
      currentPin = pinState.confirmPin;
    } else {
      currentPin = pinState.pin;
    }
  } else if (pinState.mode === 'lock') {
    currentPin = pinState.pin;
  }

  dotsContainer.innerHTML = renderPinDots(currentPin, PIN_LENGTH);
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

  // Create/Change PIN back button
  const createBack = document.getElementById('pin-create-back');
  if (createBack) {
    createBack.onclick = () => {
      if (pinState.mode === 'change') {
        if (pinState.step === 'confirm') {
          pinState.step = 'enter';
          pinState.confirmPin = '';
          renderPinOverlay();
        } else if (pinState.step === 'enter' && pinState.storedHash) {
          pinState.step = 'current';
          pinState.pin = '';
          renderPinOverlay();
        } else {
          hidePinOverlay();
        }
      } else if (pinState.step === 'confirm') {
        pinState.step = 'enter';
        pinState.confirmPin = '';
        renderPinOverlay();
      } else {
        hidePinOverlay();
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
  const errorEl = document.getElementById('pin-create-error');
  if (errorEl) errorEl.textContent = '';

  if (pinState.mode === 'create') {
    if (pinState.step === 'confirm') {
      if (pinState.confirmPin.length < PIN_LENGTH) {
        pinState.confirmPin += digit;
        updateDots();
        if (pinState.confirmPin.length === PIN_LENGTH) {
          handleCreatePinSubmit();
        }
      }
    } else {
      if (pinState.pin.length < PIN_LENGTH) {
        pinState.pin += digit;
        updateDots();
        if (pinState.pin.length === PIN_LENGTH) {
          setTimeout(() => {
            pinState.step = 'confirm';
            renderPinOverlay();
          }, 200);
        }
      }
    }
  } else if (pinState.mode === 'change') {
    if (pinState.step === 'current') {
      if (pinState.currentPinInput.length < PIN_LENGTH) {
        pinState.currentPinInput += digit;
        updateDots();
        if (pinState.currentPinInput.length === PIN_LENGTH) {
          handleChangeCurrentPinSubmit();
        }
      }
    } else if (pinState.step === 'confirm') {
      if (pinState.confirmPin.length < PIN_LENGTH) {
        pinState.confirmPin += digit;
        updateDots();
        if (pinState.confirmPin.length === PIN_LENGTH) {
          handleCreatePinSubmit();
        }
      }
    } else {
      if (pinState.pin.length < PIN_LENGTH) {
        pinState.pin += digit;
        updateDots();
        if (pinState.pin.length === PIN_LENGTH) {
          setTimeout(() => {
            pinState.step = 'confirm';
            renderPinOverlay();
          }, 200);
        }
      }
    }
  } else if (pinState.mode === 'lock') {
    if (pinState.pin.length < PIN_LENGTH) {
      pinState.pin += digit;
      updateDots();
    }
    // Any digit beyond PIN_LENGTH is strictly ignored
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
  } else if (pinState.mode === 'change') {
    if (pinState.step === 'current') {
      pinState.currentPinInput = pinState.currentPinInput.slice(0, -1);
    } else if (pinState.step === 'confirm') {
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
 * Handle verifying current PIN during PIN change
 */
async function handleChangeCurrentPinSubmit() {
  const errorEl = document.getElementById('pin-create-error');

  if (pinState.currentPinInput.length !== PIN_LENGTH) {
    if (errorEl) errorEl.textContent = 'Enter your 4-digit PIN.';
    return;
  }

  pinState.isProcessing = true;

  try {
    const isCorrect = await verifyPin(pinState.currentPinInput, pinState.storedHash);

    if (isCorrect) {
      pinState.isProcessing = false;
      pinState.step = 'enter';
      pinState.pin = '';
      pinState.confirmPin = '';
      renderPinOverlay();
    } else {
      pinState.isProcessing = false;
      if (errorEl) errorEl.textContent = 'Incorrect PIN. Try again.';
      pinState.currentPinInput = '';
      updateDots();

      const dotsEl = document.getElementById('pin-dots');
      if (dotsEl) {
        dotsEl.classList.add('shake');
        setTimeout(() => dotsEl.classList.remove('shake'), 500);
      }
    }
  } catch (err) {
    pinState.isProcessing = false;
    if (errorEl) errorEl.textContent = 'Verification failed. Try again.';
  }
}

/**
 * Handle Create / New PIN submission
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

    toast.success(pinState.mode === 'change' ? '🔐 PIN updated successfully!' : '🔐 PIN created successfully!');
    hidePinOverlay();

    // Clear sensitive data from state
    pinState.pin = '';
    pinState.confirmPin = '';
    pinState.currentPinInput = '';
    pinState.isProcessing = false;

    if (pinState.onSetupComplete) pinState.onSetupComplete();
  } catch (err) {
    if (errorEl) errorEl.textContent = 'Failed to save PIN. Please try again.';
    pinState.isProcessing = false;
  }
}

/**
 * Handle PIN unlock with strict length validation
 */
async function handleUnlock() {
  if (pinState.isProcessing) return;

  const errorEl = document.getElementById('pin-lock-error');

  // 1. MUST NOT unlock unless enteredPIN.length === PIN_LENGTH (4 digits)
  if (pinState.pin.length !== PIN_LENGTH) {
    if (errorEl) errorEl.textContent = 'Enter your 4-digit PIN.';

    // Shake animation
    const dotsEl = document.getElementById('pin-dots');
    if (dotsEl) {
      dotsEl.classList.add('shake');
      setTimeout(() => dotsEl.classList.remove('shake'), 500);
    }
    return;
  }

  // 2. Progressive delay after failed attempts
  pinState.isProcessing = true;
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
      toast.success('Unlocked successfully.');
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
      if (verifyBtn) {
        verifyBtn.disabled = false;
        verifyBtn.textContent = 'Verify & Reset PIN';
      }
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
