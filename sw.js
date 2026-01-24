const CACHE_NAME = 'kidom-v1';
const ASSETS = [
  './',
  './index.html',
  'https://i.imgur.com/ZVERytB.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
