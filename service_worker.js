self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("EcoData").then(cache =>
    {return cache.addAll([
      "/",
      "/index.html",
      "/style.css",
      "/script.js",
      "/icons/icon-512*512.png"
    ]);
  }
    )
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response =>
    {
      return response || fetch(event.request);
    }
    )
  );
});