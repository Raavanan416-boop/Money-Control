// ============================================
// 💰 Money Control V3 — Accounts Page & Dedicated Account Details Component
// ============================================

import { formatCurrency, formatDate, formatTime } from '../utils/formatters.js';
import { calculateAccountBalances, calculateAccountHistory } from '../utils/calculations.js';
import { createAccount, updateAccount, deleteAccountDoc } from '../services/firestore.js';
import { openModal, closeModal, showConfirm } from '../components/modal.js';
import { validateName, validateAmount } from '../utils/validators.js';
import { toast } from '../utils/toast.js';

let state = {
  user: null,
  profile: null,
  accounts: [],
  transactions: [],
  selectedAccountId: null
};

/**
 * Render Accounts Page HTML (List or Dedicated Details Screen)
 */
export function renderAccountsPage(appState) {
  state = { ...state, ...appState };
  const { accounts, transactions, selectedAccountId } = state;

  if (selectedAccountId) {
    const selectedAcc = accounts.find(a => a.id === selectedAccountId);
    if (selectedAcc) {
      return renderAccountDetailsScreen(selectedAcc, transactions);
    }
  }

  // Render Accounts List View
  const { balances, totalMoney } = calculateAccountBalances(accounts, transactions);

  return `
    <div class="page animate-fade-in">
      <div class="page-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
        <div>
          <h1 class="page-title">My Accounts 🏦</h1>
          <p class="page-subtitle">Track where your money is currently located across Cash, Banks, & Wallets.</p>
        </div>
        <button class="btn btn-primary btn-sm" id="btn-add-account-modal">+ Add Account</button>
      </div>

      <!-- Total Money Banner -->
      <div class="card card-glass" style="margin-bottom: var(--space-6); background: var(--primary-bg); border-color: var(--primary-light);">
        <div style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 600;">Total Money Across All Accounts</div>
        <div style="font-size: var(--fs-3xl); font-weight: var(--fw-extrabold); color: var(--primary); margin-top: 4px;">${formatCurrency(totalMoney)}</div>
      </div>

      <!-- Account Cards Grid -->
      <div class="accounts-page-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
        ${accounts.map(acc => {
          const bal = balances[acc.id] || 0;
          return `
            <div class="card hover-lift account-card-item" style="cursor: pointer; position: relative; touch-action: manipulation; -webkit-tap-highlight-color: rgba(108, 99, 255, 0.15); user-select: none;" data-account-id="${acc.id}">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-3);">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="font-size: 1.8rem; width: 44px; height: 44px; border-radius: 12px; background: var(--bg-tertiary); display: flex; align-items: center; justify-content: center;">
                    ${acc.icon || '💰'}
                  </div>
                  <div>
                    <div style="font-weight: var(--fw-bold); font-size: var(--fs-md);">${acc.name}</div>
                    <div style="font-size: var(--fs-xs); color: var(--text-secondary);">${acc.type} ${acc.last4Digits ? `(••${acc.last4Digits})` : ''}</div>
                  </div>
                </div>
              </div>
              <div style="font-size: var(--fs-2xl); font-weight: var(--fw-extrabold); color: ${bal < 0 ? 'var(--expense)' : 'var(--text-primary)'};">
                ${formatCurrency(bal)}
              </div>
              <div style="font-size: var(--fs-xs); color: var(--text-tertiary); margin-top: 4px;">
                Initial: ${formatCurrency(acc.initialBalance || 0)}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

/**
 * Render Dedicated Account Details View Screen
 */
function renderAccountDetailsScreen(account, transactions) {
  const stats = calculateAccountHistory(account, transactions, state.accounts);

  return `
    <div class="page animate-fade-in account-details-page">
      <!-- Back button -->
      <div style="margin-bottom: var(--space-4);">
        <button class="btn btn-ghost btn-sm" id="btn-back-to-accounts" style="display: inline-flex; align-items: center; gap: 6px; font-weight: 600; color: var(--text-secondary); cursor: pointer; border: none; background: transparent; padding: 6px 0; font-size: 0.9375rem;">
          ← Back
        </button>
      </div>

      <!-- Account Header & Current Balance -->
      <div class="card card-glass" style="margin-bottom: var(--space-5); padding: 24px; text-align: center; border-radius: var(--radius-2xl);">
        <div style="font-size: 3rem; margin-bottom: 8px;">${account.icon || '🏦'}</div>
        <h1 style="font-size: var(--fs-2xl); font-weight: var(--fw-extrabold); color: var(--text-primary); margin-bottom: 4px;">
          ${account.name}
        </h1>
        ${account.type ? `<div style="font-size: var(--fs-xs); color: var(--text-tertiary); margin-bottom: 12px;">${account.type} ${account.last4Digits ? `(••${account.last4Digits})` : ''}</div>` : ''}
        <div style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.06em; font-weight: 700;">
          Current Balance
        </div>
        <div style="font-size: var(--fs-3xl); font-weight: 900; color: ${stats.balance < 0 ? 'var(--expense)' : 'var(--text-primary)'}; margin-top: 4px; letter-spacing: -0.02em;">
          ${formatCurrency(stats.balance)}
        </div>
      </div>

      <!-- SUMMARY Section -->
      <div class="card card-flat" style="margin-bottom: var(--space-6); padding: 20px; border-radius: var(--radius-xl);">
        <div style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-secondary); margin-bottom: 16px;">
          SUMMARY
        </div>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; text-align: center;">
          <div style="background: var(--bg-tertiary); padding: 12px 8px; border-radius: var(--radius-md);">
            <div style="font-size: var(--fs-xs); color: var(--text-secondary); margin-bottom: 4px; font-weight: 500;">Money Added</div>
            <div style="font-weight: var(--fw-bold); font-size: var(--fs-md); color: var(--income);">${formatCurrency(stats.totalAdded)}</div>
          </div>
          <div style="background: var(--bg-tertiary); padding: 12px 8px; border-radius: var(--radius-md);">
            <div style="font-size: var(--fs-xs); color: var(--text-secondary); margin-bottom: 4px; font-weight: 500;">Money Spent</div>
            <div style="font-weight: var(--fw-bold); font-size: var(--fs-md); color: var(--expense);">${formatCurrency(stats.totalSpent)}</div>
          </div>
          <div style="background: var(--bg-tertiary); padding: 12px 8px; border-radius: var(--radius-md);">
            <div style="font-size: var(--fs-xs); color: var(--text-secondary); margin-bottom: 4px; font-weight: 500;">Transactions</div>
            <div style="font-weight: var(--fw-bold); font-size: var(--fs-md); color: var(--text-primary);">${stats.count}</div>
          </div>
        </div>
      </div>

      <!-- MONEY HISTORY Section -->
      <div class="section">
        <div style="font-size: 0.8125rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-secondary); margin-bottom: 16px;">
          MONEY HISTORY
        </div>

        ${stats.history.length > 0 ? `
          <div style="display: flex; flex-direction: column; gap: 12px;">
            ${stats.history.map(tx => renderHistoryRow(tx, account)).join('')}
          </div>
        ` : `
          <div class="card card-flat" style="padding: 36px 16px; text-align: center; color: var(--text-tertiary);">
            <div style="font-size: 2.2rem; margin-bottom: 8px;">📜</div>
            <div style="font-size: var(--fs-sm); font-weight: 500;">No transaction history for this account yet.</div>
          </div>
        `}
      </div>
    </div>
  `;
}

/**
 * Render single transaction card for Account Details View with complete 3-step Balance Flow
 */
function renderHistoryRow(tx, account) {
  let displayReason = tx.reason || tx.category || tx.typeLabel;

  if (tx.type === 'TRANSFER') {
    if (tx.displayType === 'TRANSFER_IN') {
      displayReason = tx.reason
        ? tx.reason
        : (tx.transferAccountName ? `Transfer from ${tx.transferAccountName}` : 'Transfer Received');
    } else if (tx.displayType === 'TRANSFER_OUT') {
      displayReason = tx.reason
        ? tx.reason
        : (tx.transferAccountName ? `Transfer to ${tx.transferAccountName}` : 'Transferred');
    }
  }

  const formattedDate = formatDate(tx.date);
  const formattedTime = tx.createdAt ? formatTime(tx.createdAt) : '';

  return `
    <div class="card card-flat history-item-card" style="padding: 16px 18px; border-radius: var(--radius-xl); background: var(--bg-card); border: 1px solid var(--border-color); margin-bottom: 4px;">
      
      <!-- Card Header: Indicator & Reason -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 10px; min-width: 0;">
          <span style="font-size: 1.25rem;">${tx.indicator}</span>
          <div style="font-weight: 700; font-size: 0.9375rem; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
            ${displayReason}
          </div>
        </div>
      </div>

      <!-- Balance Flow Box -->
      <div style="background: var(--bg-tertiary); border-radius: var(--radius-lg); padding: 12px 14px; font-size: 0.875rem; margin-bottom: 12px;">
        
        <!-- Previous Balance -->
        <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary); margin-bottom: 6px;">
          <span>Previous Balance</span>
          <span style="font-weight: 600; color: var(--text-primary);">${formatCurrency(tx.previousBalance)}</span>
        </div>

        <!-- Transaction Action (Expense / Money Added / Transferred) -->
        <div style="display: flex; justify-content: space-between; align-items: center; color: var(--text-secondary); margin-bottom: 8px;">
          <span>${tx.actionLabel}</span>
          <span style="font-weight: 700; color: ${tx.amountColor};">${tx.amountSign}${formatCurrency(tx.amount)}</span>
        </div>

        <!-- Divider Line -->
        <div style="border-top: 1px dashed var(--border-color); margin: 6px 0 8px 0;"></div>

        <!-- Balance After (Remaining Balance / Current Balance) -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-weight: 700;">
          <span style="color: var(--text-primary);">${tx.resultLabel}</span>
          <span style="font-size: 0.9375rem; color: ${tx.balanceAfter < 0 ? 'var(--expense)' : 'var(--income)'}; font-weight: 800;">${formatCurrency(tx.balanceAfter)}</span>
        </div>

      </div>

      <!-- Card Footer: Type & Timestamp -->
      <div style="font-size: 0.75rem; color: var(--text-tertiary); display: flex; align-items: center; gap: 6px;">
        <span>${tx.typeLabel}</span>
        <span>•</span>
        <span>${formattedDate}${formattedTime ? ` at ${formattedTime}` : ''}</span>
      </div>

    </div>
  `;
}

/**
 * Attach Accounts Listeners
 */
export function attachAccountsListeners(refreshData) {
  // If in Account Details view
  const backBtn = document.getElementById('btn-back-to-accounts');
  if (backBtn) {
    backBtn.onclick = () => {
      const origin = window.appState?.accountOriginPage;
      state.selectedAccountId = null;
      if (window.appState) {
        window.appState.selectedAccountId = null;
        window.appState.accountOriginPage = null;
      }
      if (origin === 'dashboard') {
        if (window.appState) window.appState.activePage = 'dashboard';
        window.location.hash = '#/dashboard';
      }
      if (refreshData) refreshData();
    };
    return;
  }

  // Add Account button
  const addAccBtn = document.getElementById('btn-add-account-modal');
  if (addAccBtn) addAccBtn.onclick = () => openAddAccountModal(refreshData);

  // Click/Tap on account card to view details (Event Delegation)
  const grid = document.querySelector('.accounts-page-grid') || document.querySelector('.page');
  if (grid) {
    grid.onclick = (e) => {
      const card = e.target.closest('[data-account-id]');
      if (!card) return;
      if (e.target.closest('button, a, input, select')) return;

      const accId = card.dataset.accountId;
      if (!accId) return;

      state.selectedAccountId = accId;
      if (window.appState) window.appState.selectedAccountId = accId;
      if (refreshData) refreshData();
    };
  }
}

/**
 * Add Account Modal
 */
export function openAddAccountModal(onSuccess) {
  const content = `
    <form id="add-account-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="acc-name">Account Name</label>
        <input type="text" id="acc-name" class="form-input" placeholder="e.g. SBI Savings, GPay, Cash" required autofocus />
        <div class="form-error" id="acc-name-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="acc-type">Account Type</label>
        <select id="acc-type" class="form-select" required>
          <option value="Cash">💵 Cash</option>
          <option value="Bank">🏦 Bank Account</option>
          <option value="UPI">📱 UPI / Wallet</option>
          <option value="Other">💳 Other</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="acc-initial">Initial Balance (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="acc-initial" class="form-input" placeholder="0.00" step="any" min="0" value="0" required />
        </div>
        <div class="form-error" id="acc-initial-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="acc-last4">Last 4 Digits (Optional)</label>
        <input type="text" id="acc-last4" class="form-input" placeholder="e.g. 4321" maxlength="4" />
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-account">
        Create Account
      </button>
    </form>
  `;

  openModal({
    title: '🏦 Add New Account',
    content,
    onOpen: (modal) => {
      modal.querySelector('#add-account-form').onsubmit = async (e) => {
        e.preventDefault();
        const name = modal.querySelector('#acc-name').value;
        const type = modal.querySelector('#acc-type').value;
        const initialBalance = modal.querySelector('#acc-initial').value;
        const last4Digits = modal.querySelector('#acc-last4').value;

        // Validation
        const nameErr = validateName(name);
        const balErr = validateAmount(initialBalance);
        if (nameErr) { modal.querySelector('#acc-name-error').textContent = nameErr; return; }
        if (balErr) { modal.querySelector('#acc-initial-error').textContent = balErr; return; }

        const submitBtn = modal.querySelector('#btn-save-account');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner"></span> Creating...`;

        try {
          await createAccount(state.user.uid, {
            name,
            type,
            initialBalance: Number(initialBalance),
            last4Digits
          });
          closeModal();
          toast.success(`🏦 ${name} account created!`);
          if (onSuccess) onSuccess();
        } catch (err) {
          toast.error('Unable to create account.');
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Create Account';
        }
      };
    }
  });
}
