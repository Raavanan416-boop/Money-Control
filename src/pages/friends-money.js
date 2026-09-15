// ============================================
// 🤝 Money Control — Friends Money Page Component
// ============================================

import { formatCurrency, formatDate, getTodayDate, escapeHtml } from '../utils/formatters.js';
import { openModal, closeModal, showConfirm } from '../components/modal.js';
import { addFriendMoney, addRepayment, getFriendMoneySummary, getFriendSummaries } from '../services/friends-money.js';
import { toast } from '../utils/toast.js';

let pageState = {
  user: null,
  accounts: [],
  friendMoneyRecords: []
};

let activeFilter = 'all';
let searchQuery = '';
let detailFriend = null; // null = list view, string = friend name detail view

// Predefined reason options for Friends Money
const FRIEND_MONEY_REASONS = {
  GAVE: [
    '🚌 Travel / Ticket',
    '🍔 Food',
    '🎓 College / Education',
    '💳 Fees',
    '💊 Medical',
    '🛍️ Shopping',
    '💰 Emergency',
    '🤝 Help',
    '🎁 Gift',
    '📱 Recharge / Bill',
    '🏠 Personal',
    '💵 Other'
  ],
  BORROWED: [
    '🚌 Travel / Ticket',
    '🍔 Food',
    '🎓 College / Education',
    '💳 Fees',
    '💊 Medical',
    '🛍️ Shopping',
    '💰 Emergency',
    '🤝 Help',
    '🎁 Gift',
    '📱 Recharge / Bill',
    '🏠 Personal',
    '💵 Other'
  ]
};

/**
 * Generate option HTML for reason dropdown
 */
function renderReasonOptions(type, selectedValue = '') {
  const list = FRIEND_MONEY_REASONS[type] || FRIEND_MONEY_REASONS.GAVE;
  return `
    <option value="" disabled ${!selectedValue ? 'selected' : ''}>Select Reason</option>
    ${list.map(r => `<option value="${escapeHtml(r)}" ${selectedValue === r ? 'selected' : ''}>${escapeHtml(r)}</option>`).join('')}
  `;
}

/**
 * Format reason display for record cards
 */
function formatReasonDisplay(reason) {
  if (!reason) return '';
  const hasEmoji = /\p{Extended_Pictographic}/u.test(reason);
  return hasEmoji ? escapeHtml(reason) : `📝 ${escapeHtml(reason)}`;
}

/**
 * Render Friends Money Page HTML
 */
export function renderFriendsMoneyPage(state) {
  pageState = { ...pageState, ...state };
  const { friendMoneyRecords, accounts } = pageState;
  const records = friendMoneyRecords || [];
  const summary = getFriendMoneySummary(records);

  // If viewing a specific friend's details
  if (detailFriend) {
    return renderFriendDetailView(detailFriend, records, accounts);
  }

  // Filter & search
  const filtered = filterRecords(records, activeFilter, searchQuery);

  return `
    <div class="page animate-fade-in friends-money-page">
      <div class="page-header">
        <h1 class="page-title">Friends Money 🤝</h1>
        <p class="page-subtitle">Track money you gave to or borrowed from friends.</p>
      </div>

      <!-- Summary Cards -->
      <div class="fm-summary-grid">
        <div class="fm-summary-card gave">
          <div class="fm-summary-icon">💚</div>
          <div class="fm-summary-label">They Owe Me</div>
          <div class="fm-summary-amount">${formatCurrency(summary.theyOweMe)}</div>
        </div>
        <div class="fm-summary-card borrowed">
          <div class="fm-summary-icon">💜</div>
          <div class="fm-summary-label">I Owe</div>
          <div class="fm-summary-amount">${formatCurrency(summary.iOwe)}</div>
        </div>
      </div>

      <!-- Search & Filters -->
      <div class="fm-controls">
        <div class="fm-search-wrapper">
          <span class="fm-search-icon">🔍</span>
          <input type="text" class="fm-search-input" id="fm-search" placeholder="Search friend..." value="${escapeHtml(searchQuery)}" />
        </div>
        <div class="fm-filter-tabs">
          <button class="fm-filter-tab ${activeFilter === 'all' ? 'active' : ''}" data-filter="all">All</button>
          <button class="fm-filter-tab ${activeFilter === 'gave' ? 'active' : ''}" data-filter="gave">They Owe Me</button>
          <button class="fm-filter-tab ${activeFilter === 'borrowed' ? 'active' : ''}" data-filter="borrowed">I Owe</button>
          <button class="fm-filter-tab ${activeFilter === 'pending' ? 'active' : ''}" data-filter="pending">Pending</button>
          <button class="fm-filter-tab ${activeFilter === 'settled' ? 'active' : ''}" data-filter="settled">Settled</button>
        </div>
      </div>

      <!-- Add Button -->
      <button class="fm-add-btn" id="fm-add-btn">
        <span>➕</span> Add Friend Money
      </button>

      <!-- Records List -->
      <div class="fm-records-list">
        ${filtered.length > 0 ? filtered.map(r => renderRecordCard(r)).join('') : `
          <div class="fm-empty">
            <div class="fm-empty-icon">🤝</div>
            <div class="fm-empty-title">${searchQuery || activeFilter !== 'all' ? 'No matching records' : 'No friend money records yet'}</div>
            <div class="fm-empty-text">${searchQuery || activeFilter !== 'all' ? 'Try changing your search or filter.' : 'Tap "+ Add Friend Money" to start tracking.'}</div>
          </div>
        `}
      </div>
    </div>
  `;
}

/**
 * Render a single record card
 */
function renderRecordCard(r) {
  const initial = r.friendName ? r.friendName.charAt(0).toUpperCase() : '?';
  const isGave = r.type === 'GAVE';
  const isPending = r.status === 'pending';
  const returnedAmount = Number(r.returnedAmount) || 0;
  const hasRepayments = returnedAmount > 0;

  return `
    <div class="fm-record-card" data-record-id="${r.id}">
      <div class="fm-record-header">
        <div class="fm-record-friend">
          <div class="fm-record-avatar ${isGave ? 'gave' : 'borrowed'}">${initial}</div>
          <div>
            <div class="fm-record-name">${escapeHtml(r.friendName)}</div>
            <div class="fm-record-type ${isGave ? 'gave' : 'borrowed'}">
              ${isGave ? 'You gave' : 'You borrowed'} ${formatCurrency(r.amount)}
            </div>
          </div>
        </div>
        <div class="fm-record-status ${r.status}">
          ${isPending ? '🟠' : '✅'} ${isPending ? 'Pending' : 'Settled'}
        </div>
      </div>

      <div class="fm-record-body">
        <div class="fm-record-amount-row">
          <div class="fm-record-amount">${formatCurrency(r.amount)}</div>
          <div class="fm-record-remaining ${r.status}">
            ${isPending ? `₹${Number(r.remainingAmount).toLocaleString('en-IN')} remaining` : '✅ Settled'}
          </div>
        </div>

        ${r.reason ? `<div class="fm-record-reason">${formatReasonDisplay(r.reason)}</div>` : ''}
        <div class="fm-record-date">📅 ${formatDate(r.date)}</div>

        ${hasRepayments ? `
          <div class="fm-repayment-breakdown">
            <div class="fm-repayment-row total">
              <span>Total</span>
              <span>${formatCurrency(r.amount)}</span>
            </div>
            <div class="fm-repayment-row returned">
              <span>− Returned</span>
              <span>${formatCurrency(returnedAmount)}</span>
            </div>
            <div class="fm-repayment-row remaining ${r.status}">
              <span>= Remaining</span>
              <span>${formatCurrency(Math.max(0, Number(r.remainingAmount)))}</span>
            </div>
            ${(r.repayments && r.repayments.length > 0) ? `
              <div class="fm-repayment-history">
                <div class="fm-repayment-history-title">Repayment History</div>
                ${r.repayments.map((rp, idx) => `
                  <div class="fm-repayment-entry">
                    <span>#${idx + 1} · ${formatDate(rp.date)}</span>
                    <span class="fm-repayment-entry-amount">${formatCurrency(rp.amount)}</span>
                  </div>
                `).join('')}
              </div>
            ` : ''}
          </div>
        ` : ''}
      </div>

      ${isPending ? `
        <div class="fm-record-actions">
          <button class="fm-repay-btn" data-repay-id="${r.id}">↩️ Add Repayment</button>
        </div>
      ` : ''}
    </div>
  `;
}

/**
 * Render friend detail view
 */
function renderFriendDetailView(friendName, records, accounts) {
  const friendRecords = records.filter(r => r.friendName === friendName);
  const initial = friendName.charAt(0).toUpperCase();

  let theyOweMe = 0;
  let iOwe = 0;
  let pendingCount = 0;

  friendRecords.forEach(r => {
    if (r.status === 'pending') {
      pendingCount++;
      if (r.type === 'GAVE') theyOweMe += Number(r.remainingAmount) || 0;
      else iOwe += Number(r.remainingAmount) || 0;
    }
  });

  return `
    <div class="page animate-fade-in friends-money-page">
      <button class="fm-back-btn" id="fm-back-btn">← Back</button>

      <div class="fm-friend-detail-header">
        <div class="fm-friend-detail-avatar">${initial}</div>
        <div class="fm-friend-detail-name">👤 ${escapeHtml(friendName)}</div>
      </div>

      <div class="fm-friend-detail-stats">
        <div class="fm-friend-stat">
          <div class="fm-friend-stat-label">They Owe Me</div>
          <div class="fm-friend-stat-value green">${formatCurrency(theyOweMe)}</div>
        </div>
        <div class="fm-friend-stat">
          <div class="fm-friend-stat-label">I Owe</div>
          <div class="fm-friend-stat-value purple">${formatCurrency(iOwe)}</div>
        </div>
        <div class="fm-friend-stat">
          <div class="fm-friend-stat-label">Pending</div>
          <div class="fm-friend-stat-value orange">${pendingCount}</div>
        </div>
      </div>

      <div class="fm-section-title">ALL RECORDS</div>

      <div class="fm-records-list">
        ${friendRecords.length > 0 ? friendRecords.map(r => renderRecordCard(r)).join('') : `
          <div class="fm-empty">
            <div class="fm-empty-icon">📭</div>
            <div class="fm-empty-title">No records</div>
            <div class="fm-empty-text">No friend money records found for ${escapeHtml(friendName)}.</div>
          </div>
        `}
      </div>
    </div>
  `;
}

/**
 * Filter records based on active filter and search
 */
function filterRecords(records, filter, query) {
  let filtered = [...records];

  // Apply search
  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(r =>
      (r.friendName || '').toLowerCase().includes(q) ||
      (r.reason || '').toLowerCase().includes(q)
    );
  }

  // Apply filter
  switch (filter) {
    case 'gave':
      filtered = filtered.filter(r => r.type === 'GAVE' && r.status === 'pending');
      break;
    case 'borrowed':
      filtered = filtered.filter(r => r.type === 'BORROWED' && r.status === 'pending');
      break;
    case 'pending':
      filtered = filtered.filter(r => r.status === 'pending');
      break;
    case 'settled':
      filtered = filtered.filter(r => r.status === 'settled');
      break;
    default:
      break;
  }

  // Sort: pending first, settled at bottom (newest first within each group)
  filtered.sort((a, b) => {
    if (a.status === 'pending' && b.status !== 'pending') return -1;
    if (a.status !== 'pending' && b.status === 'pending') return 1;
    // Within same status group, newest first (by createdAt descending)
    return (b.createdAt || '').localeCompare(a.createdAt || '');
  });

  return filtered;
}

/**
 * Open Add Friend Money modal
 */
export function openAddFriendMoneyModal(refreshFn, state) {
  if (state) {
    pageState = { ...pageState, ...state };
  }
  const accounts = pageState.accounts || [];
  const today = getTodayDate();

  const content = `
    <div style="padding: 4px 0;">
      <div class="fm-form-group">
        <label class="fm-form-label">👤 Friend Name</label>
        <input type="text" class="fm-form-input" id="fm-friend-name" placeholder="Enter friend name" autocomplete="off" />
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label">💰 Amount</label>
        <input type="number" class="fm-form-input" id="fm-amount" placeholder="₹0" min="1" step="1" inputmode="numeric" />
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label">🔄 Type</label>
        <div class="fm-type-toggle">
          <button class="fm-type-option active gave" data-type="GAVE" id="fm-type-gave">🟢 I Gave</button>
          <button class="fm-type-option" data-type="BORROWED" id="fm-type-borrowed">🔵 I Borrowed</button>
        </div>
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label" for="fm-reason">📝 Reason</label>
        <select class="fm-form-select" id="fm-reason" required>
          ${renderReasonOptions('GAVE')}
        </select>
        <div class="fm-form-error" id="fm-reason-error" style="display: none;"></div>
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label">📅 Date</label>
        <input type="date" class="fm-form-input" id="fm-date" value="${today}" />
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label">🏦 Account</label>
        <select class="fm-form-select" id="fm-account">
          ${accounts.map((acc, idx) => `
            <option value="${acc.id}" ${idx === 0 ? 'selected' : ''}>${acc.icon || '🏦'} ${acc.name}</option>
          `).join('')}
        </select>
      </div>

      <button class="fm-form-submit" id="fm-submit-btn">✅ Add Record</button>
    </div>
  `;

  openModal({
    title: '🤝 Add Friend Money',
    content,
    onOpen: (modal) => {
      let selectedType = 'GAVE';

      const gaveBtn = modal.querySelector('#fm-type-gave');
      const borrowedBtn = modal.querySelector('#fm-type-borrowed');
      const reasonSelect = modal.querySelector('#fm-reason');
      const reasonError = modal.querySelector('#fm-reason-error');

      const updateTypeUI = () => {
        gaveBtn.className = `fm-type-option ${selectedType === 'GAVE' ? 'active gave' : ''}`;
        borrowedBtn.className = `fm-type-option ${selectedType === 'BORROWED' ? 'active borrowed' : ''}`;
        if (reasonSelect) {
          const currentReason = reasonSelect.value;
          reasonSelect.innerHTML = renderReasonOptions(selectedType, currentReason);
        }
      };

      gaveBtn.onclick = () => { selectedType = 'GAVE'; updateTypeUI(); };
      borrowedBtn.onclick = () => { selectedType = 'BORROWED'; updateTypeUI(); };

      if (reasonSelect) {
        reasonSelect.onchange = () => {
          if (reasonError && reasonSelect.value) {
            reasonError.textContent = '';
            reasonError.style.display = 'none';
          }
        };
      }

      const submitBtn = modal.querySelector('#fm-submit-btn');
      submitBtn.onclick = async () => {
        const friendName = modal.querySelector('#fm-friend-name').value.trim();
        const amount = Number(modal.querySelector('#fm-amount').value);
        const reason = modal.querySelector('#fm-reason').value;
        const date = modal.querySelector('#fm-date').value;
        const accountId = modal.querySelector('#fm-account').value;

        if (!friendName) { toast.error('Please enter friend name.'); return; }
        if (!amount || amount <= 0) { toast.error('Please enter a valid amount.'); return; }
        if (!reason) {
          if (reasonError) {
            reasonError.textContent = 'Please select a reason.';
            reasonError.style.display = 'block';
          }
          toast.error('Please select a reason.');
          return;
        }
        if (!accountId) { toast.error('Please select an account.'); return; }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Saving...';

        try {
          await addFriendMoney(pageState.user.uid, {
            friendName,
            amount,
            type: selectedType,
            reason,
            date,
            accountId
          });
          closeModal();
          toast.success(`${selectedType === 'GAVE' ? 'Gave' : 'Borrowed'} ${formatCurrency(amount)} ${selectedType === 'GAVE' ? 'to' : 'from'} ${friendName}`);
          if (refreshFn) refreshFn();
        } catch (err) {
          console.error('Add friend money error:', err);
          toast.error('Failed to add record. Try again.');
          submitBtn.disabled = false;
          submitBtn.innerHTML = '✅ Add Record';
        }
      };
    }
  });
}

/**
 * Open Repayment modal
 */
function openRepaymentModal(record, refreshFn) {
  const remaining = Number(record.remainingAmount) || 0;
  const accounts = pageState.accounts || [];

  const content = `
    <div style="padding: 4px 0;">
      <div class="fm-repayment-breakdown" style="margin-bottom: 16px;">
        <div class="fm-repayment-row total">
          <span>Original Amount</span>
          <span>${formatCurrency(record.amount)}</span>
        </div>
        <div class="fm-repayment-row returned">
          <span>Already Returned</span>
          <span>${formatCurrency(Number(record.returnedAmount) || 0)}</span>
        </div>
        <div class="fm-repayment-row remaining">
          <span>Remaining</span>
          <span>${formatCurrency(remaining)}</span>
        </div>
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label">💰 Repayment Amount</label>
        <input type="number" class="fm-form-input" id="fm-repay-amount" placeholder="₹0" min="1" max="${remaining}" step="1" inputmode="numeric" />
      </div>

      <div class="fm-form-group">
        <label class="fm-form-label">🏦 Account</label>
        <select class="fm-form-select" id="fm-repay-account">
          ${accounts.map(acc => `
            <option value="${acc.id}" ${acc.id === record.accountId ? 'selected' : ''}>${acc.icon || '🏦'} ${acc.name}</option>
          `).join('')}
        </select>
      </div>

      <button class="fm-form-submit" id="fm-repay-submit">↩️ Add Repayment</button>
    </div>
  `;

  const friendLabel = record.type === 'GAVE'
    ? `${record.friendName} returning`
    : `Returning to ${record.friendName}`;

  openModal({
    title: `↩️ ${friendLabel}`,
    content,
    onOpen: (modal) => {
      const submitBtn = modal.querySelector('#fm-repay-submit');
      submitBtn.onclick = async () => {
        const repayAmount = Number(modal.querySelector('#fm-repay-amount').value);
        const accountId = modal.querySelector('#fm-repay-account').value;

        if (!repayAmount || repayAmount <= 0) { toast.error('Enter a valid amount.'); return; }
        if (repayAmount > remaining) { toast.error(`Amount cannot exceed ${formatCurrency(remaining)}.`); return; }

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner"></span> Processing...';

        try {
          await addRepayment(pageState.user.uid, record.id, repayAmount, accountId, record);
          closeModal();
          const isSettled = (remaining - repayAmount) <= 0;
          toast.success(`${formatCurrency(repayAmount)} repayment added${isSettled ? ' — Settled! ✅' : ''}`);
          if (refreshFn) refreshFn();
        } catch (err) {
          console.error('Repayment error:', err);
          toast.error('Failed to add repayment. Try again.');
          submitBtn.disabled = false;
          submitBtn.innerHTML = '↩️ Add Repayment';
        }
      };
    }
  });
}

/**
 * Attach Friends Money Page Listeners
 */
export function attachFriendsMoneyListeners(refreshFn) {
  // Add button
  const addBtn = document.getElementById('fm-add-btn');
  if (addBtn) {
    addBtn.onclick = () => openAddFriendMoneyModal(refreshFn);
  }

  // Search
  const searchInput = document.getElementById('fm-search');
  if (searchInput) {
    searchInput.oninput = () => {
      searchQuery = searchInput.value;
      refreshPageInPlace();
    };
  }

  // Filter tabs
  document.querySelectorAll('.fm-filter-tab[data-filter]').forEach(tab => {
    tab.onclick = () => {
      activeFilter = tab.dataset.filter;
      refreshPageInPlace();
    };
  });

  // Record cards — click to view friend detail
  document.querySelectorAll('.fm-record-card[data-record-id]').forEach(card => {
    card.onclick = (e) => {
      // Don't navigate if clicking action buttons
      if (e.target.closest('.fm-repay-btn')) return;
      const recordId = card.dataset.recordId;
      const record = (pageState.friendMoneyRecords || []).find(r => r.id === recordId);
      if (record) {
        detailFriend = record.friendName;
        refreshPageInPlace();
      }
    };
  });

  // Repay buttons
  document.querySelectorAll('.fm-repay-btn[data-repay-id]').forEach(btn => {
    btn.onclick = (e) => {
      e.stopPropagation();
      const recordId = btn.dataset.repayId;
      const record = (pageState.friendMoneyRecords || []).find(r => r.id === recordId);
      if (record) {
        openRepaymentModal(record, refreshFn);
      }
    };
  });

  // Back button (friend detail view)
  const backBtn = document.getElementById('fm-back-btn');
  if (backBtn) {
    backBtn.onclick = () => {
      detailFriend = null;
      refreshPageInPlace();
    };
  }
}

/**
 * Refresh the page content in-place without full app re-render
 */
function refreshPageInPlace() {
  const page = document.querySelector('.friends-money-page');
  if (page) {
    const container = page.parentElement;
    if (container) {
      container.innerHTML = renderFriendsMoneyPage(pageState);
      attachFriendsMoneyListeners(() => {
        // Trigger a soft re-render
        refreshPageInPlace();
      });
    }
  }
}

/**
 * Reset page state when leaving
 */
export function resetFriendsMoneyState() {
  detailFriend = null;
  searchQuery = '';
  activeFilter = 'all';
}
