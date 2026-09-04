// ============================================
// 💰 Money Control — Service Worker
// Auto-updating cache strategy
// BUILD: 1788532714570
// ============================================

// Cache name includes build version — changes on every Vite build.
// When a new SW activates, it evicts the old cache (different version string)
// and all clients reload via the SW_UPDATED broadcast.
const CACHE_VERSION = '1788532714570';
const CACHE_NAME = 'money-control-' + CACHE_VERSION;

// Only cache the true static shell — manifest and icons.
// JS/CSS bundles are NOT pre-cached here; they carry a content hash in their
// filename so cache-first is safe and they are cached on first fetch.
const STATIC_ASSETS = [
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// ─── Install ────────────────────────────────────────────────────────────────
// Pre-cache only the tiny static shell.
// skipWaiting() makes the new SW take over immediately on install.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    }).catch((err) => {
      // Non-fatal — app still works without pre-cached assets
      console.warn('[SW] Pre-cache failed:', err);
    })
  );
  // Take over immediately without waiting for old SW to be released
  self.skipWaiting();
});

// ─── Activate ───────────────────────────────────────────────────────────────
// Delete ALL caches that don't match the current version.
// Then claim all open clients so fetch handlers apply immediately.
// Finally, broadcast SW_UPDATED so the app knows to reload.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => {
              console.log('[SW] Deleting old cache:', key);
              return caches.delete(key);
            })
        );
      })
      .then(() => {
        // Take control of all open tabs immediately
        return self.clients.claim();
      })
      .then(() => {
        // Notify all open clients that a new version is active
        return self.clients.matchAll({ includeUncontrolled: true, type: 'window' });
      })
      .then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'SW_UPDATED', version: CACHE_VERSION });
        });
      })
  );
});

// ─── Fetch ──────────────────────────────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // ── 1. Never intercept Firebase / Google API requests ──────────────────
  // Firebase Auth, Firestore, Storage, FCM, Analytics — always go to network
  if (
    url.hostname.includes('firebaseapp.com') ||
    url.hostname.includes('firebase.google.com') ||
    url.hostname.includes('firestore.googleapis.com') ||
    url.hostname.includes('identitytoolkit.googleapis.com') ||
    url.hostname.includes('securetoken.googleapis.com') ||
    url.hostname.includes('firebasestorage.googleapis.com') ||
    url.hostname.includes('fcm.googleapis.com') ||
    url.hostname.includes('firebase') ||
    url.pathname.includes('/__/firebase/')
  ) {
    // Let the browser handle Firebase requests natively
    return;
  }

  // ── 2. Navigation requests — Network First ──────────────────────────────
  // index.html must always be the latest version from the server.
  // If offline, fall back to the cached index.html.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Don't cache error responses for navigation
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => {
          // Offline fallback — return cached index.html if available
          return caches.match('/index.html').then(
            (cached) => cached || new Response('Offline — please reconnect.', {
              status: 503,
              headers: { 'Content-Type': 'text/plain' }
            })
          );
        })
    );
    return;
  }

  // ── 3. Hashed JS/CSS assets — Cache First ───────────────────────────────
  // Vite embeds a content hash in every JS/CSS filename (e.g. app-bundle.abc123.js).
  // If the content changes, the URL changes — so cache-first is safe and efficient.
  const isHashedAsset = url.pathname.startsWith('/assets/') &&
    /\.[a-f0-9]{8,}\.(js|css|woff2?|ttf|png|svg|ico)$/.test(url.pathname);

  if (isHashedAsset) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // ── 4. Google Fonts — Cache First (stale-while-revalidate) ─────────────
  if (
    url.hostname.includes('fonts.googleapis.com') ||
    url.hostname.includes('fonts.gstatic.com')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        const networkFetch = fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        });
        return cached || networkFetch;
      })
    );
    return;
  }

  // ── 5. Static shell assets (icons, manifest) — Cache First ─────────────
  // These rarely change and are pre-cached at install time.
  if (
    url.origin === self.location.origin &&
    (url.pathname === '/icon-192.png' ||
     url.pathname === '/icon-512.png' ||
     url.pathname === '/manifest.json')
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // ── 6. All other same-origin requests — Network First ──────────────────
  // For anything else on our domain (e.g. sw.js itself, any un-hashed file),
  // prefer the network so we always get fresh content.
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          return response;
        })
        .catch(() => caches.match(request))
    );
  }
  // Cross-origin requests that don't match any rule above are left unhandled
  // (browser fetches them normally).
});
