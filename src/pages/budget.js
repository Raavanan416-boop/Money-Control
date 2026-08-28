// ============================================
// 💰 Money Control — Budget Page Component
// ============================================

import { formatCurrency, EXPENSE_CATEGORIES } from '../utils/formatters.js';
import { calculateBudgetProgress, saveMonthlyBudget, saveCategoryBudget, removeBudget } from '../services/budget.js';
import { openModal, closeModal, showConfirm } from '../components/modal.js';
import { toast } from '../utils/toast.js';

let state = {
  user: null,
  profile: null,
  transactions: [],
  budgets: []
};

/**
 * Render Budget HTML
 */
export function renderBudgetPage(appState) {
  state = { ...state, ...appState };

  const currentMonth = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`;
  const { monthlyProgress, categoryProgress } = calculateBudgetProgress(state.budgets, state.transactions, currentMonth);

  return `
    <div class="page animate-fade-in">
      <div class="page-header" style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
        <div>
          <h1 class="page-title">Budget Control 🎯</h1>
          <p class="page-subtitle">Set monthly and category spending limits to keep your finances on track.</p>
        </div>
        <button class="btn btn-primary btn-sm" id="btn-set-budget-modal">+ Set Budget</button>
      </div>

      <!-- Monthly Overall Budget Card -->
      <div class="budget-card">
        <div class="budget-header">
          <div>
            <div style="font-size: var(--fs-xs); color: var(--text-secondary); text-transform: uppercase; font-weight: 600;">Overall Monthly Budget</div>
            <div class="budget-title">${monthlyProgress ? formatCurrency(monthlyProgress.budget) : 'Not Set'}</div>
          </div>
          ${monthlyProgress ? `
            <div class="budget-percentage" style="color: ${monthlyProgress.exceeded ? 'var(--expense)' : monthlyProgress.percentage >= 80 ? 'var(--warning)' : 'var(--income)'};">
              ${monthlyProgress.percentage.toFixed(1)}% Used
            </div>
          ` : ''}
        </div>

        ${monthlyProgress ? `
          <div class="progress-bar">
            <div class="progress-fill ${monthlyProgress.exceeded ? 'progress-fill-expense' : monthlyProgress.percentage >= 80 ? 'progress-fill-warning' : 'progress-fill-primary'}"
                 style="width: ${monthlyProgress.percentage}%;"></div>
          </div>

          <div class="budget-amounts">
            <div>Spent: <strong>${formatCurrency(monthlyProgress.spent)}</strong></div>
            <div>Remaining: <strong style="color: ${monthlyProgress.remaining < 0 ? 'var(--expense)' : 'var(--income)'};">${formatCurrency(monthlyProgress.remaining)}</strong></div>
          </div>
        ` : `
          <p style="font-size: var(--fs-sm); color: var(--text-secondary); margin-bottom: 16px;">No overall monthly budget set. Click below to create one.</p>
          <button class="btn btn-outline btn-sm" id="btn-quick-monthly-budget">Set Monthly Limit</button>
        `}
      </div>

      <!-- Category Budgets Section -->
      <div class="section" style="margin-top: var(--space-6);">
        <div class="section-header">
          <h2 class="section-title">Category Budgets</h2>
          <span class="section-link" id="btn-add-category-budget">+ Add Category Limit</span>
        </div>

        ${categoryProgress.length > 0 ? `
          <div style="display: flex; flex-direction: column; gap: var(--space-4);">
            ${categoryProgress.map(cp => `
              <div class="card card-flat" style="padding: var(--space-4);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: var(--space-2);">
                  <div style="font-weight: var(--fw-semibold); font-size: var(--fs-base);">${cp.category}</div>
                  <div style="display: flex; align-items: center; gap: 8px;">
                    <span class="badge ${cp.exceeded ? 'badge-expense' : cp.percentage >= 80 ? 'badge-warning' : 'badge-income'}">
                      ${cp.percentage.toFixed(0)}%
                    </span>
                    <button class="transaction-action-btn delete btn-delete-budget" data-category="${cp.category}" title="Delete Budget">🗑️</button>
                  </div>
                </div>

                <div class="progress-bar" style="margin-bottom: var(--space-2);">
                  <div class="progress-fill ${cp.exceeded ? 'progress-fill-expense' : cp.percentage >= 80 ? 'progress-fill-warning' : 'progress-fill-income'}"
                       style="width: ${cp.percentage}%;"></div>
                </div>

                <div style="display: flex; justify-content: space-between; font-size: var(--fs-xs); color: var(--text-secondary);">
                  <span>Budget: ${formatCurrency(cp.budget)} | Spent: ${formatCurrency(cp.spent)}</span>
                  <span style="font-weight: 600; color: ${cp.remaining < 0 ? 'var(--expense)' : 'var(--income)'};">
                    ${cp.remaining < 0 ? 'Exceeded by ' : 'Remaining: '}${formatCurrency(Math.abs(cp.remaining))}
                  </span>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <div class="card card-flat" style="text-align: center; padding: var(--space-6); color: var(--text-secondary);">
            No category budgets set yet. Track specific spending like Food, Travel, etc.
          </div>
        `}
      </div>
    </div>
  `;
}

/**
 * Attach Budget Listeners
 */
export function attachBudgetListeners(refreshData) {
  const setBtn = document.getElementById('btn-set-budget-modal');
  if (setBtn) setBtn.onclick = () => openSetBudgetModal(refreshData);

  const quickMonthlyBtn = document.getElementById('btn-quick-monthly-budget');
  if (quickMonthlyBtn) quickMonthlyBtn.onclick = () => openSetBudgetModal(refreshData, 'monthly');

  const addCatBtn = document.getElementById('btn-add-category-budget');
  if (addCatBtn) addCatBtn.onclick = () => openSetBudgetModal(refreshData, 'category');

  // Delete budget buttons
  document.querySelectorAll('.btn-delete-budget').forEach(btn => {
    btn.onclick = async () => {
      const category = btn.dataset.category;
      const confirmed = await showConfirm({
        icon: '🗑️',
        title: 'Delete Budget',
        message: `Are you sure you want to remove the budget for ${category}?`,
        danger: true
      });
      if (confirmed) {
        try {
          await removeBudget(state.user.uid, category);
          toast.success('Budget removed!');
          if (refreshData) refreshData();
        } catch (err) {
          toast.error('Unable to remove budget.');
        }
      }
    };
  });
}

function openSetBudgetModal(onSuccess, defaultType = 'monthly') {
  const currentMonth = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`;

  const content = `
    <form id="set-budget-form" novalidate>
      <div class="form-group">
        <label class="form-label">Budget Type</label>
        <div class="tabs" style="margin-bottom: 0;">
          <div class="tab ${defaultType === 'monthly' ? 'active' : ''}" id="tab-b-monthly">Overall Monthly</div>
          <div class="tab ${defaultType === 'category' ? 'active' : ''}" id="tab-b-category">Specific Category</div>
        </div>
      </div>

      <div class="form-group" id="group-b-category" style="display: ${defaultType === 'category' ? 'block' : 'none'};">
        <label class="form-label" for="budget-category">Category</label>
        <select id="budget-category" class="form-select">
          ${EXPENSE_CATEGORIES.map(c => `<option value="${c.value}">${c.label}</option>`).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label" for="budget-amount">Budget Limit (₹)</label>
        <div class="form-input-group">
          <span class="input-prefix">₹</span>
          <input type="number" id="budget-amount" class="form-input" placeholder="e.g. 10000" step="any" min="1" required autofocus />
        </div>
        <div class="form-error" id="budget-amount-error"></div>
      </div>

      <button type="submit" class="btn btn-primary btn-block btn-lg" id="btn-save-budget">
        Save Budget
      </button>
    </form>
  `;

  openModal({
    title: '🎯 Set Budget Limit',
    content,
    onOpen: (modal) => {
      let bType = defaultType;
      const tabMonthly = modal.querySelector('#tab-b-monthly');
      const tabCategory = modal.querySelector('#tab-b-category');
      const groupCat = modal.querySelector('#group-b-category');

      tabMonthly.onclick = () => {
        bType = 'monthly';
        tabMonthly.classList.add('active');
        tabCategory.classList.remove('active');
        groupCat.style.display = 'none';
      };

      tabCategory.onclick = () => {
        bType = 'category';
        tabCategory.classList.add('active');
        tabMonthly.classList.remove('active');
        groupCat.style.display = 'block';
      };

      modal.querySelector('#set-budget-form').onsubmit = async (e) => {
        e.preventDefault();
        const amount = modal.querySelector('#budget-amount').value;
        const category = modal.querySelector('#budget-category').value;
        modal.querySelector('#budget-amount-error').textContent = '';

        if (!amount || Number(amount) <= 0) {
          modal.querySelector('#budget-amount-error').textContent = 'Please enter a valid budget amount.';
          return;
        }

        const submitBtn = modal.querySelector('#btn-save-budget');
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span class="spinner"></span> Saving...`;

        try {
          const uid = state.user.uid;
          if (bType === 'monthly') {
            await saveMonthlyBudget(uid, amount, currentMonth);
          } else {
            await saveCategoryBudget(uid, category, amount, currentMonth);
          }
          closeModal();
          toast.success('🎯 Budget set successfully!');
          if (onSuccess) onSuccess();
        } catch (err) {
          toast.error('Unable to save budget.');
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Save Budget';
        }
      };
    }
  });
}
