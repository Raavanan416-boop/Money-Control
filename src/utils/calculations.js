// ============================================
// 开启 Money Control V2 — Multi-Account Calculations
// ============================================

import { formatCurrency, getCategoryEmoji, getWeekRange, getTodayDate } from './formatters.js';

/**
 * Calculate single account balance
 * Balance = Initial + Income(dest=acc) + Transfer(dest=acc) - Expense(src=acc) - Transfer(src=acc)
 */
export function calculateAccountBalance(account, transactions) {
  const initial = Number(account.initialBalance) || 0;
  const accId = account.id;

  let balance = initial;

  transactions.forEach(tx => {
    const amount = Number(tx.amount) || 0;
    if (tx.type === 'INCOME') {
      if (tx.destinationAccountId === accId) {
        balance += amount;
      }
    } else if (tx.type === 'EXPENSE') {
      if (tx.sourceAccountId === accId) {
        balance -= amount;
      }
    } else if (tx.type === 'TRANSFER') {
      if (tx.destinationAccountId === accId) {
        balance += amount;
      }
      if (tx.sourceAccountId === accId) {
        balance -= amount;
      }
    }
  });

  return balance;
}

/**
 * Calculate all account balances and Total Money
 */
export function calculateAccountBalances(accounts, transactions) {
  const balances = {};
  let totalMoney = 0;

  accounts.forEach(acc => {
    const bal = calculateAccountBalance(acc, transactions);
    balances[acc.id] = bal;
    totalMoney += bal;
  });

  return { balances, totalMoney };
}

/**
 * Calculate complete transaction history with running balance for a specific account.
 */
export function calculateAccountHistory(account, transactions, accounts = []) {
  if (!account) {
    return {
      account: null,
      balance: 0,
      totalAdded: 0,
      totalSpent: 0,
      totalTransferredIn: 0,
      totalTransferredOut: 0,
      count: 0,
      history: []
    };
  }

  const accId = account.id;

  // Filter transactions for this specific account only
  const accTx = (transactions || []).filter(tx =>
    tx.sourceAccountId === accId || tx.destinationAccountId === accId
  );

  // Sort chronologically (ascending) for accurate running balance computation
  const sortedAsc = [...accTx].sort((a, b) => {
    const dateDiff = (a.date || '').localeCompare(b.date || '');
    if (dateDiff !== 0) return dateDiff;
    const timeA = a.time || a.createdAt || '';
    const timeB = b.time || b.createdAt || '';
    if (timeA && timeB) {
      return timeA.localeCompare(timeB);
    }
    return 0;
  });

  let runningBalance = Number(account.initialBalance) || 0;
  let totalAdded = 0;
  let totalSpent = 0;
  let totalTransferredIn = 0;
  let totalTransferredOut = 0;

  const historyAsc = sortedAsc.map(tx => {
    const amount = Number(tx.amount) || 0;
    const prevBalance = runningBalance;
    let displayType = tx.type;
    let indicator = '🟢';
    let typeLabel = 'Money Added';
    let actionLabel = 'Money Added';
    let resultLabel = 'Current Balance';
    let amountSign = '+';
    let amountColor = 'var(--income)';
    let transferAccountName = '';

    if (tx.type === 'INCOME') {
      if (tx.destinationAccountId === accId) {
        runningBalance += amount;
        totalAdded += amount;
        displayType = 'INCOME';
        indicator = '🟢';
        typeLabel = 'Income';
        actionLabel = 'Money Added';
        resultLabel = 'Current Balance';
        amountSign = '+';
        amountColor = 'var(--income)';
      }
    } else if (tx.type === 'EXPENSE') {
      if (tx.sourceAccountId === accId) {
        runningBalance -= amount;
        totalSpent += amount;
        displayType = 'EXPENSE';
        indicator = '🔴';
        typeLabel = 'Expense';
        actionLabel = 'Expense';
        resultLabel = 'Remaining Balance';
        amountSign = '−';
        amountColor = 'var(--expense)';
      }
    } else if (tx.type === 'TRANSFER') {
      if (tx.destinationAccountId === accId) {
        runningBalance += amount;
        totalTransferredIn += amount;
        totalAdded += amount;
        displayType = 'TRANSFER_IN';
        indicator = '🟣';
        typeLabel = 'Transfer IN';
        actionLabel = 'Received';
        resultLabel = 'Balance After';
        amountSign = '+';
        amountColor = 'var(--primary-light)';

        const srcAcc = accounts.find(a => a.id === tx.sourceAccountId);
        if (srcAcc) transferAccountName = srcAcc.name;
      } else if (tx.sourceAccountId === accId) {
        runningBalance -= amount;
        totalTransferredOut += amount;
        totalSpent += amount;
        displayType = 'TRANSFER_OUT';
        indicator = '🟣';
        typeLabel = 'Transfer OUT';
        actionLabel = 'Transferred';
        resultLabel = 'Balance After';
        amountSign = '−';
        amountColor = 'var(--primary-light)';

        const destAcc = accounts.find(a => a.id === tx.destinationAccountId);
        if (destAcc) transferAccountName = destAcc.name;
      }
    }

    // Determine stored historical balances or fallback to running balance calculation
    let previousBalance = prevBalance;
    let balanceAfter = runningBalance;

    if (tx.type === 'TRANSFER') {
      if (displayType === 'TRANSFER_OUT' && tx.sourcePreviousBalance !== undefined) {
        previousBalance = Number(tx.sourcePreviousBalance);
        balanceAfter = Number(tx.sourceBalanceAfter);
      } else if (displayType === 'TRANSFER_IN' && tx.destinationPreviousBalance !== undefined) {
        previousBalance = Number(tx.destinationPreviousBalance);
        balanceAfter = Number(tx.destinationBalanceAfter);
      } else if (tx.previousBalance !== undefined && tx.balanceAfter !== undefined) {
        previousBalance = Number(tx.previousBalance);
        balanceAfter = Number(tx.balanceAfter);
      }
    } else if (tx.previousBalance !== undefined && tx.balanceAfter !== undefined) {
      previousBalance = Number(tx.previousBalance);
      balanceAfter = Number(tx.balanceAfter);
    }

    return {
      ...tx,
      displayType,
      indicator,
      typeLabel,
      actionLabel,
      resultLabel,
      amountSign,
      amountColor,
      transferAccountName,
      previousBalance,
      balanceAfter
    };
  });

  // Display newest transactions first in history
  const historyDesc = [...historyAsc].reverse();

  return {
    account,
    balance: runningBalance,
    totalAdded,
    totalSpent,
    totalTransferredIn,
    totalTransferredOut,
    count: accTx.length,
    history: historyDesc,
    transactions: accTx
  };
}

/**
 * Calculate transaction breakdown for a specific account
 */
export function calculateAccountStats(account, transactions) {
  return calculateAccountHistory(account, transactions);
}


/**
 * Calculate total income across ALL accounts (excludes TRANSFERS)
 */
export function calculateTotalIncome(transactions) {
  return transactions
    .filter(tx => tx.type === 'INCOME')
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
}

/**
 * Calculate total expenses across ALL accounts (excludes TRANSFERS)
 */
export function calculateTotalExpenses(transactions) {
  return transactions
    .filter(tx => tx.type === 'EXPENSE')
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
}

/**
 * Calculate total transfers
 */
export function calculateTotalTransfers(transactions) {
  return transactions
    .filter(tx => tx.type === 'TRANSFER')
    .reduce((sum, tx) => sum + Number(tx.amount), 0);
}

/**
 * Calculate summary metrics for dashboard
 */
export function calculateTotals(accounts, transactions) {
  const { balances, totalMoney } = calculateAccountBalances(accounts, transactions);
  const totalIncome = calculateTotalIncome(transactions);
  const totalExpenses = calculateTotalExpenses(transactions);
  const totalTransfers = calculateTotalTransfers(transactions);

  return {
    balances,
    totalMoney,
    totalIncome,
    totalExpenses,
    totalTransfers
  };
}

/**
 * Calculate daily totals for a specific date (Excludes TRANSFERS from net change)
 */
export function calculateDailyTotals(transactions, dateStr) {
  const dayTx = transactions.filter(tx => tx.date === dateStr);
  const added = dayTx.filter(tx => tx.type === 'INCOME').reduce((sum, tx) => sum + tx.amount, 0);
  const spent = dayTx.filter(tx => tx.type === 'EXPENSE').reduce((sum, tx) => sum + tx.amount, 0);
  const transferred = dayTx.filter(tx => tx.type === 'TRANSFER').reduce((sum, tx) => sum + tx.amount, 0);

  return {
    added,
    spent,
    transferred,
    net: added - spent, // Transfers do NOT affect net total money change!
    count: dayTx.length,
    transactions: dayTx
  };
}

/**
 * Calculate weekly totals
 */
export function calculateWeeklyTotals(transactions, dateStr) {
  const { start, end } = getWeekRange(dateStr);
  const weekTx = transactions.filter(tx => tx.date >= start && tx.date <= end);
  const added = weekTx.filter(tx => tx.type === 'INCOME').reduce((sum, tx) => sum + tx.amount, 0);
  const spent = weekTx.filter(tx => tx.type === 'EXPENSE').reduce((sum, tx) => sum + tx.amount, 0);
  const transferred = weekTx.filter(tx => tx.type === 'TRANSFER').reduce((sum, tx) => sum + tx.amount, 0);

  return {
    added,
    spent,
    transferred,
    net: added - spent,
    count: weekTx.length,
    transactions: weekTx,
    startDate: start,
    endDate: end
  };
}

/**
 * Calculate monthly totals
 */
export function calculateMonthlyTotals(transactions, monthStr) {
  const monthTx = transactions.filter(tx => tx.date && tx.date.startsWith(monthStr));
  const added = monthTx.filter(tx => tx.type === 'INCOME').reduce((sum, tx) => sum + tx.amount, 0);
  const spent = monthTx.filter(tx => tx.type === 'EXPENSE').reduce((sum, tx) => sum + tx.amount, 0);
  const transferred = monthTx.filter(tx => tx.type === 'TRANSFER').reduce((sum, tx) => sum + tx.amount, 0);

  return {
    added,
    spent,
    transferred,
    net: added - spent,
    count: monthTx.length,
    transactions: monthTx
  };
}

/**
 * Calculate category totals for EXPENSES only
 */
export function calculateCategoryTotals(transactions, monthStr) {
  const filtered = monthStr
    ? transactions.filter(tx => tx.type === 'EXPENSE' && tx.date && tx.date.startsWith(monthStr))
    : transactions.filter(tx => tx.type === 'EXPENSE');

  const totals = {};
  let totalExpenses = 0;

  filtered.forEach(tx => {
    const cat = tx.category || 'Other';
    totals[cat] = (totals[cat] || 0) + tx.amount;
    totalExpenses += tx.amount;
  });

  const sorted = Object.entries(totals)
    .map(([category, amount]) => ({
      category,
      amount,
      percentage: totalExpenses > 0 ? (amount / totalExpenses) * 100 : 0,
      emoji: getCategoryEmoji(category)
    }))
    .sort((a, b) => b.amount - a.amount);

  return { categories: sorted, totalExpenses };
}

/**
 * Calculate Account Money Distribution (for Analytics Chart)
 */
export function calculateAccountDistribution(accounts, transactions) {
  const { balances, totalMoney } = calculateAccountBalances(accounts, transactions);

  return accounts.map(acc => {
    const bal = balances[acc.id] || 0;
    const pct = totalMoney > 0 ? (Math.max(0, bal) / totalMoney) * 100 : 0;
    return {
      account: acc,
      balance: bal,
      percentage: pct
    };
  }).sort((a, b) => b.balance - a.balance);
}

/**
 * Get monthly report
 */
export function getMonthlyReport(transactions, monthStr) {
  const { added, spent, transferred, net, count, transactions: monthTx } = calculateMonthlyTotals(transactions, monthStr);
  const { categories } = calculateCategoryTotals(transactions, monthStr);

  const highestCategory = categories.length > 0 ? categories[0] : null;

  const expenses = monthTx.filter(tx => tx.type === 'EXPENSE');
  const highestExpense = expenses.length > 0
    ? expenses.reduce((max, tx) => tx.amount > max.amount ? tx : max, expenses[0])
    : null;

  return {
    income: added,
    expenses: spent,
    transfers: transferred,
    savings: net,
    transactionCount: count,
    categories,
    highestCategory,
    highestExpense
  };
}

/**
 * Generate V2 dynamic insights from accounts and transactions
 */
export function generateInsights(accounts, transactions) {
  const insights = [];
  const today = getTodayDate();
  const { balances, totalMoney } = calculateAccountBalances(accounts, transactions);
  const todayTotals = calculateDailyTotals(transactions, today);

  // 1. Today's spending
  if (todayTotals.spent > 0) {
    insights.push({
      icon: '📅',
      text: `You spent <strong>${formatCurrency(todayTotals.spent)}</strong> today.`
    });
  }

  // 2. Account with highest balance
  if (accounts.length > 0) {
    const highestAcc = accounts.reduce((max, acc) => (balances[acc.id] || 0) > (balances[max.id] || 0) ? acc : max, accounts[0]);
    const highestBal = balances[highestAcc.id] || 0;
    if (highestBal > 0) {
      insights.push({
        icon: highestAcc.icon || '🏦',
        text: `Your <strong>${highestAcc.name}</strong> account has your highest balance (${formatCurrency(highestBal)}).`
      });
    }
  }

  // 3. Top expense category
  const currentMonth = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`;
  const { categories } = calculateCategoryTotals(transactions, currentMonth);
  if (categories.length > 0) {
    const top = categories[0];
    insights.push({
      icon: top.emoji,
      text: `<strong>${top.category}</strong> accounts for <strong>${top.percentage.toFixed(0)}%</strong> of your expenses this month.`
    });
  }

  // 4. Low balance alert insight
  accounts.forEach(acc => {
    const bal = balances[acc.id] || 0;
    if (bal >= 0 && bal < 500) {
      insights.push({
        icon: '⚠️',
        text: `Your <strong>${acc.name}</strong> balance is low (${formatCurrency(bal)}).`
      });
    }
  });

  return insights.slice(0, 5);
}
