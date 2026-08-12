/* =========================================================
   SANDEEP ELECTROFIX CARD
   PROJECT 2 - DIGITAL BUSINESS CARD
   SERVICE WORKER
   Version: 2.3.0
========================================================= */

"use strict";


/* =========================================================
   CACHE VERSION
========================================================= */

const CACHE_NAME =
    "sandeep-electrofix-card-v2.3.0";


/* =========================================================
   STATIC ASSETS
========================================================= */

const STATIC_ASSETS = [

    /* -------------------------
       MAIN FILES
    ------------------------- */

    "./",
    "./index.html",
    "./style.css",
    "./script.js",
    "./config.js",
    "./manifest.json",


    /* -------------------------
       MATERIAL CATALOGUE
    ------------------------- */

    "./material-catalogue.html",
    "./material-catalogue.css",
    "./material-catalogue.js",


    /* -------------------------
       OUR WORK
    ------------------------- */

    "./our-work.html",
    "./our-work.css",
    "./our-work.js",


    /* -------------------------
       DATA FILES
    ------------------------- */

    "./data/services.json",
    "./data/gallery.json",
    "./data/reviews.json",
    "./data/faq.json",
    "./data/profile.json",
    "./data/certificate.json",


    /* -------------------------
       MAIN ASSETS
    ------------------------- */

    "./assets/logo.png",
    "./assets/qr-card.png",
    "./assets/Cover.jpg",


    /* -------------------------
       GALLERY
    ------------------------- */

    "./assets/gallery/work1.jpg",
    "./assets/gallery/work2.jpg",
    "./assets/gallery/work3.jpg",
    "./assets/gallery/work4.jpg"

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

                    console.log(
                        "[SW] Caching static assets..."
                    );

                    return cache.addAll(
                        STATIC_ASSETS
                    );

                })
                .then(() => {

                    console.log(
                        "[SW] All static assets cached."
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
   NETWORK FALLBACK
========================================================= */

self.addEventListener(
    "fetch",
    event => {

        const request =
            event.request;


        /* -------------------------
           ONLY GET REQUESTS
        ------------------------- */

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
                       NETWORK
                    ------------------------- */

                    return fetch(request)

                        .then(networkResponse => {


                            /* -------------------------
                               VALID RESPONSE
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
   MESSAGE CONTROL
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
           SKIP WAITING
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
