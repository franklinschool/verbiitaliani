const cacheName = 'verbiItaliani';
const assets = [
  '/',
  './index.html',
  './public/style.css',
  './public/script.js',
  './public/materialize.min.css',
  './public/materialize.min.js',
  './public/manifest.json',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v142/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
];

self.addEventListener("install", (installEvent) => {
   let cacheUrls = async () => {
      const cache = await caches.open(cacheName);
      return cache.addAll(assets);
   };
   installEvent.waitUntil(cacheUrls());
});

self.addEventListener('fetch', fetchEvent => {
  fetchEvent.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(fetchEvent.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(fetchEvent.request);
      })
  );
});