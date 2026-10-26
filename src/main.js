// ============================================
// 💰 Money Control V3 — Application Entry Point & Router
// ============================================

import { onAuthChange, getCurrentUser, getCachedUser } from './services/auth.js';
import {
  getUserProfile,
  createUserProfile,
  subscribeToAccounts,
  subscribeToTransactions,
  ensureDefaultAccounts,
  getAccounts
} from './services/firestore.js';
import { getUserBudgets } from './services/budget.js';
import { initPWA } from './services/pwa.js';
import { initSyncEngine } from './services/sync-engine.js';
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
import { renderFriendsMoneyPage, attachFriendsMoneyListeners, resetFriendsMoneyState, openAddFriendMoneyModal } from './pages/friends-money.js';
import { renderProfilePage, attachProfileListeners } from './pages/profile.js';
import { renderSettingsPage, attachSettingsListeners } from './pages/settings.js';
import { renderTotalMoneyHistoryPage, attachTotalMoneyHistoryListeners } from './pages/total-money-history.js';

// Components & Skeletons
import { renderSidebar, renderMobileHeader, renderMobileDrawer, renderBottomNav, attachNavListeners } from './components/navbar.js';
import { renderDashboardSkeleton } from './components/skeleton.js';
import { openModal, closeModal } from './components/modal.js';
import { subscribeFriendMoney } from './services/friends-money.js';

// App State
const appState = {
  user: null,
  profile: null,
  accounts: [],
  transactions: [],
  budgets: [],
  friendMoneyRecords: [],
  activePage: 'dashboard',
  selectedAccountId: null,
  unsubscribeAccounts: null,
  unsubscribeTx: null,
  unsubscribeFriendMoney: null,
  authLoading: true,
  dashboardError: null,
  // V3 PIN lock state
  isLocked: false,
  pinEnabled: false,
  pinHash: null,
  autoLockTimeout: 5, // minutes
  lastActivityTime: Date.now(),
  // V3 Biometric state
  biometricEnabled: false,
  biometricCredentialId: null,
  // V3 Privacy
  hideBalance: false
};

window.appState = appState;


// Auto-lock timer
let autoLockTimer = null;

// Initialize Theme
function initTheme() {
  try {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

initTheme();

// Initialize PWA
try {
  initPWA();
} catch (e) {
  console.warn('PWA initialization warning:', e);
}

// Initialize Sync Engine (runs in background, responds to online/offline events)
try {
  initSyncEngine();
} catch (e) {
  console.warn('Sync engine initialization warning:', e);
}

const appEl = document.getElementById('app');

/**
 * Render Auth Session Initialization View ("Restoring session...")
 */
function renderAuthInitView() {
  appEl.innerHTML = `
    <div class="auth-page" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: var(--bg-primary);">
      <div class="auth-container" style="text-align: center; max-width: 360px; padding: 24px;">
        <div class="auth-logo" style="margin-bottom: 24px;">
          <img src="/icon-192.png" alt="Money Control" class="auth-logo-icon" style="width: 80px; height: 80px; border-radius: 20px; box-shadow: 0 8px 32px rgba(108, 99, 255, 0.35); margin: 0 auto 16px auto; display: block;" />
          <h1 class="auth-logo-title" style="font-size: 1.75rem; font-weight: 800; margin-bottom: 8px;">Money Control</h1>
          <p class="auth-logo-tagline" style="font-size: 0.9375rem; color: var(--text-secondary);">Restoring session...</p>
        </div>
        <div style="display: flex; justify-content: center; align-items: center; min-height: 48px;">
          <span class="spinner" style="width: 32px; height: 32px; border-width: 3px;"></span>
        </div>
      </div>
    </div>
  `;
}

/**
 * Main Initialization Routine
 */
function init() {
  // Show branded loading screen immediately while session is restored
  renderAuthInitView();

  let sessionInitialized = false;
  const cachedUser = getCachedUser();

  async function handleUserSession(user) {
    if (!user) {
      // If we are offline and have a cached user, do NOT sign out!
      if (typeof navigator !== 'undefined' && !navigator.onLine && cachedUser) {
        console.log('[Auth] App offline — maintaining cached user session:', cachedUser.uid);
        return;
      }

      appState.authLoading = false;
      if (appState.unsubscribeAccounts) {
        appState.unsubscribeAccounts();
        appState.unsubscribeAccounts = null;
      }
      if (appState.unsubscribeTx) {
        appState.unsubscribeTx();
        appState.unsubscribeTx = null;
      }
      if (appState.unsubscribeFriendMoney) {
        appState.unsubscribeFriendMoney();
        appState.unsubscribeFriendMoney = null;
      }

      appState.user = null;
      appState.profile = null;
      appState.accounts = [];
      appState.transactions = [];
      appState.budgets = [];
      appState.friendMoneyRecords = [];
      appState.isLocked = false;
      appState.pinEnabled = false;
      appState.pinHash = null;
      appState.dashboardError = null;
      hidePinOverlay();
      stopAutoLockTimer();
      renderAuthView();
      return;
    }

    // Guard: If already initialized with this exact user UID, just update user reference without reloading whole UI
    if (sessionInitialized && appState.user?.uid === user.uid) {
      appState.user = user;
      return;
    }

    sessionInitialized = true;
    appState.authLoading = false;

    if (appState.unsubscribeAccounts) {
      appState.unsubscribeAccounts();
      appState.unsubscribeAccounts = null;
    }
    if (appState.unsubscribeTx) {
      appState.unsubscribeTx();
      appState.unsubscribeTx = null;
    }
    if (appState.unsubscribeFriendMoney) {
      appState.unsubscribeFriendMoney();
      appState.unsubscribeFriendMoney = null;
    }

    appState.user = user;
    renderLoadingView();

    try {
      await loadUserData(user.uid);
    } catch (err) {
      console.error('Error loading user data:', err);
      appState.dashboardError = err;
      renderAppLayout();
    }
  }

  // Fast offline recovery: If offline and cached user exists, activate immediately!
  const isCurrentlyOffline = typeof navigator !== 'undefined' && !navigator.onLine;
  if (isCurrentlyOffline && cachedUser) {
    console.log('[Auth] Restoring session from offline cache immediately:', cachedUser.uid);
    handleUserSession(cachedUser);
  } else {
    // Online safety fallback timeout: if Firebase onAuthStateChanged takes longer than 1200ms
    const authTimeout = setTimeout(() => {
      if (sessionInitialized) return;
      console.warn('[Auth] Auth state restoration timed out — checking cached session');
      const fallbackUser = getCurrentUser() || cachedUser;
      if (fallbackUser) {
        handleUserSession(fallbackUser);
      } else if (!sessionInitialized) {
        handleUserSession(null);
      }
    }, 1200);

    onAuthChange(async (user) => {
      clearTimeout(authTimeout);
      await handleUserSession(user);
    });
  }

  // Ensure onAuthChange is also attached when offline so reconnection updates state
  if (isCurrentlyOffline && cachedUser) {
    onAuthChange(async (user) => {
      if (user) {
        await handleUserSession(user);
      }
    });
  }

  window.addEventListener('hashchange', handleRoute);

  window.addEventListener('open-add-menu', () => {
    openAddMenuModal();
  });

  // Lock app event (from settings/profile)
  window.addEventListener('lock-app', () => {
    lockApp();
  });

  // Re-render after successful background sync (sync engine fires this)
  window.addEventListener('local-data-refreshed', async () => {
    if (!appState.user || appState.isLocked) return;
    try {
      // Reload transactions and accounts from IndexedDB/Firestore to get synced data
      appState.budgets = await getUserBudgets(appState.user.uid).catch(() => appState.budgets);
      renderAppLayout();
    } catch (e) {
      // Non-fatal — layout will refresh on next subscription update
    }
  });

  // Track user activity for auto-lock
  setupActivityTracking();
}

/**
 * Load user data, accounts, budgets, & real-time subscriptions
 */
async function loadUserData(uid) {
  appState.dashboardError = null;

  try {
    const profileTimeout = new Promise((resolve) => setTimeout(() => resolve(null), 1500));
    let profile = await Promise.race([getUserProfile(uid), profileTimeout]);

    // Check existing accounts locally
    const existingAccounts = await getAccounts(uid).catch(() => []);

    // Safely auto-create user profile if missing or timed out
    if (!profile) {
      const fallbackName = appState.user?.displayName || appState.user?.email?.split('@')[0] || 'User';
      try {
        await createUserProfile(uid, {
          name: fallbackName,
          email: appState.user?.email || '',
          createdAt: new Date().toISOString()
        });
        profile = await getUserProfile(uid);
      } catch (e) {
        console.warn('Profile creation fallback:', e);
        profile = { name: fallbackName, email: appState.user?.email || '', initialBalance: 0 };
      }
    }

    // If profile has no initialBalance, but user already has accounts, they completed onboarding!
    if (profile && (profile.initialBalance === null || profile.initialBalance === undefined)) {
      if (existingAccounts && existingAccounts.length > 0) {
        profile.initialBalance = 0;
      }
    }

    appState.profile = profile;

    // Check if onboarding is needed (only if user has NO accounts and NO initial balance)
    if ((!profile || profile.initialBalance === null || profile.initialBalance === undefined) && (!existingAccounts || existingAccounts.length === 0)) {
      renderOnboardingView();
      return;
    }

    // Ensure default Cash account exists
    try {
      await ensureDefaultAccounts(uid, profile.initialBalance || 0);
    } catch (e) {
      console.warn('ensureDefaultAccounts warning:', e);
    }

    // Load Budgets
    try {
      appState.budgets = await getUserBudgets(uid);
    } catch (e) {
      appState.budgets = [];
    }

    // Load PIN data
    let pinData;
    try {
      pinData = await getPinData(uid);
    } catch (e) {
      console.warn('getPinData warning in loadUserData:', e);
      pinData = { pinHash: null, pinEnabled: false, pinSetupPromptShown: true, autoLockTimeout: 5 };
    }

    appState.pinEnabled = pinData.pinEnabled;
    appState.pinHash = pinData.pinHash;
    appState.autoLockTimeout = pinData.autoLockTimeout !== undefined ? pinData.autoLockTimeout : 5;
    appState.biometricEnabled = pinData.biometricEnabled || false;
    appState.biometricCredentialId = pinData.biometricCredentialId || null;
    appState.hideBalance = pinData.hideBalance || false;

    // Subscribe to Accounts in real-time
    appState.unsubscribeAccounts = subscribeToAccounts(uid, (accounts, error) => {
      if (error) {
        console.error('Accounts subscription error:', error);
        appState.dashboardError = error;
      } else {
        appState.accounts = accounts;
      }
      if (!appState.isLocked) {
        renderAppLayout();
      }
    });

    // Subscribe to Transactions in real-time
    appState.unsubscribeTx = subscribeToTransactions(uid, (transactions, error) => {
      if (error) {
        console.error('Transactions subscription error:', error);
      } else {
        appState.transactions = transactions;
      }
      if (!appState.isLocked) {
        renderAppLayout();
      }
    });

    // Subscribe to Friend Money records in real-time
    appState.unsubscribeFriendMoney = subscribeFriendMoney(uid, (records, error) => {
      if (error) {
        console.error('Friend money subscription error:', error);
      } else {
        appState.friendMoneyRecords = records;
      }
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
      }, appState.biometricEnabled, appState.biometricCredentialId);
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
          renderAppLayout();
        });
      });
    } else {
      // No PIN — start normally and render layout immediately
      appState.isLocked = false;
      startAutoLockTimer();
      renderAppLayout();
    }
  } catch (err) {
    console.error('loadUserData error:', err);
    appState.dashboardError = err;
    renderAppLayout();
  }
}

function renderAuthView() {
  appEl.innerHTML = renderAuthPage();
  attachAuthListeners();
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
      ${renderMobileHeader()}
      ${renderSidebar(appState.activePage)}
      <main class="main-content">
        ${renderDashboardSkeleton()}
      </main>
      ${renderBottomNav(appState.activePage)}
      ${renderMobileDrawer(appState.activePage, appState.user, appState.profile)}
    </div>
  `;
}

function renderAppLayout() {
  if (appState.isLocked) return;

  const hash = window.location.hash.replace('#/', '').replace('#', '');
  if (hash && ['dashboard', 'accounts', 'transactions', 'money-control', 'analytics', 'budget', 'friends-money', 'profile', 'settings', 'total-money-history'].includes(hash)) {
    appState.activePage = hash;
  } else {
    appState.activePage = 'dashboard';
  }

  const pageHTML = renderCurrentPage(appState.activePage);

  appEl.innerHTML = `
    <div class="app-layout">
      ${renderMobileHeader()}
      ${renderSidebar(appState.activePage)}
      <main class="main-content" id="main-content-area">
        ${pageHTML}
      </main>
      ${renderBottomNav(appState.activePage)}
      ${renderMobileDrawer(appState.activePage, appState.user, appState.profile)}
    </div>
  `;

  attachNavListeners(navigateTo, appState);
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
    case 'friends-money':
      return renderFriendsMoneyPage(appState);
    case 'profile':
      return renderProfilePage(appState);
    case 'settings':
      return renderSettingsPage(appState);
    case 'total-money-history':
      return renderTotalMoneyHistoryPage(appState);
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
      appState.biometricEnabled = pinData.biometricEnabled || false;
      appState.biometricCredentialId = pinData.biometricCredentialId || null;
      appState.hideBalance = pinData.hideBalance || false;

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
    case 'friends-money':
      attachFriendsMoneyListeners(refreshFn);
      break;
    case 'profile':
      attachProfileListeners(() => renderAuthView(), refreshFn);
      break;
    case 'settings':
      attachSettingsListeners(() => renderAuthView(), refreshFn);
      break;
    case 'total-money-history':
      attachTotalMoneyHistoryListeners(navigateTo);
      break;
    default:
      attachDashboardListeners(navigateTo, refreshFn);
      break;
  }
}

function navigateTo(page) {
  if (page !== 'accounts') {
    appState.selectedAccountId = null;
  }
  if (page !== 'friends-money') {
    resetFriendsMoneyState();
  }
  appState.activePage = page;
  if (window.location.hash === `#/${page}`) {
    renderAppLayout();
  } else {
    window.location.hash = `#/${page}`;
  }
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
  }, appState.biometricEnabled, appState.biometricCredentialId);
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
 * Mobile FAB Add Menu Modal (4 Actions: Income, Expense, Transfer, Friends Money)
 */
function openAddMenuModal() {
  const content = `
    <div style="display: flex; flex-direction: column; gap: 12px; padding: 12px 0;">
      <button class="quick-action-btn income" id="fab-modal-add-income">
        <span>➕</span> Add Money (Income)
      </button>
      <button class="quick-action-btn expense" id="fab-modal-add-expense">
        <span>➖</span> Add Expense
      </button>
      <button class="quick-action-btn transfer" id="fab-modal-transfer" style="background: var(--primary-bg); color: var(--primary); border: 1.5px solid var(--primary-light);">
        <span>↔</span> Transfer Money
      </button>
      <button class="quick-action-btn friends" id="fab-modal-friends-money" style="background: rgba(139, 92, 246, 0.12); color: #8B5CF6; border: 1.5px solid rgba(139, 92, 246, 0.25);">
        <span>🤝</span> Friends Money
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
      const friendsBtn = modal.querySelector('#fab-modal-friends-money');

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
      if (friendsBtn) {
        friendsBtn.onclick = () => {
          closeModal();
          navigateTo('friends-money');
          setTimeout(() => {
            openAddFriendMoneyModal(refreshFn, appState);
          }, 60);
        };
      }
    }
  });
}

// Start application
init();
