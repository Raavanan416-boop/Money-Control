// ============================================
// 💰 Money Control V3 — Settings Page Component
// ============================================

import { logout, deleteAccount } from '../services/auth.js';
import { updateUserSettings, setInitialBalance } from '../services/firestore.js';
import { exportToCSV, exportMonthlyReport } from '../services/export.js';
import { openModal, closeModal, showConfirm } from '../components/modal.js';
import { formatCurrency } from '../utils/formatters.js';
import { validateAmount } from '../utils/validators.js';
import { toast } from '../utils/toast.js';
import { getPinData, saveAutoLockTimeout, removePin } from '../services/pin.js';
import { showCreatePinScreen } from '../pages/pinlock.js';
import { canInstallPWA, triggerInstallPrompt, isPWAInstalled } from '../services/pwa.js';

let state = {
  user: null,
  profile: null,
  transactions: []
};

/**
 * Render Settings HTML
 */
export function renderSettingsPage(appState) {
  state = { ...state, ...appState };
  const { profile } = state;

  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  const allowNegative = profile?.settings?.allowNegativeBalance || false;
  const initialBalance = profile?.initialBalance || 0;

  // PIN state
  const pinEnabled = profile?.pinEnabled || false;
  const autoLockTimeout = profile?.autoLockTimeout !== undefined ? profile.autoLockTimeout : 5;

  // PWA state
  const canInstall = canInstallPWA();
  const isInstalled = isPWAInstalled();

  return `
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Settings ⚙️</h1>
        <p class="page-subtitle">Manage preferences, security, appearance, and data exports.</p>
      </div>

      <!-- Security Section -->
      <div class="settings-section">
        <div class="settings-section-title">🔐 Security</div>
        <div class="settings-group">
          <div class="settings-item">
            <div class="settings-item-left">
              <div class="settings-item-icon">🔒</div>
              <div>
                <div class="settings-item-text">PIN Lock</div>
                <div class="settings-item-subtitle">${pinEnabled ? 'PIN protection is enabled' : 'Add a PIN to protect your data'}</div>
              </div>
            </div>
            <label class="toggle">
              <input type="checkbox" id="toggle-pin-lock" ${pinEnabled ? 'checked' : ''} />
              <span class="toggle-slider"></span>
            </label>
          </div>

          ${pinEnabled ? `
            <div class="settings-item" id="btn-change-pin">
              <div class="settings-item-left">
                <div class="settings-item-icon">🔑</div>
                <div>
                  <div class="settings-item-text">Change PIN</div>
                  <div class="settings-item-subtitle">Set a new PIN for your account</div>
                </div>
              </div>
              <div class="settings-item-right">❯</div>
            </div>

            <div class="settings-item">
              <div class="settings-item-left">
                <div class="settings-item-icon">⏱️</div>
                <div>
                  <div class="settings-item-text">Auto Lock</div>
                  <div class="settings-item-subtitle">Lock app after inactivity</div>
                </div>
              </div>
              <select id="select-auto-lock" class="form-select" style="max-width: 160px; margin: 0;">
                <option value="0" ${autoLockTimeout === 0 ? 'selected' : ''}>Immediately</option>
                <option value="1" ${autoLockTimeout === 1 ? 'selected' : ''}>After 1 minute</option>
                <option value="5" ${autoLockTimeout === 5 ? 'selected' : ''}>After 5 minutes</option>
                <option value="15" ${autoLockTimeout === 15 ? 'selected' : ''}>After 15 minutes</option>
                <option value="-1" ${autoLockTimeout === -1 ? 'selected' : ''}>Never</option>
              </select>
            </div>

            <div class="settings-item" id="btn-lock-app-now" style="cursor: pointer;">
              <div class="settings-item-left">
                <div class="settings-item-icon">🔒</div>
                <div>
                  <div class="settings-item-text">Lock App Now</div>
                  <div class="settings-item-subtitle">Immediately lock the application</div>
                </div>
              </div>
              <div class="settings-item-right">❯</div>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Appearance Section -->
      <div class="settings-section">
        <div class="settings-section-title">Appearance</div>
        <div class="settings-group">
          <div class="settings-item">
            <div class="settings-item-left">
              <div class="settings-item-icon">🎨</div>
              <div>
                <div class="settings-item-text">Theme Mode</div>
                <div class="settings-item-subtitle">Switch between Light and Dark mode</div>
              </div>
            </div>
            <div style="display: flex; gap: 8px;">
              <button class="chip ${currentTheme === 'light' ? 'active' : ''}" id="btn-theme-light">☀️ Light</button>
              <button class="chip ${currentTheme === 'dark' ? 'active' : ''}" id="btn-theme-dark">🌙 Dark</button>
            </div>
          </div>
        </div>
      </div>

      <!-- App Section -->
      ${canInstall || isInstalled ? `
        <div class="settings-section">
          <div class="settings-section-title">📱 App</div>
          <div class="settings-group">
            ${canInstall ? `
              <div class="settings-item" id="btn-install-pwa" style="cursor: pointer;">
                <div class="settings-item-left">
                  <div class="settings-item-icon">📲</div>
                  <div>
                    <div class="settings-item-text">Install Money Control</div>
                    <div class="settings-item-subtitle">Add to your home screen for quick access</div>
                  </div>
                </div>
                <div class="settings-item-right">Install</div>
              </div>
            ` : ''}
            ${isInstalled ? `
              <div class="settings-item">
                <div class="settings-item-left">
                  <div class="settings-item-icon">✅</div>
                  <div>
                    <div class="settings-item-text">App Installed</div>
                    <div class="settings-item-subtitle">Money Control is installed on this device</div>
                  </div>
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      ` : ''}

      <!-- Financial Controls Section -->
      <div class="settings-section">
        <div class="settings-section-title">Financial Controls</div>
        <div class="settings-group">
          <div class="settings-item" id="btn-edit-initial-balance">
            <div class="settings-item-left">
              <div class="settings-item-icon">💵</div>
              <div>
                <div class="settings-item-text">Initial Balance</div>
                <div class="settings-item-subtitle">Current: ${formatCurrency(initialBalance)}</div>
              </div>
            </div>
            <div class="settings-item-right">
              <span>Edit</span> ❯
            </div>
          </div>

          <div class="settings-item">
            <div class="settings-item-left">
              <div class="settings-item-icon">⚠️</div>
              <div>
                <div class="settings-item-text">Allow Negative Balance</div>
                <div class="settings-item-subtitle">Allow spending beyond available balance</div>
              </div>
            </div>
            <label class="toggle">
              <input type="checkbox" id="toggle-negative-balance" ${allowNegative ? 'checked' : ''} />
              <span class="toggle-slider"></span>
            </label>
          </div>

          <div class="settings-item">
            <div class="settings-item-left">
              <div class="settings-item-icon">💱</div>
              <div>
                <div class="settings-item-text">Currency Format</div>
                <div class="settings-item-subtitle">Indian Rupee (₹ INR)</div>
              </div>
            </div>
            <div class="settings-item-right" style="font-weight: 600; color: var(--text-primary);">
              ₹ INR
            </div>
          </div>
        </div>
      </div>

      <!-- Data Export Section -->
      <div class="settings-section">
        <div class="settings-section-title">Data & Export</div>
        <div class="settings-group">
          <div class="settings-item" id="btn-export-csv">
            <div class="settings-item-left">
              <div class="settings-item-icon">📊</div>
              <div>
                <div class="settings-item-text">Export Transactions (CSV)</div>
                <div class="settings-item-subtitle">Download all transactions as a CSV spreadsheet</div>
              </div>
            </div>
            <div class="settings-item-right">📥</div>
          </div>

          <div class="settings-item" id="btn-export-report">
            <div class="settings-item-left">
              <div class="settings-item-icon">📑</div>
              <div>
                <div class="settings-item-text">Print Monthly Report</div>
                <div class="settings-item-subtitle">Generate printable HTML report for the current month</div>
              </div>
            </div>
            <div class="settings-item-right">🖨️</div>
          </div>
        </div>
      </div>

      <!-- Account Management Section -->
      <div class="settings-section">
        <div class="settings-section-title">Account</div>
        <div class="settings-group">
          <div class="settings-item danger" id="btn-settings-delete-account">
            <div class="settings-item-left">
              <div class="settings-item-icon">🗑️</div>
              <div>
                <div class="settings-item-text">Delete Account</div>
                <div class="settings-item-subtitle">Permanently erase your account and all transaction data</div>
              </div>
            </div>
            <div class="settings-item-right">❯</div>
          </div>

          <div class="settings-item danger" id="btn-settings-logout">
            <div class="settings-item-left">
              <div class="settings-item-icon">🚪</div>
              <div>
                <div class="settings-item-text">Log Out</div>
                <div class="settings-item-subtitle">Sign out of Money Control</div>
              </div>
            </div>
            <div class="settings-item-right">❯</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Attach Settings Listeners
 */
export function attachSettingsListeners(onLogout, refreshData) {
  // ===== PIN Lock Toggle =====
  const pinToggle = document.getElementById('toggle-pin-lock');
  if (pinToggle) {
    pinToggle.onchange = async (e) => {
      const enable = e.target.checked;
      if (enable) {
        // Show Create PIN screen
        showCreatePinScreen(state.user.uid, () => {
          if (refreshData) refreshData();
        });
        // Revert toggle until PIN is actually set
        e.target.checked = false;
      } else {
        // Disable PIN — confirm first
        const confirmed = await showConfirm({
          icon: '🔓',
          title: 'Disable PIN Lock',
          message: 'Are you sure you want to remove PIN protection? Your financial data will no longer be locked.',
          confirmText: 'Remove PIN',
          danger: true
        });
        if (confirmed) {
          try {
            await removePin(state.user.uid);
            toast.success('🔓 PIN lock disabled.');
            if (refreshData) refreshData();
          } catch (err) {
            toast.error('Unable to disable PIN.');
            e.target.checked = true;
          }
        } else {
          e.target.checked = true;
        }
      }
    };
  }

  // ===== Change PIN =====
  const changePinBtn = document.getElementById('btn-change-pin');
  if (changePinBtn) {
    changePinBtn.onclick = () => {
      showCreatePinScreen(state.user.uid, () => {
        toast.success('🔐 PIN updated!');
        if (refreshData) refreshData();
      });
    };
  }

  // ===== Auto Lock Selection =====
  const autoLockSelect = document.getElementById('select-auto-lock');
  if (autoLockSelect) {
    autoLockSelect.onchange = async (e) => {
      const minutes = parseInt(e.target.value);
      try {
        await saveAutoLockTimeout(state.user.uid, minutes);
        toast.success('⏱️ Auto-lock updated.');
        if (refreshData) refreshData();
      } catch (err) {
        toast.error('Unable to update auto-lock setting.');
      }
    };
  }

  // ===== Lock App Now =====
  const lockNowBtn = document.getElementById('btn-lock-app-now');
  if (lockNowBtn) {
    lockNowBtn.onclick = () => {
      window.dispatchEvent(new CustomEvent('lock-app'));
    };
  }

  // ===== Install PWA =====
  const installBtn = document.getElementById('btn-install-pwa');
  if (installBtn) {
    installBtn.onclick = async () => {
      const installed = await triggerInstallPrompt();
      if (installed) {
        toast.success('📲 Money Control installed!');
        if (refreshData) refreshData();
      }
    };
  }

  // Light Theme
  const lightBtn = document.getElementById('btn-theme-light');
  if (lightBtn) {
    lightBtn.onclick = () => {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      refreshSettingsPage();
    };
  }

  // Dark Theme
  const darkBtn = document.getElementById('btn-theme-dark');
  if (darkBtn) {
    darkBtn.onclick = () => {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      refreshSettingsPage();
    };
  }

  // Toggle Negative Balance
  const toggleNegative = document.getElementById('toggle-negative-balance');
  if (toggleNegative) {
    toggleNegative.onchange = async (e) => {
      const allow = e.target.checked;
      try {
        await updateUserSettings(state.user.uid, { allowNegativeBalance: allow });
        toast.success(`Negative balance ${allow ? 'enabled' : 'disabled'}.`);
        if (refreshData) refreshData();
      } catch (err) {
        toast.error('Unable to update setting.');
        e.target.checked = !allow;
      }
    };
  }

  // Edit Initial Balance
  const editInitialBtn = document.getElementById('btn-edit-initial-balance');
  if (editInitialBtn) {
    editInitialBtn.onclick = () => {
      const currentInitial = state.profile?.initialBalance || 0;
      const content = `
        <form id="edit-initial-form" novalidate>
          <div class="alert-banner alert-banner-warning" style="margin-bottom: 16px;">
            <span class="alert-banner-icon">⚠️</span>
            <div class="alert-banner-text">
              Changing your initial balance will automatically recalculate your total available money.
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="new-initial-input">Initial Balance (₹)</label>
            <div class="form-input-group">
              <span class="input-prefix">₹</span>
              <input type="number" id="new-initial-input" class="form-input" value="${currentInitial}" step="any" min="0" required autofocus />
            </div>
            <div class="form-error" id="new-initial-error"></div>
          </div>

          <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-initial">Save Initial Balance</button>
        </form>
      `;

      openModal({
        title: '💵 Edit Initial Balance',
        content,
        onOpen: (modal) => {
          modal.querySelector('#edit-initial-form').onsubmit = async (e) => {
            e.preventDefault();
            const val = modal.querySelector('#new-initial-input').value;
            const err = validateAmount(val);
            if (err) {
              modal.querySelector('#new-initial-error').textContent = err;
              return;
            }

            const submitBtn = modal.querySelector('#btn-save-initial');
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span class="spinner"></span> Saving...`;

            try {
              await setInitialBalance(state.user.uid, Number(val));
              closeModal();
              toast.success('Initial balance updated!');
              if (refreshData) refreshData();
            } catch (error) {
              toast.error('Unable to update initial balance.');
              submitBtn.disabled = false;
              submitBtn.innerHTML = 'Save Initial Balance';
            }
          };
        }
      });
    };
  }

  // Export CSV
  const exportCsvBtn = document.getElementById('btn-export-csv');
  if (exportCsvBtn) {
    exportCsvBtn.onclick = () => {
      try {
        exportToCSV(state.transactions, state.accounts);
        toast.success('📊 Transactions exported to CSV!');
      } catch (err) {
        toast.error(err.message || 'Unable to export transactions.');
      }
    };
  }

  // Export Monthly Report
  const exportReportBtn = document.getElementById('btn-export-report');
  if (exportReportBtn) {
    exportReportBtn.onclick = () => {
      try {
        const now = new Date();
        exportMonthlyReport(
          state.transactions,
          state.accounts,
          now.getMonth(),
          now.getFullYear()
        );
        toast.success('📑 Printable report opened!');
      } catch (err) {
        toast.error('Unable to generate report.');
      }
    };
  }

  // Logout
  const logoutBtn = document.getElementById('btn-settings-logout');
  if (logoutBtn) {
    logoutBtn.onclick = async () => {
      const confirmed = await showConfirm({
        icon: '🚪',
        title: 'Log Out',
        message: 'Are you sure you want to log out?',
        confirmText: 'Log Out',
        danger: true
      });
      if (confirmed) {
        await logout();
        toast.info('Logged out.');
        if (onLogout) onLogout();
      }
    };
  }

  // Delete Account
  const deleteAccBtn = document.getElementById('btn-settings-delete-account');
  if (deleteAccBtn) {
    deleteAccBtn.onclick = () => {
      const content = `
        <form id="delete-acc-form" novalidate>
          <div class="alert-banner alert-banner-danger" style="margin-bottom: 16px;">
            <span class="alert-banner-icon">🚨</span>
            <div class="alert-banner-text">
              This action is permanent! All your data, transactions, and settings will be permanently erased.
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="del-pass-input">Confirm Password</label>
            <input type="password" id="del-pass-input" class="form-input" placeholder="Enter password to confirm" required autofocus />
            <div class="form-error" id="del-pass-error"></div>
          </div>

          <button type="submit" class="btn btn-danger btn-block btn-lg" id="btn-confirm-delete-acc">
            Delete My Account Permanently
          </button>
        </form>
      `;

      openModal({
        title: '🚨 Delete Account',
        content,
        onOpen: (modal) => {
          modal.querySelector('#delete-acc-form').onsubmit = async (e) => {
            e.preventDefault();
            const pass = modal.querySelector('#del-pass-input').value;
            modal.querySelector('#del-pass-error').textContent = '';

            if (!pass) {
              modal.querySelector('#del-pass-error').textContent = 'Please enter your password.';
              return;
            }

            const submitBtn = modal.querySelector('#btn-confirm-delete-acc');
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span class="spinner"></span> Deleting...`;

            try {
              await deleteAccount(pass);
              closeModal();
              toast.info('Account deleted.');
              if (onLogout) onLogout();
            } catch (err) {
              modal.querySelector('#del-pass-error').textContent = 'Incorrect password or re-authentication failed.';
              submitBtn.disabled = false;
              submitBtn.innerHTML = 'Delete My Account Permanently';
            }
          };
        }
      });
    };
  }
}

function refreshSettingsPage() {
  const page = document.querySelector('.page');
  if (page) {
    page.outerHTML = renderSettingsPage(state);
    attachSettingsListeners();
  }
}
