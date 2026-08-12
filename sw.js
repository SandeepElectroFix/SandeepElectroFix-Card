/* =========================================================
   SANDEEP ELECTROFIX CARD
   SERVICE WORKER
   Version: 2.0.0
========================================================= */

const CACHE_NAME = "sandeep-electrofix-card-v2.0.0";

/* =========================================================
   STATIC ASSETS
========================================================= */

const STATIC_ASSETS = [
    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./assets/logo.png"
];

/* =========================================================
   INSTALL
========================================================= */

self.addEventListener("install", (event) => {

    console.log("[SW] Installing:", CACHE_NAME);

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then((cache) => {

                return cache.addAll(STATIC_ASSETS);

            })
            .then(() => {

                console.log("[SW] Static assets cached");

                return self.skipWaiting();

            })
            .catch((error) => {

                console.error(
                    "[SW] Cache installation failed:",
                    error
                );

            })

    );

});

/* =========================================================
   ACTIVATE
========================================================= */

self.addEventListener("activate", (event) => {

    console.log("[SW] Activating:", CACHE_NAME);

    event.waitUntil(

        caches.keys()
            .then((cacheNames) => {

                return Promise.all(

                    cacheNames.map((cacheName) => {

                        if (
                            cacheName.startsWith(
                                "sandeep-electrofix-card-"
                            ) &&
                            cacheName !== CACHE_NAME
                        ) {

                            console.log(
                                "[SW] Deleting old cache:",
                                cacheName
                            );

                            return caches.delete(cacheName);

                        }

                    })

                );

            })
            .then(() => {

                console.log("[SW] Old caches cleaned");

                return self.clients.claim();

            })

    );

});

/* =========================================================
   FETCH
========================================================= */

self.addEventListener("fetch", (event) => {

    const request = event.request;

    /*
       Only handle GET requests.
    */

    if (request.method !== "GET") {
        return;
    }

    event.respondWith(

        caches.match(request)
            .then((cachedResponse) => {

                /*
                   If file is already cached,
                   return cached version.
                */

                if (cachedResponse) {

                    return cachedResponse;

                }

                /*
                   Otherwise request it from network.
                */

                return fetch(request)
                    .then((networkResponse) => {

                        /*
                           Cache only successful responses.
                        */

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

                        /*
                           Offline fallback for HTML pages.
                        */

                        if (
                            request.destination === "document"
                        ) {

                            return caches.match(
                                "./index.html"
                            );

                        }

                    });

            })

    );

});

/* =========================================================
   MESSAGE
   Allows manual cache refresh from script.js
========================================================= */

self.addEventListener("message", (event) => {

    if (!event.data) {
        return;
    }

    if (event.data.type === "SKIP_WAITING") {

        self.skipWaiting();

    }

    if (event.data.type === "CLEAR_CACHE") {

        caches.keys()
            .then((cacheNames) => {

                return Promise.all(

                    cacheNames.map((cacheName) => {

                        if (
                            cacheName.startsWith(
                                "sandeep-electrofix-card-"
                            )
                        ) {

                            return caches.delete(cacheName);

                        }

                    })

                );

            })
            .then(() => {

                console.log("[SW] All project caches cleared");

            });

    }

});
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
