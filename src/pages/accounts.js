// ============================================
// 💰 Money Control V2 — Accounts Page Component
// ============================================

import { formatCurrency } from '../utils/formatters.js';
import { calculateAccountBalances, calculateAccountStats } from '../utils/calculations.js';
import { createAccount, updateAccount, deleteAccountDoc } from '../services/firestore.js';
import { openModal, closeModal, showConfirm } from '../components/modal.js';
import { renderTransactionList } from '../components/transaction-card.js';
import { validateName, validateAmount } from '../utils/validators.js';
import { toast } from '../utils/toast.js';

let state = {
  user: null,
  profile: null,
  accounts: [],
  transactions: []
};

/**
 * Render Accounts Page HTML
 */
export function renderAccountsPage(appState) {
  state = { ...state, ...appState };
  const { accounts, transactions } = state;
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
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--space-4); margin-bottom: var(--space-6);">
        ${accounts.map(acc => {
          const bal = balances[acc.id] || 0;
          return `
            <div class="card hover-lift" style="cursor: pointer; position: relative;" data-account-id="${acc.id}">
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
 * Attach Accounts Listeners
 */
export function attachAccountsListeners(refreshData) {
  // Add Account button
  const addAccBtn = document.getElementById('btn-add-account-modal');
  if (addAccBtn) addAccBtn.onclick = () => openAddAccountModal(refreshData);

  // Click on account card to view details
  document.querySelectorAll('[data-account-id]').forEach(card => {
    card.onclick = () => {
      const accId = card.dataset.accountId;
      const acc = state.accounts.find(a => a.id === accId);
      if (acc) openAccountDetailModal(acc, refreshData);
    };
  });
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

/**
 * Account Detail Modal
 */
function openAccountDetailModal(acc, refreshData) {
  const stats = calculateAccountStats(acc, state.transactions);

  const content = `
    <div style="margin-bottom: var(--space-4);">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: var(--space-3);">
        <span style="font-size: 2.5rem;">${acc.icon || '🏦'}</span>
        <div>
          <h3 style="font-size: var(--fs-xl); font-weight: var(--fw-bold);">${acc.name}</h3>
          <p style="font-size: var(--fs-xs); color: var(--text-secondary);">${acc.type} ${acc.last4Digits ? `(••${acc.last4Digits})` : ''}</p>
        </div>
      </div>

      <div class="card card-glass" style="margin-bottom: var(--space-4); text-align: center; padding: var(--space-4);">
        <div style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase;">Current Account Balance</div>
        <div style="font-size: var(--fs-3xl); font-weight: var(--fw-extrabold); color: ${stats.balance < 0 ? 'var(--expense)' : 'var(--income)'};">
          ${formatCurrency(stats.balance)}
        </div>
      </div>

      <!-- Account Breakdown Stats -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: var(--space-4);">
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Total Added</div>
          <div style="font-weight: var(--fw-bold); color: var(--income);">${formatCurrency(stats.totalAdded)}</div>
        </div>
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Total Spent</div>
          <div style="font-weight: var(--fw-bold); color: var(--expense);">${formatCurrency(stats.totalSpent)}</div>
        </div>
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Transferred Out</div>
          <div style="font-weight: var(--fw-bold); color: var(--primary);">${formatCurrency(stats.totalTransferredOut)}</div>
        </div>
        <div class="card card-flat" style="padding: 10px;">
          <div style="font-size: var(--fs-xs); color: var(--text-secondary);">Transferred In</div>
          <div style="font-weight: var(--fw-bold); color: var(--info);">${formatCurrency(stats.totalTransferredIn)}</div>
        </div>
      </div>

      <h4 style="font-size: var(--fs-md); font-weight: var(--fw-bold); margin-bottom: var(--space-2);">Account Transactions</h4>
      <div style="max-height: 250px; overflow-y: auto;">
        ${stats.transactions.length > 0
          ? renderTransactionList(stats.transactions, { showActions: false, showDate: true })
          : '<div style="font-size: var(--fs-sm); color: var(--text-tertiary); text-align: center; padding: 16px;">No transactions for this account.</div>'
        }
      </div>
    </div>
  `;

  const footer = `
    <button class="btn btn-outline btn-sm" id="btn-edit-account">✏️ Edit Account</button>
    <button class="btn btn-danger btn-sm" id="btn-delete-account">🗑️ Delete Account</button>
  `;

  openModal({
    title: `Account Details`,
    content,
    footer,
    onOpen: (modal) => {
      // Edit Account
      modal.querySelector('#btn-edit-account').onclick = () => {
        closeModal();
        openEditAccountModal(acc, refreshData);
      };

      // Delete Account
      modal.querySelector('#btn-delete-account').onclick = async () => {
        closeModal();
        const confirmed = await showConfirm({
          icon: '🗑️',
          title: 'Delete Account',
          message: `Are you sure you want to delete ${acc.name}? Transactions assigned to this account will remain in history.`,
          danger: true
        });
        if (confirmed) {
          try {
            await deleteAccountDoc(state.user.uid, acc.id);
            toast.success(`Account ${acc.name} deleted.`);
            if (refreshData) refreshData();
          } catch (err) {
            toast.error('Unable to delete account.');
          }
        }
      };
    }
  });
}

/**
 * Edit Account Modal
 */
function openEditAccountModal(acc, onSuccess) {
  const content = `
    <form id="edit-account-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="edit-acc-name">Account Name</label>
        <input type="text" id="edit-acc-name" class="form-input" value="${acc.name}" required />
        <div class="form-error" id="edit-acc-name-error"></div>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-acc-type">Account Type</label>
        <select id="edit-acc-type" class="form-select" required>
          <option value="Cash" ${acc.type === 'Cash' ? 'selected' : ''}>💵 Cash</option>
          <option value="Bank" ${acc.type === 'Bank' ? 'selected' : ''}>🏦 Bank Account</option>
          <option value="UPI" ${acc.type === 'UPI' ? 'selected' : ''}>📱 UPI / Wallet</option>
          <option value="Other" ${acc.type === 'Other' ? 'selected' : ''}>💳 Other</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-acc-initial">Initial Balance (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="edit-acc-initial" class="form-input" value="${acc.initialBalance || 0}" step="any" min="0" required />
        </div>
      </div>

      <div class="form-group">
        <label class="form-label" for="edit-acc-last4">Last 4 Digits (Optional)</label>
        <input type="text" id="edit-acc-last4" class="form-input" value="${acc.last4Digits || ''}" maxlength="4" />
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-update-account">
        Update Account
      </button>
    </form>
  `;

  openModal({
    title: '✏️ Edit Account',
    content,
    onOpen: (modal) => {
      modal.querySelector('#edit-account-form').onsubmit = async (e) => {
        e.preventDefault();
        const name = modal.querySelector('#edit-acc-name').value;
        const type = modal.querySelector('#edit-acc-type').value;
        const initialBalance = modal.querySelector('#edit-acc-initial').value;
        const last4Digits = modal.querySelector('#edit-acc-last4').value;

        const nameErr = validateName(name);
        if (nameErr) { modal.querySelector('#edit-acc-name-error').textContent = nameErr; return; }

        const submitBtn = modal.querySelector('#btn-update-account');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner"></span> Updating...`;

        try {
          await updateAccount(state.user.uid, acc.id, {
            name,
            type,
            initialBalance: Number(initialBalance),
            last4Digits
          });
          closeModal();
          toast.success('Account updated!');
          if (onSuccess) onSuccess();
        } catch (err) {
          toast.error('Unable to update account.');
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Update Account';
        }
      };
    }
  });
}
