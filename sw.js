// Offline support. Increase VERSION when index.html changes.
// Pages are fetched from the network first (so one launch while online shows the latest version);
// the saved copy is used when offline. Other files are served from the saved copy and refreshed in
// the background.
const VERSION = 'product-match-v30';
const FILES = ['./', './index.html', './manifest.webmanifest', './icons/apple-touch-icon.png', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const page = e.request.mode === 'navigate' || /\/(index\.html)?$/.test(new URL(e.request.url).pathname);
  e.respondWith(caches.open(VERSION).then(async cache => {
    const cached = await cache.match(e.request, { ignoreSearch: true });
    const network = fetch(e.request, page ? { cache: 'no-store' } : {}).then(res => { if (res && res.ok) cache.put(e.request, res.clone()); return res; });
    if (page) {
      try { return await network; } catch (err) { return cached || (await cache.match('./index.html')) || Response.error(); }
    }
    return cached || network.catch(() => cached);
  }));
});
