// ============================================
// 💰 Money Control — Service Worker
// Auto-updating cache strategy with full offline support
// BUILD: __BUILD_VERSION__
// ============================================

// Cache name includes build version — changes on every Vite build.
// When a new SW activates, it evicts the old app cache (different version string)
// and all clients reload via the SW_UPDATED broadcast.
const CACHE_VERSION = '__BUILD_VERSION__';
const APP_CACHE_NAME = 'money-control-' + CACHE_VERSION;
const FONT_CACHE_NAME = 'money-control-fonts-v1';

// ─── Static shell assets to pre-cache at install ────────────────────────────
// These are the essential files needed to render the app offline.
// JS/CSS bundles with content hashes are also pre-cached because the SW
// must have them ready for first offline launch.
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

// ─── Branded offline fallback HTML ──────────────────────────────────────────
// Shown ONLY when the app shell has never been cached (first visit offline).
// This replaces the broken plain-text "Offline — please reconnect." message.
const OFFLINE_FALLBACK_HTML = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
  <meta name="theme-color" content="#6C63FF">
  <title>Money Control — Offline</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;
      background:#0F1117;color:#E2E8F0;min-height:100vh;display:flex;align-items:center;
      justify-content:center;padding:24px}
    .offline-container{text-align:center;max-width:400px;width:100%;animation:fadeIn .5s ease}
    @keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
    .offline-icon{width:96px;height:96px;border-radius:24px;
      box-shadow:0 8px 32px rgba(108,99,255,0.35);margin:0 auto 24px;object-fit:cover}
    h1{font-size:1.5rem;font-weight:800;margin-bottom:8px;
      background:linear-gradient(135deg,#6C63FF,#a78bfa);-webkit-background-clip:text;
      -webkit-text-fill-color:transparent;background-clip:text}
    .subtitle{color:#94A3B8;font-size:0.9375rem;margin-bottom:32px;line-height:1.5}
    .info-card{background:#1A1D2E;border:1px solid #2D3148;border-radius:16px;
      padding:20px;margin-bottom:24px;text-align:left}
    .info-card h3{font-size:0.875rem;font-weight:700;color:#A78BFA;margin-bottom:12px;
      display:flex;align-items:center;gap:8px}
    .info-card p{font-size:0.8125rem;color:#94A3B8;line-height:1.6}
    .info-card ol{font-size:0.8125rem;color:#94A3B8;line-height:1.8;padding-left:20px}
    .info-card li{margin-bottom:4px}
    .retry-btn{background:linear-gradient(135deg,#6C63FF,#7C3AED);color:#fff;
      border:none;padding:14px 32px;border-radius:12px;font-size:0.9375rem;
      font-weight:700;cursor:pointer;width:100%;transition:all .2s;
      box-shadow:0 4px 16px rgba(108,99,255,0.3)}
    .retry-btn:hover{transform:translateY(-1px);box-shadow:0 6px 24px rgba(108,99,255,0.4)}
    .retry-btn:active{transform:translateY(0)}
    .status-dot{width:8px;height:8px;border-radius:50%;background:#f97316;display:inline-block;
      animation:pulse 2s infinite}
    @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.4}}
  </style>
</head>
<body>
  <div class="offline-container">
    <img src="/icon-192.png" alt="Money Control" class="offline-icon"
         onerror="this.style.display='none'">
    <h1>Money Control</h1>
    <p class="subtitle">You're currently offline</p>

    <div class="info-card">
      <h3><span class="status-dot"></span> First-Time Setup Required</h3>
      <p>Money Control needs to download its application files before it can work offline.</p>
      <ol>
        <li>Connect to Wi-Fi or mobile data</li>
        <li>Open Money Control and sign in</li>
        <li>Wait for the app to fully load</li>
        <li>The app will then work offline!</li>
      </ol>
    </div>

    <button class="retry-btn" onclick="window.location.reload()">
      🔄 Retry Connection
    </button>
  </div>
</body>
</html>`;

// ─── Install ────────────────────────────────────────────────────────────────
// Pre-cache the static shell AND discover + cache the hashed JS/CSS bundles.
// skipWaiting() makes the new SW take over immediately on install.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(APP_CACHE_NAME).then(async (cache) => {
      // 1. Pre-cache static shell assets (individual fetch so single failures do not abort batch)
      await Promise.allSettled(
        STATIC_ASSETS.map(async (url) => {
          try {
            const resp = await fetch(url);
            if (resp.ok) {
              await cache.put(new Request(url), resp);
            }
          } catch (e) {
            console.warn('[SW] Shell asset pre-cache warning for', url, e.message);
          }
        })
      );

      // 2. Discover and pre-cache the hashed JS/CSS bundles from the index.html
      //    The production index.html references files like /assets/app-bundle.XXXX.js
      //    and /assets/index.XXXX.css — we need these cached for offline startup.
      try {
        const indexResponse = await cache.match('/index.html') || await cache.match('/');
        if (indexResponse) {
          const html = await indexResponse.clone().text();
          const assetUrls = [];

          // Match src="..." and href="..." for /assets/ files
          const srcMatches = html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g);
          for (const match of srcMatches) {
            assetUrls.push(match[1]);
          }

          if (assetUrls.length > 0) {
            console.log('[SW] Pre-caching discovered bundle assets:', assetUrls);
            // Fetch and cache each asset individually so one failure doesn't block all
            await Promise.allSettled(
              assetUrls.map(async (url) => {
                try {
                  const resp = await fetch(url);
                  if (resp.ok) {
                    await cache.put(new Request(url), resp);
                  }
                } catch (e) {
                  console.warn('[SW] Failed to pre-cache asset:', url, e.message);
                }
              })
            );
          }
        }
      } catch (err) {
        console.warn('[SW] Bundle discovery pre-cache warning:', err);
      }

      // 3. Pre-cache the Google Fonts CSS (so font-face rules are available offline)
      try {
        const fontCache = await caches.open(FONT_CACHE_NAME);
        const fontCssUrl = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
        const fontResp = await fetch(fontCssUrl).catch(() => null);
        if (fontResp && fontResp.ok) {
          await fontCache.put(new Request(fontCssUrl), fontResp.clone());
          // Also try to cache the font files referenced in the CSS
          const cssText = await fontResp.text();
          const fontFileUrls = [...cssText.matchAll(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+)\)/g)]
            .map(m => m[1]);
          await Promise.allSettled(
            fontFileUrls.map(async (url) => {
              try {
                const resp = await fetch(url);
                if (resp.ok) await fontCache.put(new Request(url), resp);
              } catch (e) { /* non-fatal */ }
            })
          );
        }
      } catch (err) {
        console.warn('[SW] Font pre-cache warning:', err);
      }
    })
  );
  // Take over immediately without waiting for old SW to be released
  self.skipWaiting();
});

// ─── Activate ───────────────────────────────────────────────────────────────
// Delete only old money-control-* app caches (NOT the font cache, NOT IndexedDB).
// Then claim all open clients so fetch handlers apply immediately.
// Finally, broadcast SW_UPDATED so the app knows to reload.
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => {
              // Only delete old app caches — preserve font cache and any non-MC caches
              return key.startsWith('money-control-') &&
                     key !== APP_CACHE_NAME &&
                     key !== FONT_CACHE_NAME;
            })
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
  // Firebase Auth, Firestore, Storage, FCM, Analytics — always go to network.
  // Use hostname checks ONLY (avoid broad substring match on 'firebase' which
  // could accidentally match font CDNs or other Google services).
  const isFirebaseAPI =
    url.hostname === 'firestore.googleapis.com' ||
    url.hostname === 'identitytoolkit.googleapis.com' ||
    url.hostname === 'securetoken.googleapis.com' ||
    url.hostname === 'firebasestorage.googleapis.com' ||
    url.hostname === 'fcm.googleapis.com' ||
    url.hostname === 'firebase.google.com' ||
    url.hostname.endsWith('.firebaseapp.com') ||
    url.hostname.endsWith('.firebaseio.com') ||
    url.hostname.endsWith('.cloudfunctions.net') ||
    url.pathname.includes('/__/firebase/');

  if (isFirebaseAPI) {
    // Let the browser handle Firebase requests natively
    return;
  }

  // ── 2. Navigation requests — Network First with offline fallback ───────
  // index.html must always be the latest version from the server.
  // If offline, fall back to the cached index.html.
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Don't cache error responses for navigation
          if (response.ok) {
            const clone = response.clone();
            caches.open(APP_CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(async () => {
          // Offline fallback — return cached index.html from any matching cache
          const cached = (await caches.match('/index.html')) ||
                         (await caches.match('/')) ||
                         (await caches.match(request));

          if (cached) {
            return cached;
          }

          // Absolute last resort: no cached app shell at all (first-time offline visit)
          // Return the branded offline fallback page instead of plain text
          return new Response(OFFLINE_FALLBACK_HTML, {
            status: 503,
            headers: {
              'Content-Type': 'text/html; charset=utf-8',
              'Cache-Control': 'no-store'
            }
          });
        })
    );
    return;
  }

  // ── 3. Google Fonts — Cache First (persistent font cache) ─────────────
  // Fonts are cached in a separate long-lived cache that survives app updates.
  if (
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com'
  ) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request)
          .then((response) => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(FONT_CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return response;
          })
          .catch(() => {
            // If fonts can't load offline, return an empty response so the app
            // still renders with system fonts instead of blocking
            if (url.hostname === 'fonts.googleapis.com') {
              return new Response('/* fonts unavailable offline */', {
                status: 200,
                headers: { 'Content-Type': 'text/css' }
              });
            }
            return new Response('', { status: 503 });
          });
      })
    );
    return;
  }

  // ── 4. Hashed JS/CSS/asset bundles — Cache First ───────────────────────
  // Vite embeds a content hash in every JS/CSS filename (e.g. app-bundle.caamE8sP.js).
  // The hash format uses mixed-case alphanumeric characters ([a-zA-Z0-9]).
  // If the content changes, the URL changes — so cache-first is safe and efficient.
  const isHashedAsset = url.pathname.startsWith('/assets/') &&
    /\.[a-zA-Z0-9]{6,}\.(js|css|woff2?|ttf|otf|eot|png|jpg|jpeg|svg|ico|webp|avif)$/i.test(url.pathname);

  if (isHashedAsset) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request)
          .then((response) => {
            if (response.ok) {
              const clone = response.clone();
              caches.open(APP_CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return response;
          })
          .catch(async () => {
            // If a hashed asset can't be fetched and isn't cached,
            // try to find it in any available cache (including old versions
            // that might still have it from a previous build).
            const allCaches = await caches.keys();
            for (const cacheName of allCaches) {
              const c = await caches.open(cacheName);
              const match = await c.match(request);
              if (match) return match;
            }
            // Return empty response with correct content type instead of nothing
            const ext = url.pathname.split('.').pop().toLowerCase();
            const mimeTypes = {
              'js': 'application/javascript',
              'css': 'text/css',
              'woff2': 'font/woff2',
              'woff': 'font/woff',
              'ttf': 'font/ttf'
            };
            return new Response('/* offline: asset not cached */', {
              status: 503,
              headers: { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' }
            });
          });
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
            caches.open(APP_CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        }).catch(() => new Response('', { status: 503 }));
      })
    );
    return;
  }

  // ── 6. All other same-origin requests — Network First with cache fallback
  // For anything else on our domain, prefer the network so we always get
  // fresh content; fall back to cache if offline.
  if (url.origin === self.location.origin) {
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Cache successful responses for offline fallback
          if (response.ok) {
            const clone = response.clone();
            caches.open(APP_CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(async () => {
          const cached = await caches.match(request);
          return cached || new Response('', { status: 503 });
        })
    );
    return;
  }

  // ── 7. Cross-origin requests — try network, fall back to cache ─────────
  // For any other cross-origin request (CDNs, etc.), try network first
  // and use cache as fallback so the app doesn't crash offline.
  event.respondWith(
    fetch(request)
      .then((response) => {
        if (response.ok || response.type === 'opaque') {
          const clone = response.clone();
          caches.open(APP_CACHE_NAME).then((cache) => cache.put(request, clone));
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request);
        return cached || new Response('', { status: 503 });
      })
  );
});

// ─── Background Sync ────────────────────────────────────────────────────────
// When connectivity is restored, notify the foreground app to sync pending ops.
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-pending-transactions') {
    event.waitUntil(
      self.clients.matchAll({ type: 'window' }).then((clients) => {
        clients.forEach((client) => {
          client.postMessage({ type: 'TRIGGER_FOREGROUND_SYNC' });
        });
      })
    );
  }
});

// ─── Message handler ────────────────────────────────────────────────────────
// Allow the app to request cache operations from the SW.
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
