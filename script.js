/* =========================================================
   SANDEEP ELECTROFIX - DIGITAL CARD
   PROJECT 2
   script.js - FINAL CLEAN VERSION
   ========================================================= */

"use strict";


/* =========================================================
   CONFIG SAFETY
========================================================= */

const APP = window.CONFIG || {};
const FEATURES = APP.features || {};


/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {

    en: {

        tagline: "Powering Your Trust",

        location: "📍 Lucknow, Uttar Pradesh",

        callNow: "📞 Call Now",

        whatsapp: "💬 WhatsApp",

        quickAccess: "Quick Access",

        about: "About",

        ourServices: "Our Services",

        ourWork: "Our Work",

        customerReviews: "Customer Reviews",

        visitUs: "📍 Visit Us",

        requestQuote: "Request a Quote",

        faq: "Frequently Asked Questions",

        scanSave: "📱 Scan & Save",

        contact: "Contact"

    },


    hi: {

        tagline: "आपका विश्वास, हमारी शक्ति",

        location: "📍 लखनऊ, उत्तर प्रदेश",

        callNow: "📞 अभी कॉल करें",

        whatsapp: "💬 व्हाट्सऐप",

        quickAccess: "त्वरित संपर्क",

        about: "हमारे बारे में",

        ourServices: "हमारी सेवाएँ",

        ourWork: "हमारा काम",

        customerReviews: "ग्राहक समीक्षाएँ",

        visitUs: "📍 यहाँ आएँ",

        requestQuote: "सेवा के लिए अनुरोध करें",

        faq: "अक्सर पूछे जाने वाले सवाल",

        scanSave: "📱 स्कैन करें और सेव करें",

        contact: "संपर्क करें"

    }

};


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    initializeTheme();

    initializeLanguage();

    initializeFeatureControls();

    initializeDiscount();

    initializeShare();

    initializeSaveContact();

    initializeQuoteForm();

    initializeLocation();

    initializeFAQ();

    initializeGallery();

    initializeQR();

    initializeTopButton();

    initializeMobileNavigation();

    initializeRipple();

    loadServices();

    loadReviews();

    updateBusinessLinks();

    updateFooterYear();

    initializeAnimations();

});


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    const oldToast =
        document.querySelector(".toast");

    if (oldToast) {
        oldToast.remove();
    }


    const toast =
        document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    document.body.appendChild(toast);


    requestAnimationFrame(() => {

        toast.classList.add("show");

    });


    setTimeout(() => {

        toast.classList.remove("show");


        setTimeout(() => {

            if (toast.parentNode) {
                toast.remove();
            }

        }, 300);

    }, 2500);

}


/* =========================================================
   FEATURE CONTROLS
========================================================= */

function initializeFeatureControls() {

    toggleSection(
        "gallery",
        FEATURES.gallery !== false
    );


    toggleSection(
        "reviews",
        FEATURES.reviews !== false
    );


    toggleSection(
        "google-maps",
        FEATURES.googleMaps !== false
    );


    toggleSection(
        "faq",
        FEATURES.faq !== false
    );


    toggleSection(
        "contact-form",
        FEATURES.contactForm !== false
    );


    toggleSection(
        "qr-section",
        FEATURES.qrCode !== false
    );


    toggleSection(
        "offers",
        FEATURES.offers === true
    );


    toggleSection(
        "youtube",
        FEATURES.youtube === true
    );

}


function toggleSection(id, enabled) {

    const section =
        document.getElementById(id);

    if (!section) return;

    section.style.display =
        enabled ? "" : "none";

}


/* =========================================================
   BUSINESS LINKS
========================================================= */

function updateBusinessLinks() {

    const phone =
        APP.phone ||
        "+919026036445";


    const whatsapp =
        APP.whatsapp ||
        "919026036445";


    const website =
        APP.website ||
        "https://sandeepelectrofix.github.io/";


    const maps =
        APP.googleMaps ||
        "https://maps.app.goo.gl/XYZnm7sFAVRT68Vs7";


    const facebook =
        APP.facebook ||
        "https://www.facebook.com/SandeepElectroFix";


    const instagram =
        APP.instagram ||
        "https://www.instagram.com/sandeep_electrofix";


    const youtube =
        APP.youtube ||
        "https://youtube.com/@sandeepelectrofix";


    const email =
        APP.email ||
        "SandeepElectroFix@gmail.com";


    /* PHONE */

    document
        .querySelectorAll('a[href^="tel:"]')
        .forEach(link => {

            link.href =
                "tel:" +
                phone.replace(/\s/g, "");

        });


    /* WHATSAPP */

    document
        .querySelectorAll('a[href*="wa.me"]')
        .forEach(link => {

            link.href =
                "https://wa.me/" +
                whatsapp.replace(/\D/g, "");

        });


    /* WEBSITE */

    document
        .querySelectorAll(
            'a[href*="sandeepelectrofix.github.io"]'
        )
        .forEach(link => {

            const text =
                link.textContent
                    .trim()
                    .toLowerCase();

            if (
                text.includes("website")
            ) {

                link.href = website;

            }

        });


    /* GOOGLE MAPS */

    document
        .querySelectorAll(
            'a[href*="maps.app.goo.gl"], a[href*="share.google"]'
        )
        .forEach(link => {

            link.href = maps;

            link.target = "_blank";

            link.rel = "noopener";

        });


    /* FACEBOOK */

    document
        .querySelectorAll(
            'a[href*="facebook.com"]'
        )
        .forEach(link => {

            link.href = facebook;

            link.target = "_blank";

            link.rel = "noopener";

        });


    /* INSTAGRAM */

    document
        .querySelectorAll(
            'a[href*="instagram.com"]'
        )
        .forEach(link => {

            link.href = instagram;

            link.target = "_blank";

            link.rel = "noopener";

        });


    /* YOUTUBE */

    document
        .querySelectorAll(
            'a[href*="youtube.com"]'
        )
        .forEach(link => {

            link.href = youtube;

            link.target = "_blank";

            link.rel = "noopener";

        });


    /* EMAIL */

    document
        .querySelectorAll(
            'a[href^="mailto:"]'
        )
        .forEach(link => {

            link.href =
                "mailto:" + email;

        });

}


/* =========================================================
   SHARE CARD
========================================================= */

function initializeShare() {

    const shareButtons =
        document.querySelectorAll(
            ".share-icon"
        );


    shareButtons.forEach(icon => {

        const button =
            icon.closest("a, button, .card");

        if (!button) return;


        button.addEventListener(
            "click",
            async event => {

                event.preventDefault();


                const shareData = {

                    title:
                        APP.businessName ||
                        "Sandeep ElectroFix",

                    text:
                        "Professional Electrical Services in Lucknow",

                    url:
                        window.location.href

                };


                try {

                    if (
                        navigator.share
                    ) {

                        await navigator.share(
                            shareData
                        );

                        return;

                    }


                    if (
                        navigator.clipboard &&
                        window.isSecureContext
                    ) {

                        await navigator.clipboard.writeText(
                            window.location.href
                        );


                        showToast(
                            "Website link copied successfully."
                        );

                        return;

                    }


                    showToast(
                        "Copy the website link from your browser."
                    );

                }
                catch (error) {

                    if (
                        error &&
                        error.name !== "AbortError"
                    ) {

                        console.log(
                            "Share error:",
                            error
                        );

                    }

                }

            }
        );

    });

}


/* =========================================================
   SAVE CONTACT
========================================================= */

function initializeSaveContact() {

    const buttons =
        document.querySelectorAll(
            '#saveContact, a[href="#contact-form"]'
        );


    buttons.forEach(button => {

        const text =
            button.textContent
                .trim()
                .toLowerCase();


        if (
            !text.includes("save contact")
        ) {

            return;

        }


        button.addEventListener(
            "click",
            event => {

                event.preventDefault();


                const phone =
                    APP.phone ||
                    "+919026036445";


                const email =
                    APP.email ||
                    "SandeepElectroFix@gmail.com";


                const website =
                    APP.cardWebsite ||
                    "https://sandeepelectrofix.github.io/SandeepElectroFix-Card/";


                const vcard = [

                    "BEGIN:VCARD",

                    "VERSION:3.0",

                    "FN:Sandeep ElectroFix",

                    "ORG:Sandeep ElectroFix",

                    "TEL:" + phone,

                    "EMAIL:" + email,

                    "URL:" + website,

                    "ADR:;;Lucknow;Uttar Pradesh;;India",

                    "NOTE:Professional Electrical Services",

                    "END:VCARD"

                ].join("\r\n");


                const blob =
                    new Blob(
                        [vcard],
                        {
                            type:
                                "text/vcard;charset=utf-8"
                        }
                    );


                const url =
                    URL.createObjectURL(blob);


                const link =
                    document.createElement("a");


                link.href = url;


                link.download =
                    "Sandeep-ElectroFix.vcf";


                document.body.appendChild(link);

                link.click();

                link.remove();


                setTimeout(() => {

                    URL.revokeObjectURL(url);

                }, 1000);


                showToast(
                    "Contact file created."
                );

            }
        );

    });

}


/* =========================================================
   SERVICES
========================================================= */

function loadServices() {

    const container =
        document.getElementById(
            "serviceContainer"
        );


    if (!container) return;


    /* CONFIG */

    if (
        Array.isArray(APP.services) &&
        APP.services.length
    ) {

        renderServices(
            container,
            APP.services
        );

        return;

    }


    /* JSON FALLBACK */

    fetch("data/services.json")

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "services.json not found"
                );

            }

            return response.json();

        })

        .then(services => {

            if (!Array.isArray(services)) {

                throw new Error(
                    "Invalid services data"
                );

            }


            renderServices(
                container,
                services
            );

        })

        .catch(error => {

            console.log(
                "Services error:",
                error
            );

        });

}


function renderServices(
    container,
    services
) {

    container.innerHTML = "";


    services.forEach(service => {

        const card =
            document.createElement("div");


        card.className =
            "service-card";


        const icon =
            document.createElement("div");


        icon.className =
            "service-icon";


        icon.textContent =
            service.icon || "⚡";


        const title =
            document.createElement("h3");


        title.textContent =
            service.title ||
            service.name ||
            "Electrical Service";


        const description =
            document.createElement("p");


        description.textContent =
            service.description || "";


        card.appendChild(icon);

        card.appendChild(title);


        if (
            service.description
        ) {

            card.appendChild(
                description
            );

        }


        container.appendChild(card);

    });

}


/* =========================================================
   GALLERY
========================================================= */

function initializeGallery() {

    const container =
        document.getElementById(
            "galleryContainer"
        );


    if (!container) return;


    /* CONFIG */

    if (
        Array.isArray(APP.gallery) &&
        APP.gallery.length
    ) {

        renderGallery(
            container,
            APP.gallery
        );

        return;

    }


    /* JSON FALLBACK */

    fetch("data/gallery.json")

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "gallery.json not found"
                );

            }

            return response.json();

        })

        .then(gallery => {

            if (!Array.isArray(gallery)) {

                throw new Error(
                    "Invalid gallery data"
                );

            }


            renderGallery(
                container,
                gallery
            );

        })

        .catch(error => {

            console.log(
                "Gallery error:",
                error
            );

        });

}


function renderGallery(
    container,
    gallery
) {

    container.innerHTML = "";


    gallery.forEach(item => {

        const wrapper =
            document.createElement("div");


        wrapper.className =
            "gallery-item";


        const image =
            document.createElement("img");


        image.src =
            item.image || "";


        image.alt =
            item.title ||
            "Sandeep ElectroFix Electrical Work";


        image.loading =
            "lazy";


        const title =
            document.createElement("p");


        title.textContent =
            item.title || "";


        wrapper.appendChild(image);


        if (item.title) {

            wrapper.appendChild(title);

        }


        container.appendChild(wrapper);

    });


    setupGalleryLightbox();

}


function setupGalleryLightbox() {

    const lightbox =
        document.getElementById(
            "lightbox"
        );


    const lightboxImage =
        document.getElementById(
            "lightboxImage"
        );


    const closeButton =
        document.getElementById(
            "closeLightbox"
        );


    if (
        !lightbox ||
        !lightboxImage
    ) {

        return;

    }


    document
        .querySelectorAll(
            "#galleryContainer img"
        )
        .forEach(image => {

            image.addEventListener(
                "click",
                () => {

                    lightboxImage.src =
                        image.src;


                    lightboxImage.alt =
                        image.alt;


                    lightbox.style.display =
                        "flex";


                    document.body.style.overflow =
                        "hidden";

                }
            );

        });


    function closeLightbox() {

        lightbox.style.display =
            "none";


        lightboxImage.src =
            "";


        document.body.style.overflow =
            "";

    }


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeLightbox
        );

    }


    lightbox.addEventListener(
        "click",
        event => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeLightbox();

            }

        }
    );

}


/* =========================================================
   REVIEWS
========================================================= */

function loadReviews() {

    const container =
        document.getElementById(
            "reviewContainer"
        );


    if (!container) return;


    /* CONFIG */

    if (
        Array.isArray(APP.reviews) &&
        APP.reviews.length
    ) {

        renderReviews(
            container,
            APP.reviews
        );

        return;

    }


    /* JSON FALLBACK */

    fetch("data/reviews.json")

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "reviews.json not found"
                );

            }

            return response.json();

        })

        .then(reviews => {

            if (!Array.isArray(reviews)) {

                throw new Error(
                    "Invalid reviews data"
                );

            }


            renderReviews(
                container,
                reviews
            );

        })

        .catch(error => {

            console.log(
                "Reviews error:",
                error
            );

        });

}


function renderReviews(
    container,
    reviews
) {

    container.innerHTML = "";


    reviews.forEach(review => {

        const card =
            document.createElement("div");


        card.className =
            "review-card";


        const rating =
            document.createElement("div");


        rating.className =
            "rating";


        const ratingValue =
            Number(review.rating) || 5;


        rating.textContent =
            "★".repeat(
                Math.max(
                    0,
                    Math.min(
                        5,
                        Math.round(
                            ratingValue
                        )
                    )
                )
            );


        const text =
            document.createElement("p");


        text.textContent =
            review.text ||
            review.review ||
            "";


        const name =
            document.createElement("h4");


        name.textContent =
            "- " +
            (
                review.name ||
                "Customer"
            );


        card.appendChild(rating);

        card.appendChild(text);

        card.appendChild(name);


        if (review.date) {

            const date =
                document.createElement("small");


            date.textContent =
                review.date;


            card.appendChild(date);

        }


        container.appendChild(card);

    });

}


/* =========================================================
   FAQ
========================================================= */

function initializeFAQ() {

    const container =
        document.getElementById(
            "faqContainer"
        );


    if (!container) return;


    /* CONFIG FAQ */

    if (
        Array.isArray(APP.faq) &&
        APP.faq.length
    ) {

        renderFAQ(
            container,
            APP.faq
        );

        return;

    }


    /* JSON FALLBACK */

    fetch("data/faq.json")

        .then(response => {

            if (!response.ok) {

                throw new Error(
                    "faq.json not found"
                );

            }

            return response.json();

        })

        .then(faqs => {

            if (!Array.isArray(faqs)) {

                throw new Error(
                    "Invalid FAQ data"
                );

            }


            renderFAQ(
                container,
                faqs
            );

        })

        .catch(error => {

            console.log(
                "FAQ error:",
                error
            );

        });

}


function renderFAQ(
    container,
    faqs
) {

    container.innerHTML = "";


    faqs.forEach((item, index) => {

        const wrapper =
            document.createElement("div");


        wrapper.className =
            "faq-item";


        const button =
            document.createElement("button");


        button.type =
            "button";


        button.className =
            "faq-question";


        button.setAttribute(
            "aria-expanded",
            "false"
        );


        const question =
            document.createElement("span");


        question.textContent =
            item.question || "";


        const icon =
            document.createElement("span");


        icon.className =
            "faq-icon";


        icon.textContent =
            "+";


        button.appendChild(question);

        button.appendChild(icon);


        const answer =
            document.createElement("div");


        answer.className =
            "faq-answer";


        const paragraph =
            document.createElement("p");


        paragraph.textContent =
            item.answer || "";


        answer.appendChild(
            paragraph
        );


        wrapper.appendChild(button);

        wrapper.appendChild(answer);


        container.appendChild(wrapper);


        button.addEventListener(
            "click",
            () => {

                const isOpen =
                    wrapper.classList.contains(
                        "active"
                    );


                /* CLOSE ALL */

                container
                    .querySelectorAll(
                        ".faq-item"
                    )
                    .forEach(otherItem => {

                        otherItem.classList.remove(
                            "active"
                        );


                        const otherButton =
                            otherItem.querySelector(
                                ".faq-question"
                            );


                        const otherIcon =
                            otherItem.querySelector(
                                ".faq-icon"
                            );


                        if (otherButton) {

                            otherButton.setAttribute(
                                "aria-expanded",
                                "false"
                            );

                        }


                        if (otherIcon) {

                            otherIcon.textContent =
                                "+";

                        }

                    });


                /* OPEN CLICKED ITEM */

                if (!isOpen) {

                    wrapper.classList.add(
                        "active"
                    );


                    button.setAttribute(
                        "aria-expanded",
                        "true"
                    );


                    icon.textContent =
                        "−";

                }

            }
        );

    });


    console.log(
        "FAQ loaded:",
        faqs.length,
        "questions"
    );

}


/* =========================================================
   LOCATION
========================================================= */

function initializeLocation() {

    const button =
        document.getElementById(
            "getLocationBtn"
        );


    const input =
        document.getElementById(
            "customerLocation"
        );


    const status =
        document.getElementById(
            "locationStatus"
        );


    if (!button) return;


    button.addEventListener(
        "click",
        () => {

            if (
                !navigator.geolocation
            ) {

                setLocationStatus(
                    status,
                    "❌ Your browser does not support location."
                );

                return;

            }


            button.disabled =
                true;


            button.textContent =
                "📍 Getting Location...";


            setLocationStatus(
                status,
                "📍 Getting your current location..."
            );


            navigator.geolocation.getCurrentPosition(

                position => {

                    const lat =
                        position.coords.latitude;


                    const lng =
                        position.coords.longitude;


                    const mapsURL =
                        `https://www.google.com/maps?q=${lat},${lng}`;


                    if (input) {

                        input.value =
                            mapsURL;

                    }


                    setLocationStatus(
                        status,
                        "✅ Location captured successfully."
                    );


                    button.disabled =
                        false;


                    button.textContent =
                        "📍 Location Captured";

                },


                error => {

                    console.log(
                        "Location error:",
                        error
                    );


                    setLocationStatus(
                        status,
                        "❌ Location permission denied. Please paste your Google Maps location link."
                    );


                    button.disabled =
                        false;


                    button.textContent =
                        "📍 Try Again";

                },


                {

                    enableHighAccuracy:
                        true,

                    timeout:
                        15000,

                    maximumAge:
                        0

                }

            );

        }
    );

}


function setLocationStatus(
    element,
    message
) {

    if (!element) return;

    element.textContent =
        message;

}


/* =========================================================
   WHATSAPP QUOTE FORM
========================================================= */

function initializeQuoteForm() {

    const button =
        document.getElementById(
            "sendQuoteBtn"
        );


    if (!button) return;


    button.addEventListener(
        "click",
        sendQuote
    );

}


function sendQuote() {

    const name =
        getValue(
            "customerName"
        );


    const phone =
        getValue(
            "customerPhone"
        );


    const service =
        getValue(
            "serviceName"
        );


    const message =
        getValue(
            "customerMessage"
        );


    const location =
        getValue(
            "customerLocation"
        );


    if (!name) {

        showToast(
            "Please enter your name."
        );

        return;

    }


    if (!phone) {

        showToast(
            "Please enter your mobile number."
        );

        return;

    }


    if (!service) {

        showToast(
            "Please select a service."
        );

        return;

    }


    if (!location) {

        showToast(
            "Please share your service location."
        );

        return;

    }


    const whatsappNumber =
        APP.whatsapp ||
        "919026036445";


    const whatsappMessage =

`🔔 NEW SERVICE ENQUIRY

👤 Name: ${name}

📱 Mobile: ${phone}

⚡ Service: ${service}

📝 Message:
${message || "No message provided"}

📍 Service Location:
${location}

━━━━━━━━━━━━━━

⚡ Sandeep ElectroFix
Professional Electrical Services
📍 Lucknow, Uttar Pradesh`;


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber.replace(/\D/g, "") +
        "?text=" +
        encodeURIComponent(
            whatsappMessage
        );


    showToast(
        "Opening WhatsApp..."
    );


    setTimeout(() => {

        window.open(
            whatsappURL,
            "_blank",
            "noopener"
        );

    }, 300);


    /* GOOGLE SHEET */

    sendToGoogleSheet({

        name,
        phone,
        service,
        message,
        location

    });

}


function getValue(id) {

    return (
        document
            .getElementById(id)
            ?.value
            .trim() || ""
    );

}


/* =========================================================
   GOOGLE SHEET
========================================================= */

function sendToGoogleSheet(data) {

    const googleSheetURL =
        "https://script.google.com/macros/s/AKfycbxShXAXNiKStkhDZLywJ4YeRVUJ2Ljv44qOjsofiVP27vArOk2OhiN1i4BXKwv21joF/exec";


    if (!googleSheetURL) return;


    fetch(
        googleSheetURL,
        {

            method: "POST",

            mode: "no-cors",

            headers: {

                "Content-Type":
                    "text/plain;charset=utf-8"

            },

            body:
                JSON.stringify(data)

        }
    )
    .then(() => {

        console.log(
            "Enquiry sent to Google Sheet."
        );

    })
    .catch(error => {

        console.log(
            "Google Sheet error:",
            error
        );

    });

}


/* =========================================================
   THEME
========================================================= */

function initializeTheme() {

    const button =
        document.getElementById(
            "themeToggle"
        );


    let savedTheme = null;


    try {

        savedTheme =
            localStorage.getItem(
                "sandeepTheme"
            );

    }
    catch (error) {

        console.log(
            "Theme storage unavailable."
        );

    }


    if (
        savedTheme === "light"
    ) {

        document.body.classList.add(
            "light-theme"
        );

        document.documentElement.classList.add(
            "saved-light-theme"
        );

    }
    else {

        document.body.classList.remove(
            "light-theme"
        );

        document.documentElement.classList.remove(
            "saved-light-theme"
        );

    }


    updateThemeButton(
        button
    );


    if (!button) return;


    button.addEventListener(
        "click",
        () => {

            const isLight =
                document.body.classList.contains(
                    "light-theme"
                );


            const newTheme =
                isLight
                    ? "dark"
                    : "light";


            if (
                newTheme === "light"
            ) {

                document.body.classList.add(
                    "light-theme"
                );

                document.documentElement.classList.add(
                    "saved-light-theme"
                );

            }
            else {

                document.body.classList.remove(
                    "light-theme"
                );

                document.documentElement.classList.remove(
                    "saved-light-theme"
                );

            }


            try {

                localStorage.setItem(
                    "sandeepTheme",
                    newTheme
                );

            }
            catch (error) {

                console.log(
                    "Unable to save theme."
                );

            }


            updateThemeButton(
                button
            );

        }
    );

}


function updateThemeButton(button) {

    if (!button) return;


    const isLight =
        document.body.classList.contains(
            "light-theme"
        );


    button.textContent =
        isLight
            ? "🌙 Dark Mode"
            : "☀️ Light Mode";

}


/* =========================================================
   LANGUAGE SYSTEM
========================================================= */

function initializeLanguage() {

    const buttons =
        document.querySelectorAll(
            ".language-btn"
        );


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                setLanguage(
                    button.dataset.lang
                );

            }
        );

    });


    let savedLanguage = "en";


    try {

        savedLanguage =
            localStorage.getItem(
                "sandeepLanguage"
            ) || "en";

    }
    catch (error) {

        console.log(
            "Language storage unavailable."
        );

    }


    setLanguage(
        savedLanguage
    );

}


function setLanguage(language) {

    const selectedLanguage =
        translations[language]
            ? language
            : "en";


    const dictionary =
        translations[selectedLanguage];


    document
        .querySelectorAll(
            "[data-i18n]"
        )
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n"
                );


            if (
                dictionary[key]
            ) {

                element.textContent =
                    dictionary[key];

            }

        });


    try {

        localStorage.setItem(
            "sandeepLanguage",
            selectedLanguage
        );

    }
    catch (error) {

        console.log(
            "Unable to save language."
        );

    }


    document
        .querySelectorAll(
            ".language-btn"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.lang ===
                    selectedLanguage
            );

        });


    document.documentElement.lang =
        selectedLanguage === "hi"
            ? "hi"
            : "en";

}


/* =========================================================
   QR DOWNLOAD
========================================================= */

function initializeQR() {

    const button =
        document.getElementById(
            "downloadQR"
        );


    const qr =
        document.getElementById(
            "cardQR"
        );


    if (
        !button ||
        !qr
    ) {

        return;

    }


    button.addEventListener(
        "click",
        () => {

            if (!qr.src) {

                showToast(
                    "QR image not available."
                );

                return;

            }


            const link =
                document.createElement("a");


            link.href =
                qr.src;


            link.download =
                "Sandeep-ElectroFix-QR.png";


            document.body.appendChild(
                link
            );


            link.click();


            link.remove();


            showToast(
                "QR download started."
            );

        }
    );

}


/* =========================================================
   TOP BUTTON
========================================================= */

function initializeTopButton() {

    if (
        document.getElementById(
            "topButton"
        )
    ) {

        return;

    }


    const button =
        document.createElement(
            "button"
        );


    button.id =
        "topButton";


    button.type =
        "button";


    button.setAttribute(
        "aria-label",
        "Back to top"
    );


    button.textContent =
        "⬆";


    document.body.appendChild(
        button
    );


    function update() {

        if (
            window.scrollY > 300
        ) {

            button.classList.add(
                "show"
            );

        }
        else {

            button.classList.remove(
                "show"
            );

        }

    }


    window.addEventListener(
        "scroll",
        update,
        {
            passive: true
        }
    );


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );


    update();

}


/* =========================================================
   MOBILE NAVIGATION
========================================================= */

function initializeMobileNavigation() {

    const items =
        document.querySelectorAll(
            ".bottom-nav-item"
        );


    if (!items.length) return;


    items.forEach(item => {

        item.addEventListener(
            "click",
            () => {

                items.forEach(
                    nav => {

                        nav.classList.remove(
                            "active"
                        );

                    }
                );


                item.classList.add(
                    "active"
                );

            }
        );

    });


    const sections = [

        "top",

        "services",

        "gallery",

        "contact-form"

    ];


    function updateActive() {

        let current =
            "top";


        sections.forEach(id => {

            const section =
                document.getElementById(
                    id
                );


            if (!section) return;


            if (
                section.getBoundingClientRect()
                    .top <= 180
            ) {

                current =
                    id;

            }

        });


        items.forEach(item => {

            const href =
                item.getAttribute(
                    "href"
                );


            item.classList.toggle(
                "active",
                href === "#" + current
            );

        });

    }


    window.addEventListener(
        "scroll",
        updateActive,
        {
            passive: true
        }
    );


    updateActive();

}


/* =========================================================
   RIPPLE EFFECT
========================================================= */

function initializeRipple() {

    document.addEventListener(
        "click",
        event => {

            const target =
                event.target.closest(
                    ".btn, .card"
                );


            if (!target) return;


            if (
                target.classList.contains(
                    "bottom-nav-item"
                )
            ) {

                return;

            }


            const ripple =
                document.createElement(
                    "span"
                );


            ripple.className =
                "ripple";


            const rect =
                target.getBoundingClientRect();


            ripple.style.left =
                (
                    event.clientX -
                    rect.left
                ) + "px";


            ripple.style.top =
                (
                    event.clientY -
                    rect.top
                ) + "px";


            target.appendChild(
                ripple
            );


            setTimeout(
                () => {

                    if (ripple.parentNode) {

                        ripple.remove();

                    }

                },
                600
            );

        }
    );

}


/* =========================================================
   ANIMATIONS
========================================================= */

function initializeAnimations() {

    document.body.classList.add(
        "loaded"
    );


    if (
        !("IntersectionObserver" in window)
    ) {

        return;

    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.12
            }
        );


    document
        .querySelectorAll(
            ".card, .service-card, .gallery-item, .review-card, .faq-item"
        )
        .forEach(element => {

            observer.observe(
                element
            );

        });

}


/* =========================================================
   FOOTER YEAR
========================================================= */

function updateFooterYear() {

    const footerText =
        document.querySelector(
            "footer p"
        );


    if (!footerText) return;


    footerText.textContent =
        `© ${new Date().getFullYear()} Sandeep ElectroFix`;

}


/* =========================================================
   PAGE LOAD
========================================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );


        console.log(
            "⚡ Sandeep ElectroFix Digital Card Loaded"
        );

    }
);
/* =========================================================
   SERVICE WORKER REGISTRATION
========================================================= */

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("./sw.js")
            .then(registration => {

                console.log(
                    "[SW] Registered successfully:",
                    registration.scope
                );

                /* Check for new SW version */

                registration.update();

            })
            .catch(error => {

                console.error(
                    "[SW] Registration failed:",
                    error
                );

            });

    });

}


/* =========================================================
   SERVICE WORKER UPDATE
========================================================= */

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.addEventListener(
        "controllerchange",
        () => {

            console.log(
                "[SW] New version activated."
            );

        }
    );

}

/* =========================================================
   DISCOUNT SYSTEM
========================================================= */

function initializeDiscount() {

    const section =
        document.getElementById(
            "discount-section"
        );

    if (!section) return;


    const discount =
        APP.discount || {};


    /* DISCOUNT OFF */

    if (discount.enabled !== true) {

        section.style.display = "none";

        return;

    }


    /* ELEMENTS */

    const title =
        document.getElementById(
            "discountTitle"
        );

    const percentage =
        document.getElementById(
            "discountPercentage"
        );

    const message =
        document.getElementById(
            "discountMessage"
        );

    const validity =
        document.getElementById(
            "discountValidity"
        );


    /* TITLE */

    if (title) {

        title.textContent =
            discount.title ||
            "Special Discount";

    }


    /* PERCENTAGE */

    const discountPercentage =
        Number(
            discount.percentage
        ) || 0;


    if (percentage) {

        percentage.textContent =
            discountPercentage;

    }


    /* MESSAGE */

    if (message) {

        message.textContent =
            discount.message ||
            `Get ${discountPercentage}% OFF on Electrical Services`;

    }


    /* VALIDITY */

    if (validity) {

        validity.textContent =
            discount.validity ||
            "Limited Time Offer";

    }


    console.log(
        "Discount loaded:",
        discountPercentage + "%"
    );

}
