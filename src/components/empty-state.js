// ============================================
// 💰 Money Control — Empty State Component
// ============================================

/**
 * Render empty state for no transactions
 */
export function renderEmptyTransactions(title = 'No transactions yet', text = 'Start tracking your money by adding your first transaction.') {
  return `
    <div class="empty-state">
      <span class="empty-state-icon">💰</span>
      <h3 class="empty-state-title">${title}</h3>
      <p class="empty-state-text">${text}</p>
      <button class="btn btn-primary" id="empty-add-money-btn">+ Add Money</button>
    </div>
  `;
}

/**
 * Render empty state for no search results
 */
export function renderEmptySearch() {
  return `
    <div class="empty-state">
      <span class="empty-state-icon">🔍</span>
      <h3 class="empty-state-title">No results found</h3>
      <p class="empty-state-text">Try adjusting your search or filter to find what you're looking for.</p>
    </div>
  `;
}

/**
 * Render empty state for no data on a date
 */
export function renderEmptyDate() {
  return `
    <div class="empty-state">
      <span class="empty-state-icon">📅</span>
      <h3 class="empty-state-title">No transactions on this date</h3>
      <p class="empty-state-text">There are no transactions recorded for the selected date.</p>
    </div>
  `;
}

/**
 * Render empty state for analytics
 */
export function renderEmptyAnalytics() {
  return `
    <div class="empty-state">
      <span class="empty-state-icon">📊</span>
      <h3 class="empty-state-title">No data for this month</h3>
      <p class="empty-state-text">Add some transactions to see your analytics and insights.</p>
    </div>
  `;
}

/**
 * Render empty state for budget
 */
export function renderEmptyBudget() {
  return `
    <div class="empty-state">
      <span class="empty-state-icon">🎯</span>
      <h3 class="empty-state-title">No budget set</h3>
      <p class="empty-state-text">Set a monthly budget to track your spending limits.</p>
      <button class="btn btn-primary" id="empty-set-budget-btn">Set Budget</button>
    </div>
  `;
}
