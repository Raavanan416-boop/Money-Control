// ============================================
// 💰 Money Control V3 — Navigation Component
// ============================================

import { showConfirm } from './modal.js';
import { logout } from '../services/auth.js';
import { toast } from '../utils/toast.js';

/**
 * Render the desktop sidebar (Unchanged)
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
 * Render compact mobile top header
 */
export function renderMobileHeader() {
  return `
    <header class="mobile-header">
      <button class="mobile-hamburger-btn" id="mobile-hamburger-btn" aria-label="Open Navigation Menu">
        <span>☰</span>
      </button>
      <div class="mobile-header-brand">
        <img src="/icon-192.png" alt="Money Control" class="mobile-header-logo" />
        <span class="mobile-header-title">Money Control</span>
      </div>
    </header>
  `;
}

/**
 * Render mobile navigation drawer & backdrop overlay
 */
export function renderMobileDrawer(activePage, user, profile) {
  const name = profile?.name || user?.displayName || 'User';
  const email = profile?.email || user?.email || '';
  const initial = name ? name.charAt(0).toUpperCase() : '👤';

  const navLinks = [
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
    <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>
    <aside class="mobile-drawer" id="mobile-drawer">
      <div class="mobile-drawer-header">
        <div class="mobile-drawer-logo">
          <img src="/icon-192.png" alt="Money Control" style="width: 28px; height: 28px; border-radius: 8px;" />
          <span style="font-weight: 800; font-size: 1.1rem; background: var(--gradient-primary); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Money Control</span>
        </div>
        <button class="mobile-drawer-close" id="mobile-drawer-close" aria-label="Close Menu">✕</button>
      </div>

      <div class="mobile-drawer-user">
        <div class="mobile-drawer-avatar">${initial}</div>
        <div class="mobile-drawer-user-info">
          <div class="mobile-drawer-user-name">${name}</div>
          <div class="mobile-drawer-user-email">${email}</div>
        </div>
      </div>

      <nav class="mobile-drawer-nav">
        ${navLinks.map(link => `
          <div class="mobile-drawer-item ${activePage === link.id ? 'active' : ''}" data-page="${link.id}">
            <span class="mobile-drawer-icon">${link.icon}</span>
            <span>${link.label}</span>
          </div>
        `).join('')}

        <div class="mobile-drawer-divider"></div>

        <div class="mobile-drawer-item" id="mobile-drawer-lock-app">
          <span class="mobile-drawer-icon">🔒</span>
          <span>Lock App</span>
        </div>

        <div class="mobile-drawer-item danger" id="mobile-drawer-logout">
          <span class="mobile-drawer-icon">🚪</span>
          <span>Logout</span>
        </div>
      </nav>
    </aside>
  `;
}

/**
 * Render mobile bottom navigation (Unchanged)
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
 * Open Mobile Drawer
 */
export function openMobileDrawer() {
  const overlay = document.getElementById('mobile-drawer-overlay');
  const drawer = document.getElementById('mobile-drawer');
  if (overlay) overlay.classList.add('open');
  if (drawer) drawer.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Close Mobile Drawer
 */
export function closeMobileDrawer() {
  const overlay = document.getElementById('mobile-drawer-overlay');
  const drawer = document.getElementById('mobile-drawer');
  if (overlay) overlay.classList.remove('open');
  if (drawer) drawer.classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Attach navigation event listeners
 */
export function attachNavListeners(navigateFn, appState) {
  // Sidebar links (desktop)
  document.querySelectorAll('.sidebar-link[data-page]').forEach(link => {
    link.onclick = () => {
      const page = link.dataset.page;
      navigateFn(page);
    };
  });

  // Bottom nav items (mobile)
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

  // Hamburger button
  const hamburgerBtn = document.getElementById('mobile-hamburger-btn');
  if (hamburgerBtn) {
    hamburgerBtn.onclick = () => openMobileDrawer();
  }

  // Close drawer button
  const closeBtn = document.getElementById('mobile-drawer-close');
  if (closeBtn) {
    closeBtn.onclick = () => closeMobileDrawer();
  }

  // Overlay click to close
  const overlay = document.getElementById('mobile-drawer-overlay');
  if (overlay) {
    overlay.onclick = () => closeMobileDrawer();
  }

  // Mobile drawer nav items
  document.querySelectorAll('.mobile-drawer-item[data-page]').forEach(item => {
    item.onclick = () => {
      closeMobileDrawer();
      const page = item.dataset.page;
      navigateFn(page);
    };
  });

  // Mobile drawer Lock App button
  const lockBtn = document.getElementById('mobile-drawer-lock-app');
  if (lockBtn) {
    lockBtn.onclick = () => {
      closeMobileDrawer();
      if (appState && appState.pinEnabled && appState.pinHash) {
        window.dispatchEvent(new CustomEvent('lock-app'));
      } else {
        toast.info('🔒 PIN Lock is not enabled. Go to Settings → PIN Lock to set your PIN.');
        navigateFn('settings');
      }
    };
  }

  // Mobile drawer Logout button
  const logoutBtn = document.getElementById('mobile-drawer-logout');
  if (logoutBtn) {
    logoutBtn.onclick = async () => {
      closeMobileDrawer();
      const confirmed = await showConfirm({
        icon: '🚪',
        title: 'Logout?',
        message: 'Are you sure you want to log out of Money Control?',
        confirmText: 'Logout',
        danger: true
      });
      if (confirmed) {
        await logout();
        toast.info('Logged out successfully.');
      }
    };
  }

  // Swipe left on drawer to close
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    let startX = 0;
    drawer.ontouchstart = (e) => {
      startX = e.touches[0].clientX;
    };
    drawer.ontouchmove = (e) => {
      const currentX = e.touches[0].clientX;
      if (startX - currentX > 50) {
        closeMobileDrawer();
      }
    };
  }
}
