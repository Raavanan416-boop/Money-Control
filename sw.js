// ============================================
// 💰 Money Control V3 — Service Worker (Development)
// This file is used when running via `npm run dev` (Vite dev server).
// The production SW is in public/sw.js (copied to dist/ on build).
// ============================================

const CACHE_NAME = 'money-control-dev-v3';
const FONT_CACHE_NAME = 'money-control-fonts-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/icon-192.png',
  '/icon-512.png',
  '/manifest.json'
];

// ─── Branded offline fallback HTML ──────────────────────────────────────────
const OFFLINE_FALLBACK_HTML = `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#6C63FF">
  <title>Money Control — Offline</title>
  <style>
    *{margin:0;padding:0;box-sizing:border-box}
    body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
      background:#0F1117;color:#E2E8F0;min-height:100vh;display:flex;align-items:center;
      justify-content:center;padding:24px}
    .offline-container{text-align:center;max-width:400px}
    h1{font-size:1.5rem;font-weight:800;margin-bottom:8px;
      background:linear-gradient(135deg,#6C63FF,#a78bfa);-webkit-background-clip:text;
      -webkit-text-fill-color:transparent;background-clip:text}
    .subtitle{color:#94A3B8;font-size:0.9375rem;margin-bottom:24px}
    .retry-btn{background:linear-gradient(135deg,#6C63FF,#7C3AED);color:#fff;
      border:none;padding:14px 32px;border-radius:12px;font-size:0.9375rem;
      font-weight:700;cursor:pointer;width:100%}
  </style>
</head>
<body>
  <div class="offline-container">
    <h1>Money Control</h1>
    <p class="subtitle">Connect to the internet and open the app at least once to enable offline mode.</p>
    <button class="retry-btn" onclick="window.location.reload()">🔄 Retry Connection</button>
  </div>
</body>
</html>`;

// Install — cache app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await Promise.allSettled(
        STATIC_ASSETS.map(async (url) => {
          try {
            const resp = await fetch(url);
            if (resp.ok) await cache.put(new Request(url), resp);
          } catch (e) {
            console.warn('[SW-Dev] Pre-cache warning for', url, e);
          }
        })
      );
    })
  );
  self.skipWaiting();
});

// Activate — clean old caches (only money-control-dev-* caches)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key.startsWith('money-control-dev-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// Fetch — Network first, fallback to cache for navigation
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip Firebase/Firestore API calls — never cache financial data
  const isFirebaseAPI =
    url.hostname === 'firestore.googleapis.com' ||
    url.hostname === 'identitytoolkit.googleapis.com' ||
    url.hostname === 'securetoken.googleapis.com' ||
    url.hostname === 'firebasestorage.googleapis.com' ||
    url.hostname === 'fcm.googleapis.com' ||
    url.hostname === 'firebase.google.com' ||
    url.hostname.endsWith('.firebaseapp.com') ||
    url.hostname.endsWith('.firebaseio.com') ||
    url.pathname.includes('/__/firebase/');

  if (isFirebaseAPI) return;

  // For navigation requests, try network first
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(async () => {
          const cached = (await caches.match('/index.html')) ||
                         (await caches.match('/')) ||
                         (await caches.match(request));
          if (cached) return cached;

          return new Response(OFFLINE_FALLBACK_HTML, {
            status: 503,
            headers: { 'Content-Type': 'text/html; charset=utf-8' }
          });
        })
    );
    return;
  }

  // Google Fonts — cache first
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(FONT_CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        }).catch(() => {
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

  // For static assets — cache first, then network
  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) return cached;
      return fetch(request)
        .then((response) => {
          // Only cache successful responses from same origin or trusted CDNs
          if (
            response.status === 200 &&
            (request.url.startsWith(self.location.origin) ||
              request.url.includes('fonts.googleapis.com') ||
              request.url.includes('fonts.gstatic.com'))
          ) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          }
          return response;
        })
        .catch(() => {
          // Offline fallback for assets — return empty response instead of error
          return new Response('', { status: 503, statusText: 'Offline' });
        });
    })
  );
});
