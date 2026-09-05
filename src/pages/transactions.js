// ============================================
// 💰 Money Control V2 — Transactions Page
// ============================================

import {
  formatCurrency,
  formatDate,
  formatTime,
  escapeHtml,
  getCategoryEmoji,
  getTodayDate,
  getWeekRange,
  EXPENSE_CATEGORIES,
  INCOME_CATEGORIES
} from '../utils/formatters.js';
import { renderTransactionItem, renderTransactionList } from '../components/transaction-card.js';
import { renderEmptyTransactions, renderEmptySearch } from '../components/empty-state.js';
import { openModal, closeModal } from '../components/modal.js';
import { updateTransaction } from '../services/firestore.js';
import { toast } from '../utils/toast.js';

let state = {
  user: null,
  profile: null,
  accounts: [],
  transactions: []
};

let filterState = {
  searchQuery: '',
  typeFilter: 'ALL', // 'ALL' | 'INCOME' | 'EXPENSE' | 'TRANSFER'
  accountFilter: 'ALL',
  dateFilter: 'ALL', // 'ALL' | 'TODAY' | 'WEEK' | 'MONTH' | 'CUSTOM'
  customDate: '',
  categoryFilter: 'ALL'
};

/**
 * Render Transactions Page HTML
 */
export function renderTransactionsPage(appState) {
  state = { ...state, ...appState };
  const filtered = getFilteredTransactions();

  const allCategories = [
    ...EXPENSE_CATEGORIES.map(c => c.value),
    ...INCOME_CATEGORIES.map(c => c.value)
  ];

  return `
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">All Activity 📜</h1>
        <p class="page-subtitle">Search, filter, edit, or delete transactions and account transfers.</p>
      </div>

      <!-- Search & Filters Bar -->
      <div class="card card-flat" style="margin-bottom: var(--space-6); padding: var(--space-4);">
        <!-- Search Input -->
        <div class="form-group search-bar" style="margin-bottom: var(--space-3);">
          <span class="search-icon">🔍</span>
          <input type="text" id="tx-search-input" class="form-input" placeholder="Search by reason, category, account, or notes..." value="${filterState.searchQuery}" />
          <button class="search-clear ${filterState.searchQuery ? 'visible' : ''}" id="tx-search-clear">✕</button>
        </div>

        <!-- Filter Chips: Type -->
        <div class="chips-scroll" style="margin-bottom: var(--space-3);">
          <button class="chip ${filterState.typeFilter === 'ALL' ? 'active' : ''}" data-filter-type="ALL">All (${state.transactions.length})</button>
          <button class="chip chip-income ${filterState.typeFilter === 'INCOME' ? 'active' : ''}" data-filter-type="INCOME">🟢 Money Added</button>
          <button class="chip chip-expense ${filterState.typeFilter === 'EXPENSE' ? 'active' : ''}" data-filter-type="EXPENSE">🔴 Expenses</button>
          <button class="chip ${filterState.typeFilter === 'TRANSFER' ? 'active' : ''}" data-filter-type="TRANSFER" style="${filterState.typeFilter === 'TRANSFER' ? 'background: var(--primary); color: white;' : ''}">🔄 Transfers</button>
        </div>

        <!-- Dropdowns: Account, Category, & Date Filters -->
        <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
          <select id="tx-account-filter" class="form-select" style="width: auto; min-height: 36px; padding: 4px 28px 4px 12px; font-size: 13px;">
            <option value="ALL">All Accounts</option>
            ${state.accounts.map(acc => `
              <option value="${acc.id}" ${filterState.accountFilter === acc.id ? 'selected' : ''}>${acc.icon || '🏦'} ${acc.name}</option>
            `).join('')}
          </select>

          <div class="chips-scroll" style="margin-bottom: 0;">
            <button class="chip ${filterState.dateFilter === 'ALL' ? 'active' : ''}" data-filter-date="ALL">All Time</button>
            <button class="chip ${filterState.dateFilter === 'TODAY' ? 'active' : ''}" data-filter-date="TODAY">Today</button>
            <button class="chip ${filterState.dateFilter === 'WEEK' ? 'active' : ''}" data-filter-date="WEEK">This Week</button>
            <button class="chip ${filterState.dateFilter === 'MONTH' ? 'active' : ''}" data-filter-date="MONTH">This Month</button>
            <button class="chip ${filterState.dateFilter === 'CUSTOM' ? 'active' : ''}" data-filter-date="CUSTOM">Custom Date</button>
          </div>

          ${filterState.dateFilter === 'CUSTOM' ? `
            <input type="date" id="tx-custom-date" class="form-input" style="width: auto; min-height: 36px; padding: 4px 8px; font-size: 13px;" value="${filterState.customDate}" />
          ` : ''}

          <select id="tx-category-filter" class="form-select" style="width: auto; min-height: 36px; padding: 4px 28px 4px 12px; font-size: 13px;">
            <option value="ALL">All Categories</option>
            ${Array.from(new Set(allCategories)).map(cat => `
              <option value="${cat}" ${filterState.categoryFilter === cat ? 'selected' : ''}>${cat}</option>
            `).join('')}
          </select>
        </div>
      </div>

      <!-- Result Count -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-3); padding: 0 4px;">
        <span style="font-size: var(--fs-sm); color: var(--text-secondary);">
          Showing <strong>${filtered.length}</strong> activity item${filtered.length === 1 ? '' : 's'}
        </span>
      </div>

      <!-- Activity List -->
      <div class="card card-flat" style="padding: 0; overflow: hidden; border-radius: var(--radius-xl);" id="tx-list-container">
        ${renderTransactionListContent(filtered)}
      </div>
    </div>
  `;
}

function renderTransactionListContent(filtered) {
  if (state.transactions.length === 0) {
    return renderEmptyTransactions();
  }
  if (filtered.length === 0) {
    return renderEmptySearch();
  }
  return renderTransactionList(filtered, { accounts: state.accounts });
}

function getFilteredTransactions() {
  let list = [...state.transactions];

  // Search filter
  if (filterState.searchQuery) {
    const q = filterState.searchQuery.toLowerCase();
    list = list.filter(tx => {
      const srcAcc = state.accounts.find(a => a.id === tx.sourceAccountId);
      const destAcc = state.accounts.find(a => a.id === tx.destinationAccountId);

      return (tx.reason && tx.reason.toLowerCase().includes(q)) ||
        (tx.category && tx.category.toLowerCase().includes(q)) ||
        (tx.notes && tx.notes.toLowerCase().includes(q)) ||
        (srcAcc && srcAcc.name.toLowerCase().includes(q)) ||
        (destAcc && destAcc.name.toLowerCase().includes(q));
    });
  }

  // Type filter
  if (filterState.typeFilter !== 'ALL') {
    list = list.filter(tx => tx.type === filterState.typeFilter);
  }

  // Account filter
  if (filterState.accountFilter !== 'ALL') {
    const accId = filterState.accountFilter;
    list = list.filter(tx => tx.sourceAccountId === accId || tx.destinationAccountId === accId);
  }

  // Date filter
  const today = getTodayDate();
  if (filterState.dateFilter === 'TODAY') {
    list = list.filter(tx => tx.date === today);
  } else if (filterState.dateFilter === 'WEEK') {
    const { start, end } = getWeekRange(today);
    list = list.filter(tx => tx.date >= start && tx.date <= end);
  } else if (filterState.dateFilter === 'MONTH') {
    const monthStr = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`;
    list = list.filter(tx => tx.date && tx.date.startsWith(monthStr));
  } else if (filterState.dateFilter === 'CUSTOM' && filterState.customDate) {
    list = list.filter(tx => tx.date === filterState.customDate);
  }

  // Category filter
  if (filterState.categoryFilter !== 'ALL') {
    list = list.filter(tx => tx.category === filterState.categoryFilter);
  }

  return list;
}

/**
 * Attach Transactions Listeners
 */
export function attachTransactionsListeners(refreshData) {
  const updateList = () => {
    const container = document.getElementById('tx-list-container');
    if (container) {
      const filtered = getFilteredTransactions();
      container.innerHTML = renderTransactionListContent(filtered);
      attachItemListeners(refreshData);
    }
  };

  // Search input
  const searchInput = document.getElementById('tx-search-input');
  const searchClear = document.getElementById('tx-search-clear');
  if (searchInput) {
    searchInput.oninput = (e) => {
      filterState.searchQuery = e.target.value;
      if (searchClear) searchClear.classList.toggle('visible', !!filterState.searchQuery);
      updateList();
    };
  }
  if (searchClear) {
    searchClear.onclick = () => {
      filterState.searchQuery = '';
      if (searchInput) searchInput.value = '';
      searchClear.classList.remove('visible');
      updateList();
    };
  }

  // Type filter chips
  document.querySelectorAll('[data-filter-type]').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('[data-filter-type]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterState.typeFilter = btn.dataset.filterType;
      updateList();
    };
  });

  // Account dropdown filter
  const accFilterSelect = document.getElementById('tx-account-filter');
  if (accFilterSelect) {
    accFilterSelect.onchange = (e) => {
      filterState.accountFilter = e.target.value;
      updateList();
    };
  }

  // Date filter chips
  document.querySelectorAll('[data-filter-date]').forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll('[data-filter-date]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterState.dateFilter = btn.dataset.filterDate;

      if (filterState.dateFilter === 'CUSTOM') {
        const page = document.querySelector('.page');
        if (page) {
          page.outerHTML = renderTransactionsPage(state);
          attachTransactionsListeners(refreshData);
        }
      } else {
        updateList();
      }
    };
  });

  // Custom date picker
  const customDateInput = document.getElementById('tx-custom-date');
  if (customDateInput) {
    customDateInput.onchange = (e) => {
      filterState.customDate = e.target.value;
      updateList();
    };
  }

  // Category dropdown filter
  const categoryFilterSelect = document.getElementById('tx-category-filter');
  if (categoryFilterSelect) {
    categoryFilterSelect.onchange = (e) => {
      filterState.categoryFilter = e.target.value;
      updateList();
    };
  }



  attachItemListeners(refreshData);
}

function attachItemListeners(refreshData) {
  const container = document.getElementById('tx-list-container');
  if (!container) return;

  container.querySelectorAll('.tl-row, .transaction-item').forEach(row => {
    row.onclick = () => {
      const txId = row.dataset.txId;
      const tx = state.transactions.find(t => t.id === txId);
      if (!tx) return;
      openTransactionDetailsModal(tx, refreshData);
    };
  });
}

export function openTransactionDetailsModal(tx, onSaveSuccess) {
  const currentType = tx.type || 'EXPENSE';
  const accounts = state.accounts || [];

  const typeLabel = currentType === 'INCOME' ? 'Income' : currentType === 'EXPENSE' ? 'Expense' : 'Transfer';

  const getAccountOptions = (selectedId) => {
    return accounts.map(a => `
      <option value="${a.id}" ${selectedId === a.id ? 'selected' : ''}>
        ${a.icon || '🏦'} ${escapeHtml(a.name)}
      </option>
    `).join('');
  };

  const renderCategoryOptions = (type, selectedCat) => {
    if (type === 'TRANSFER') {
      return `<option value="Transfer" selected>Transfer</option>`;
    }
    const list = type === 'INCOME' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES;
    return list.map(c => `
      <option value="${c.value}" ${selectedCat === c.value ? 'selected' : ''}>
        ${escapeHtml(c.label)}
      </option>
    `).join('');
  };

  const renderAccountFields = (type) => {
    if (type === 'INCOME') {
      return `
        <div class="form-group">
          <label class="form-label" for="details-tx-account">Account</label>
          <select id="details-tx-account" class="form-select" required>
            ${getAccountOptions(tx.destinationAccountId || (accounts[0] && accounts[0].id))}
          </select>
        </div>
      `;
    } else if (type === 'EXPENSE') {
      return `
        <div class="form-group">
          <label class="form-label" for="details-tx-account">Account</label>
          <select id="details-tx-account" class="form-select" required>
            ${getAccountOptions(tx.sourceAccountId || (accounts[0] && accounts[0].id))}
          </select>
        </div>
      `;
    } else {
      return `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div class="form-group">
            <label class="form-label" for="details-tx-from-account">From Account</label>
            <select id="details-tx-from-account" class="form-select" required>
              ${getAccountOptions(tx.sourceAccountId || (accounts[0] && accounts[0].id))}
            </select>
          </div>
          <div class="form-group">
            <label class="form-label" for="details-tx-to-account">To Account</label>
            <select id="details-tx-to-account" class="form-select" required>
              ${getAccountOptions(tx.destinationAccountId || (accounts[1] ? accounts[1].id : accounts[0]?.id))}
            </select>
          </div>
        </div>
      `;
    }
  };

  const emoji = tx.type === 'TRANSFER' ? '↔' : (tx.type === 'INCOME' ? '💰' : getCategoryEmoji(tx.category));
  const timeStr = tx.createdAt ? formatTime(tx.createdAt) : '12:00 PM';
  const dateStr = formatDate(tx.date);

  const content = `
    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color);">
      <div style="width: 44px; height: 44px; border-radius: var(--radius-lg); background: var(--bg-tertiary); display: flex; align-items: center; justify-content: center; font-size: 22px;">
        ${emoji}
      </div>
      <div>
        <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-tertiary); text-transform: uppercase; letter-spacing: 0.05em;">Transaction</div>
        <div style="font-size: 1.125rem; font-weight: 800; color: var(--text-primary);">${escapeHtml(tx.reason || tx.category || 'Transaction')}</div>
      </div>
    </div>

    <form id="details-tx-form" novalidate>
      <div class="form-group">
        <label class="form-label" for="details-tx-reason">Reason (Optional)</label>
        <input type="text" id="details-tx-reason" class="form-input" value="${escapeHtml(tx.reason || '')}" placeholder="Reason (Optional)" />
      </div>

      <div class="form-group">
        <label class="form-label">Type</label>
        <div class="form-input" style="background: var(--bg-tertiary); color: var(--text-primary); font-weight: 600; opacity: 0.9; cursor: not-allowed; display: flex; align-items: center; justify-content: space-between;">
          <span>${typeLabel}</span>
          <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 500;">🔒</span>
        </div>
      </div>

      <div id="details-account-container">
        ${renderAccountFields(currentType)}
      </div>

      <div class="form-group">
        <label class="form-label" for="details-tx-category">Category</label>
        <select id="details-tx-category" class="form-select">
          ${renderCategoryOptions(currentType, tx.category)}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Amount</label>
        <div class="form-input" style="background: var(--bg-tertiary); color: var(--text-primary); font-weight: 700; opacity: 0.9; cursor: not-allowed; display: flex; align-items: center; justify-content: space-between;">
          <span>${formatCurrency(tx.amount)}</span>
          <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 500;">🔒 Read-only</span>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
        <div class="form-group">
          <label class="form-label">Date</label>
          <div class="form-input" style="background: var(--bg-tertiary); color: var(--text-primary); opacity: 0.9; cursor: not-allowed; display: flex; align-items: center; justify-content: space-between;">
            <span>📅 ${dateStr}</span>
            <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 500;">🔒</span>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label">Time</label>
          <div class="form-input" style="background: var(--bg-tertiary); color: var(--text-primary); opacity: 0.9; cursor: not-allowed; display: flex; align-items: center; justify-content: space-between;">
            <span>⏰ ${timeStr}</span>
            <span style="font-size: 0.75rem; color: var(--text-tertiary); font-weight: 500;">🔒</span>
          </div>
        </div>
      </div>

      <div style="display: flex; gap: 12px; margin-top: 24px;">
        <button type="button" class="btn btn-outline" id="details-tx-cancel" style="flex: 1;">Cancel</button>
        <button type="submit" class="btn btn-primary" id="details-tx-save" style="flex: 1;">Save Changes</button>
      </div>
    </form>
  `;

  openModal({
    title: 'Transaction Details',
    content,
    onOpen: (modal) => {
      const categorySelect = modal.querySelector('#details-tx-category');
      const cancelBtn = modal.querySelector('#details-tx-cancel');
      const form = modal.querySelector('#details-tx-form');

      cancelBtn.onclick = () => closeModal();

      form.onsubmit = async (e) => {
        e.preventDefault();
        const newReason = modal.querySelector('#details-tx-reason').value.trim();
        const newCategory = categorySelect ? categorySelect.value : tx.category;

        // Reason is optional

        const submitBtn = modal.querySelector('#details-tx-save');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner"></span> Saving...`;

        try {
          const uid = state.user?.uid;
          const payload = {
            amount: tx.amount,
            date: tx.date,
            reason: newReason,
            type: currentType,
            category: newCategory,
            notes: tx.notes || ''
          };

          if (currentType === 'INCOME') {
            const accSelect = modal.querySelector('#details-tx-account');
            payload.destinationAccountId = accSelect ? accSelect.value : tx.destinationAccountId;
          } else if (currentType === 'EXPENSE') {
            const accSelect = modal.querySelector('#details-tx-account');
            payload.sourceAccountId = accSelect ? accSelect.value : tx.sourceAccountId;
          } else if (currentType === 'TRANSFER') {
            const fromSelect = modal.querySelector('#details-tx-from-account');
            const toSelect = modal.querySelector('#details-tx-to-account');
            payload.sourceAccountId = fromSelect ? fromSelect.value : tx.sourceAccountId;
            payload.destinationAccountId = toSelect ? toSelect.value : tx.destinationAccountId;
          }

          await updateTransaction(uid, tx.id, payload);

          // Update local state object
          Object.assign(tx, payload);

          closeModal();
          toast.success('✅ Transaction updated successfully!');
          if (onSaveSuccess) onSaveSuccess();
        } catch (err) {
          console.error(err);
          toast.error('Unable to save transaction details.');
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Save Changes';
        }
      };
    }
  });
}
