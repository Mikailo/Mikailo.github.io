'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c62382563e435d73eea5121ecb07a354",
"assets/assets/impilo_image.png": "a2237ddaa9a26991085250a895bbd8bc",
"assets/assets/user.png": "a7d1dda63d2ce58340d65ed92d506a47",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/i18n/el.json": "42ba00410889d283cc2f2f5c631313ac",
"assets/i18n/en.json": "8dc7e3b9ff4bc859c4642fb5ae854aac",
"assets/LICENSE": "7d7c199216a9a9fc6e7bbefa0442dc1b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/timezone/data/2020a.tzf": "84285f1f81b999f1de349a723574b3e5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "afcf0f1324eef02a7ed85dd1cca37f14",
"/": "afcf0f1324eef02a7ed85dd1cca37f14",
"main.dart.js": "823cdf31e5ad715ed5c559dd1a2d7fb6",
"manifest.json": "17d0be63ccd20ae74d0b3aafa7d9af11"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
