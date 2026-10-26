// ============================================
// 💰 Money Control V3 — PWA Service
// ============================================

import { syncPendingOperations } from './sync-engine.js';

let deferredPrompt = null;
let isInstalled = false;

/**
 * Initialize PWA features — call once on app load
 */
export function initPWA() {
  registerServiceWorker();
  detectInstallState();
  captureInstallPrompt();
  setupOfflineDetection();
}

/**
 * Register Service Worker with full update lifecycle handling.
 *
 * Update flow:
 *   1. Browser downloads /sw.js on every page load (never cached by Vercel)
 *   2. If byte-content differs → new SW enters "installing" state
 *   3. skipWaiting() in SW makes it activate immediately
 *   4. SW broadcasts SW_UPDATED → we reload once (guarded against loops)
 *   5. On reload, old cache is gone (evicted during activate), new assets load
 */
function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  const isDev = Boolean(import.meta.env?.DEV);
  const allowSWInDev = window.location.search.includes('sw=1') || window.location.search.includes('pwa=1');

  if (isDev && !allowSWInDev) {
    // In local dev mode (HMR): unregister service workers unless explicitly testing (?sw=1)
    navigator.serviceWorker.getRegistrations().then((registrations) => {
      for (const reg of registrations) reg.unregister();
    }).catch((err) => console.warn('[PWA] SW unregister warning:', err));
    return;
  }

  // ── Guard against infinite reload loops ──────────────────────────────────
  // We set a sessionStorage flag before reloading; if it's already set when
  // we land here, we skip the reload and clear the flag.
  const RELOAD_FLAG = 'mc_sw_reloaded';
  let reloadScheduled = false;

  function safeReload() {
    if (reloadScheduled) return;
    if (sessionStorage.getItem(RELOAD_FLAG)) {
      // We already reloaded once this session — don't loop
      sessionStorage.removeItem(RELOAD_FLAG);
      return;
    }
    reloadScheduled = true;
    sessionStorage.setItem(RELOAD_FLAG, '1');
    console.log('[PWA] New version active — reloading for update.');
    window.location.reload();
  }

  // ── Listen for SW_UPDATED message from the service worker ────────────────
  // The SW sends this after activate() + clients.claim() succeeds.
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SW_UPDATED') {
      console.log('[PWA] SW_UPDATED received, version:', event.data.version);
      safeReload();
    }
  });

  // ── Listen for controller change (new SW took over) ──────────────────────
  // This fires when skipWaiting() causes a SW transition.
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    console.log('[PWA] Controller changed — new SW is active.');
    safeReload();
  });

  // ── Register the service worker ───────────────────────────────────────────
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js', { updateViaCache: 'none' }) // never cache sw.js in the browser HTTP cache
      .then((registration) => {
        console.log('[PWA] SW registered:', registration.scope);

        // ── Detect a new SW installing right now ────────────────────────────
        function trackInstalling(worker) {
          worker.addEventListener('statechange', () => {
            if (worker.state === 'installed' && navigator.serviceWorker.controller) {
              // A new SW installed while an old one was controlling the page
              console.log('[PWA] New SW installed and waiting.');
              // skipWaiting() in the SW will take care of the rest;
              // the controllerchange / SW_UPDATED events will trigger safeReload()
            }
          });
        }

        if (registration.installing) {
          trackInstalling(registration.installing);
        }

        registration.addEventListener('updatefound', () => {
          console.log('[PWA] SW update found.');
          if (registration.installing) {
            trackInstalling(registration.installing);
          }
        });

        // ── Periodically check for SW updates (every 60 s while tab is open) ─
        // The browser normally checks on navigation; this catches long-lived tabs.
        setInterval(() => {
          registration.update().catch(() => {});
        }, 60 * 1000);
      })
      .catch((err) => {
        console.warn('[PWA] SW registration failed:', err);
      });
  });
}

/**
 * Detect if app is already installed as PWA
 */
function detectInstallState() {
  // Check display mode
  if (window.matchMedia('(display-mode: standalone)').matches) {
    isInstalled = true;
  }

  // iOS standalone check
  if (window.navigator.standalone === true) {
    isInstalled = true;
  }

  // Listen for app installed event
  window.addEventListener('appinstalled', () => {
    isInstalled = true;
    deferredPrompt = null;
    hideInstallBanner();
  });
}

/**
 * Capture the beforeinstallprompt event
 */
function captureInstallPrompt() {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Only show if not dismissed and not installed
    const dismissed = localStorage.getItem('mc_install_dismissed');
    if (!dismissed && !isInstalled) {
      setTimeout(() => showInstallBanner(), 3000);
    }
  });
}

/**
 * Show the install banner
 */
function showInstallBanner() {
  if (isInstalled || !deferredPrompt) return;

  const banner = document.getElementById('pwa-install-banner');
  if (!banner) return;

  banner.innerHTML = `
    <div class="pwa-install-content">
      <div class="pwa-install-icon">
        <img src="/icon-192.png" alt="Money Control" width="48" height="48" style="border-radius: 12px;" />
      </div>
      <div class="pwa-install-text">
        <strong>Install Money Control</strong>
        <span>Track your money faster with the Money Control app.</span>
      </div>
      <div class="pwa-install-actions">
        <button class="pwa-install-btn" id="pwa-install-accept">Install App</button>
        <button class="pwa-install-dismiss" id="pwa-install-dismiss">Not Now</button>
      </div>
    </div>
  `;

  banner.classList.add('show');

  document.getElementById('pwa-install-accept').onclick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const result = await deferredPrompt.userChoice;
      if (result.outcome === 'accepted') {
        isInstalled = true;
      }
      deferredPrompt = null;
    }
    hideInstallBanner();
  };

  document.getElementById('pwa-install-dismiss').onclick = () => {
    localStorage.setItem('mc_install_dismissed', 'true');
    hideInstallBanner();
  };
}

/**
 * Hide the install banner
 */
function hideInstallBanner() {
  const banner = document.getElementById('pwa-install-banner');
  if (banner) {
    banner.classList.remove('show');
    setTimeout(() => { banner.innerHTML = ''; }, 300);
  }
}

/**
 * Setup offline/online detection
 */
function setupOfflineDetection() {
  const updateStatus = () => {
    const isOff = !navigator.onLine;
    const offlineBanners = document.querySelectorAll('#offline-banner, .dashboard-offline-banner');

    offlineBanners.forEach(banner => {
      if (isOff) {
        banner.classList.add('show');
      } else {
        banner.classList.remove('show');
      }
    });

    if (!isOff) {
      // Trigger background sync when coming back online
      try {
        syncPendingOperations(true).catch(() => {});
      } catch (e) {}
    }
  };

  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);

  // Initial check
  setTimeout(updateStatus, 300);
}

/**
 * Check if app is online
 */
export function isOnline() {
  return navigator.onLine;
}

/**
 * Check if PWA is installed
 */
export function isPWAInstalled() {
  return isInstalled;
}

/**
 * Check if install prompt is available
 */
export function canInstallPWA() {
  return !!deferredPrompt && !isInstalled;
}

/**
 * Trigger install prompt programmatically (from Settings)
 */
export async function triggerInstallPrompt() {
  if (!deferredPrompt) return false;

  deferredPrompt.prompt();
  const result = await deferredPrompt.userChoice;
  if (result.outcome === 'accepted') {
    isInstalled = true;
  }
  deferredPrompt = null;
  return result.outcome === 'accepted';
}
