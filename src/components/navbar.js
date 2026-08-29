// ============================================
// 💰 Money Control V2 — Navigation Component
// ============================================

/**
 * Render the desktop sidebar
 */
export function renderSidebar(activePage) {
  const links = [
    { id: 'dashboard', icon: '🏠', label: 'Dashboard' },
    { id: 'accounts', icon: '🏦', label: 'Accounts' },
    { id: 'transactions', icon: '💸', label: 'Transactions' },
    { id: 'analytics', icon: '📊', label: 'Analytics' },
    { id: 'budget', icon: '🎯', label: 'Budget' },
    { id: 'money-control', icon: '📅', label: 'Money Control' },
    { id: 'profile', icon: '👤', label: 'Profile' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
  ];

  return `
    <aside class="sidebar">
      <div class="sidebar-logo">
        <img src="/icon-192.png" alt="Money Control" class="sidebar-logo-icon" style="width: 32px; height: 32px; border-radius: 8px;" />
        <span class="sidebar-logo-text">Money Control</span>
      </div>
      <nav class="sidebar-nav">
        ${links.map(link => `
          <div class="sidebar-link ${activePage === link.id ? 'active' : ''}" data-page="${link.id}">
            <span class="sidebar-link-icon">${link.icon}</span>
            <span>${link.label}</span>
          </div>
        `).join('')}
      </nav>
    </aside>
  `;
}

/**
 * Render the mobile bottom navigation
 */
export function renderBottomNav(activePage) {
  const items = [
    { id: 'dashboard', icon: '🏠', label: 'Home' },
    { id: 'accounts', icon: '🏦', label: 'Accounts' },
    { id: 'add', icon: '➕', label: 'Add', isAdd: true },
    { id: 'transactions', icon: '📜', label: 'Txns' },
    { id: 'analytics', icon: '📊', label: 'Analytics' },
  ];

  return `
    <nav class="bottom-nav">
      <div class="bottom-nav-items">
        ${items.map(item => {
          if (item.isAdd) {
            return `<div class="bottom-nav-add" data-action="add" id="mobile-add-btn">➕</div>`;
          }
          return `
            <div class="bottom-nav-item ${activePage === item.id ? 'active' : ''}" data-page="${item.id}">
              <span class="bottom-nav-item-icon">${item.icon}</span>
              <span>${item.label}</span>
            </div>
          `;
        }).join('')}
      </div>
    </nav>
  `;
}

/**
 * Attach navigation event listeners
 */
export function attachNavListeners(navigateFn) {
  // Sidebar links
  document.querySelectorAll('.sidebar-link[data-page]').forEach(link => {
    link.onclick = () => {
      const page = link.dataset.page;
      navigateFn(page);
    };
  });

  // Bottom nav items
  document.querySelectorAll('.bottom-nav-item[data-page]').forEach(item => {
    item.onclick = () => {
      const page = item.dataset.page;
      navigateFn(page);
    };
  });

  // Mobile add button
  const addBtn = document.getElementById('mobile-add-btn');
  if (addBtn) {
    addBtn.onclick = () => {
      window.dispatchEvent(new CustomEvent('open-add-menu'));
    };
  }
}
