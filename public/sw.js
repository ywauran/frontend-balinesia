/* eslint-disable prettier/prettier */
let cacheData = 'Cache Destination';
this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        '/',
        '/index.html',
        '/index.js',
        '/index.css',
        '/swDev.js',
        '/App.js',
        '/App.css',
        '/static/js/bundle.js',
        '/static/media/homepage.b97a906e5c373a9d8b83.jpg',
        '/components/navBar.jsx',
        '/components/Footer.jsx',
        '/components/Hero.jsx',
        '/assets/badung.png',
        '/assets/bangli.png',
        '/assets/buleleng.png',
        '/assets/denpasar.png',
        '/assets/gianyar.png',
        '/assets/jembrana.png',
        '/assets/karangasem.png',
        '/assets/klungkung.png',
        '/assets/tabanan.png',
        '/assets/homepage.jpg',
      ]);
    })
  );
});

this.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch((error) => {
        console.log(error);
      }),
    {
      cache: {
        maxAgeSeconds: 60 * 60 * 24,
      },
    }
  );
});
