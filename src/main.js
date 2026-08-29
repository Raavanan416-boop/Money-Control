// ============================================
// 💰 Money Control V3 — Application Entry Point & Router
// ============================================

import { onAuthChange, getCurrentUser } from './services/auth.js';
import {
  getUserProfile,
  subscribeToAccounts,
  subscribeToTransactions,
  ensureDefaultAccounts
} from './services/firestore.js';
import { getUserBudgets } from './services/budget.js';
import { initPWA } from './services/pwa.js';
import { getPinData } from './services/pin.js';
import {
  showPinSetupPrompt,
  showPinLockScreen,
  showCreatePinScreen,
  hidePinOverlay
} from './pages/pinlock.js';

// Pages
import { renderAuthPage, attachAuthListeners } from './pages/auth.js';
import { renderOnboardingPage, attachOnboardingListeners } from './pages/onboarding.js';
import { renderDashboardPage, attachDashboardListeners, openAddTransactionModal, openTransferModal } from './pages/dashboard.js';
import { renderAccountsPage, attachAccountsListeners } from './pages/accounts.js';
import { renderTransactionsPage, attachTransactionsListeners } from './pages/transactions.js';
import { renderMoneyControlPage, attachMoneyControlListeners } from './pages/money-control.js';
import { renderAnalyticsPage, attachAnalyticsListeners } from './pages/analytics.js';
import { renderBudgetPage, attachBudgetListeners } from './pages/budget.js';
import { renderProfilePage, attachProfileListeners } from './pages/profile.js';
import { renderSettingsPage, attachSettingsListeners } from './pages/settings.js';

// Components & Skeletons
import { renderSidebar, renderBottomNav, attachNavListeners } from './components/navbar.js';
import { renderDashboardSkeleton } from './components/skeleton.js';
import { openModal } from './components/modal.js';

// App State
const appState = {
  user: null,
  profile: null,
  accounts: [],
  transactions: [],
  budgets: [],
  activePage: 'dashboard',
  unsubscribeAccounts: null,
  unsubscribeTx: null,
  // V3 PIN lock state
  isLocked: false,
  pinEnabled: false,
  pinHash: null,
  autoLockTimeout: 5, // minutes
  lastActivityTime: Date.now()
};

// Auto-lock timer
let autoLockTimer = null;

// Initialize Theme
function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

initTheme();

// Initialize PWA
initPWA();

const appEl = document.getElementById('app');

/**
 * Main Initialization Routine
 */
function init() {
  onAuthChange(async (user) => {
    if (appState.unsubscribeAccounts) {
      appState.unsubscribeAccounts();
      appState.unsubscribeAccounts = null;
    }
    if (appState.unsubscribeTx) {
      appState.unsubscribeTx();
      appState.unsubscribeTx = null;
    }

    if (!user) {
      appState.user = null;
      appState.profile = null;
      appState.accounts = [];
      appState.transactions = [];
      appState.budgets = [];
      appState.isLocked = false;
      appState.pinEnabled = false;
      appState.pinHash = null;
      hidePinOverlay();
      stopAutoLockTimer();
      renderAuthView();
      return;
    }

    appState.user = user;
    renderLoadingView();

    try {
      await loadUserData(user.uid);
    } catch (err) {
      renderAuthView();
    }
  });

  window.addEventListener('hashchange', handleRoute);

  window.addEventListener('open-add-menu', () => {
    openAddMenuModal();
  });

  // Lock app event (from settings/profile)
  window.addEventListener('lock-app', () => {
    lockApp();
  });

  // Track user activity for auto-lock
  setupActivityTracking();
}

/**
 * Load user data, accounts, budgets, & real-time subscriptions
 */
async function loadUserData(uid) {
  const profile = await getUserProfile(uid);
  appState.profile = profile;

  // Check if onboarding is needed
  if (!profile || profile.initialBalance === null || profile.initialBalance === undefined) {
    renderOnboardingView();
    return;
  }

  // Ensure default Cash account exists
  await ensureDefaultAccounts(uid, profile.initialBalance);

  // Load Budgets
  appState.budgets = await getUserBudgets(uid);

  // Load PIN data
  const pinData = await getPinData(uid);
  appState.pinEnabled = pinData.pinEnabled;
  appState.pinHash = pinData.pinHash;
  appState.autoLockTimeout = pinData.autoLockTimeout !== undefined ? pinData.autoLockTimeout : 5;

  // Subscribe to Accounts in real-time
  appState.unsubscribeAccounts = subscribeToAccounts(uid, (accounts) => {
    appState.accounts = accounts;
    if (!appState.isLocked) {
      renderAppLayout();
    }
  });

  // Subscribe to Transactions in real-time
  appState.unsubscribeTx = subscribeToTransactions(uid, (transactions) => {
    appState.transactions = transactions;
    if (!appState.isLocked) {
      renderAppLayout();
    }
  });

  // Handle PIN lock flow
  if (appState.pinEnabled && appState.pinHash) {
    // User has PIN enabled — show lock screen
    appState.isLocked = true;
    showPinLockScreen(uid, appState.pinHash, () => {
      appState.isLocked = false;
      appState.lastActivityTime = Date.now();
      startAutoLockTimer();
      renderAppLayout();
    });
  } else if (!pinData.pinSetupPromptShown) {
    // First time — show PIN setup prompt
    showPinSetupPrompt(uid, () => {
      // Re-fetch PIN data after setup
      getPinData(uid).then(newPinData => {
        appState.pinEnabled = newPinData.pinEnabled;
        appState.pinHash = newPinData.pinHash;
        if (appState.pinEnabled) {
          startAutoLockTimer();
        }
      });
    });
  } else {
    // No PIN — start normally
    startAutoLockTimer();
  }
}

function renderAuthView() {
  appEl.innerHTML = renderAuthPage();
  attachAuthListeners(() => {});
}

function renderOnboardingView() {
  appEl.innerHTML = renderOnboardingPage();
  attachOnboardingListeners(appState.user.uid, async () => {
    await loadUserData(appState.user.uid);
  });
}

function renderLoadingView() {
  appEl.innerHTML = `
    <div class="app-layout">
      ${renderSidebar(appState.activePage)}
      <main class="main-content">
        ${renderDashboardSkeleton()}
      </main>
      ${renderBottomNav(appState.activePage)}
    </div>
  `;
}

function renderAppLayout() {
  if (appState.isLocked) return;

  const hash = window.location.hash.replace('#/', '').replace('#', '');
  if (hash && ['dashboard', 'accounts', 'transactions', 'money-control', 'analytics', 'budget', 'profile', 'settings'].includes(hash)) {
    appState.activePage = hash;
  } else {
    appState.activePage = 'dashboard';
  }

  const pageHTML = renderCurrentPage(appState.activePage);

  appEl.innerHTML = `
    <div class="app-layout">
      ${renderSidebar(appState.activePage)}
      <main class="main-content" id="main-content-area">
        ${pageHTML}
      </main>
      ${renderBottomNav(appState.activePage)}
    </div>
  `;

  attachNavListeners(navigateTo);
  attachCurrentPageListeners(appState.activePage);
}

function renderCurrentPage(page) {
  switch (page) {
    case 'dashboard':
      return renderDashboardPage(appState);
    case 'accounts':
      return renderAccountsPage(appState);
    case 'transactions':
      return renderTransactionsPage(appState);
    case 'money-control':
      return renderMoneyControlPage(appState);
    case 'analytics':
      return renderAnalyticsPage(appState);
    case 'budget':
      return renderBudgetPage(appState);
    case 'profile':
      return renderProfilePage(appState);
    case 'settings':
      return renderSettingsPage(appState);
    default:
      return renderDashboardPage(appState);
  }
}

function attachCurrentPageListeners(page) {
  const refreshFn = async () => {
    if (appState.user) {
      appState.profile = await getUserProfile(appState.user.uid);
      appState.budgets = await getUserBudgets(appState.user.uid);

      // Re-fetch PIN data
      const pinData = await getPinData(appState.user.uid);
      appState.pinEnabled = pinData.pinEnabled;
      appState.pinHash = pinData.pinHash;
      appState.autoLockTimeout = pinData.autoLockTimeout !== undefined ? pinData.autoLockTimeout : 5;

      renderAppLayout();
    }
  };

  switch (page) {
    case 'dashboard':
      attachDashboardListeners(navigateTo, refreshFn);
      break;
    case 'accounts':
      attachAccountsListeners(refreshFn);
      break;
    case 'transactions':
      attachTransactionsListeners(refreshFn);
      break;
    case 'money-control':
      attachMoneyControlListeners(refreshFn);
      break;
    case 'analytics':
      attachAnalyticsListeners();
      break;
    case 'budget':
      attachBudgetListeners(refreshFn);
      break;
    case 'profile':
      attachProfileListeners(() => renderAuthView(), refreshFn);
      break;
    case 'settings':
      attachSettingsListeners(() => renderAuthView(), refreshFn);
      break;
    default:
      attachDashboardListeners(navigateTo, refreshFn);
      break;
  }
}

function navigateTo(page) {
  appState.activePage = page;
  window.location.hash = `#/${page}`;
}

function handleRoute() {
  if (appState.user && appState.profile?.initialBalance !== null && !appState.isLocked) {
    renderAppLayout();
  }
}

/**
 * Lock the app — show PIN lock screen
 */
function lockApp() {
  if (!appState.pinEnabled || !appState.pinHash || !appState.user) return;

  appState.isLocked = true;
  showPinLockScreen(appState.user.uid, appState.pinHash, () => {
    appState.isLocked = false;
    appState.lastActivityTime = Date.now();
    startAutoLockTimer();
    renderAppLayout();
  });
}

/**
 * Auto-lock timer management
 */
function startAutoLockTimer() {
  stopAutoLockTimer();

  if (!appState.pinEnabled || !appState.pinHash) return;
  if (appState.autoLockTimeout < 0) return; // "Never" = -1

  const timeoutMs = appState.autoLockTimeout === 0
    ? 0 // Immediately (lock on visibility change only)
    : appState.autoLockTimeout * 60 * 1000;

  if (timeoutMs > 0) {
    autoLockTimer = setInterval(() => {
      const elapsed = Date.now() - appState.lastActivityTime;
      if (elapsed >= timeoutMs && !appState.isLocked) {
        lockApp();
      }
    }, 10000); // Check every 10 seconds
  }
}

function stopAutoLockTimer() {
  if (autoLockTimer) {
    clearInterval(autoLockTimer);
    autoLockTimer = null;
  }
}

/**
 * Track user activity for auto-lock
 */
function setupActivityTracking() {
  const resetActivity = () => {
    appState.lastActivityTime = Date.now();
  };

  // Track clicks, keys, touches, scrolls
  ['click', 'keydown', 'touchstart', 'scroll'].forEach(event => {
    document.addEventListener(event, resetActivity, { passive: true });
  });

  // Visibility change — lock if "immediately" or check elapsed time
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      // User left the app — record time
      return;
    }

    // User returned
    if (!appState.pinEnabled || !appState.pinHash || appState.isLocked) return;

    const elapsed = Date.now() - appState.lastActivityTime;

    if (appState.autoLockTimeout === 0) {
      // "Immediately" — lock on any return
      lockApp();
    } else if (appState.autoLockTimeout > 0) {
      const timeoutMs = appState.autoLockTimeout * 60 * 1000;
      if (elapsed >= timeoutMs) {
        lockApp();
      }
    }
  });
}

/**
 * Mobile FAB Add Menu Modal (3 Actions: Income, Expense, Transfer)
 */
function openAddMenuModal() {
  const content = `
    <div style="display: flex; flex-direction: column; gap: 12px; padding: 12px 0;">
      <button class="quick-action-btn income" id="fab-modal-add-income">
        <span>➕</span> Add Money (Income)
      </button>
      <button class="quick-action-btn expense" id="fab-modal-add-expense">
        <span>−</span> Add Expense
      </button>
      <button class="quick-action-btn" id="fab-modal-transfer" style="background: var(--primary-bg); color: var(--primary); border: 1.5px solid var(--primary-light);">
        <span>↔</span> Transfer Money
      </button>
    </div>
  `;

  openModal({
    title: '⚡ Quick Action',
    content,
    onOpen: (modal) => {
      const incomeBtn = modal.querySelector('#fab-modal-add-income');
      const expenseBtn = modal.querySelector('#fab-modal-add-expense');
      const transferBtn = modal.querySelector('#fab-modal-transfer');

      const refreshFn = async () => {
        if (appState.user) {
          appState.profile = await getUserProfile(appState.user.uid);
          appState.budgets = await getUserBudgets(appState.user.uid);
          renderAppLayout();
        }
      };

      if (incomeBtn) incomeBtn.onclick = () => openAddTransactionModal('INCOME', refreshFn);
      if (expenseBtn) expenseBtn.onclick = () => openAddTransactionModal('EXPENSE', refreshFn);
      if (transferBtn) transferBtn.onclick = () => openTransferModal(refreshFn);
    }
  });
}

// Start application
init();
