// ============================================
// 💰 Money Control V2 — Transactions Page
// ============================================

import {
  formatCurrency,
  getTodayDate,
  getWeekRange,
  EXPENSE_CATEGORIES,
  INCOME_CATEGORIES
} from '../utils/formatters.js';
import { renderTransactionItem, renderTransactionList } from '../components/transaction-card.js';
import { renderEmptyTransactions, renderEmptySearch } from '../components/empty-state.js';
import { openAddTransactionModal, openTransferModal, openEditTransactionModal, openEditTransferModal, handleDeleteTransaction } from './dashboard.js';
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
      <div class="card card-flat" style="padding: 0;" id="tx-list-container">
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
  return renderTransactionList(filtered, { showActions: false, showDate: true, showNotes: true, accounts: state.accounts });
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
  document.querySelectorAll('#tx-list-container .transaction-action-btn[data-action]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const action = btn.dataset.action;
      const txId = btn.dataset.txId;
      const tx = state.transactions.find(t => t.id === txId);
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
