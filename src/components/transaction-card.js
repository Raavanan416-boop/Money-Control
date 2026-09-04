// ============================================
// 💰 Money Control V2 — Transaction Card Component
// ============================================

import { formatCurrency, getTodayDate, getShortMonthName, getCategoryEmoji, escapeHtml, getRelativeDate } from '../utils/formatters.js';

// ─── helpers ────────────────────────────────────────────────────────────────

/** Returns "Today, 4 Sep" / "Yesterday, 3 Sep" / "28 Aug 2025" */
function formatGroupLabel(dateStr) {
  if (!dateStr) return 'Unknown Date';
  const today = getTodayDate();
  const parts = dateStr.split('-');
  if (parts.length < 3) return dateStr;
  const [y, m, d] = parts.map(Number);
  const monthName = getShortMonthName(m - 1);

  const todayParts = today.split('-').map(Number);
  const yest = new Date(todayParts[0], todayParts[1] - 1, todayParts[2]);
  yest.setDate(yest.getDate() - 1);
  const yesterdayStr = `${yest.getFullYear()}-${String(yest.getMonth() + 1).padStart(2, '0')}-${String(yest.getDate()).padStart(2, '0')}`;

  if (dateStr === today)         return `Today, ${d} ${monthName}`;
  if (dateStr === yesterdayStr)  return `Yesterday, ${d} ${monthName}`;
  return `${d} ${monthName} ${y}`;
}

/** Emoji icon for a transaction */
function txIcon(tx) {
  if (tx.type === 'TRANSFER') return '↔';
  if (tx.type === 'INCOME') {
    const map = { 'Pocket Money': '👛', 'Salary': '💼', 'Gift': '🎁', 'Freelance': '🖥️', 'Refund': '↩', 'Other': '💰' };
    return map[tx.category] || '💰';
  }
  return getCategoryEmoji(tx.category);
}

// ─── single timeline row ─────────────────────────────────────────────────────

function renderTimelineRow(tx, accounts, isLast) {
  const isIncome   = tx.type === 'INCOME';
  const isExpense  = tx.type === 'EXPENSE';
  const isTransfer = tx.type === 'TRANSFER';
  const typeKey    = isIncome ? 'income' : isExpense ? 'expense' : 'transfer';

  const getAccName = (id) => { const acc = accounts.find(a => a.id === id); return acc ? acc.name : ''; };

  const title = escapeHtml(
    tx.reason || (isTransfer ? 'Account Transfer' : tx.category || 'Transaction')
  );

  let subtitle = '';
  if (isIncome) {
    const acc = getAccName(tx.destinationAccountId);
    subtitle = [tx.category, acc].filter(Boolean).join(' · ');
  } else if (isExpense) {
    const acc = getAccName(tx.sourceAccountId);
    subtitle = [tx.category, acc].filter(Boolean).join(' · ');
  } else {
    const src  = getAccName(tx.sourceAccountId);
    const dest = getAccName(tx.destinationAccountId);
    const route = (src && dest) ? `${src} → ${dest}` : (src || dest || '');
    subtitle = [route, 'Transfer'].filter(Boolean).join(' · ');
  }

  let amountStr = '';
  if (isIncome)        amountStr = `+${formatCurrency(tx.amount)}`;
  else if (isExpense)  amountStr = `−${formatCurrency(tx.amount)}`;
  else                 amountStr = formatCurrency(tx.amount);

  const icon = txIcon(tx);
  const notesBadge = tx.notes
    ? `<span class="tl-notes-badge">${escapeHtml(tx.notes)}</span>`
    : '';

  return `
    <div class="tl-row animate-fade-in" data-tx-id="${tx.id}">
      <div class="tl-spine">
        <div class="tl-dot tl-dot--${typeKey}"></div>
        ${!isLast ? '<div class="tl-line"></div>' : ''}
      </div>
      <div class="tl-icon tl-icon--${typeKey}" aria-hidden="true">${icon}</div>
      <div class="tl-details">
        <div class="tl-title">${title}</div>
        <div class="tl-meta">${escapeHtml(subtitle)}${notesBadge}</div>
      </div>
      <div class="tl-right">
        <div class="tl-amount tl-amount--${typeKey}">${amountStr}</div>
        <div class="tl-actions">
          <button class="transaction-action-btn tl-action-btn edit"
                  data-action="edit" data-tx-id="${tx.id}" title="Edit">✏️</button>
          <button class="transaction-action-btn tl-action-btn delete"
                  data-action="delete" data-tx-id="${tx.id}" title="Delete">🗑️</button>
        </div>
      </div>
    </div>
  `;
}

// ─── date group header ────────────────────────────────────────────────────────

function renderGroupHeader(dateStr) {
  const label = formatGroupLabel(dateStr);
  return `
    <div class="tl-group-header">
      <span class="tl-group-label">${label}</span>
    </div>
  `;
}

// ─── public: grouped timeline list (Txns page) ───────────────────────────────

export function renderTransactionList(transactions, options = {}) {
  if (!transactions || transactions.length === 0) return '';

  const { accounts = [] } = options;

  // Group by date
  const grouped = {};
  const order   = [];
  transactions.forEach(tx => {
    const key = tx.date || 'unknown';
    if (!grouped[key]) { grouped[key] = []; order.push(key); }
    grouped[key].push(tx);
  });

  let html = '<div class="tl-container">';
  order.forEach(dateKey => {
    const group = grouped[dateKey];
    html += renderGroupHeader(dateKey);
    html += '<div class="tl-group">';
    group.forEach((tx, idx) => {
      html += renderTimelineRow(tx, accounts, idx === group.length - 1);
    });
    html += '</div>';
  });
  html += '</div>';
  return html;
}

// ─── public: single item (dashboard recent-activity strip) ───────────────────

export function renderTransactionItem(tx, options = {}) {
  const { showActions = false, showNotes = false, accounts = [] } = options;

  const isIncome   = tx.type === 'INCOME';
  const isExpense  = tx.type === 'EXPENSE';
  const isTransfer = tx.type === 'TRANSFER';
  const typeClass  = isIncome ? 'income' : isExpense ? 'expense' : 'balance';

  const getAccName = (id) => { const acc = accounts.find(a => a.id === id); return acc ? acc.name : ''; };

  let typeBadge = '🔴', accountName = '', sign = '';
  if (isIncome)        { typeBadge = '🟢'; sign = '+'; accountName = getAccName(tx.destinationAccountId) || 'Account'; }
  else if (isExpense)  { typeBadge = '🔴'; sign = '−'; accountName = getAccName(tx.sourceAccountId)      || 'Account'; }
  else if (isTransfer) { typeBadge = '🟣'; sign = '↕'; accountName = `${getAccName(tx.sourceAccountId) || 'Source'} → ${getAccName(tx.destinationAccountId) || 'Dest'}`; }

  return `
    <div class="transaction-item animate-fade-in" data-tx-id="${tx.id}">
      <div class="transaction-type-badge ${typeClass}">${typeBadge}</div>
      <div class="transaction-details">
        <div class="transaction-reason">
          ${escapeHtml(tx.reason) || (isTransfer ? 'Account Transfer' : escapeHtml(tx.category) || 'Transaction')}
        </div>
        <div class="transaction-meta"><span>${escapeHtml(accountName)}</span></div>
        ${showNotes && tx.notes ? `<div class="transaction-notes-sub">${escapeHtml(tx.notes)}</div>` : ''}
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
        </div>` : ''}
    </div>
  `;
}

