// sw.js

// Nombre de la caché
const CACHE_NAME = 'chill-chess-club-cache-v1';

// Archivos para cachear
// Asegúrate de que estas rutas sean correctas y relativas a la raíz de tu sitio.
// Si tu sitio está en un subdirectorio como /chill-chess-club/,
// y estas rutas son relativas a la raíz de ese subdirectorio, está bien.
// Si son relativas al dominio raíz, necesitarás ajustar.
// Por ejemplo, si index.html está en /chill-chess-club/index.html, entonces './index.html' es correcto.
const urlsToCache = [
  './', // Esto cacheará la URL base del scope (ej. /chill-chess-club/)
  './index.html',
  './styles.css',
  './main.js',
  './manifest.json',
  './images/logo.png',
  './images/hero.jpg',
  './images/hero-vertical.png',
  './icons/favicon-16x16.png',
  './icons/favicon-32x32.png',
  './icons/apple-icon-180x180.png',
  './icons/android-icon-192x192.png',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@300;400;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://unpkg.com/aos@next/dist/aos.css',
  'https://unpkg.com/aos@next/dist/aos.js',
  'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
  // Añade aquí otros recursos estáticos importantes que quieras cachear
  // Por ejemplo, otras imágenes, fuentes, etc.
  // './images/profile.jpg',
  // './images/curso-principiante.jpg',
  // etc.
];

// Evento 'install': se dispara cuando el Service Worker se instala.
// Aquí es donde generalmente se cachean los archivos estáticos.
self.addEventListener('install', event => {
  console.log('[Service Worker] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Opened cache:', CACHE_NAME);
        // Usamos addAll para que si alguna de las URLs falla, la promesa entera falle.
        return cache.addAll(urlsToCache.map(url => new Request(url, { cache: 'reload' }))) // Forzar recarga de la red
          .then(() => console.log('[Service Worker] All specified files cached successfully.'))
          .catch(error => {
            console.error('[Service Worker] Failed to cache one or more files during install:', error);
            // Es importante saber qué archivo falló.
            urlsToCache.forEach(url => {
              fetch(url, { cache: 'reload' }).catch(err => console.error(`Failed to fetch ${url}:`, err));
            });
          });
      })
      .then(() => {
        console.log('[Service Worker] Installed successfully.');
        return self.skipWaiting(); // Forzar al SW a activarse inmediatamente
      })
      .catch(error => {
        console.error('[Service Worker] Installation failed:', error);
      })
  );
});

// Evento 'activate': se dispara cuando el Service Worker se activa.
// Aquí es donde se limpian las cachés antiguas.
self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('[Service Worker] Clearing old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => {
      console.log('[Service Worker] Activated successfully and old caches cleared.');
      return self.clients.claim(); // Permite que el SW controle clientes no controlados inmediatamente
    })
  );
});

// Evento 'fetch': se dispara cada vez que la aplicación PWA realiza una petición de red.
// Estrategia: Cache First, then Network.
self.addEventListener('fetch', event => {
  // Solo interceptar peticiones GET
  if (event.request.method !== 'GET') {
    return;
  }

  // Para peticiones de navegación (documentos HTML)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      caches.open(CACHE_NAME).then(cache => {
        return cache.match(event.request)
          .then(response => {
            if (response) {
              console.log(`[Service Worker] Serving from cache (navigate): ${event.request.url}`);
              return response;
            }
            // Si no está en caché, ir a la red
            console.log(`[Service Worker] Not in cache, fetching from network (navigate): ${event.request.url}`);
            return fetch(event.request).then(networkResponse => {
              // Clonar la respuesta antes de ponerla en caché y retornarla
              const responseToCache = networkResponse.clone();
              cache.put(event.request, responseToCache);
              return networkResponse;
            }).catch(error => {
              console.error(`[Service Worker] Fetch failed (navigate): ${event.request.url}`, error);
              // Podrías devolver una página offline personalizada aquí si la tienes cacheada
              // return caches.match('./offline.html');
            });
          });
      })
    );
    return;
  }

  // Para otros recursos (CSS, JS, imágenes, etc.)
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request)
        .then(response => {
          // Si está en caché, devolver la respuesta de la caché
          if (response) {
            console.log(`[Service Worker] Serving from cache: ${event.request.url}`);
            return response;
          }
          // Si no está en caché, ir a la red
          console.log(`[Service Worker] Not in cache, fetching from network: ${event.request.url}`);
          return fetch(event.request).then(networkResponse => {
            // Solo cachear respuestas válidas (status 200)
            if (networkResponse && networkResponse.status === 200) {
              const responseToCache = networkResponse.clone();
              cache.put(event.request, responseToCache);
            }
            return networkResponse;
          }).catch(error => {
            console.error(`[Service Worker] Fetch failed: ${event.request.url}`, error);
            // Aquí podrías devolver un placeholder para imágenes si fallan, etc.
          });
        });
    })
  );
});
