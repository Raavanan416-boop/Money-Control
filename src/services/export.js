// ============================================
// 💰 Money Control V3 — Export Service
// ============================================

import { formatCurrency, formatDateLong } from '../utils/formatters.js';

// ─── Helpers ──────────────────────────────

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

function getMonthName(month) {
  return ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'][month];
}

// ─── CSV Export (existing, unchanged) ──────────────────────────────

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

// ─── Excel Export ──────────────────────────────

/**
 * Export as Excel workbook with multiple sheets
 */
export async function exportToExcel(transactions, accounts, friendMoneyRecords) {
  const XLSX = await import('xlsx');

  const getAccName = (id) => {
    const acc = accounts.find(a => a.id === id);
    return acc ? acc.name : '';
  };

  // ── Sheet 1: Transactions ──
  const txHeaders = ['Date', 'Type', 'Amount (₹)', 'Reason', 'Category', 'From Account', 'To Account', 'Notes'];
  const txRows = (transactions || [])
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .map(tx => [
      tx.date || '',
      tx.type || '',
      Number(tx.amount) || 0,
      tx.reason || '',
      tx.category || '',
      getAccName(tx.sourceAccountId) || '',
      getAccName(tx.destinationAccountId) || '',
      tx.notes || ''
    ]);

  const txSheet = XLSX.utils.aoa_to_sheet([txHeaders, ...txRows]);
  txSheet['!cols'] = [{ wch: 12 }, { wch: 10 }, { wch: 14 }, { wch: 30 }, { wch: 16 }, { wch: 20 }, { wch: 20 }, { wch: 30 }];

  // ── Sheet 2: Accounts ──
  const accHeaders = ['Account Name', 'Type', 'Initial Balance (₹)', 'Current Balance (₹)', 'Bank Name', 'Last 4 Digits'];
  const { calculateAccountBalances } = await import('../utils/calculations.js');
  const { balances } = calculateAccountBalances(accounts, transactions);
  const accRows = (accounts || []).map(acc => [
    acc.name || '',
    acc.type || '',
    Number(acc.initialBalance) || 0,
    Number(balances[acc.id]) || 0,
    acc.bankName || '',
    acc.last4Digits || ''
  ]);

  const accSheet = XLSX.utils.aoa_to_sheet([accHeaders, ...accRows]);
  accSheet['!cols'] = [{ wch: 22 }, { wch: 10 }, { wch: 20 }, { wch: 20 }, { wch: 22 }, { wch: 14 }];

  // ── Sheet 3: Friends Money ──
  const fmHeaders = ['Friend Name', 'Type', 'Original Amount (₹)', 'Returned Amount (₹)', 'Remaining (₹)', 'Status', 'Date', 'Reason'];
  const fmRows = (friendMoneyRecords || []).map(r => [
    r.friendName || '',
    r.type === 'GAVE' ? 'They Owe Me' : 'I Owe',
    Number(r.amount) || 0,
    Number(r.returnedAmount) || 0,
    Number(r.remainingAmount) || 0,
    r.status || 'pending',
    r.date || '',
    r.reason || ''
  ]);

  const fmSheet = XLSX.utils.aoa_to_sheet([fmHeaders, ...fmRows]);
  fmSheet['!cols'] = [{ wch: 20 }, { wch: 14 }, { wch: 20 }, { wch: 20 }, { wch: 16 }, { wch: 12 }, { wch: 12 }, { wch: 30 }];

  // ── Sheet 4: Summary ──
  const totalIncome = (transactions || []).filter(t => t.type === 'INCOME').reduce((s, t) => s + (Number(t.amount) || 0), 0);
  const totalExpense = (transactions || []).filter(t => t.type === 'EXPENSE').reduce((s, t) => s + (Number(t.amount) || 0), 0);
  const totalTransfer = (transactions || []).filter(t => t.type === 'TRANSFER').reduce((s, t) => s + (Number(t.amount) || 0), 0);
  const totalBalance = Object.values(balances).reduce((s, v) => s + (Number(v) || 0), 0);
  const pendingFM = (friendMoneyRecords || []).filter(r => r.status === 'pending').reduce((s, r) => s + (Number(r.remainingAmount) || 0), 0);

  const summaryRows = [
    ['Money Control Financial Summary', ''],
    ['Generated On', new Date().toLocaleString('en-IN')],
    ['', ''],
    ['METRIC', 'VALUE (₹)'],
    ['Total Income (All Time)', totalIncome],
    ['Total Expenses (All Time)', totalExpense],
    ['Total Transfers (All Time)', totalTransfer],
    ['Net Savings (Income - Expenses)', totalIncome - totalExpense],
    ['Total Current Balance', totalBalance],
    ['', ''],
    ['ACCOUNTS', 'BALANCE (₹)'],
    ...(accounts || []).map(acc => [acc.name, Number(balances[acc.id]) || 0]),
    ['', ''],
    ['FRIENDS MONEY', 'AMOUNT (₹)'],
    ['Total Pending (All Friends)', pendingFM],
    ['Total Transactions', (transactions || []).length],
    ['Total Friend Money Records', (friendMoneyRecords || []).length]
  ];

  const summarySheet = XLSX.utils.aoa_to_sheet(summaryRows);
  summarySheet['!cols'] = [{ wch: 35 }, { wch: 20 }];

  // ── Build workbook ──
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, txSheet, 'Transactions');
  XLSX.utils.book_append_sheet(wb, accSheet, 'Accounts');
  XLSX.utils.book_append_sheet(wb, fmSheet, 'Friends Money');
  XLSX.utils.book_append_sheet(wb, summarySheet, 'Summary');

  const dateStr = new Date().toISOString().split('T')[0];
  XLSX.writeFile(wb, `money-control-${dateStr}.xlsx`);
}

// ─── PDF Export ──────────────────────────────

/**
 * Generate and download a professional PDF monthly report
 */
export async function exportToPDF(transactions, accounts, friendMoneyRecords, month, year) {
  const { default: jsPDF } = await import('jspdf');
  const autoTable = (await import('jspdf-autotable')).default;

  const monthName = getMonthName(month);
  const monthStr = `${year}-${String(month + 1).padStart(2, '0')}`;
  const monthTx = (transactions || []).filter(tx => tx.date && tx.date.startsWith(monthStr));

  const getAccName = (id) => {
    const acc = accounts.find(a => a.id === id);
    return acc ? acc.name : '—';
  };

  const { calculateAccountBalances } = await import('../utils/calculations.js');
  const { balances } = calculateAccountBalances(accounts, transactions);

  const totalIncome = monthTx.filter(t => t.type === 'INCOME').reduce((s, t) => s + (Number(t.amount) || 0), 0);
  const totalExpense = monthTx.filter(t => t.type === 'EXPENSE').reduce((s, t) => s + (Number(t.amount) || 0), 0);
  const totalTransfer = monthTx.filter(t => t.type === 'TRANSFER').reduce((s, t) => s + (Number(t.amount) || 0), 0);
  const totalBalance = Object.values(balances).reduce((s, v) => s + (Number(v) || 0), 0);

  const categoryTotals = {};
  monthTx.filter(t => t.type === 'EXPENSE').forEach(t => {
    const cat = t.category || 'Other';
    categoryTotals[cat] = (categoryTotals[cat] || 0) + (Number(t.amount) || 0);
  });
  const sortedCats = Object.entries(categoryTotals).sort((a, b) => b[1] - a[1]);

  const { theyOweMe, iOwe, pendingCount, settledCount } = getFriendsSummary(friendMoneyRecords);

  // ── Create PDF ──
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const W = pdf.internal.pageSize.getWidth();
  let y = 0;

  // ── Helper functions ──
  const rupees = (n) => `Rs.${Number(n).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  const addPageIfNeeded = (neededSpace = 30) => {
    if (y + neededSpace > 270) {
      pdf.addPage();
      y = 20;
    }
  };

  // ── Header ──
  pdf.setFillColor(108, 99, 255);
  pdf.rect(0, 0, W, 32, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.text(`${monthName} ${year} Money Report`, W / 2, 14, { align: 'center' });
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`Generated on ${new Date().toLocaleString('en-IN', { dateStyle: 'long', timeStyle: 'short' })}`, W / 2, 22, { align: 'center' });
  pdf.text('Money Control — Personal Finance Tracker', W / 2, 28, { align: 'center' });

  y = 42;

  // ── Summary Cards ──
  pdf.setTextColor(30, 30, 50);
  pdf.setFontSize(13);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Monthly Summary', 14, y);
  y += 6;

  const cards = [
    { label: 'Total Income', value: rupees(totalIncome), color: [16, 185, 129] },
    { label: 'Total Expenses', value: rupees(totalExpense), color: [239, 68, 68] },
    { label: 'Net Savings', value: rupees(totalIncome - totalExpense), color: [108, 99, 255] }
  ];

  const cardW = (W - 28 - 8) / 3;
  cards.forEach((card, i) => {
    const cx = 14 + i * (cardW + 4);
    pdf.setFillColor(248, 249, 252);
    pdf.roundedRect(cx, y, cardW, 22, 3, 3, 'F');
    pdf.setDrawColor(...card.color);
    pdf.setLineWidth(0.8);
    pdf.line(cx, y, cx, y + 22);
    pdf.setLineWidth(0.2);
    pdf.setDrawColor(220, 220, 230);
    pdf.setFontSize(7.5);
    pdf.setFont('helvetica', 'normal');
    pdf.setTextColor(100, 116, 139);
    pdf.text(card.label.toUpperCase(), cx + 4, y + 7);
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.setTextColor(...card.color);
    pdf.text(card.value, cx + 4, y + 15);
  });
  y += 28;

  // ── Section 1: Income Transactions ──
  addPageIfNeeded(40);
  pdf.setTextColor(30, 30, 50);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('1. Income', 14, y);
  y += 4;

  const incomeTx = monthTx.filter(t => t.type === 'INCOME');
  if (incomeTx.length > 0) {
    autoTable(pdf, {
      startY: y,
      head: [['Date', 'Reason', 'Category', 'Account', 'Amount']],
      body: incomeTx.map(tx => [
        tx.date || '—',
        tx.reason || '—',
        tx.category || '—',
        getAccName(tx.destinationAccountId),
        rupees(tx.amount)
      ]),
      foot: [['', '', '', 'Total Income', rupees(totalIncome)]],
      theme: 'grid',
      headStyles: { fillColor: [16, 185, 129], textColor: 255, fontStyle: 'bold', fontSize: 8 },
      footStyles: { fillColor: [230, 255, 245], textColor: [16, 185, 129], fontStyle: 'bold' },
      bodyStyles: { fontSize: 8 },
      columnStyles: { 4: { halign: 'right', textColor: [16, 185, 129], fontStyle: 'bold' } },
      margin: { left: 14, right: 14 }
    });
    y = pdf.lastAutoTable.finalY + 8;
  } else {
    pdf.setFontSize(9); pdf.setFont('helvetica', 'normal'); pdf.setTextColor(150, 150, 150);
    pdf.text('No income transactions this month.', 14, y + 4);
    y += 10;
  }

  // ── Section 2: Expenses ──
  addPageIfNeeded(40);
  pdf.setTextColor(30, 30, 50);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('2. Expenses', 14, y);
  y += 4;

  const expenseTx = monthTx.filter(t => t.type === 'EXPENSE');
  if (expenseTx.length > 0) {
    autoTable(pdf, {
      startY: y,
      head: [['Date', 'Reason', 'Category', 'Account', 'Amount']],
      body: expenseTx.map(tx => [
        tx.date || '—',
        tx.reason || '—',
        tx.category || '—',
        getAccName(tx.sourceAccountId),
        rupees(tx.amount)
      ]),
      foot: [['', '', '', 'Total Expenses', rupees(totalExpense)]],
      theme: 'grid',
      headStyles: { fillColor: [239, 68, 68], textColor: 255, fontStyle: 'bold', fontSize: 8 },
      footStyles: { fillColor: [255, 240, 240], textColor: [239, 68, 68], fontStyle: 'bold' },
      bodyStyles: { fontSize: 8 },
      columnStyles: { 4: { halign: 'right', textColor: [239, 68, 68], fontStyle: 'bold' } },
      margin: { left: 14, right: 14 }
    });
    y = pdf.lastAutoTable.finalY + 6;

    // Category Summary
    if (sortedCats.length > 0) {
      addPageIfNeeded(30);
      pdf.setFontSize(10); pdf.setFont('helvetica', 'bold'); pdf.setTextColor(30, 30, 50);
      pdf.text('Category-wise Expense Summary', 14, y);
      y += 3;
      autoTable(pdf, {
        startY: y,
        head: [['Category', 'Amount', '% of Total']],
        body: sortedCats.map(([cat, amt]) => [
          cat,
          rupees(amt),
          totalExpense > 0 ? `${((amt / totalExpense) * 100).toFixed(1)}%` : '0%'
        ]),
        theme: 'striped',
        headStyles: { fillColor: [100, 100, 130], textColor: 255, fontSize: 8 },
        bodyStyles: { fontSize: 8 },
        columnStyles: { 1: { halign: 'right' }, 2: { halign: 'right' } },
        margin: { left: 14, right: 14 }
      });
      y = pdf.lastAutoTable.finalY + 8;
    }
  } else {
    pdf.setFontSize(9); pdf.setFont('helvetica', 'normal'); pdf.setTextColor(150, 150, 150);
    pdf.text('No expense transactions this month.', 14, y + 4);
    y += 10;
  }

  // ── Section 3: Transfers ──
  addPageIfNeeded(30);
  pdf.setTextColor(30, 30, 50);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('3. Transfers', 14, y);
  y += 4;

  const transferTx = monthTx.filter(t => t.type === 'TRANSFER');
  if (transferTx.length > 0) {
    autoTable(pdf, {
      startY: y,
      head: [['Date', 'Reason', 'From Account', 'To Account', 'Amount']],
      body: transferTx.map(tx => [
        tx.date || '—',
        tx.reason || '—',
        getAccName(tx.sourceAccountId),
        getAccName(tx.destinationAccountId),
        rupees(tx.amount)
      ]),
      foot: [['', '', '', 'Total Transfers', rupees(totalTransfer)]],
      theme: 'grid',
      headStyles: { fillColor: [108, 99, 255], textColor: 255, fontStyle: 'bold', fontSize: 8 },
      footStyles: { fillColor: [240, 238, 255], textColor: [108, 99, 255], fontStyle: 'bold' },
      bodyStyles: { fontSize: 8 },
      columnStyles: { 4: { halign: 'right', textColor: [108, 99, 255], fontStyle: 'bold' } },
      margin: { left: 14, right: 14 }
    });
    y = pdf.lastAutoTable.finalY + 8;
  } else {
    pdf.setFontSize(9); pdf.setFont('helvetica', 'normal'); pdf.setTextColor(150, 150, 150);
    pdf.text('No transfers this month.', 14, y + 4);
    y += 10;
  }

  // ── Section 4: Accounts ──
  addPageIfNeeded(40);
  pdf.setTextColor(30, 30, 50);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('4. Accounts', 14, y);
  y += 4;

  autoTable(pdf, {
    startY: y,
    head: [['Account', 'Type', 'Current Balance']],
    body: (accounts || []).map(acc => [
      acc.name,
      acc.type,
      rupees(balances[acc.id] || 0)
    ]),
    foot: [['Total Balance', '', rupees(totalBalance)]],
    theme: 'grid',
    headStyles: { fillColor: [30, 30, 60], textColor: 255, fontStyle: 'bold', fontSize: 8 },
    footStyles: { fillColor: [235, 235, 255], textColor: [30, 30, 60], fontStyle: 'bold' },
    bodyStyles: { fontSize: 8 },
    columnStyles: { 2: { halign: 'right', fontStyle: 'bold' } },
    margin: { left: 14, right: 14 }
  });
  y = pdf.lastAutoTable.finalY + 8;

  // ── Section 5: Friends Money ──
  addPageIfNeeded(40);
  pdf.setTextColor(30, 30, 50);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('5. Friends Money', 14, y);
  y += 4;

  const fmRecords = (friendMoneyRecords || []);
  if (fmRecords.length > 0) {
    autoTable(pdf, {
      startY: y,
      head: [['Friend', 'Type', 'Original', 'Returned', 'Remaining', 'Status']],
      body: fmRecords.map(r => [
        r.friendName || '—',
        r.type === 'GAVE' ? 'They Owe Me' : 'I Owe',
        rupees(r.amount || 0),
        rupees(r.returnedAmount || 0),
        rupees(r.remainingAmount || 0),
        r.status === 'settled' ? '✓ Settled' : '⏳ Pending'
      ]),
      foot: [
        ['They Owe Me Total', '', '', '', rupees(theyOweMe), ''],
        ['I Owe Total', '', '', '', rupees(iOwe), '']
      ],
      theme: 'grid',
      headStyles: { fillColor: [139, 92, 246], textColor: 255, fontStyle: 'bold', fontSize: 8 },
      footStyles: { fillColor: [245, 240, 255], textColor: [100, 60, 200], fontStyle: 'bold' },
      bodyStyles: { fontSize: 8 },
      columnStyles: {
        2: { halign: 'right' },
        3: { halign: 'right' },
        4: { halign: 'right', fontStyle: 'bold' }
      },
      margin: { left: 14, right: 14 }
    });
    y = pdf.lastAutoTable.finalY + 8;
  } else {
    pdf.setFontSize(9); pdf.setFont('helvetica', 'normal'); pdf.setTextColor(150, 150, 150);
    pdf.text('No friend money records.', 14, y + 4);
    y += 10;
  }

  // ── Section 6: Summary ──
  addPageIfNeeded(50);
  pdf.setTextColor(30, 30, 50);
  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'bold');
  pdf.text('6. Summary', 14, y);
  y += 4;

  autoTable(pdf, {
    startY: y,
    head: [['Metric', 'Value']],
    body: [
      ['Total Income (this month)', rupees(totalIncome)],
      ['Total Expenses (this month)', rupees(totalExpense)],
      ['Total Transfers (this month)', rupees(totalTransfer)],
      ['Net Savings (this month)', rupees(totalIncome - totalExpense)],
      ['Current Total Balance', rupees(totalBalance)],
      ['Total Transactions (this month)', String(monthTx.length)],
      ['They Owe Me (Friends)', rupees(theyOweMe)],
      ['I Owe (Friends)', rupees(iOwe)]
    ],
    theme: 'striped',
    headStyles: { fillColor: [108, 99, 255], textColor: 255, fontStyle: 'bold', fontSize: 9 },
    bodyStyles: { fontSize: 9 },
    columnStyles: { 1: { halign: 'right', fontStyle: 'bold' } },
    margin: { left: 14, right: 14 }
  });
  y = pdf.lastAutoTable.finalY + 8;

  // ── Footer on each page ──
  const totalPages = pdf.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    pdf.setPage(i);
    pdf.setFontSize(7);
    pdf.setTextColor(160, 160, 180);
    pdf.text(
      `Money Control | ${monthName} ${year} Report | Page ${i} of ${totalPages}`,
      W / 2, 290, { align: 'center' }
    );
  }

  // ── Save ──
  const dateStr = new Date().toISOString().split('T')[0];
  pdf.save(`money-control-${monthName.toLowerCase()}-${year}-report-${dateStr}.pdf`);
}

// ─── Monthly HTML Report (existing, unchanged) ──────────────────────────────

/**
 * Generate and display a printable monthly report (opens in new tab)
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
    Generated by Money Control V3 on ${new Date().toLocaleDateString('en-IN', { dateStyle: 'long' })}
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

// ─── Helpers ──────────────────────────────

function getFriendsSummary(records) {
  let theyOweMe = 0;
  let iOwe = 0;
  let pendingCount = 0;
  let settledCount = 0;
  (records || []).forEach(r => {
    if (r.status === 'pending') {
      pendingCount++;
      if (r.type === 'GAVE') theyOweMe += (Number(r.remainingAmount) || 0);
      else if (r.type === 'BORROWED') iOwe += (Number(r.remainingAmount) || 0);
    } else {
      settledCount++;
    }
  });
  return { theyOweMe, iOwe, pendingCount, settledCount };
}
