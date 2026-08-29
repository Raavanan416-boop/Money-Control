// ============================================
// 💰 Money Control V3 — PWA Service
// ============================================

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
 * Register Service Worker
 */
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .catch(() => {
          // SW registration failed — PWA features won't work
        });
    });
  }
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
    const offlineBanner = document.getElementById('offline-banner');
    if (!offlineBanner) return;

    if (!navigator.onLine) {
      offlineBanner.innerHTML = `
        <div class="offline-content">
          <span class="offline-icon">📡</span>
          <span class="offline-text">You're offline — Reconnect to save new transactions securely.</span>
        </div>
      `;
      offlineBanner.classList.add('show');
    } else {
      offlineBanner.classList.remove('show');
      setTimeout(() => { offlineBanner.innerHTML = ''; }, 300);
    }
  };

  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);

  // Initial check
  setTimeout(updateStatus, 1000);
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
