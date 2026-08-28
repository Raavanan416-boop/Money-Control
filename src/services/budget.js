// ============================================
// 💰 Money Control — Budget Service
// ============================================

import { setBudget, getBudgets, deleteBudget } from './firestore.js';

/**
 * Calculate budget progress for a given month
 */
export function calculateBudgetProgress(budgets, transactions, month) {
  // month format: 'YYYY-MM'
  const monthTransactions = transactions.filter(tx => {
    return tx.type === 'EXPENSE' && tx.date && tx.date.startsWith(month);
  });

  const totalSpent = monthTransactions.reduce((sum, tx) => sum + tx.amount, 0);

  // Overall monthly budget
  const monthlyBudget = budgets.find(b => b.category === 'monthly');
  const monthlyProgress = monthlyBudget ? {
    budget: monthlyBudget.amount,
    spent: totalSpent,
    remaining: monthlyBudget.amount - totalSpent,
    percentage: monthlyBudget.amount > 0 ? Math.min((totalSpent / monthlyBudget.amount) * 100, 100) : 0,
    exceeded: totalSpent > monthlyBudget.amount
  } : null;

  // Category budgets
  const categoryBudgets = budgets.filter(b => b.category !== 'monthly');
  const categoryProgress = categoryBudgets.map(budget => {
    const categorySpent = monthTransactions
      .filter(tx => tx.category === budget.category)
      .reduce((sum, tx) => sum + tx.amount, 0);

    return {
      category: budget.category,
      budget: budget.amount,
      spent: categorySpent,
      remaining: budget.amount - categorySpent,
      percentage: budget.amount > 0 ? Math.min((categorySpent / budget.amount) * 100, 100) : 0,
      exceeded: categorySpent > budget.amount
    };
  });

  return { monthlyProgress, categoryProgress, totalSpent };
}

/**
 * Generate budget alerts
 */
export function generateBudgetAlerts(budgets, transactions, month) {
  const alerts = [];
  const { monthlyProgress, categoryProgress } = calculateBudgetProgress(budgets, transactions, month);

  if (monthlyProgress) {
    if (monthlyProgress.exceeded) {
      alerts.push({
        type: 'danger',
        icon: '🚨',
        title: 'Budget Exceeded',
        message: `You exceeded your monthly budget by ₹${Math.abs(monthlyProgress.remaining).toLocaleString('en-IN')}.`
      });
    } else if (monthlyProgress.percentage >= 80) {
      alerts.push({
        type: 'warning',
        icon: '⚠️',
        title: 'Budget Alert',
        message: `You have used ${monthlyProgress.percentage.toFixed(0)}% of your monthly budget.`
      });
    }
  }

  categoryProgress.forEach(cp => {
    if (cp.exceeded) {
      alerts.push({
        type: 'danger',
        icon: '🚨',
        title: 'Category Budget Exceeded',
        message: `You exceeded your ${cp.category} budget by ₹${Math.abs(cp.remaining).toLocaleString('en-IN')}.`
      });
    }
  });

  return alerts;
}

/**
 * Save monthly budget
 */
export async function saveMonthlyBudget(uid, amount, month) {
  await setBudget(uid, {
    category: 'monthly',
    amount: Number(amount),
    month
  });
}

/**
 * Save category budget
 */
export async function saveCategoryBudget(uid, category, amount, month) {
  await setBudget(uid, {
    category,
    amount: Number(amount),
    month
  });
}

/**
 * Get all budgets for a user
 */
export async function getUserBudgets(uid) {
  return await getBudgets(uid);
}

/**
 * Remove a budget
 */
export async function removeBudget(uid, budgetId) {
  await deleteBudget(uid, budgetId);
}
