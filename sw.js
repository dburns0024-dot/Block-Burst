// Brick Burst — Service Worker v1.0
// Enables offline play after first load

const CACHE = 'brickburst-v1';
const ASSETS = [
'./BrickBurst.html',
'./manifest.json'
];

// Install: cache all assets
self.addEventListener('install', e => {
e.waitUntil(
caches.open(CACHE).then(cache => cache.addAll(ASSETS))
);
self.skipWaiting();
});

// Activate: clean up old caches
self.addEventListener('activate', e => {
e.waitUntil(
caches.keys().then(keys =>
Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
)
);
self.clients.claim();
});

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', e => {
e.respondWith(
caches.match(e.request).then(cached => cached || fetch(e.request))
);
});
