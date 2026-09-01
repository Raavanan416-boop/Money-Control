// ============================================
// 💰 Money Control V3 — Dashboard Page Component
// ============================================

import {
  formatCurrency,
  getGreeting,
  formatCurrentDate,
  getTodayDate,
  getLocalDateDisplay,
  formatDate,
  EXPENSE_CATEGORIES,
  INCOME_CATEGORIES
} from '../utils/formatters.js';
import {
  calculateTotals,
  calculateAccountBalances,
  calculateDailyTotals,
  generateInsights
} from '../utils/calculations.js';
import { renderTransactionList } from '../components/transaction-card.js';
import { renderEmptyTransactions } from '../components/empty-state.js';
import { openModal, closeModal, showConfirm } from '../components/modal.js';
import { addTransaction, updateTransaction, deleteTransaction } from '../services/firestore.js';
import { generateBudgetAlerts } from '../services/budget.js';
import { validateTransaction, validateAmount, validateRequired, validateTodayDate } from '../utils/validators.js';
import { toast } from '../utils/toast.js';
import { isOnline } from '../services/pwa.js';

let dashboardState = {
  user: null,
  profile: null,
  accounts: [],
  transactions: [],
  budgets: []
};

/**
 * Render Dashboard HTML
 */
export function renderDashboardPage(state) {
  dashboardState = { ...dashboardState, ...state };
  const { profile, accounts, transactions } = dashboardState;

  if (dashboardState.dashboardError) {
    return `
      <div class="page animate-fade-in" style="display: flex; align-items: center; justify-content: center; min-height: 60vh;">
        <div class="card card-flat" style="padding: 40px 24px; text-align: center; max-width: 440px; width: 100%;">
          <div style="font-size: 3.5rem; margin-bottom: 16px;">⚠️</div>
          <h2 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 8px; color: var(--text-primary);">Unable to load your data</h2>
          <p style="color: var(--text-secondary); font-size: 0.9375rem; margin-bottom: 24px; line-height: 1.5;">
            Something went wrong while loading your financial information.
          </p>
          <button class="btn btn-primary btn-lg" id="btn-retry-dashboard" style="margin: 0 auto; display: inline-flex; align-items: center; gap: 8px;">
            🔄 Try Again
          </button>
        </div>
      </div>
    `;
  }

  const userName = profile?.name ? profile.name.split(' ')[0] : 'User';
  const { balances, totalMoney } = calculateTotals(accounts, transactions);

  // Today's activity & Recent activity (Last 24 hours only)
  const today = getTodayDate();
  const todayTotals = calculateDailyTotals(transactions, today);
  const now = Date.now();
  const TWENTY_FOUR_HOURS_MS = 24 * 60 * 60 * 1000;

  const recentTx = transactions.filter(tx => {
    let txTime = 0;
    if (tx.createdAt) {
      txTime = new Date(tx.createdAt).getTime();
    } else if (tx.date) {
      txTime = new Date(tx.date + 'T23:59:59').getTime();
    }
    const age = now - txTime;
    return age >= 0 && age <= TWENTY_FOUR_HOURS_MS;
  }).slice(0, 5);

  const currentMonth = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`;
  const budgetAlerts = generateBudgetAlerts(dashboardState.budgets, transactions, currentMonth);

  return `
    <div class="page animate-fade-in dashboard-page">
      <!-- 1. Greeting + current date -->
      <div class="greeting">
        <h1 class="greeting-text">Good ${getGreeting().replace('Good ', '')}, ${userName} 👋</h1>
        <p class="greeting-date">${formatCurrentDate()}</p>
      </div>

      <!-- Budget Alert Banner if any -->
      ${budgetAlerts.length > 0 ? `
        <div style="margin-bottom: var(--space-4);">
          ${budgetAlerts.map(alert => `
            <div class="alert-banner alert-banner-${alert.type}">
              <span class="alert-banner-icon">${alert.icon}</span>
              <div class="alert-banner-text">
                <strong>${alert.title}:</strong> ${alert.message}
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}

      <!-- 2. Total Money card -->
      <div class="balance-card balance-card-interactive" id="dashboard-total-money-card" tabindex="0" role="button" aria-label="View Total Money History">
        <div class="balance-label">💰 TOTAL MONEY</div>
        <div class="balance-amount">${formatCurrency(totalMoney)}</div>
        <div class="balance-subtitle">Across ${accounts.length} account${accounts.length === 1 ? '' : 's'}</div>
      </div>


      <!-- 3. Accounts section -->
      <div class="section accounts-section">
        <div class="section-header">
          <h2 class="section-title-sm">ACCOUNTS</h2>
          <span class="section-link" id="link-manage-accounts">View All →</span>
        </div>
        <div class="account-rows-container card card-flat">
          ${accounts.length > 0 ? accounts.map(acc => {
            const bal = balances[acc.id] || 0;
            return `
              <div class="account-compact-row" data-account-id="${acc.id}" style="cursor: pointer;">
                <div class="account-row-left">
                  <span class="account-row-icon">${acc.icon || '🏦'}</span>
                  <span class="account-row-name">${acc.name}</span>
                </div>
                <div class="account-row-balance">${formatCurrency(bal)}</div>
              </div>
            `;
          }).join('') : `
            <div class="account-compact-empty">
              <span style="font-size: 0.875rem; color: var(--text-secondary);">No accounts yet</span>
              <button class="btn btn-sm btn-primary" id="empty-add-account-btn">➕ Add Account</button>
            </div>
          `}
        </div>
      </div>

      <!-- 4. TODAY section -->
      <div class="section today-section">
        <div class="section-header">
          <h2 class="section-title-sm">TODAY</h2>
        </div>
        <div class="today-compact-grid">
          <div class="today-card income">
            <div class="today-card-header">
              <span class="today-card-icon">🟢</span>
              <span class="today-card-label">Added</span>
            </div>
            <div class="today-card-amount income">${formatCurrency(todayTotals.added)}</div>
          </div>
          <div class="today-card expense">
            <div class="today-card-header">
              <span class="today-card-icon">🔴</span>
              <span class="today-card-label">Spent</span>
            </div>
            <div class="today-card-amount expense">${formatCurrency(todayTotals.spent)}</div>
          </div>
        </div>
      </div>

      <!-- 5. Quick actions -->
      <div class="section quick-actions-section">
        <div class="quick-actions-row">
          <button class="quick-action-btn income" id="btn-quick-add-money">
            <span>+ Add Money</span>
          </button>
          <button class="quick-action-btn expense" id="btn-quick-add-expense">
            <span>− Expense</span>
          </button>
        </div>
        <button class="quick-action-btn transfer full-width" id="btn-quick-transfer">
          <span>↕ Transfer</span>
        </button>
      </div>

      <!-- 6. Recent Activity -->
      <div class="section recent-transactions">
        <div class="section-header">
          <h2 class="section-title-sm">RECENT ACTIVITY</h2>
          ${transactions.length > 0 ? `
            <span class="section-link" id="link-view-all-tx">View All →</span>
          ` : ''}
        </div>

        <div class="card card-flat recent-tx-card">
          ${recentTx.length > 0
            ? renderTransactionList(recentTx, { showActions: false, showDate: true, accounts: dashboardState.accounts })
            : renderEmptyTransactions('No recent activity', 'Only activity within the last 24 hours appears on the dashboard. View all transactions in Txns.')
          }
        </div>
      </div>
    </div>
  `;
}

/**
 * Attach Dashboard Listeners
 */
export function attachDashboardListeners(navigateFn, refreshData) {
  // Retry button for Dashboard Error State
  const retryBtn = document.getElementById('btn-retry-dashboard');
  if (retryBtn) {
    retryBtn.onclick = () => {
      retryBtn.disabled = true;
      retryBtn.innerHTML = `<span class="spinner"></span> Loading...`;
      if (refreshData) refreshData();
    };
  }

  // Click/Tap on Total Money card to open Total Money History page
  const totalMoneyCard = document.getElementById('dashboard-total-money-card');
  if (totalMoneyCard) {
    const goToHistory = () => navigateFn('total-money-history');
    totalMoneyCard.onclick = goToHistory;
    totalMoneyCard.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        goToHistory();
      }
    };
  }

  // Empty account button
  const emptyAddAccBtn = document.getElementById('empty-add-account-btn');
  if (emptyAddAccBtn) {
    emptyAddAccBtn.onclick = () => navigateFn('accounts');
  }

  // Quick Nav
  document.querySelectorAll('.quick-nav-btn[data-page]').forEach(btn => {
    btn.onclick = () => navigateFn(btn.dataset.page);
  });

  const manageAccLink = document.getElementById('link-manage-accounts');
  if (manageAccLink) {
    manageAccLink.onclick = () => {
      if (window.appState) window.appState.selectedAccountId = null;
      navigateFn('accounts');
    };
  }

  // Click/Tap on account row to view details (Event Delegation for 100% Mobile + Desktop reliability)
  const accContainer = document.querySelector('.account-rows-container');
  if (accContainer) {
    const handleAccountSelect = (e) => {
      const row = e.target.closest('[data-account-id]');
      if (!row) return;
      
      const accId = row.dataset.accountId;
      if (!accId) return;

      if (window.appState) {
        window.appState.selectedAccountId = accId;
        window.appState.accountOriginPage = 'dashboard';
      }
      navigateFn('accounts');
    };

    accContainer.onclick = handleAccountSelect;
  }

  const viewAllBtn = document.getElementById('link-view-all-tx');
  if (viewAllBtn) viewAllBtn.onclick = () => navigateFn('transactions');

  // Quick Action Buttons
  const addMoneyBtn = document.getElementById('btn-quick-add-money');
  if (addMoneyBtn) addMoneyBtn.onclick = () => openAddTransactionModal('INCOME', refreshData);

  const addExpenseBtn = document.getElementById('btn-quick-add-expense');
  if (addExpenseBtn) addExpenseBtn.onclick = () => openAddTransactionModal('EXPENSE', refreshData);

  const transferBtn = document.getElementById('btn-quick-transfer');
  if (transferBtn) transferBtn.onclick = () => openTransferModal(refreshData);

  // Empty state CTA
  const emptyAddBtn = document.getElementById('empty-add-money-btn');
  if (emptyAddBtn) emptyAddBtn.onclick = () => openAddTransactionModal('INCOME', refreshData);

  // Edit / Delete buttons on recent activity
  document.querySelectorAll('.transaction-action-btn[data-action]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      const txId = btn.dataset.txId;
      const tx = dashboardState.transactions.find(t => t.id === txId);
      if (!tx) return;

      if (action === 'edit') {
        if (tx.type === 'TRANSFER') {
          openEditTransferModal(tx, refreshData);
        } else {
          openEditTransactionModal(tx, refreshData);
        }
      } else if (action === 'delete') {
        handleDeleteTransaction(tx, refreshData);
      }
    };
  });
}

/**
 * Open Modal to Add Money or Expense (with Account Selection)
 */
export function openAddTransactionModal(type = 'INCOME', onSaveSuccess) {
  const isIncome = type === 'INCOME';
  const categories = isIncome ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
  const accounts = dashboardState.accounts;
  const today = getTodayDate();
  const todayDisplay = getLocalDateDisplay();

  // Check offline
  if (!isOnline()) {
    toast.warning('📡 You\'re offline — Reconnect to save new transactions securely.');
    return;
  }

  const content = `
    <form id="tx-modal-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="tx-amount">Amount (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="tx-amount" class="form-input" placeholder="0.00" step="any" min="0" required autofocus />
        </div>
        <div class="form-error" id="tx-amount-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="tx-account">${isIncome ? 'Received Into Account' : 'Paid From Account'}</label>
        <select id="tx-account" class="form-select" required>
          <option value="">Select Account</option>
          ${accounts.map(a => `<option value="${a.id}">${a.icon || '🏦'} ${a.name}</option>`).join('')}
        </select>
        <div class="form-error" id="tx-account-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label">Date</label>
        <div class="date-locked-display">
          ${todayDisplay}
          <span class="date-lock-badge">🔒 Today</span>
        </div>
        <input type="hidden" id="tx-date" value="${today}" />
      </div>

      <div class="form-group">
        <label class="form-label" for="tx-reason">Reason</label>
        <input type="text" id="tx-reason" class="form-input" placeholder="${isIncome ? 'e.g. Monthly Salary' : 'e.g. Lunch with friends'}" required />
        <div class="form-error" id="tx-reason-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="tx-category">Category</label>
        <select id="tx-category" class="form-select" required>
          <option value="">Select Category</option>
          ${categories.map(c => `<option value="${c.value}">${c.label}</option>`).join('')}
        </select>
        <div class="form-error" id="tx-category-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="tx-notes">Notes (Optional)</label>
        <textarea id="tx-notes" class="form-textarea" placeholder="Add details..."></textarea>
      </div>

      <div id="tx-insufficient-warning" class="alert-banner alert-banner-danger" style="display: none; margin-bottom: 16px;">
        <span class="alert-banner-icon">⚠️</span>
        <div class="alert-banner-text" id="tx-insufficient-text">
          Insufficient Balance in selected account!
        </div>
      </div>

      <button type="submit" class="btn ${isIncome ? 'btn-income' : 'btn-expense'} btn-block btn-lg" id="btn-save-tx">
        ${isIncome ? '💰 Add Money' : '💸 Save Expense'}
      </button>
    </form>
  `;

  openModal({
    title: isIncome ? '💰 Add Money' : '💸 Add Expense',
    content,
    onOpen: (modal) => {
      const form = modal.querySelector('#tx-modal-form');
      const amountInput = modal.querySelector('#tx-amount');
      const accountSelect = modal.querySelector('#tx-account');
      const warningDiv = modal.querySelector('#tx-insufficient-warning');
      const warningText = modal.querySelector('#tx-insufficient-text');

      // Check balance on input for Expense
      const checkBalance = () => {
        if (isIncome) return;
        const accId = accountSelect.value;
        const amount = Number(amountInput.value) || 0;
        if (!accId || amount <= 0) {
          warningDiv.style.display = 'none';
          return;
        }

        const acc = accounts.find(a => a.id === accId);
        const { balances } = calculateAccountBalances(accounts, dashboardState.transactions);
        const accBal = balances[accId] || 0;
        const allowNegative = dashboardState.profile?.settings?.allowNegativeBalance;

        if (amount > accBal && !allowNegative) {
          warningText.textContent = `⚠️ Insufficient Balance! Available in ${acc?.name || 'account'}: ${formatCurrency(accBal)}`;
          warningDiv.style.display = 'flex';
        } else {
          warningDiv.style.display = 'none';
        }
      };

      amountInput.oninput = checkBalance;
      accountSelect.onchange = checkBalance;

      form.onsubmit = async (e) => {
        e.preventDefault();
        const amount = amountInput.value;
        const accountId = accountSelect.value;
        const date = modal.querySelector('#tx-date').value;
        const reason = modal.querySelector('#tx-reason').value;
        const category = modal.querySelector('#tx-category').value;
        const notes = modal.querySelector('#tx-notes').value;

        // Reset errors
        modal.querySelector('#tx-amount-error').textContent = '';
        modal.querySelector('#tx-account-error').textContent = '';
        modal.querySelector('#tx-reason-error').textContent = '';
        modal.querySelector('#tx-category-error').textContent = '';

        // Backend date validation — must be today
        const dateErr = validateTodayDate(date);
        if (dateErr) {
          toast.error(dateErr);
          return;
        }

        let isValid = true;
        const validation = validateTransaction({ amount, date, reason, category }, true);
        if (!validation.isValid) {
          if (validation.errors.amount) modal.querySelector('#tx-amount-error').textContent = validation.errors.amount;
          if (validation.errors.reason) modal.querySelector('#tx-reason-error').textContent = validation.errors.reason;
          if (validation.errors.category) modal.querySelector('#tx-category-error').textContent = validation.errors.category;
          isValid = false;
        }

        if (!accountId) {
          modal.querySelector('#tx-account-error').textContent = 'Please select an account.';
          isValid = false;
        }

        if (!isValid) return;

        // Insufficient balance check for expenses
        if (!isIncome) {
          const acc = accounts.find(a => a.id === accountId);
          const { balances } = calculateAccountBalances(accounts, dashboardState.transactions);
          const accBal = balances[accountId] || 0;
          const allowNegative = dashboardState.profile?.settings?.allowNegativeBalance;

          if (Number(amount) > accBal && !allowNegative) {
            warningText.textContent = `⚠️ Insufficient Balance! Available in ${acc?.name}: ${formatCurrency(accBal)}`;
            warningDiv.style.display = 'flex';
            toast.warning(`⚠️ You only have ${formatCurrency(accBal)} available in ${acc?.name}.`);
            return;
          }
        }

        const submitBtn = modal.querySelector('#btn-save-tx');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner"></span> Saving...`;

        try {
          const uid = dashboardState.user.uid;
          const txPayload = {
            type,
            amount: Number(amount),
            date,
            reason,
            category,
            notes
          };

          if (isIncome) {
            txPayload.destinationAccountId = accountId;
          } else {
            txPayload.sourceAccountId = accountId;
          }

          await addTransaction(uid, txPayload);
          closeModal();

          const accObj = accounts.find(a => a.id === accountId);
          toast.success(isIncome
            ? `💰 ${formatCurrency(amount)} added to ${accObj?.name || 'account'}!`
            : `💸 ${formatCurrency(amount)} spent from ${accObj?.name || 'account'}.`
          );

          if (onSaveSuccess) onSaveSuccess();
        } catch (err) {
          console.error('Error saving transaction:', err);
          toast.error('Unable to save transaction.');
          submitBtn.disabled = false;
          submitBtn.innerHTML = isIncome ? '💰 Add Money' : '💸 Save Expense';
        }
      };
    }
  });
}

/**
 * Open Modal to Transfer Money Between Accounts
 */
export function openTransferModal(onSaveSuccess) {
  const accounts = dashboardState.accounts;
  const today = getTodayDate();
  const todayDisplay = getLocalDateDisplay();

  // Check offline
  if (!isOnline()) {
    toast.warning('📡 You\'re offline — Reconnect to save new transactions securely.');
    return;
  }

  const content = `
    <form id="transfer-modal-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="tr-amount">Transfer Amount (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="tr-amount" class="form-input" placeholder="0.00" step="any" min="0" required autofocus />
        </div>
        <div class="form-error" id="tr-amount-error"></div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label" for="tr-from">From Account</label>
          <select id="tr-from" class="form-select" required>
            <option value="">Select Source</option>
            ${accounts.map(a => `<option value="${a.id}">${a.icon || '🏦'} ${a.name}</option>`).join('')}
          </select>
          <div class="form-error" id="tr-from-error"></div>
        </div>

        <div class="form-group">
          <label class="form-label" for="tr-to">To Account</label>
          <select id="tr-to" class="form-select" required>
            <option value="">Select Destination</option>
            ${accounts.map(a => `<option value="${a.id}">${a.icon || '🏦'} ${a.name}</option>`).join('')}
          </select>
          <div class="form-error" id="tr-to-error"></div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Date</label>
        <div class="date-locked-display">
          ${todayDisplay}
          <span class="date-lock-badge">🔒 Today</span>
        </div>
        <input type="hidden" id="tr-date" value="${today}" />
      </div>

      <div class="form-group">
        <label class="form-label" for="tr-reason">Reason / Description</label>
        <input type="text" id="tr-reason" class="form-input" placeholder="e.g. ATM Withdrawal, Moving to Savings" required />
        <div class="form-error" id="tr-reason-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="tr-notes">Notes (Optional)</label>
        <textarea id="tr-notes" class="form-textarea" placeholder="Add details..."></textarea>
      </div>

      <div id="tr-insufficient-warning" class="alert-banner alert-banner-danger" style="display: none; margin-bottom: 16px;">
        <span class="alert-banner-icon">⚠️</span>
        <div class="alert-banner-text" id="tr-insufficient-text">
          Source account has insufficient balance!
        </div>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-transfer" style="background: var(--gradient-hero);">
        🔄 Transfer Money
      </button>
    </form>
  `;

  openModal({
    title: '🔄 Transfer Money Between Accounts',
    content,
    onOpen: (modal) => {
      const form = modal.querySelector('#transfer-modal-form');
      const amountInput = modal.querySelector('#tr-amount');
      const fromSelect = modal.querySelector('#tr-from');
      const warningDiv = modal.querySelector('#tr-insufficient-warning');
      const warningText = modal.querySelector('#tr-insufficient-text');

      const checkTransferBalance = () => {
        const fromId = fromSelect.value;
        const amount = Number(amountInput.value) || 0;
        if (!fromId || amount <= 0) {
          warningDiv.style.display = 'none';
          return;
        }

        const { balances } = calculateAccountBalances(accounts, dashboardState.transactions);
        const fromBal = balances[fromId] || 0;
        const fromAcc = accounts.find(a => a.id === fromId);

        if (amount > fromBal) {
          warningText.textContent = `⚠️ Insufficient Balance! Available in ${fromAcc?.name}: ${formatCurrency(fromBal)}`;
          warningDiv.style.display = 'flex';
        } else {
          warningDiv.style.display = 'none';
        }
      };

      amountInput.oninput = checkTransferBalance;
      fromSelect.onchange = checkTransferBalance;

      form.onsubmit = async (e) => {
        e.preventDefault();
        const amount = amountInput.value;
        const fromId = fromSelect.value;
        const toId = modal.querySelector('#tr-to').value;
        const date = modal.querySelector('#tr-date').value;
        const reason = modal.querySelector('#tr-reason').value;
        const notes = modal.querySelector('#tr-notes').value;

        // Backend date validation — must be today
        const dateErr = validateTodayDate(date);
        if (dateErr) {
          toast.error(dateErr);
          return;
        }

        // Reset errors
        modal.querySelector('#tr-amount-error').textContent = '';
        modal.querySelector('#tr-from-error').textContent = '';
        modal.querySelector('#tr-to-error').textContent = '';
        modal.querySelector('#tr-reason-error').textContent = '';

        let isValid = true;
        const amtErr = validateAmount(amount);
        if (amtErr) { modal.querySelector('#tr-amount-error').textContent = amtErr; isValid = false; }
        if (!fromId) { modal.querySelector('#tr-from-error').textContent = 'Select source account.'; isValid = false; }
        if (!toId) { modal.querySelector('#tr-to-error').textContent = 'Select destination account.'; isValid = false; }
        if (fromId && toId && fromId === toId) {
          modal.querySelector('#tr-to-error').textContent = 'From and To accounts cannot be the same!';
          isValid = false;
        }
        const reasonErr = validateRequired(reason, 'a reason');
        if (reasonErr) { modal.querySelector('#tr-reason-error').textContent = reasonErr; isValid = false; }

        if (!isValid) return;

        // Balance Check
        const { balances } = calculateAccountBalances(accounts, dashboardState.transactions);
        const fromBal = balances[fromId] || 0;
        const fromAcc = accounts.find(a => a.id === fromId);
        const toAcc = accounts.find(a => a.id === toId);

        if (Number(amount) > fromBal) {
          warningText.textContent = `⚠️ Insufficient Balance! Available in ${fromAcc?.name}: ${formatCurrency(fromBal)}`;
          warningDiv.style.display = 'flex';
          toast.warning(`⚠️ You only have ${formatCurrency(fromBal)} available in ${fromAcc?.name}.`);
          return;
        }

        const submitBtn = modal.querySelector('#btn-save-transfer');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner"></span> Transferring...`;

        try {
          const uid = dashboardState.user.uid;
          await addTransaction(uid, {
            type: 'TRANSFER',
            amount: Number(amount),
            date,
            reason,
            category: 'Transfer',
            sourceAccountId: fromId,
            destinationAccountId: toId,
            notes
          });

          closeModal();
          toast.success(`🔄 Transferred ${formatCurrency(amount)} from ${fromAcc?.name} to ${toAcc?.name}!`);
          if (onSaveSuccess) onSaveSuccess();
        } catch (err) {
          console.error('Error saving transfer:', err);
          toast.error('Unable to complete transfer.');
          submitBtn.disabled = false;
          submitBtn.innerHTML = '🔄 Transfer Money';
        }
      };
    }
  });
}

/**
 * Open Modal to Edit Income/Expense Transaction
 */
export function openEditTransactionModal(tx, onSaveSuccess) {
  const isIncome = tx.type === 'INCOME';
  const categories = isIncome ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
  const accounts = dashboardState.accounts;

  const content = `
    <form id="edit-tx-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="edit-tx-amount">Amount (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="edit-tx-amount" class="form-input" value="${tx.amount}" step="any" min="0" required />
        </div>
        <div class="form-error" id="edit-tx-amount-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tx-account">${isIncome ? 'Destination Account' : 'Source Account'}</label>
        <select id="edit-tx-account" class="form-select" required>
          ${accounts.map(a => `
            <option value="${a.id}" ${ (isIncome ? tx.destinationAccountId : tx.sourceAccountId) === a.id ? 'selected' : '' }>
              ${a.icon || '🏦'} ${a.name}
            </option>
          `).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Date</label>
        <div class="date-locked-display">
          📅 ${formatDate(tx.date)}
          <span class="date-lock-badge">🔒 Locked</span>
        </div>
        <input type="hidden" id="edit-tx-date" value="${tx.date}" />
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tx-reason">Reason</label>
        <input type="text" id="edit-tx-reason" class="form-input" value="${tx.reason || ''}" required />
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tx-category">Category</label>
        <select id="edit-tx-category" class="form-select" required>
          ${categories.map(c => `<option value="${c.value}" ${tx.category === c.value ? 'selected' : ''}>${c.label}</option>`).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tx-notes">Notes (Optional)</label>
        <textarea id="edit-tx-notes" class="form-textarea">${tx.notes || ''}</textarea>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-update-tx">
        ✅ Update Transaction
      </button>
    </form>
  `;

  openModal({
    title: '✏️ Edit Transaction',
    content,
    onOpen: (modal) => {
      modal.querySelector('#edit-tx-form').onsubmit = async (e) => {
        e.preventDefault();
        const amount = modal.querySelector('#edit-tx-amount').value;
        const accountId = modal.querySelector('#edit-tx-account').value;
        const date = modal.querySelector('#edit-tx-date').value;
        const reason = modal.querySelector('#edit-tx-reason').value;
        const category = modal.querySelector('#edit-tx-category').value;
        const notes = modal.querySelector('#edit-tx-notes').value;

        const validation = validateTransaction({ amount, date, reason, category }, false);
        if (!validation.isValid) return;

        const submitBtn = modal.querySelector('#btn-update-tx');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner"></span> Updating...`;

        try {
          const uid = dashboardState.user.uid;
          const payload = {
            amount: Number(amount),
            date,
            reason,
            category,
            notes
          };
          if (isIncome) payload.destinationAccountId = accountId;
          else payload.sourceAccountId = accountId;

          await updateTransaction(uid, tx.id, payload);
          closeModal();
          toast.success('✅ Transaction updated!');
          if (onSaveSuccess) onSaveSuccess();
        } catch (err) {
          toast.error('Unable to update transaction.');
          submitBtn.disabled = false;
          submitBtn.innerHTML = '✅ Update Transaction';
        }
      };
    }
  });
}

/**
 * Open Modal to Edit Transfer Transaction
 */
export function openEditTransferModal(tx, onSaveSuccess) {
  const accounts = dashboardState.accounts;

  const content = `
    <form id="edit-tr-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="edit-tr-amount">Amount (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="edit-tr-amount" class="form-input" value="${tx.amount}" step="any" min="0" required />
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label" for="edit-tr-from">From Account</label>
          <select id="edit-tr-from" class="form-select" required>
            ${accounts.map(a => `<option value="${a.id}" ${tx.sourceAccountId === a.id ? 'selected' : ''}>${a.icon || '🏦'} ${a.name}</option>`).join('')}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label" for="edit-tr-to">To Account</label>
          <select id="edit-tr-to" class="form-select" required>
            ${accounts.map(a => `<option value="${a.id}" ${tx.destinationAccountId === a.id ? 'selected' : ''}>${a.icon || '🏦'} ${a.name}</option>`).join('')}
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Date</label>
        <div class="date-locked-display">
          📅 ${formatDate(tx.date)}
          <span class="date-lock-badge">🔒 Locked</span>
        </div>
        <input type="hidden" id="edit-tr-date" value="${tx.date}" />
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tr-reason">Reason</label>
        <input type="text" id="edit-tr-reason" class="form-input" value="${tx.reason || ''}" required />
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-tr-notes">Notes (Optional)</label>
        <textarea id="edit-tr-notes" class="form-textarea">${tx.notes || ''}</textarea>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-update-tr">
        ✅ Update Transfer
      </button>
    </form>
  `;

  openModal({
    title: '✏️ Edit Transfer',
    content,
    onOpen: (modal) => {
      modal.querySelector('#edit-tr-form').onsubmit = async (e) => {
        e.preventDefault();
        const amount = modal.querySelector('#edit-tr-amount').value;
        const fromId = modal.querySelector('#edit-tr-from').value;
        const toId = modal.querySelector('#edit-tr-to').value;
        const date = modal.querySelector('#edit-tr-date').value;
        const reason = modal.querySelector('#edit-tr-reason').value;
        const notes = modal.querySelector('#edit-tr-notes').value;

        if (fromId === toId) {
          toast.error('From and To accounts cannot be the same!');
          return;
        }

        const submitBtn = modal.querySelector('#btn-update-tr');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner"></span> Updating...`;

        try {
          const uid = dashboardState.user.uid;
          await updateTransaction(uid, tx.id, {
            amount: Number(amount),
            date,
            reason,
            sourceAccountId: fromId,
            destinationAccountId: toId,
            notes
          });
          closeModal();
          toast.success('✅ Transfer updated!');
          if (onSaveSuccess) onSaveSuccess();
        } catch (err) {
          toast.error('Unable to update transfer.');
          submitBtn.disabled = false;
          submitBtn.innerHTML = '✅ Update Transfer';
        }
      };
    }
  });
}

/**
 * Handle Delete Transaction
 */
export async function handleDeleteTransaction(tx, onDeleteSuccess) {
  const isTransfer = tx.type === 'TRANSFER';
  const confirmed = await showConfirm({
    icon: '🗑️',
    title: isTransfer ? 'Delete Transfer' : 'Delete Transaction',
    message: isTransfer
      ? 'Are you sure you want to delete this transfer? Both source and destination account balances will be restored.'
      : 'Are you sure you want to delete this transaction? Your account balances will automatically adjust.',
    confirmText: 'Delete',
    danger: true
  });

  if (confirmed) {
    try {
      const uid = dashboardState.user.uid;
      await deleteTransaction(uid, tx.id);
      toast.success('🗑️ Transaction deleted!');
      if (onDeleteSuccess) onDeleteSuccess();
    } catch (err) {
      toast.error('Unable to delete transaction.');
    }
  }
}
