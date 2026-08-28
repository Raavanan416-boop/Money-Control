// ============================================
// 💰 Money Control V2 — Analytics Page Component
// ============================================

import {
  formatCurrency,
  getMonthName,
  getCategoryEmoji
} from '../utils/formatters.js';
import {
  getMonthlyReport,
  calculateAccountDistribution,
  calculateAccountBalances
} from '../utils/calculations.js';
import { renderDoughnutChart, renderBarChart, destroyAllCharts } from '../components/charts.js';
import { renderEmptyAnalytics } from '../components/empty-state.js';

let state = {
  user: null,
  profile: null,
  accounts: [],
  transactions: []
};

let selectedMonthIndex = new Date().getMonth();
let selectedYear = new Date().getFullYear();

/**
 * Render Analytics HTML
 */
export function renderAnalyticsPage(appState) {
  state = { ...state, ...appState };
  destroyAllCharts();

  const { totalMoney } = calculateAccountBalances(state.accounts, state.transactions);
  const accountDist = calculateAccountDistribution(state.accounts, state.transactions);

  const monthStr = `${selectedYear}-${String(selectedMonthIndex + 1).padStart(2, '0')}`;
  const report = getMonthlyReport(state.transactions, monthStr);
  const hasData = report.income > 0 || report.expenses > 0;

  return `
    <div class="page animate-fade-in">
      <div class="page-header">
        <h1 class="page-title">Analytics & Reports 📊</h1>
        <p class="page-subtitle">Understand where your money comes from, where it goes, and where it is currently stored.</p>
      </div>

      <!-- Account Distribution Chart Card -->
      <div class="chart-card" style="margin-bottom: var(--space-6);">
        <h3 class="chart-title">Account Money Distribution (${formatCurrency(totalMoney)})</h3>
        <div class="chart-container">
          <canvas id="accounts-distribution-chart"></canvas>
        </div>

        <div class="category-list">
          ${accountDist.map((item, idx) => `
            <div class="category-item">
              <div class="category-color" style="background: ${getChartColor(idx)};"></div>
              <div class="category-info">
                <div class="category-name">${item.account.icon || '🏦'} ${item.account.name}</div>
                <div class="category-bar">
                  <div class="category-bar-fill" style="width: ${Math.max(0, item.percentage)}%; background: ${getChartColor(idx)};"></div>
                </div>
              </div>
              <div>
                <div class="category-amount">${formatCurrency(item.balance)}</div>
                <div class="category-percentage">${item.percentage.toFixed(1)}%</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Month Selector Navigation -->
      <div class="month-selector">
        <button class="month-nav-btn" id="btn-month-prev" title="Previous Month">❮</button>
        <div class="month-display">${getMonthName(selectedMonthIndex)} ${selectedYear}</div>
        <button class="month-nav-btn" id="btn-month-next" title="Next Month">❯</button>
      </div>

      ${!hasData ? renderEmptyAnalytics() : `
        <!-- Monthly Overview Cards -->
        <div class="analytics-overview">
          <div class="analytics-stat">
            <div class="analytics-stat-icon">📥</div>
            <div class="analytics-stat-value income">${formatCurrency(report.income)}</div>
            <div class="analytics-stat-label">Total Income</div>
          </div>

          <div class="analytics-stat">
            <div class="analytics-stat-icon">📤</div>
            <div class="analytics-stat-value expense">${formatCurrency(report.expenses)}</div>
            <div class="analytics-stat-label">Total Expenses</div>
          </div>

          <div class="analytics-stat">
            <div class="analytics-stat-icon">💰</div>
            <div class="analytics-stat-value savings">${formatCurrency(report.savings)}</div>
            <div class="analytics-stat-label">Net Savings</div>
          </div>
        </div>

        <!-- Highlight Stats -->
        <div class="highlight-stats">
          <div class="highlight-stat">
            <div class="highlight-stat-label">Highest Spending Category</div>
            ${report.highestCategory ? `
              <div class="highlight-stat-icon">${report.highestCategory.emoji}</div>
              <div class="highlight-stat-value">${report.highestCategory.category}</div>
              <div class="highlight-stat-detail">${formatCurrency(report.highestCategory.amount)} (${report.highestCategory.percentage.toFixed(1)}%)</div>
            ` : `<div style="color: var(--text-tertiary); font-size: var(--fs-sm);">No expenses this month</div>`}
          </div>

          <div class="highlight-stat">
            <div class="highlight-stat-label">Highest Single Expense</div>
            ${report.highestExpense ? `
              <div class="highlight-stat-icon">${getCategoryEmoji(report.highestExpense.category)}</div>
              <div class="highlight-stat-value">${report.highestExpense.reason || report.highestExpense.category}</div>
              <div class="highlight-stat-detail">${formatCurrency(report.highestExpense.amount)}</div>
            ` : `<div style="color: var(--text-tertiary); font-size: var(--fs-sm);">No expenses this month</div>`}
          </div>
        </div>

        <!-- Expense Categories Doughnut Chart -->
        ${report.categories.length > 0 ? `
          <div class="chart-card">
            <h3 class="chart-title">Expense Categories Breakdown</h3>
            <div class="chart-container">
              <canvas id="categories-chart"></canvas>
            </div>

            <div class="category-list">
              ${report.categories.map((cat, idx) => `
                <div class="category-item">
                  <div class="category-color" style="background: ${getChartColor(idx)};"></div>
                  <div class="category-info">
                    <div class="category-name">${cat.emoji} ${cat.category}</div>
                    <div class="category-bar">
                      <div class="category-bar-fill" style="width: ${cat.percentage}%; background: ${getChartColor(idx)};"></div>
                    </div>
                  </div>
                  <div>
                    <div class="category-amount">${formatCurrency(cat.amount)}</div>
                    <div class="category-percentage">${cat.percentage.toFixed(1)}%</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Bar Chart: Income vs Expense comparison -->
        <div class="chart-card">
          <h3 class="chart-title">Income vs Expenses Overview</h3>
          <div class="chart-container">
            <canvas id="income-expense-bar-chart"></canvas>
          </div>
        </div>
      `}
    </div>
  `;
}

function getChartColor(index) {
  const colors = [
    '#6C63FF', '#10B981', '#F59E0B', '#EF4444', '#3B82F6',
    '#8B5CF6', '#EC4899', '#14B8A6', '#F97316', '#64748B'
  ];
  return colors[index % colors.length];
}

/**
 * Attach Analytics Listeners and Render Charts
 */
export function attachAnalyticsListeners() {
  const prevBtn = document.getElementById('btn-month-prev');
  const nextBtn = document.getElementById('btn-month-next');

  if (prevBtn) {
    prevBtn.onclick = () => {
      if (selectedMonthIndex === 0) {
        selectedMonthIndex = 11;
        selectedYear--;
      } else {
        selectedMonthIndex--;
      }
      refreshPage();
    };
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      if (selectedMonthIndex === 11) {
        selectedMonthIndex = 0;
        selectedYear++;
      } else {
        selectedMonthIndex++;
      }
      refreshPage();
    };
  }

  // Render Account Distribution Doughnut Chart
  const accountDist = calculateAccountDistribution(state.accounts, state.transactions);
  if (accountDist.length > 0) {
    setTimeout(() => {
      renderDoughnutChart(
        'accounts-distribution-chart',
        accountDist.map(item => ({
          category: item.account.name,
          emoji: item.account.icon || '🏦',
          amount: item.balance
        }))
      );
    }, 50);
  }

  // Render Category & Bar Charts
  const monthStr = `${selectedYear}-${String(selectedMonthIndex + 1).padStart(2, '0')}`;
  const report = getMonthlyReport(state.transactions, monthStr);

  if (report.categories.length > 0) {
    setTimeout(() => {
      renderDoughnutChart('categories-chart', report.categories);
    }, 50);
  }

  if (report.income > 0 || report.expenses > 0) {
    setTimeout(() => {
      renderBarChart(
        'income-expense-bar-chart',
        [getMonthName(selectedMonthIndex)],
        [report.income],
        [report.expenses]
      );
    }, 50);
  }
}

function refreshPage() {
  const page = document.querySelector('.page');
  if (page) {
    page.outerHTML = renderAnalyticsPage(state);
    attachAnalyticsListeners();
  }
}
