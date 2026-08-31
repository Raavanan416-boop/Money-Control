// ============================================
// 💰 Money Control — Total Money History Page
// ============================================

import {
  formatCurrency,
  formatDate,
  formatTime,
  getRelativeDate
} from '../utils/formatters.js';
import { calculateTotalMoneyHistory } from '../utils/calculations.js';
import { openModal } from '../components/modal.js';

let historyPageState = {
  accounts: [],
  transactions: []
};

/**
 * Render Total Money History Page HTML
 */
export function renderTotalMoneyHistoryPage(state) {
  historyPageState = { ...historyPageState, ...state };
  const { accounts, transactions } = historyPageState;

  const { startingTotal, currentTotal, history } = calculateTotalMoneyHistory(accounts, transactions);

  return `
    <div class="page animate-fade-in total-money-history-page">
      <!-- 1. Header with Back Button -->
      <div class="tmh-header">
        <button class="btn btn-ghost tmh-back-btn" id="tmh-back-btn" aria-label="Back to Dashboard">
          <span style="font-size: 1.2rem;">←</span> Back
        </button>
        <h1 class="tmh-title">Total Money History</h1>
      </div>

      <!-- 2. Current Total Hero Card -->
      <div class="balance-card tmh-hero-card">
        <div class="balance-label">💰 TOTAL MONEY HISTORY</div>
        <div class="balance-amount">${formatCurrency(currentTotal)}</div>
        <div class="balance-subtitle">Current Total • Across ${accounts.length} account${accounts.length === 1 ? '' : 's'}</div>
      </div>

      <!-- 3. Timeline Container -->
      <div class="tmh-timeline-container">
        ${history.length > 0 ? renderTimelineItems(history, startingTotal) : renderEmptyHistoryState(startingTotal, currentTotal)}
      </div>
    </div>
  `;
}

/**
 * Render timeline items with connecting arrows
 */
function renderTimelineItems(history, startingTotal) {
  return `
    <div class="tmh-timeline">
      ${history.map((item, index) => {
        const isTransfer = item.type === 'TRANSFER';
        const formattedDate = formatDate(item.date);
        const relativeDate = getRelativeDate(item.date);
        const dateDisplay = relativeDate === formattedDate ? formattedDate : `${relativeDate} (${formattedDate})`;

        return `
          <div class="tmh-timeline-step">
            <!-- Upward Connector Arrow before item -->
            <div class="tmh-connector">
              <span class="tmh-connector-line"></span>
              <span class="tmh-connector-arrow">↑</span>
            </div>

            <!-- History Item Card -->
            <div class="card tmh-item-card" data-tx-id="${item.id}" tabindex="0" role="button" aria-label="View transaction details">
              <div class="tmh-item-header">
                <span class="tmh-item-date">${dateDisplay}</span>
                <span class="tmh-badge tmh-badge-${item.type.toLowerCase()}">${item.typeLabel}</span>
              </div>

              <div class="tmh-item-body">
                <div class="tmh-item-total">
                  <span class="tmh-total-label">${isTransfer ? 'Total Balance' : 'New Total'}</span>
                  <span class="tmh-total-amount">${formatCurrency(item.newTotal)}</span>
                </div>

                <div class="tmh-item-change">
                  <span class="tmh-change-label">${item.reason || item.typeLabel}</span>
                  ${isTransfer ? `
                    <span class="tmh-change-amount" style="color: var(--primary-light);">
                      Total unchanged: ${formatCurrency(item.newTotal)}
                    </span>
                  ` : `
                    <span class="tmh-change-amount" style="color: ${item.amountColor};">
                      ${item.amountSign}${formatCurrency(item.amount)}
                    </span>
                  `}
                </div>

                ${item.accountName ? `
                  <div class="tmh-item-account">
                    <span>${isTransfer ? '🔄' : '🏦'} ${item.accountName}</span>
                  </div>
                ` : ''}
              </div>

              <div class="tmh-item-footer">
                <span class="tmh-tap-hint">Tap for full details →</span>
              </div>
            </div>
          </div>
        `;
      }).join('')}

      <!-- Bottom Connector to Starting Total -->
      <div class="tmh-connector">
        <span class="tmh-connector-line"></span>
        <span class="tmh-connector-arrow">↑ Starting Balance</span>
      </div>

      <!-- 4. Starting Total Card (At Bottom) -->
      <div class="card tmh-starting-card">
        <div class="tmh-starting-icon">🏁</div>
        <div class="tmh-starting-info">
          <div class="tmh-starting-label">STARTING TOTAL</div>
          <div class="tmh-starting-subtitle">Initial balance when tracking started</div>
        </div>
        <div class="tmh-starting-amount">${formatCurrency(startingTotal)}</div>
      </div>
    </div>
  `;
}

/**
 * Render empty state when there are no transactions
 */
function renderEmptyHistoryState(startingTotal, currentTotal) {
  return `
    <div class="tmh-empty-state card card-flat">
      <div class="tmh-empty-icon">📊</div>
      <h3 class="tmh-empty-title">No money activity yet</h3>
      <p class="tmh-empty-desc">
        When you add income, record expenses, or transfer money between accounts, your Total Money History timeline will appear here.
      </p>

      <div class="tmh-starting-card" style="margin-top: 20px; width: 100%;">
        <div class="tmh-starting-icon">🏁</div>
        <div class="tmh-starting-info">
          <div class="tmh-starting-label">STARTING TOTAL</div>
          <div class="tmh-starting-subtitle">Current Total = Starting Total</div>
        </div>
        <div class="tmh-starting-amount">${formatCurrency(startingTotal)}</div>
      </div>
    </div>
  `;
}

/**
 * Attach Event Listeners for Total Money History Page
 */
export function attachTotalMoneyHistoryListeners(navigateFn) {
  // Back button click handler
  const backBtn = document.getElementById('tmh-back-btn');
  if (backBtn) {
    backBtn.onclick = () => {
      navigateFn('dashboard');
    };
  }

  // Click on any history card to view full transaction details
  const cards = document.querySelectorAll('.tmh-item-card[data-tx-id]');
  cards.forEach(card => {
    const handler = () => {
      const txId = card.dataset.txId;
      const { history } = calculateTotalMoneyHistory(historyPageState.accounts, historyPageState.transactions);
      const item = history.find(h => h.id === txId);
      if (item) {
        showTransactionDetailsModal(item);
      }
    };

    card.onclick = handler;
    card.onkeydown = (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handler();
      }
    };
  });
}

/**
 * Show Modal for full transaction details
 */
function showTransactionDetailsModal(item) {
  const isIncome = item.type === 'INCOME';
  const isExpense = item.type === 'EXPENSE';
  const isTransfer = item.type === 'TRANSFER';

  let title = 'Transaction Details';
  if (isIncome) title = '💰 INCOME DETAILS';
  else if (isExpense) title = '💸 EXPENSE DETAILS';
  else if (isTransfer) title = '🔄 TRANSFER DETAILS';

  const dateStr = formatDate(item.date);
  const timeStr = item.createdAt ? formatTime(item.createdAt) : '';

  const content = `
    <div class="tmh-detail-modal">
      <div class="tmh-detail-row">
        <span class="tmh-detail-label">Date</span>
        <span class="tmh-detail-value">${dateStr}</span>
      </div>

      ${timeStr ? `
        <div class="tmh-detail-row">
          <span class="tmh-detail-label">Time</span>
          <span class="tmh-detail-value">${timeStr}</span>
        </div>
      ` : ''}

      <div class="tmh-detail-row">
        <span class="tmh-detail-label">Previous Total</span>
        <span class="tmh-detail-value font-mono">${formatCurrency(item.previousTotal)}</span>
      </div>

      <div class="tmh-detail-row highlight">
        <span class="tmh-detail-label">${item.typeLabel}</span>
        ${isTransfer ? `
          <span class="tmh-detail-value" style="color: var(--primary-light); font-weight: 700;">
            ${formatCurrency(item.amount)} (Total Unchanged)
          </span>
        ` : `
          <span class="tmh-detail-value" style="color: ${item.amountColor}; font-weight: 700;">
            ${item.amountSign}${formatCurrency(item.amount)}
          </span>
        `}
      </div>

      ${item.accountName ? `
        <div class="tmh-detail-row">
          <span class="tmh-detail-label">Account</span>
          <span class="tmh-detail-value">${item.accountName}</span>
        </div>
      ` : ''}

      ${item.reason ? `
        <div class="tmh-detail-row">
          <span class="tmh-detail-label">Description</span>
          <span class="tmh-detail-value">${item.reason}</span>
        </div>
      ` : ''}

      ${item.category ? `
        <div class="tmh-detail-row">
          <span class="tmh-detail-label">Category</span>
          <span class="tmh-detail-value">${item.category}</span>
        </div>
      ` : ''}

      ${item.notes ? `
        <div class="tmh-detail-row">
          <span class="tmh-detail-label">Notes</span>
          <span class="tmh-detail-value">${item.notes}</span>
        </div>
      ` : ''}

      <div class="tmh-detail-divider"></div>

      <div class="tmh-detail-row new-total-row">
        <span class="tmh-detail-label">New Total</span>
        <span class="tmh-detail-value font-mono">${formatCurrency(item.newTotal)}</span>
      </div>
    </div>
  `;

  openModal({
    title,
    content
  });
}
