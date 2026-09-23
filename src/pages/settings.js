// ============================================
// 💰 Money Control V3 — Settings Page Component
// ============================================

import { logout, deleteAccount } from '../services/auth.js';
import { updateUserSettings, setInitialBalance } from '../services/firestore.js';
import { exportToCSV, exportToExcel, exportToPDF, exportMonthlyReport } from '../services/export.js';
import { createBackup, parseBackupFile, validateBackup, restoreBackup } from '../services/backup.js';
import { openModal, closeModal, showConfirm } from '../components/modal.js';
import { formatCurrency } from '../utils/formatters.js';
import { validateAmount } from '../utils/validators.js';
import { toast } from '../utils/toast.js';
import {
  getPinData,
  saveAutoLockTimeout,
  removePin,
  isBiometricSupported,
  registerBiometric,
  disableBiometric,
  saveHideBalance
} from '../services/pin.js';
import { showCreatePinScreen, showChangePinScreen } from '../pages/pinlock.js';
import { canInstallPWA, triggerInstallPrompt, isPWAInstalled } from '../services/pwa.js';

let state = {
  user: null,
  profile: null,
  transactions: [],
  accounts: [],
  friendMoneyRecords: []
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
  const biometricEnabled = appState?.biometricEnabled || false;
  const hideBalance = appState?.hideBalance || false;

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
            <div class="settings-item" id="btn-change-pin" style="cursor:pointer;">
              <div class="settings-item-left">
                <div class="settings-item-icon">🔑</div>
                <div>
                  <div class="settings-item-text">Change PIN</div>
                  <div class="settings-item-subtitle">Set a new PIN for your account</div>
                </div>
              </div>
              <div class="settings-item-right">❯</div>
            </div>

            <div class="settings-item" id="settings-biometric-row">
              <div class="settings-item-left">
                <div class="settings-item-icon">🪪</div>
                <div>
                  <div class="settings-item-text">Fingerprint / Biometric</div>
                  <div class="settings-item-subtitle" id="biometric-subtitle">${biometricEnabled ? 'Biometric unlock is enabled' : 'Use fingerprint or face unlock'}</div>
                </div>
              </div>
              <label class="toggle" id="biometric-toggle-wrapper">
                <input type="checkbox" id="toggle-biometric" ${biometricEnabled ? 'checked' : ''} />
                <span class="toggle-slider"></span>
              </label>
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

          <!-- Hide Balance — always visible (no PIN required) -->
          <div class="settings-item">
            <div class="settings-item-left">
              <div class="settings-item-icon">👁️</div>
              <div>
                <div class="settings-item-text">Hide Balance</div>
                <div class="settings-item-subtitle">Show ₹•••••• instead of actual balance</div>
              </div>
            </div>
            <label class="toggle">
              <input type="checkbox" id="toggle-hide-balance" ${hideBalance ? 'checked' : ''} />
              <span class="toggle-slider"></span>
            </label>
          </div>
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

      <!-- Export & Backup Section -->
      <div class="settings-section">
        <div class="settings-section-title">📤 Export & Backup</div>
        <div class="settings-group">

          <div class="settings-item" id="btn-export-csv" style="cursor:pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">📄</div>
              <div>
                <div class="settings-item-text">Export as CSV</div>
                <div class="settings-item-subtitle">Download all transactions as a CSV spreadsheet</div>
              </div>
            </div>
            <div class="settings-item-right">📥</div>
          </div>

          <div class="settings-item" id="btn-export-excel" style="cursor:pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">📊</div>
              <div>
                <div class="settings-item-text">Export as Excel</div>
                <div class="settings-item-subtitle">Download .xlsx with Transactions, Accounts, Friends Money & Summary sheets</div>
              </div>
            </div>
            <div class="settings-item-right">📥</div>
          </div>

          <div class="settings-item" id="btn-export-pdf" style="cursor:pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">📑</div>
              <div>
                <div class="settings-item-text">Export as PDF</div>
                <div class="settings-item-subtitle">Download professional monthly report as PDF</div>
              </div>
            </div>
            <div class="settings-item-right">📥</div>
          </div>

          <div class="settings-item" id="btn-export-report" style="cursor:pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">🖨️</div>
              <div>
                <div class="settings-item-text">Print Monthly Report</div>
                <div class="settings-item-subtitle">Generate printable HTML report for the current month</div>
              </div>
            </div>
            <div class="settings-item-right">🖨️</div>
          </div>

          <div class="settings-divider" style="height:1px;background:var(--border-color);margin:4px 0;"></div>

          <div class="settings-item" id="btn-create-backup" style="cursor:pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">💾</div>
              <div>
                <div class="settings-item-text">Create Backup</div>
                <div class="settings-item-subtitle">Download a backup file of all your financial data</div>
              </div>
            </div>
            <div class="settings-item-right">📤</div>
          </div>

          <div class="settings-item" id="btn-restore-backup" style="cursor:pointer;">
            <div class="settings-item-left">
              <div class="settings-item-icon">📥</div>
              <div>
                <div class="settings-item-text">Restore Backup</div>
                <div class="settings-item-subtitle">Restore data from a backup file</div>
              </div>
            </div>
            <div class="settings-item-right">⚠️ ❯</div>
          </div>

          <!-- Hidden file input for backup restore -->
          <input type="file" id="restore-backup-file-input" accept=".json" style="display:none;" />
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
        showCreatePinScreen(state.user.uid, () => {
          if (refreshData) refreshData();
        });
        e.target.checked = false;
      } else {
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
    changePinBtn.onclick = async () => {
      const pinData = await getPinData(state.user.uid);
      showChangePinScreen(state.user.uid, pinData.pinHash, () => {
        if (refreshData) refreshData();
      });
    };
  }

  // ===== Biometric Toggle =====
  const biometricToggle = document.getElementById('toggle-biometric');
  const biometricSubtitle = document.getElementById('biometric-subtitle');
  const biometricWrapper = document.getElementById('biometric-toggle-wrapper');

  if (biometricToggle) {
    // Proactively check device support and update subtitle if unavailable
    isBiometricSupported().then(supported => {
      if (!supported) {
        biometricToggle.disabled = true;
        if (biometricSubtitle) biometricSubtitle.textContent = 'Biometric authentication is not available on this device.';
        if (biometricWrapper) biometricWrapper.style.opacity = '0.5';
      }
    }).catch(() => {});

    biometricToggle.onchange = async (e) => {
      const enable = e.target.checked;

      if (enable) {
        // Check support first
        const supported = await isBiometricSupported();
        if (!supported) {
          toast.error('Biometric authentication is not available on this device.');
          e.target.checked = false;
          const subtitle = document.getElementById('biometric-subtitle');
          if (subtitle) subtitle.textContent = 'Biometric authentication is not available on this device.';
          return;
        }

        try {
          const userName = state.profile?.name || state.user?.email || 'User';
          await registerBiometric(state.user.uid, userName);
          toast.success('🪪 Biometric unlock enabled!');
          if (refreshData) refreshData();
        } catch (err) {
          console.error('Biometric registration error:', err);
          let msg = 'Failed to enable biometric authentication.';
          if (err.name === 'NotAllowedError') msg = 'Biometric permission denied. Please allow access in your device settings.';
          else if (err.name === 'SecurityError') msg = 'Biometric requires HTTPS or localhost.';
          toast.error(msg);
          e.target.checked = false;
        }
      } else {
        const confirmed = await showConfirm({
          icon: '🪪',
          title: 'Disable Biometric',
          message: 'Disable fingerprint/biometric unlock? You can re-enable it anytime. PIN will remain your unlock method.',
          confirmText: 'Disable Biometric',
          danger: false
        });
        if (confirmed) {
          try {
            await disableBiometric(state.user.uid);
            toast.success('Biometric unlock disabled.');
            if (refreshData) refreshData();
          } catch (err) {
            toast.error('Unable to disable biometric.');
            e.target.checked = true;
          }
        } else {
          e.target.checked = true;
        }
      }
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

  // ===== Hide Balance Toggle =====
  const hideBalanceToggle = document.getElementById('toggle-hide-balance');
  if (hideBalanceToggle) {
    hideBalanceToggle.onchange = async (e) => {
      const hide = e.target.checked;
      try {
        await saveHideBalance(state.user.uid, hide);
        // Update appState immediately
        if (window.appState) window.appState.hideBalance = hide;
        toast.success(hide ? '👁️ Balances hidden.' : '👁️ Balances visible.');
        if (refreshData) refreshData();
      } catch (err) {
        toast.error('Unable to update hide balance setting.');
        e.target.checked = !hide;
      }
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

  // ===== Export CSV =====
  const exportCsvBtn = document.getElementById('btn-export-csv');
  if (exportCsvBtn) {
    exportCsvBtn.onclick = () => {
      try {
        exportToCSV(state.transactions, state.accounts);
        toast.success('📄 Transactions exported to CSV!');
      } catch (err) {
        toast.error(err.message || 'Unable to export transactions.');
      }
    };
  }

  // ===== Export Excel =====
  const exportExcelBtn = document.getElementById('btn-export-excel');
  if (exportExcelBtn) {
    exportExcelBtn.onclick = async () => {
      if (!state.transactions || state.transactions.length === 0) {
        toast.error('No transactions to export.');
        return;
      }
      try {
        exportExcelBtn.style.opacity = '0.6';
        exportExcelBtn.style.pointerEvents = 'none';
        await exportToExcel(state.transactions, state.accounts, state.friendMoneyRecords);
        toast.success('📊 Exported to Excel successfully!');
      } catch (err) {
        console.error('Excel export error:', err);
        toast.error('Unable to export to Excel.');
      } finally {
        exportExcelBtn.style.opacity = '';
        exportExcelBtn.style.pointerEvents = '';
      }
    };
  }

  // ===== Export PDF =====
  const exportPdfBtn = document.getElementById('btn-export-pdf');
  if (exportPdfBtn) {
    exportPdfBtn.onclick = async () => {
      try {
        exportPdfBtn.style.opacity = '0.6';
        exportPdfBtn.style.pointerEvents = 'none';
        const now = new Date();
        await exportToPDF(
          state.transactions,
          state.accounts,
          state.friendMoneyRecords,
          now.getMonth(),
          now.getFullYear()
        );
        toast.success('📑 PDF report downloaded!');
      } catch (err) {
        console.error('PDF export error:', err);
        toast.error('Unable to generate PDF report.');
      } finally {
        exportPdfBtn.style.opacity = '';
        exportPdfBtn.style.pointerEvents = '';
      }
    };
  }

  // ===== Print Monthly Report (HTML) =====
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

  // ===== Create Backup =====
  const createBackupBtn = document.getElementById('btn-create-backup');
  if (createBackupBtn) {
    createBackupBtn.onclick = async () => {
      try {
        createBackupBtn.style.opacity = '0.6';
        createBackupBtn.style.pointerEvents = 'none';
        const result = createBackup(
          state.user.uid,
          state.accounts,
          state.transactions,
          state.friendMoneyRecords,
          state.profile
        );
        toast.success(`💾 Backup created! (${result.recordCounts.transactions} transactions, ${result.recordCounts.accounts} accounts)`);
      } catch (err) {
        console.error('Backup error:', err);
        toast.error(err.message || 'Unable to create backup.');
      } finally {
        createBackupBtn.style.opacity = '';
        createBackupBtn.style.pointerEvents = '';
      }
    };
  }

  // ===== Restore Backup =====
  const restoreBackupBtn = document.getElementById('btn-restore-backup');
  const fileInput = document.getElementById('restore-backup-file-input');

  if (restoreBackupBtn && fileInput) {
    restoreBackupBtn.onclick = () => {
      fileInput.value = '';
      fileInput.click();
    };

    fileInput.onchange = async (e) => {
      const file = e.target.files[0];
      if (!file) return;

      let backupData;
      try {
        backupData = await parseBackupFile(file);
      } catch (err) {
        toast.error(err.message || 'Could not read backup file.');
        return;
      }

      const validation = validateBackup(backupData);
      if (!validation.valid) {
        toast.error(validation.error || 'Invalid backup file.');
        return;
      }

      // Show confirmation modal with backup info
      const content = `
        <div class="alert-banner alert-banner-danger" style="margin-bottom: 16px;">
          <span class="alert-banner-icon">⚠️</span>
          <div class="alert-banner-text">
            <strong>This will REPLACE all your current data</strong> with the backup contents. This cannot be undone.
          </div>
        </div>

        <div style="background: var(--bg-tertiary); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
          <div style="font-size: 0.8125rem; color: var(--text-secondary); margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;">Backup Details</div>
          <div style="display: grid; gap: 8px;">
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">Exported on</span>
              <span style="font-weight: 600;">${validation.exportedAt || 'Unknown'}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">Accounts</span>
              <span style="font-weight: 600;">${validation.recordCounts.accounts}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">Transactions</span>
              <span style="font-weight: 600;">${validation.recordCounts.transactions}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">Friend Money Records</span>
              <span style="font-weight: 600;">${validation.recordCounts.friendMoney}</span>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          <button class="btn btn-danger btn-block" id="btn-confirm-restore">⚠️ Restore Backup Now</button>
          <button class="btn btn-secondary btn-block" id="btn-cancel-restore">Cancel</button>
        </div>
      `;

      openModal({
        title: '📥 Restore Backup',
        content,
        onOpen: (modal) => {
          modal.querySelector('#btn-cancel-restore').onclick = () => closeModal();

          modal.querySelector('#btn-confirm-restore').onclick = async () => {
            const confirmBtn = modal.querySelector('#btn-confirm-restore');
            confirmBtn.disabled = true;
            confirmBtn.innerHTML = '<span class="spinner"></span> Restoring...';

            try {
              await restoreBackup(state.user.uid, backupData, (msg) => {
                confirmBtn.innerHTML = `<span class="spinner"></span> ${msg}`;
              });
              closeModal();
              toast.success('✅ Backup restored successfully! Reloading data...');
              if (refreshData) setTimeout(() => refreshData(), 500);
            } catch (err) {
              console.error('Restore error:', err);
              toast.error(err.message || 'Restore failed. Please try again.');
              confirmBtn.disabled = false;
              confirmBtn.innerHTML = '⚠️ Restore Backup Now';
            }
          };
        }
      });
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
