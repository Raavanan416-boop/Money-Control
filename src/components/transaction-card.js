// ============================================
// 💰 Money Control V2 — Transaction Card Component
// ============================================

import { formatCurrency, formatDate, formatTime, getCategoryEmoji, escapeHtml } from '../utils/formatters.js';

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

  let iconEmoji = '💰';
  let accountLabel = '';
  let sign = '';

  if (isIncome) {
    iconEmoji = '💰';
    sign = '+';
    const destName = getAccName(tx.destinationAccountId);
    accountLabel = destName ? `→ ${destName}` : '';
  } else if (isExpense) {
    iconEmoji = getCategoryEmoji(tx.category);
    sign = '-';
    const srcName = getAccName(tx.sourceAccountId);
    accountLabel = srcName ? `← ${srcName}` : '';
  } else if (isTransfer) {
    iconEmoji = '🔄';
    sign = '↔ ';
    const srcName = getAccName(tx.sourceAccountId) || 'Source';
    const destName = getAccName(tx.destinationAccountId) || 'Dest';
    accountLabel = `${srcName} → ${destName}`;
  }

  return `
    <div class="transaction-item animate-fade-in" data-tx-id="${tx.id}">
      <div class="transaction-icon ${typeClass}">
        ${iconEmoji}
      </div>
      <div class="transaction-details">
        <div class="transaction-reason">
          ${escapeHtml(tx.reason) || (isTransfer ? 'Account Transfer' : 'No reason')}
        </div>
        <div class="transaction-meta">
          <span class="transaction-category" style="font-weight: 600; color: ${isTransfer ? 'var(--primary)' : 'var(--text-secondary)'};">
            ${isTransfer ? '🔄 Transfer' : (escapeHtml(tx.category) || '')}
          </span>
          ${accountLabel ? `
            <span class="transaction-dot"></span>
            <span style="font-weight: 500; color: var(--text-primary);">${escapeHtml(accountLabel)}</span>
          ` : ''}
          ${showDate ? `
            <span class="transaction-dot"></span>
            <span>${formatDate(tx.date)}</span>
          ` : ''}
          ${tx.createdAt ? `
            <span class="transaction-dot"></span>
            <span>${formatTime(tx.createdAt)}</span>
          ` : ''}
        </div>
        ${showNotes && tx.notes ? `
          <div class="transaction-meta" style="margin-top: 4px; font-style: italic;">
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
