// ============================================
// 💰 Money Control — Toast Notifications
// ============================================

let toastCounter = 0;

/**
 * Show a toast notification
 * @param {string} message - The message to display
 * @param {string} type - 'success' | 'error' | 'warning' | 'info'
 * @param {number} duration - Auto-dismiss duration in ms (default: 4000)
 */
export function showToast(message, type = 'info', duration = 4000) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const id = `toast-${++toastCounter}`;
  const icons = {
    success: '✅',
    error: '❌',
    warning: '⚠️',
    info: 'ℹ️'
  };

  const titles = {
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
    info: 'Info'
  };

  const toast = document.createElement('div');
  toast.id = id;
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <div class="toast-icon">${icons[type] || icons.info}</div>
    <div class="toast-content">
      <div class="toast-title">${titles[type] || titles.info}</div>
      <div class="toast-message">${message}</div>
    </div>
    <button class="toast-close" onclick="this.closest('.toast').remove()">✕</button>
    <div class="toast-progress" style="width: 100%; transition: width ${duration}ms linear;"></div>
  `;

  container.appendChild(toast);

  // Start progress bar animation
  requestAnimationFrame(() => {
    const progress = toast.querySelector('.toast-progress');
    if (progress) {
      progress.style.width = '0%';
    }
  });

  // Auto dismiss
  const timer = setTimeout(() => {
    removeToast(toast);
  }, duration);

  // Clear timer on manual close
  toast.querySelector('.toast-close').addEventListener('click', () => {
    clearTimeout(timer);
  });

  // Limit to 4 visible toasts
  const toasts = container.querySelectorAll('.toast');
  if (toasts.length > 4) {
    removeToast(toasts[0]);
  }
}

function removeToast(toast) {
  if (!toast || !toast.parentNode) return;
  toast.classList.add('removing');
  setTimeout(() => {
    if (toast.parentNode) toast.parentNode.removeChild(toast);
  }, 300);
}

// Convenience methods
export const toast = {
  success: (msg, duration) => showToast(msg, 'success', duration),
  error: (msg, duration) => showToast(msg, 'error', duration),
  warning: (msg, duration) => showToast(msg, 'warning', duration),
  info: (msg, duration) => showToast(msg, 'info', duration)
};
