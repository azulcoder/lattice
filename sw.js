// Lattice service worker (Phase S6; network-first since B2) — offline support
// for the static app.
//
// Strategy: precache the app shell at install, then NETWORK-FIRST for every
// same-origin GET — always prefer fresh bytes when online, falling back to the
// cache only when the network is unavailable (offline). Each successful network
// response refreshes the cache so the last-known-good copy is always available
// offline. This replaces the original stale-while-revalidate, which served the
// cached copy first and only revalidated in the background — meaning a shipped
// code fix would not appear until the *second* reload (the bug Az hit: a fixed
// library.js stayed stale behind the SW). Bump CACHE to invalidate on a release.

const CACHE = 'lattice-shell-v2';
const SHELL = [
  './',
  'index.html',
  'styles.css',
  'manifest.json',
  'icon.svg',
  'vendor/katex.min.css',
  'vendor/katex.min.js',
  'js/app.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

// Let the page activate a freshly-installed worker immediately (update toast).
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  if (new URL(req.url).origin !== self.location.origin) return;   // don't touch cross-origin (e.g. api.anthropic.com)

  // Network-first: prefer fresh bytes when online so a shipped fix lands on the
  // next reload; fall back to the cached last-known-good copy only when offline.
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      try {
        const res = await fetch(req);
        if (res && res.ok) cache.put(req, res.clone());          // keep the cache warm for offline
        return res;
      } catch {
        const cached = await cache.match(req);                   // offline → serve last-known-good
        return cached || Response.error();
      }
    })
  );
});
