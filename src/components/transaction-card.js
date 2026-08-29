// ============================================
// 💰 Money Control V2 — Transaction Card Component
// ============================================

import { formatCurrency, formatDate, formatTime, getRelativeDate, getCategoryEmoji, escapeHtml } from '../utils/formatters.js';

/**
 * Render a single transaction item (INCOME, EXPENSE, TRANSFER)
 */
export function renderTransactionItem(tx, options = {}) {
  const { showActions = false, showDate = true, showNotes = false, accounts = [] } = options;

  const isIncome = tx.type === 'INCOME';
  const isExpense = tx.type === 'EXPENSE';
  const isTransfer = tx.type === 'TRANSFER';

  const typeClass = isIncome ? 'income' : isExpense ? 'expense' : 'balance';

  // Account name lookup
  const getAccName = (id) => {
    const acc = accounts.find(a => a.id === id);
    return acc ? acc.name : '';
  };

  let typeBadge = '🔴';
  let accountName = '';
  let sign = '';

  if (isIncome) {
    typeBadge = '🟢';
    sign = '+';
    accountName = getAccName(tx.destinationAccountId) || 'Account';
  } else if (isExpense) {
    typeBadge = '🔴';
    sign = '−';
    accountName = getAccName(tx.sourceAccountId) || 'Account';
  } else if (isTransfer) {
    typeBadge = '🟣';
    sign = '↕';
    const srcName = getAccName(tx.sourceAccountId) || 'Source';
    const destName = getAccName(tx.destinationAccountId) || 'Dest';
    accountName = `${srcName} → ${destName}`;
  }

  const relativeDateStr = getRelativeDate(tx.date);
  const subtitleStr = `${accountName} • ${relativeDateStr}`;

  return `
    <div class="transaction-item animate-fade-in" data-tx-id="${tx.id}">
      <div class="transaction-type-badge ${typeClass}">
        ${typeBadge}
      </div>
      <div class="transaction-details">
        <div class="transaction-reason">
          ${escapeHtml(tx.reason) || (isTransfer ? 'Account Transfer' : escapeHtml(tx.category) || 'Transaction')}
        </div>
        <div class="transaction-meta">
          <span>${escapeHtml(subtitleStr)}</span>
        </div>
        ${showNotes && tx.notes ? `
          <div class="transaction-notes-sub">
            ${escapeHtml(tx.notes)}
          </div>
        ` : ''}
      </div>
      <div class="transaction-amount">
        <div class="transaction-amount-value ${typeClass}" style="${isTransfer ? 'color: var(--primary);' : ''}">
          ${sign}${formatCurrency(tx.amount)}
        </div>
      </div>
      ${showActions ? `
        <div class="transaction-actions">
          <button class="transaction-action-btn edit" data-action="edit" data-tx-id="${tx.id}" title="Edit">✏️</button>
          <button class="transaction-action-btn delete" data-action="delete" data-tx-id="${tx.id}" title="Delete">🗑️</button>
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * Render a list of transactions
 */
export function renderTransactionList(transactions, options = {}) {
  if (!transactions || transactions.length === 0) {
    return '';
  }
  return transactions.map(tx => renderTransactionItem(tx, options)).join('');
}
