// ============================================
// 💰 Money Control — Formatters
// ============================================

/**
 * Format amount in Indian Rupee format
 * e.g., 150000 → ₹1,50,000
 */
export function formatCurrency(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) return '₹0';
  const num = Number(amount);
  const formatted = num.toLocaleString('en-IN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
  });
  return `₹${formatted}`;
}

/**
 * Format amount with sign
 * e.g., income → +₹5,000, expense → -₹500
 */
export function formatCurrencyWithSign(amount, type) {
  const sign = type === 'INCOME' ? '+' : '-';
  return `${sign}${formatCurrency(Math.abs(amount))}`;
}

/**
 * Format date to readable string
 * e.g., '2026-08-28' → '28 Aug 2026'
 */
export function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}

/**
 * Format date to long string
 * e.g., '2026-08-28' → '28 August 2026'
 */
export function formatDateLong(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

/**
 * Format ISO timestamp to time
 * e.g., '2026-08-28T14:30:00' → '2:30 PM'
 */
export function formatTime(isoStr) {
  if (!isoStr) return '';
  const date = new Date(isoStr);
  return date.toLocaleTimeString('en-IN', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
}

/**
 * Get greeting based on time of day
 */
export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

/**
 * Get today's date in YYYY-MM-DD format
 */
export function getTodayDate() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

/**
 * Get current month in YYYY-MM format
 */
export function getCurrentMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
}

/**
 * Get relative date label
 */
export function getRelativeDate(dateStr) {
  const today = getTodayDate();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  if (dateStr === today) return 'Today';
  if (dateStr === yesterdayStr) return 'Yesterday';
  return formatDate(dateStr);
}

/**
 * Format current date for display
 */
export function formatCurrentDate() {
  return new Date().toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

/**
 * Get month name from month index (0-11)
 */
export function getMonthName(monthIndex) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return months[monthIndex];
}

/**
 * Get short month name
 */
export function getShortMonthName(monthIndex) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months[monthIndex];
}

/**
 * Get start and end dates for a week containing the given date
 */
export function getWeekRange(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  const day = date.getDay();
  const start = new Date(date);
  start.setDate(date.getDate() - day);
  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  return {
    start: start.toISOString().split('T')[0],
    end: end.toISOString().split('T')[0]
  };
}

/**
 * Escape HTML to prevent XSS
 */
export function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Category emoji map
 */
export const EXPENSE_CATEGORIES = [
  { value: 'Food', label: '🍔 Food', emoji: '🍔' },
  { value: 'Travel', label: '🚌 Travel', emoji: '🚌' },
  { value: 'Recharge', label: '📱 Recharge', emoji: '📱' },
  { value: 'Shopping', label: '🛍️ Shopping', emoji: '🛍️' },
  { value: 'Entertainment', label: '🎮 Entertainment', emoji: '🎮' },
  { value: 'Education', label: '📚 Education', emoji: '📚' },
  { value: 'Software', label: '💻 Software', emoji: '💻' },
  { value: 'Personal', label: '🏠 Personal', emoji: '🏠' },
  { value: 'Other', label: '💊 Other', emoji: '💊' }
];

export const INCOME_CATEGORIES = [
  { value: 'Pocket Money', label: 'Pocket Money' },
  { value: 'Salary', label: 'Salary' },
  { value: 'Gift', label: 'Gift' },
  { value: 'Freelance', label: 'Freelance' },
  { value: 'Refund', label: 'Refund' },
  { value: 'Other', label: 'Other' }
];

/**
 * Get category emoji
 */
export function getCategoryEmoji(category) {
  const cat = EXPENSE_CATEGORIES.find(c => c.value === category);
  return cat ? cat.emoji : '💰';
}

/**
 * Chart color palette
 */
export const CHART_COLORS = [
  '#6C63FF', '#10B981', '#F59E0B', '#EF4444', '#3B82F6',
  '#8B5CF6', '#EC4899', '#14B8A6', '#F97316', '#64748B'
];
