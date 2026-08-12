/* =========================================================
   SANDEEP ELECTROFIX CARD
   SERVICE WORKER
   Version: 2.0.0
========================================================= */

const CACHE_NAME = "sandeep-electrofix-card-v2.0.0";

/* =========================================================
   FILES TO CACHE
========================================================= */

const STATIC_ASSETS = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",

    // Logo
    "./assets/logo.png",

    // Optional images
    "./assets/work1.jpg",
    "./assets/work2.jpg",
    "./assets/work3.jpg",
    "./assets/work4.jpg"
];

/* =========================================================
   INSTALL
========================================================= */

self.addEventListener("install", (event) => {

    console.log(
        "[SW] Installing:",
        CACHE_NAME
    );

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then((cache) => {

                return cache.addAll(STATIC_ASSETS);

            })
            .catch((error) => {

                console.error(
                    "[SW] Cache installation failed:",
                    error
                );

            })

    );

    // Activate new service worker immediately
    self.skipWaiting();

});

/* =========================================================
   ACTIVATE
========================================================= */

self.addEventListener("activate", (event) => {

    console.log(
        "[SW] Activating:",
        CACHE_NAME
    );

    event.waitUntil(

        caches.keys()
            .then((cacheNames) => {

                return Promise.all(

                    cacheNames
                        .filter(
                            (cacheName) =>
                                cacheName.startsWith(
                                    "sandeep-electrofix-card-"
                                ) &&
                                cacheName !== CACHE_NAME
                        )
                        .map((oldCache) => {

                            console.log(
                                "[SW] Deleting old cache:",
                                oldCache
                            );

                            return caches.delete(oldCache);

                        })

                );

            })
            .then(() => {

                // Take control of all open pages
                return self.clients.claim();

            })

    );

});

/* =========================================================
   FETCH
========================================================= */

self.addEventListener("fetch", (event) => {

    const request = event.request;

    // Only handle GET requests
    if (request.method !== "GET") {
        return;
    }

    event.respondWith(

        caches.match(request)
            .then((cachedResponse) => {

                if (cachedResponse) {

                    return cachedResponse;

                }

                return fetch(request)
                    .then((networkResponse) => {

                        // Cache only valid responses
                        if (
                            networkResponse &&
                            networkResponse.status === 200 &&
                            networkResponse.type === "basic"
                        ) {

                            const responseClone =
                                networkResponse.clone();

                            caches.open(CACHE_NAME)
                                .then((cache) => {

                                    cache.put(
                                        request,
                                        responseClone
                                    );

                                });

                        }

                        return networkResponse;

                    })
                    .catch(() => {

                        // Offline fallback
                        return caches.match(
                            "./index.html"
                        );

                    });

            })

    );

});

/* =========================================================
   MESSAGE
========================================================= */

self.addEventListener("message", (event) => {

    if (
        event.data &&
        event.data.type === "SKIP_WAITING"
    ) {

        self.skipWaiting();

    }

});
