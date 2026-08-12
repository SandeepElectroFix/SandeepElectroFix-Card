/* =========================================================
   SANDEEP ELECTROFIX CARD
   PROJECT 2 - DIGITAL BUSINESS CARD
   SERVICE WORKER
   Version: 2.2.1
========================================================= */

"use strict";


/* =========================================================
   CACHE VERSION
========================================================= */

const CACHE_NAME =
    "sandeep-electrofix-card-v2.2.1";


/* =========================================================
   STATIC ASSETS
========================================================= */

const STATIC_ASSETS = [

    "./",
    "./index.html",
    "./style.css",
    "./config.js",
    "./script.js",

    "./manifest.json",

    "./material-catalogue.html",
    "./our-work.html",

    /* DATA */

    "./data/services.json",
    "./data/gallery.json",
    "./data/reviews.json",
    "./data/faq.json",

    /* ASSETS */

    "./assets/logo.png",
    "./assets/qr-card.png",
    "./assets/work1.jpg",
    "./assets/work2.jpg",
    "./assets/work3.jpg",
    "./assets/work4.jpg"

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
                        "[SW] Static assets cached successfully."
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
                                    cacheName !== CACHE_NAME
                                ) {

                                    console.log(
                                        "[SW] Removing old cache:",
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
                        "[SW] Old caches removed."
                    );

                    return self.clients.claim();

                })

        );

    }
);


/* =========================================================
   FETCH
   CACHE FIRST
   → NETWORK
   → OFFLINE FALLBACK
========================================================= */

self.addEventListener(
    "fetch",
    event => {

        const request =
            event.request;


        /* -----------------------------------------
           ONLY HANDLE GET REQUESTS
        ----------------------------------------- */

        if (
            request.method !== "GET"
        ) {

            return;

        }


        event.respondWith(

            caches
                .match(request)

                .then(cachedResponse => {

                    /* ---------------------------------
                       CACHE HIT
                    --------------------------------- */

                    if (
                        cachedResponse
                    ) {

                        return cachedResponse;

                    }


                    /* ---------------------------------
                       NETWORK
                    --------------------------------- */

                    return fetch(request)

                        .then(networkResponse => {

                            /* -----------------------------
                               CACHE VALID RESPONSE
                            ----------------------------- */

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


                        /* -----------------------------
                           OFFLINE FALLBACK
                        ----------------------------- */

                        .catch(() => {

                            /* HTML PAGE */

                            if (
                                request.destination ===
                                "document"
                            ) {

                                return caches.match(
                                    "./index.html"
                                );

                            }


                            /* IMAGE */

                            if (
                                request.destination ===
                                "image"
                            ) {

                                return caches.match(
                                    "./assets/logo.png"
                                );

                            }


                            return Response.error();

                        });

                })

        );

    }
);


/* =========================================================
   MESSAGE HANDLER
========================================================= */

self.addEventListener(
    "message",
    event => {

        if (
            !event.data
        ) {

            return;

        }


        /* -----------------------------------------
           FORCE SERVICE WORKER UPDATE
        ----------------------------------------- */

        if (
            event.data.type ===
            "SKIP_WAITING"
        ) {

            self.skipWaiting();

        }


        /* -----------------------------------------
           CLEAR PROJECT CACHE
        ----------------------------------------- */

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
                            "[SW] Project caches cleared."
                        );

                    })

            );

        }

    }
);


/* =========================================================
   SERVICE WORKER READY
========================================================= */

console.log(
    "[SW] Sandeep ElectroFix Card loaded:",
    CACHE_NAME
);
