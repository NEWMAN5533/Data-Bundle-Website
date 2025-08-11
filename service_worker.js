// Install service worker and cache files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("EcoData").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/script.js",
        "/icon/log.png"
      ]);
    })
  );
});

// Fetch from cache, fallback to network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
