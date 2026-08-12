/* =========================================================
   SANDEEP ELECTROFIX CARD
   SERVICE WORKER
   Version: 2.1.0
========================================================= */

"use strict";


/* =========================================================
   CACHE VERSION
========================================================= */

const CACHE_NAME =
    "sandeep-electrofix-card-v2.2.0";


/* =========================================================
   STATIC ASSETS
========================================================= */

const STATIC_ASSETS = [

    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./manifest.json",
    "./material-catalogue.html",
    "./our-work.html",
    "./data/services.json",
    "./data/gallery.json",
    "./data/reviews.json",
    "./data/faq.json",
    "./assets/logo.png",
    "./assets/qr-card.png"
];


/* =========================================================
   INSTALL
========================================================= */

self.addEventListener(
    "install",
    event => {

        console.log(
            "[SW] Installing:",
            CACHE_NAME
        );

        event.waitUntil(

            caches
                .open(CACHE_NAME)
                .then(cache => {

                    return cache.addAll(
                        STATIC_ASSETS
                    );

                })
                .then(() => {

                    console.log(
                        "[SW] Static assets cached"
                    );

                    return self.skipWaiting();

                })
                .catch(error => {

                    console.error(
                        "[SW] Cache installation failed:",
                        error
                    );

                })

        );

    }
);


/* =========================================================
   ACTIVATE
========================================================= */

self.addEventListener(
    "activate",
    event => {

        console.log(
            "[SW] Activating:",
            CACHE_NAME
        );

        event.waitUntil(

            caches
                .keys()
                .then(cacheNames => {

                    return Promise.all(

                        cacheNames.map(
                            cacheName => {

                                if (
                                    cacheName.startsWith(
                                        "sandeep-electrofix-card-"
                                    ) &&
                                    cacheName !==
                                        CACHE_NAME
                                ) {

                                    console.log(
                                        "[SW] Deleting old cache:",
                                        cacheName
                                    );

                                    return caches.delete(
                                        cacheName
                                    );

                                }

                                return null;

                            }
                        )

                    );

                })
                .then(() => {

                    console.log(
                        "[SW] Old caches cleaned"
                    );

                    return self.clients.claim();

                })

        );

    }
);


/* =========================================================
   FETCH
   Cache First → Network → Offline Fallback
========================================================= */

self.addEventListener(
    "fetch",
    event => {

        const request =
            event.request;


        /* Only GET requests */

        if (
            request.method !== "GET"
        ) {

            return;

        }


        event.respondWith(

            caches
                .match(request)
                .then(cachedResponse => {


                    /* -------------------------
                       CACHE HIT
                    ------------------------- */

                    if (
                        cachedResponse
                    ) {

                        return cachedResponse;

                    }


                    /* -------------------------
                       NETWORK REQUEST
                    ------------------------- */

                    return fetch(request)

                        .then(networkResponse => {


                            /* -------------------------
                               CACHE VALID RESPONSE
                            ------------------------- */

                            if (
                                networkResponse &&
                                networkResponse.status === 200 &&
                                networkResponse.type === "basic"
                            ) {

                                const responseClone =
                                    networkResponse.clone();


                                caches
                                    .open(CACHE_NAME)
                                    .then(cache => {

                                        cache.put(
                                            request,
                                            responseClone
                                        );

                                    });

                            }


                            return networkResponse;

                        })


                        /* -------------------------
                           OFFLINE FALLBACK
                        ------------------------- */

                        .catch(() => {

                            if (
                                request.destination ===
                                "document"
                            ) {

                                return caches.match(
                                    "./index.html"
                                );

                            }


                            return Response.error();

                        });

                })

        );

    }
);


/* =========================================================
   MESSAGE
========================================================= */

self.addEventListener(
    "message",
    event => {

        if (
            !event.data
        ) {

            return;

        }


        /* -------------------------
           FORCE NEW SERVICE WORKER
        ------------------------- */

        if (
            event.data.type ===
            "SKIP_WAITING"
        ) {

            self.skipWaiting();

        }


        /* -------------------------
           CLEAR PROJECT CACHE
        ------------------------- */

        if (
            event.data.type ===
            "CLEAR_CACHE"
        ) {

            event.waitUntil(

                caches
                    .keys()
                    .then(cacheNames => {

                        return Promise.all(

                            cacheNames.map(
                                cacheName => {

                                    if (
                                        cacheName.startsWith(
                                            "sandeep-electrofix-card-"
                                        )
                                    ) {

                                        return caches.delete(
                                            cacheName
                                        );

                                    }

                                    return null;

                                }
                            )

                        );

                    })
                    .then(() => {

                        console.log(
                            "[SW] All project caches cleared"
                        );

                    })

            );

        }

    }
);


/* =========================================================
   READY
========================================================= */

console.log(
    "[SW] Sandeep ElectroFix Card loaded:",
    CACHE_NAME
);
