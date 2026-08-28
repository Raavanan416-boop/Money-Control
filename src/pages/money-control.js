// ============================================
// 💰 Money Control V2 — Date-wise Money Control Component
// ============================================

import {
  formatCurrency,
  formatDateLong,
  getTodayDate
} from '../utils/formatters.js';
import {
  calculateDailyTotals,
  calculateWeeklyTotals,
  calculateMonthlyTotals
} from '../utils/calculations.js';
import { renderTransactionList } from '../components/transaction-card.js';
import { renderEmptyDate } from '../components/empty-state.js';
import { openEditTransactionModal, openEditTransferModal, handleDeleteTransaction } from './dashboard.js';

let state = {
  user: null,
  profile: null,
  accounts: [],
  transactions: []
};

let viewMode = 'DAY';
let selectedDate = getTodayDate();
let selectedMonth = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`;

/**
 * Render Money Control HTML
 */
export function renderMoneyControlPage(appState) {
  state = { ...state, ...appState };

  let summaryHTML = '';
  let txListHTML = '';

  if (viewMode === 'DAY') {
    const daily = calculateDailyTotals(state.transactions, selectedDate);
    summaryHTML = `
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Money Added</div>
          <div class="daily-summary-value income">${formatCurrency(daily.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Money Spent</div>
          <div class="daily-summary-value expense">${formatCurrency(daily.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${formatCurrency(daily.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Change</div>
          <div class="daily-summary-value ${daily.net >= 0 ? 'net-positive' : 'net-negative'}">
            ${daily.net >= 0 ? '+' : ''}${formatCurrency(daily.net)}
          </div>
        </div>
      </div>
    `;
    txListHTML = daily.transactions.length > 0
      ? renderTransactionList(daily.transactions, { showActions: true, showDate: false, accounts: state.accounts })
      : renderEmptyDate();
  } else if (viewMode === 'WEEK') {
    const weekly = calculateWeeklyTotals(state.transactions, selectedDate);
    summaryHTML = `
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Weekly Income</div>
          <div class="daily-summary-value income">${formatCurrency(weekly.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Weekly Expenses</div>
          <div class="daily-summary-value expense">${formatCurrency(weekly.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${formatCurrency(weekly.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Savings</div>
          <div class="daily-summary-value ${weekly.net >= 0 ? 'net-positive' : 'net-negative'}">
            ${weekly.net >= 0 ? '+' : ''}${formatCurrency(weekly.net)}
          </div>
        </div>
      </div>
    `;
    txListHTML = weekly.transactions.length > 0
      ? renderTransactionList(weekly.transactions, { showActions: true, showDate: true, accounts: state.accounts })
      : renderEmptyDate();
  } else if (viewMode === 'MONTH') {
    const monthly = calculateMonthlyTotals(state.transactions, selectedMonth);
    summaryHTML = `
      <div class="daily-summary" style="grid-template-columns: repeat(4, 1fr);">
        <div class="daily-summary-item">
          <div class="daily-summary-label">Monthly Income</div>
          <div class="daily-summary-value income">${formatCurrency(monthly.added)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Monthly Expenses</div>
          <div class="daily-summary-value expense">${formatCurrency(monthly.spent)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Transferred</div>
          <div class="daily-summary-value" style="color: var(--primary);">${formatCurrency(monthly.transferred)}</div>
        </div>
        <div class="daily-summary-item">
          <div class="daily-summary-label">Net Savings</div>
          <div class="daily-summary-value ${monthly.net >= 0 ? 'net-positive' : 'net-negative'}">
            ${monthly.net >= 0 ? '+' : ''}${formatCurrency(monthly.net)}
          </div>
        </div>
      </div>
    `;
    txListHTML = monthly.transactions.length > 0
      ? renderTransactionList(monthly.transactions, { showActions: true, showDate: true, accounts: state.accounts })
      : renderEmptyDate();
  }

  return `
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Date-wise Money Control 📅</h1>
        <p class="page-subtitle">Track income, expenses, and account transfers on any specific date.</p>
      </div>

      <!-- View Switcher Tabs -->
      <div class="tabs">
        <div class="tab ${viewMode === 'DAY' ? 'active' : ''}" data-view="DAY">Day View</div>
        <div class="tab ${viewMode === 'WEEK' ? 'active' : ''}" data-view="WEEK">Week View</div>
        <div class="tab ${viewMode === 'MONTH' ? 'active' : ''}" data-view="MONTH">Month View</div>
      </div>

      <!-- Date Controls -->
      <div class="card card-flat" style="margin-bottom: var(--space-6); padding: var(--space-4);">
        ${viewMode === 'MONTH' ? `
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px;">
            <label class="form-label" style="margin: 0; font-weight: var(--fw-semibold);">Select Month:</label>
            <input type="month" id="mc-month-picker" class="form-input" style="width: auto;" value="${selectedMonth}" />
          </div>
        ` : `
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
            <div>
              <span style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">
                ${viewMode === 'DAY' ? 'Selected Date' : 'Week Containing'}
              </span>
              <div style="font-size: var(--fs-lg); font-weight: var(--fw-bold);">${formatDateLong(selectedDate)}</div>
            </div>
            <input type="date" id="mc-date-picker" class="form-input" style="width: auto;" value="${selectedDate}" />
          </div>
        `}
      </div>

      <!-- Activity List for Date -->
      <div class="card card-flat" style="padding: 0; margin-bottom: var(--space-6);">
        ${txListHTML}
      </div>

      <!-- Daily / Summary Breakdown -->
      ${summaryHTML}
    </div>
  `;
}

/**
 * Attach Money Control Listeners
 */
export function attachMoneyControlListeners(refreshData) {
  // Tabs
  document.querySelectorAll('.tab[data-view]').forEach(tab => {
    tab.onclick = () => {
      viewMode = tab.dataset.view;
      const page = document.querySelector('.page');
      if (page) {
        page.outerHTML = renderMoneyControlPage(state);
        attachMoneyControlListeners(refreshData);
      }
    };
  });

  // Date picker
  const datePicker = document.getElementById('mc-date-picker');
  if (datePicker) {
    datePicker.onchange = (e) => {
      selectedDate = e.target.value;
      const page = document.querySelector('.page');
      if (page) {
        page.outerHTML = renderMoneyControlPage(state);
        attachMoneyControlListeners(refreshData);
      }
    };
  }

  // Month picker
  const monthPicker = document.getElementById('mc-month-picker');
  if (monthPicker) {
    monthPicker.onchange = (e) => {
      selectedMonth = e.target.value;
      const page = document.querySelector('.page');
      if (page) {
        page.outerHTML = renderMoneyControlPage(state);
        attachMoneyControlListeners(refreshData);
      }
    };
  }

  // Edit / Delete buttons
  document.querySelectorAll('.transaction-action-btn[data-action]').forEach(btn => {
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
