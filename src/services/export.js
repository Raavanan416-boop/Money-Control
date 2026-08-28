// ============================================
// 💰 Money Control V2 — Export Service
// ============================================

import { formatCurrency, formatDateLong } from '../utils/formatters.js';

/**
 * Export transactions as CSV (Multi-Account aware)
 */
export function exportToCSV(transactions, accounts = [], filename = 'money-control-transactions') {
  if (!transactions || transactions.length === 0) {
    throw new Error('No transactions to export.');
  }

  const getAccName = (id) => {
    const acc = accounts.find(a => a.id === id);
    return acc ? acc.name : '';
  };

  const headers = ['Date', 'Type', 'Amount', 'Reason', 'Category', 'From Account', 'To Account', 'Notes'];

  const rows = transactions
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(tx => [
      tx.date,
      tx.type,
      tx.amount,
      `"${(tx.reason || '').replace(/"/g, '""')}"`,
      tx.category || '',
      `"${getAccName(tx.sourceAccountId).replace(/"/g, '""')}"`,
      `"${getAccName(tx.destinationAccountId).replace(/"/g, '""')}"`,
      `"${(tx.notes || '').replace(/"/g, '""')}"`
    ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  downloadFile(csvContent, `${filename}.csv`, 'text/csv');
}

/**
 * Generate and download a printable monthly report
 */
export function exportMonthlyReport(transactions, accounts, month, year) {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const monthStr = `${year}-${String(month + 1).padStart(2, '0')}`;
  const monthTransactions = transactions.filter(tx => tx.date && tx.date.startsWith(monthStr));

  const getAccName = (id) => {
    const acc = accounts.find(a => a.id === id);
    return acc ? acc.name : '';
  };

  const income = monthTransactions
    .filter(tx => tx.type === 'INCOME')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const expenses = monthTransactions
    .filter(tx => tx.type === 'EXPENSE')
    .reduce((sum, tx) => sum + tx.amount, 0);

  const categoryTotals = {};
  monthTransactions
    .filter(tx => tx.type === 'EXPENSE')
    .forEach(tx => {
      const cat = tx.category || 'Other';
      categoryTotals[cat] = (categoryTotals[cat] || 0) + tx.amount;
    });

  const sortedCategories = Object.entries(categoryTotals)
    .sort((a, b) => b[1] - a[1]);

  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Money Control — ${monthNames[month]} ${year} Report</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', system-ui, sans-serif; color: #1a1d2e; padding: 40px; max-width: 800px; margin: 0 auto; }
    h1 { font-size: 24px; margin-bottom: 8px; }
    h2 { font-size: 18px; margin: 24px 0 12px; color: #64748b; }
    .subtitle { color: #64748b; margin-bottom: 32px; }
    .summary { display: flex; gap: 20px; margin-bottom: 32px; }
    .summary-card { flex: 1; padding: 20px; border-radius: 12px; background: #f8f9fc; }
    .summary-card.income { border-left: 4px solid #10b981; }
    .summary-card.expense { border-left: 4px solid #ef4444; }
    .summary-card.savings { border-left: 4px solid #6c63ff; }
    .summary-label { font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 4px; }
    .summary-value { font-size: 24px; font-weight: 700; }
    .summary-value.income { color: #10b981; }
    .summary-value.expense { color: #ef4444; }
    .summary-value.savings { color: #6c63ff; }
    table { width: 100%; border-collapse: collapse; margin-top: 12px; }
    th, td { padding: 10px 12px; text-align: left; border-bottom: 1px solid #e2e8f0; }
    th { font-size: 12px; text-transform: uppercase; color: #64748b; background: #f8f9fc; }
    .income-row td:nth-child(3) { color: #10b981; font-weight: 600; }
    .expense-row td:nth-child(3) { color: #ef4444; font-weight: 600; }
    .transfer-row td:nth-child(3) { color: #6c63ff; font-weight: 600; }
    .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #94a3b8; font-size: 12px; text-align: center; }
    @media print { body { padding: 20px; } }
  </style>
</head>
<body>
  <h1>💰 Money Control Multi-Account Report</h1>
  <p class="subtitle">${monthNames[month]} ${year}</p>
  
  <div class="summary">
    <div class="summary-card income">
      <div class="summary-label">Total Income</div>
      <div class="summary-value income">₹${income.toLocaleString('en-IN')}</div>
    </div>
    <div class="summary-card expense">
      <div class="summary-label">Total Expenses</div>
      <div class="summary-value expense">₹${expenses.toLocaleString('en-IN')}</div>
    </div>
    <div class="summary-card savings">
      <div class="summary-label">Net Savings</div>
      <div class="summary-value savings">₹${(income - expenses).toLocaleString('en-IN')}</div>
    </div>
  </div>

  ${sortedCategories.length > 0 ? `
  <h2>Expense Categories</h2>
  <table>
    <thead><tr><th>Category</th><th>Amount</th><th>% of Total</th></tr></thead>
    <tbody>
      ${sortedCategories.map(([cat, amount]) => `
        <tr>
          <td>${cat}</td>
          <td>₹${amount.toLocaleString('en-IN')}</td>
          <td>${expenses > 0 ? ((amount / expenses) * 100).toFixed(1) : 0}%</td>
        </tr>
      `).join('')}
    </tbody>
  </table>
  ` : ''}

  <h2>All Activity Items</h2>
  <table>
    <thead><tr><th>Date</th><th>Reason</th><th>Amount</th><th>Category</th><th>Account(s)</th><th>Type</th></tr></thead>
    <tbody>
      ${monthTransactions
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .map(tx => {
          let accText = '';
          if (tx.type === 'INCOME') accText = `→ ${getAccName(tx.destinationAccountId)}`;
          else if (tx.type === 'EXPENSE') accText = `← ${getAccName(tx.sourceAccountId)}`;
          else if (tx.type === 'TRANSFER') accText = `${getAccName(tx.sourceAccountId)} → ${getAccName(tx.destinationAccountId)}`;

          return `
            <tr class="${tx.type === 'INCOME' ? 'income-row' : tx.type === 'EXPENSE' ? 'expense-row' : 'transfer-row'}">
              <td>${tx.date}</td>
              <td>${tx.reason || '-'}</td>
              <td>${tx.type === 'INCOME' ? '+' : tx.type === 'EXPENSE' ? '-' : '↔ '}₹${tx.amount.toLocaleString('en-IN')}</td>
              <td>${tx.category || '-'}</td>
              <td>${accText || '-'}</td>
              <td>${tx.type}</td>
            </tr>
          `;
        }).join('')}
    </tbody>
  </table>

  <div class="footer">
    Generated by Money Control V2 on ${new Date().toLocaleDateString('en-IN', { dateStyle: 'long' })}
  </div>
</body>
</html>`;

  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const win = window.open(url, '_blank');
  if (win) {
    win.onload = () => {
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    };
  }
}

function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
