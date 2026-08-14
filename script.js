/* =========================================================
   SANDEEP ELECTROFIX
   PROJECT 2 - DIGITAL CARD
   MASTER CONTROLLER
   VERSION 3.0
   ========================================================= */

"use strict";


/* =========================================================
   CONFIG SAFETY
========================================================= */

const APP = window.CONFIG || {};

const FEATURES = APP.features || {};

const BUSINESS = APP.business || {};

console.log("Sandeep ElectroFix Master Controller Loaded");


/* =========================================================
   HELPER
========================================================= */

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}


/* =========================================================
   TOAST
========================================================= */

function showToast(message) {

    const oldToast = $(".toast");

    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement("div");

    toast.className = "toast";

    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}


/* =========================================================
   MASTER SHOW / HIDE
========================================================= */

function setVisibility(element, show) {

    if (!element) return;

    element.style.display = show ? "" : "none";

}


/* =========================================================
   FIND SECTION
========================================================= */

function getSection(selector) {

    return document.querySelector(selector);

}


/* =========================================================
   HERO CONTROL
========================================================= */

function initializeHero() {

    const hero = $(".hero");

    if (!hero) return;

    setVisibility(
        hero,
        FEATURES.hero !== false
    );


    const heroItems =
        FEATURES.heroItems || {};


    /* LOGO */

    const logo =
        hero.querySelector(".hero-logo");

    setVisibility(
        logo,
        heroItems.logo !== false
    );


    /* TAGLINE */

    const tagline =
        hero.querySelector(".tagline");

    setVisibility(
        tagline,
        heroItems.tagline !== false
    );


    /* LOCATION */

    const location =
        hero.querySelector(".location");

    setVisibility(
        location,
        heroItems.location !== false
    );


    /* HERO CALL */

    const call =
        hero.querySelector(".call-btn");

    setVisibility(
        call,
        heroItems.callButton !== false
    );


    /* HERO WHATSAPP */

    const whatsapp =
        hero.querySelector(".whatsapp-btn");

    setVisibility(
        whatsapp,
        heroItems.whatsappButton !== false
    );


    /* THEME */

    const theme =
        $("#themeToggle");

    setVisibility(
        theme,
        heroItems.themeButton !== false &&
        FEATURES.darkMode !== false
    );


    /* LANGUAGE */

    const language =
        $(".language-switcher");

    setVisibility(
        language,
        heroItems.languageSwitcher !== false &&
        FEATURES.languageSwitcher !== false
    );

}


/* =========================================================
   QUICK ACCESS MASTER
========================================================= */

function initializeQuickAccess() {

    const section =
        $(".quick-actions");

    if (!section) return;

    setVisibility(
        section,
        FEATURES.quickAccess !== false
    );


    const items =
        FEATURES.quickAccessItems || {};


    const cards =
        section.querySelectorAll(".grid > a.card");


    cards.forEach(card => {

        const text =
            card.innerText
                .trim()
                .toLowerCase();


        let show = true;


        if (text.includes("material catalogue")) {
            show = items.materialCatalogue !== false;
        }

        else if (
            text === "call" ||
            text.startsWith("call\n")
        ) {
            show = items.call !== false;
        }

        else if (text.includes("whatsapp")) {
            show = items.whatsapp !== false;
        }

        else if (text.includes("website")) {
            show = items.website !== false;
        }

        else if (text.includes("google maps")) {
            show = items.googleMaps !== false;
        }

        else if (text.includes("facebook")) {
            show = items.facebook !== false;
        }

        else if (text.includes("instagram")) {
            show = items.instagram !== false;
        }

        else if (text.includes("youtube")) {
            show = items.youtube !== false;
        }

        else if (text.includes("email")) {
            show = items.email !== false;
        }

        else if (text.includes("save contact")) {
            show = items.saveContact !== false;
        }

        else if (text.includes("share")) {
            show = items.share !== false;
        }

        else if (text.includes("our work")) {
            show = items.ourWork !== false;
        }


        setVisibility(card, show);

    });

}


/* =========================================================
   ABOUT
========================================================= */

function initializeAbout() {

    const about =
        $(".about");

    setVisibility(
        about,
        FEATURES.about !== false
    );

}


/* =========================================================
   SERVICES
========================================================= */

function loadServices() {

    const section =
        $("#services");

    const container =
        $("#serviceContainer");

    if (!section || !container) return;


    setVisibility(
        section,
        FEATURES.services !== false
    );


    if (FEATURES.services === false) {
        return;
    }


    const settings =
        FEATURES.serviceSettings || {};


    const services =
        Array.isArray(APP.services)
            ? APP.services
            : [];


    container.innerHTML = "";


    services.forEach(service => {

        if (service.show === false) {
            return;
        }


        const card =
            document.createElement("div");

        card.className =
            "service-card";


        /* =================================================
           MAIN SERVICE
        ================================================= */

        let html = `

            <div class="service-header">

                <div class="service-icon">
                    ${service.icon || "⚡"}
                </div>

                <div>

                    <h3>
                        ${escapeHTML(service.title)}
                    </h3>

                </div>

            </div>

        `;


        /* DESCRIPTION */

        if (
            settings.showDescription !== false &&
            service.description
        ) {

            html += `

                <p class="service-description">
                    ${escapeHTML(service.description)}
                </p>

            `;

        }


        /* =================================================
           SUB SERVICES
        ================================================= */

        if (
            settings.showSubItems !== false &&
            Array.isArray(service.items)
        ) {

            html += `
                <div class="service-items">
            `;


            service.items.forEach(item => {

                if (item.show === false) {
                    return;
                }


                html += `

                    <div class="service-item">

                        <div class="service-item-name">
                            ${escapeHTML(item.title)}
                        </div>

                `;


                /* PRICE */

                if (
                    settings.showPrices !== false &&
                    item.price !== undefined
                ) {

                    html += `

                        <div class="service-price">
                            ₹${Number(item.price).toLocaleString("en-IN")}

                    `;


                    /* UNIT */

                    if (
                        settings.showUnits !== false &&
                        item.unit
                    ) {

                        html += `
                            / ${escapeHTML(item.unit)}
                        `;

                    }


                    html += `
                        </div>
                    `;

                }


                html += `
                    </div>
                `;

            });


            html += `
                </div>
            `;

        }


        card.innerHTML = html;

        container.appendChild(card);

    });

}


/* =========================================================
   GALLERY
========================================================= */

function initializeGallery() {

    const section =
        $("#gallery");

    const container =
        $("#galleryContainer");


    if (!section || !container) return;


    setVisibility(
        section,
        FEATURES.gallery !== false
    );


    if (FEATURES.gallery === false) {
        return;
    }


    const gallery =
        Array.isArray(APP.gallery)
            ? APP.gallery
            : [];


    container.innerHTML = "";


    gallery.forEach(item => {

        if (item.show === false) {
            return;
        }


        const wrapper =
            document.createElement("div");

        wrapper.className =
            "gallery-item";


        wrapper.innerHTML = `

            <img
                src="${escapeAttribute(item.image)}"
                alt="${escapeAttribute(item.title || "Electrical Work")}"
                loading="lazy"
            >

            ${
                item.title
                ? `<span>${escapeHTML(item.title)}</span>`
                : ""
            }

        `;


        const image =
            wrapper.querySelector("img");


        if (image) {

            image.addEventListener(
                "click",
                () => openLightbox(
                    image.src,
                    item.title
                )
            );

        }


        container.appendChild(wrapper);

    });

}


/* =========================================================
   LIGHTBOX
========================================================= */

function openLightbox(src, title) {

    const lightbox =
        $("#lightbox");

    const image =
        $("#lightboxImage");


    if (!lightbox || !image) return;


    image.src = src;

    image.alt =
        title || "Sandeep ElectroFix Work";


    lightbox.classList.add("active");

    lightbox.style.display =
        "flex";

}


function closeLightbox() {

    const lightbox =
        $("#lightbox");

    if (!lightbox) return;


    lightbox.classList.remove("active");

    lightbox.style.display =
        "none";

}


function initializeLightbox() {

    const close =
        $("#closeLightbox");

    if (close) {

        close.addEventListener(
            "click",
            closeLightbox
        );

    }


    const lightbox =
        $("#lightbox");

    if (lightbox) {

        lightbox.addEventListener(
            "click",
            function(event) {

                if (
                    event.target === lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }

}


/* =========================================================
   REVIEWS
========================================================= */

function loadReviews() {

    const section =
        $("#reviews");

    const container =
        $("#reviewContainer");


    if (!section || !container) return;


    setVisibility(
        section,
        FEATURES.reviews !== false
    );


    if (FEATURES.reviews === false) {
        return;
    }


    const reviews =
        Array.isArray(APP.reviews)
            ? APP.reviews
            : [];


    container.innerHTML = "";


    reviews.forEach(review => {

        if (review.show === false) {
            return;
        }


        const card =
            document.createElement("div");

        card.className =
            "review-card";


        const stars =
            "⭐".repeat(
                Math.max(
                    0,
                    Math.min(
                        5,
                        Number(review.rating) || 0
                    )
                )
            );


        card.innerHTML = `

            <div class="review-stars">
                ${stars}
            </div>

            <p>
                "${escapeHTML(review.text || "")}"
            </p>

            <strong>
                ${escapeHTML(review.name || "Customer")}
            </strong>

        `;


        container.appendChild(card);

    });

}


/* =========================================================
   GOOGLE MAPS
========================================================= */

function initializeGoogleMaps() {

    const section =
        $("#google-maps");


    if (!section) return;


    setVisibility(
        section,
        FEATURES.googleMaps !== false
    );


    if (
        FEATURES.googleMaps === false
    ) {
        return;
    }


    const links =
        section.querySelectorAll("a");


    links.forEach(link => {

        if (
            link.href.includes("maps.app.goo.gl")
        ) {

            link.href =
                BUSINESS.googleMaps ||
                link.href;

        }

    });

}


/* =========================================================
   QUOTE FORM
========================================================= */

function initializeQuoteForm() {

    const section =
        $("#contact-form");

    const sendButton =
        $("#sendQuoteBtn");


    if (!section) return;


    const quoteConfig =
        APP.quote || {};


    const enabled =
        FEATURES.contactForm !== false &&
        quoteConfig.enabled !== false;


    setVisibility(
        section,
        enabled
    );


    if (!enabled || !sendButton) {
        return;
    }


    sendButton.addEventListener(
        "click",
        sendQuote
    );

}


/* =========================================================
   SEND QUOTE
========================================================= */

function sendQuote() {

    const name =
        $("#customerName")?.value.trim() || "";

    const phone =
        $("#customerPhone")?.value.trim() || "";

    const service =
        $("#serviceName")?.value.trim() || "";

    const message =
        $("#customerMessage")?.value.trim() || "";

    const location =
        $("#customerLocation")?.value.trim() || "";

    const total =
        $("#serviceTotal")?.value.trim() || "";


    const quote =
        APP.quote || {};


    /* REQUIRED CHECKS */

    if (
        quote.requireName &&
        !name
    ) {

        showToast("Please enter your name.");

        $("#customerName")?.focus();

        return;

    }


    if (
        quote.requirePhone &&
        !phone
    ) {

        showToast("Please enter your mobile number.");

        $("#customerPhone")?.focus();

        return;

    }


    if (
        quote.requireService &&
        !service
    ) {

        showToast("Please select a service.");

        $("#serviceName")?.focus();

        return;

    }


    if (
        quote.requireLocation &&
        !location
    ) {

        showToast(
            "Please share your service location."
        );

        $("#customerLocation")?.focus();

        return;

    }


    let text =

`Hello ${BUSINESS.name || "Sandeep ElectroFix"},

I would like to enquire about electrical service.

Name: ${name}
Mobile: ${phone}
Service: ${service}`;


    if (total) {

        text +=
            `\nEstimated Total: ₹${total}`;

    }


    if (message) {

        text +=
            `\nWork Details: ${message}`;

    }


    if (location) {

        text +=
            `\nService Location: ${location}`;

    }


    text +=
        "\n\nThank you.";


    const number =
        quote.whatsappNumber ||
        BUSINESS.whatsapp;


    const url =
        `https://wa.me/${number}?text=${encodeURIComponent(text)}`;


    window.open(
        url,
        "_blank",
        "noopener"
    );

}


/* =========================================================
   DISCOUNT CALCULATION
========================================================= */

function initializeDiscountCalculation() {

    const input =
        $("#serviceTotal");

    const box =
        $("#discountCalculation");


    if (!input || !box) return;


    input.addEventListener(
        "input",
        calculateDiscount
    );


    calculateDiscount();

}


function calculateDiscount() {

    const input =
        $("#serviceTotal");

    const box =
        $("#discountCalculation");


    if (!input || !box) return;


    const total =
        Number(input.value);


    const discount =
        APP.discount || {};


    if (
        !discount.enabled ||
        !total ||
        total <= 0
    ) {

        box.style.display =
            "none";

        return;

    }


    const percentage =
        Number(discount.value) || 0;


    const discountAmount =
        total * percentage / 100;


    const finalAmount =
        total - discountAmount;


    box.style.display =
        "block";


    const original =
        $("#originalAmount");

    const discountElement =
        $("#discountAmount");

    const final =
        $("#finalAmount");

    const percent =
        $("#quoteDiscountPercent");


    if (original) {

        original.textContent =
            `₹${total.toLocaleString("en-IN")}`;

    }


    if (discountElement) {

        discountElement.textContent =
            `- ₹${discountAmount.toLocaleString("en-IN")}`;

    }


    if (final) {

        final.textContent =
            `₹${finalAmount.toLocaleString("en-IN")}`;

    }


    if (percent) {

        percent.textContent =
            percentage;

    }

}


/* =========================================================
   DISCOUNT SECTIONS
========================================================= */

function initializeDiscountSections() {

    const discount =
        APP.discount || {};


    const mainOffer =
        $("#discount-offer");

    const discountSection =
        $("#discount-section");


    const enabled =
        FEATURES.offers !== false &&
        FEATURES.discountOffer !== false &&
        discount.enabled !== false;


    setVisibility(
        mainOffer,
        enabled
    );


    setVisibility(
        discountSection,
        FEATURES.discountSection !== false &&
        enabled
    );


    if (!enabled) {
        return;
    }


    /* MAIN OFFER */

    if (mainOffer) {

        const title =
            mainOffer.querySelector(".discount-title");

        const message =
            mainOffer.querySelector(".discount-message");

        const value =
            mainOffer.querySelector(".discount-value");

        const validity =
            mainOffer.querySelector(".discount-validity");


        if (title) {
            title.textContent =
                discount.title ||
                "Special Discount";
        }


        if (message) {
            message.textContent =
                discount.message || "";
        }


        if (value) {

            value.textContent =
                discount.type === "percentage"
                    ? `${discount.value}% OFF`
                    : `₹${discount.value} OFF`;

        }


        if (validity) {

            validity.textContent =
                discount.validUntil
                    ? `Valid until ${discount.validUntil}`
                    : "Valid for limited time";

        }

    }


    /* SECOND DISCOUNT */

    const title =
        $("#discountTitle");

    const percentage =
        $("#discountPercentage");

    const message =
        $("#discountMessage");

    const validity =
        $("#discountValidity");


    if (title) {

        title.textContent =
            discount.title ||
            "Special Discount";

    }


    if (percentage) {

        percentage.textContent =
            discount.value || 0;

    }


    if (message) {

        message.textContent =
            discount.message || "";

    }


    if (validity) {

        validity.textContent =
            discount.validUntil
                ? `Valid until ${discount.validUntil}`
                : "Limited Time Offer";

    }

}


/* =========================================================
   FAQ
========================================================= */

function initializeFAQ() {

    const section =
        $("#faq");

    const container =
        $("#faqContainer");


    if (!section || !container) return;


    setVisibility(
        section,
        FEATURES.faq !== false
    );


    if (FEATURES.faq === false) {
        return;
    }


    const faq =
        Array.isArray(APP.faq)
            ? APP.faq
            : [];


    container.innerHTML = "";


    faq.forEach(item => {

        if (item.show === false) {
            return;
        }


        const wrapper =
            document.createElement("div");

        wrapper.className =
            "faq-item";


        wrapper.innerHTML = `

            <button
                type="button"
                class="faq-question">

                <span>
                    ${escapeHTML(item.question)}
                </span>

                <span class="faq-icon">
                    +
                </span>

            </button>

            <div class="faq-answer">

                <p>
                    ${escapeHTML(item.answer)}
                </p>

            </div>

        `;


        const question =
            wrapper.querySelector(
                ".faq-question"
            );


        question.addEventListener(
            "click",
            () => {

                wrapper.classList.toggle(
                    "active"
                );

            }
        );


        container.appendChild(wrapper);

    });

}


/* =========================================================
   QR CODE
========================================================= */

function initializeQR() {

    const section =
        $("#qr-section");

    const image =
        $("#cardQR");


    if (!section) return;


    setVisibility(
        section,
        FEATURES.qrCode !== false
    );


    if (
        FEATURES.qrCode === false
    ) {
        return;
    }


    if (
        image &&
        BUSINESS.cardQR
    ) {

        image.src =
            BUSINESS.cardQR;

    }


    const button =
        $("#downloadQR");


    if (
        button &&
        image
    ) {

        button.addEventListener(
            "click",
            function() {

                const link =
                    document.createElement("a");

                link.href =
                    image.src;

                link.download =
                    "Sandeep-ElectroFix-QR.png";

                document.body.appendChild(link);

                link.click();

                link.remove();

            }
        );

    }

}


/* =========================================================
   CONTACT
========================================================= */

function initializeContact() {

    const section =
        $(".contact");


    if (!section) return;


    setVisibility(
        section,
        FEATURES.contact !== false
    );


    if (
        FEATURES.contact === false
    ) {
        return;
    }


    const links =
        section.querySelectorAll("a");


    links.forEach(link => {

        if (
            link.href.startsWith("tel:")
        ) {

            link.href =
                `tel:${BUSINESS.phone}`;

        }


        if (
            link.href.includes("wa.me")
        ) {

            link.href =
                `https://wa.me/${BUSINESS.whatsapp}`;

        }

    });

}


/* =========================================================
   FOOTER
========================================================= */

function initializeFooter() {

    const footer =
        $("footer");


    setVisibility(
        footer,
        FEATURES.footer !== false
    );


    if (!footer) return;


    const year =
        footer.querySelector("p");


    if (year) {

        year.textContent =
            `© ${new Date().getFullYear()} ${BUSINESS.name}`;

    }

}


/* =========================================================
   MOBILE BOTTOM NAV
========================================================= */

function initializeBottomNavigation() {

    const nav =
        $(".mobile-bottom-nav");


    if (!nav) return;


    setVisibility(
        nav,
        FEATURES.bottomNavigation !== false
    );


    if (
        FEATURES.bottomNavigation === false
    ) {
        return;
    }


    const items =
        FEATURES.bottomNavItems || {};


    const links =
        nav.querySelectorAll(
            ".bottom-nav-item"
        );


    links.forEach(link => {

        const text =
            link.innerText
                .trim()
                .toLowerCase();


        let show = true;


        if (text.includes("home")) {
            show = items.home !== false;
        }

        else if (text.includes("services")) {
            show = items.services !== false;
        }

        else if (text.includes("work")) {
            show = items.work !== false;
        }

        else if (text.includes("quote")) {
            show = items.quote !== false;
        }

        else if (text.includes("call")) {
            show = items.call !== false;
        }


        setVisibility(link, show);

    });

}


/* =========================================================
   THEME
========================================================= */

function initializeTheme() {

    const button =
        $("#themeToggle");


    if (!button) return;


    if (
        FEATURES.darkMode === false
    ) {

        button.style.display =
            "none";

        return;

    }


    function updateButton() {

        const light =
            document.documentElement
                .classList.contains(
                    "saved-light-theme"
                );


        button.textContent =
            light
                ? "🌙 Dark Mode"
                : "☀️ Light Mode";

    }


    button.addEventListener(
        "click",
        function() {

            const isLight =
                document.documentElement
                    .classList.toggle(
                        "saved-light-theme"
                    );


            try {

                localStorage.setItem(
                    "sandeepTheme",
                    isLight
                        ? "light"
                        : "dark"
                );

            }

            catch (error) {

                console.log(
                    "Theme storage unavailable"
                );

            }


            updateButton();

        }
    );


    updateButton();

}


/* =========================================================
   LANGUAGE
========================================================= */

const TRANSLATIONS = {

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

        tagline: "आपके भरोसे की शक्ति",

        location: "📍 लखनऊ, उत्तर प्रदेश",

        callNow: "📞 अभी कॉल करें",

        whatsapp: "💬 WhatsApp",

        quickAccess: "त्वरित पहुँच",

        about: "हमारे बारे में",

        ourServices: "हमारी सेवाएँ",

        ourWork: "हमारा काम",

        customerReviews: "ग्राहक समीक्षा",

        visitUs: "📍 हमसे मिलें",

        requestQuote: "कोटेशन माँगें",

        faq: "अक्सर पूछे जाने वाले प्रश्न",

        scanSave: "📱 स्कैन करें और सेव करें",

        contact: "संपर्क"

    }

};


function initializeLanguage() {

    const buttons =
        $$(".language-btn");


    if (!buttons.length) {
        return;
    }


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            function() {

                const lang =
                    button.dataset.lang;


                setLanguage(lang);

            }
        );

    });


    setLanguage("en");

}


function setLanguage(lang) {

    const data =
        TRANSLATIONS[lang] ||
        TRANSLATIONS.en;


    $$("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;


            if (data[key]) {

                element.textContent =
                    data[key];

            }

        });


    $$(".language-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.lang === lang
            );

        });


    try {

        localStorage.setItem(
            "sandeepLanguage",
            lang
        );

    }

    catch (error) {}

}


/* =========================================================
   SHARE
========================================================= */

function initializeShare() {

    const shareCards =
        $$(
            '.card[href="#"]'
        );


    shareCards.forEach(card => {

        if (
            !card.innerText
                .toLowerCase()
                .includes("share")
        ) {
            return;
        }


        card.addEventListener(
            "click",
            async function(event) {

                event.preventDefault();


                const shareData = {

                    title:
                        BUSINESS.name,

                    text:
                        `Check out ${BUSINESS.name}`,

                    url:
                        BUSINESS.cardWebsite ||
                        window.location.href

                };


                try {

                    if (
                        navigator.share
                    ) {

                        await navigator.share(
                            shareData
                        );

                    }

                    else if (
                        navigator.clipboard
                    ) {

                        await navigator.clipboard.writeText(
                            shareData.url
                        );

                        showToast(
                            "Card link copied."
                        );

                    }

                    else {

                        showToast(
                            "Share is not supported."
                        );

                    }

                }

                catch (error) {

                    console.log(
                        "Share cancelled or failed",
                        error
                    );

                }

            }
        );

    });

}


/* =========================================================
   SAVE CONTACT
========================================================= */

function initializeSaveContact() {

    const cards =
        $$(".card");


    cards.forEach(card => {

        if (
            !card.innerText
                .toLowerCase()
                .includes("save contact")
        ) {
            return;
        }


        card.addEventListener(
            "click",
            function(event) {

                event.preventDefault();


                const vcard =

`BEGIN:VCARD
VERSION:3.0
FN:${BUSINESS.owner || BUSINESS.name}
ORG:${BUSINESS.name}
TEL:${BUSINESS.phone}
EMAIL:${BUSINESS.email}
ADR:;;${BUSINESS.location};;;;
URL:${BUSINESS.cardWebsite}
END:VCARD`;


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


                URL.revokeObjectURL(url);


                showToast(
                    "Contact file created."
                );

            }
        );

    });

}


/* =========================================================
   BUSINESS LINKS
========================================================= */

function updateBusinessLinks() {

    $$("a").forEach(link => {

        const text =
            link.innerText
                .trim()
                .toLowerCase();


        /* CALL */

        if (
            text.includes("call")
        ) {

            if (
                link.href.startsWith("tel:")
            ) {

                link.href =
                    `tel:${BUSINESS.phone}`;

            }

        }


        /* WHATSAPP */

        if (
            text.includes("whatsapp")
        ) {

            link.href =
                `https://wa.me/${BUSINESS.whatsapp}`;

        }


        /* WEBSITE */

        if (
            text === "website"
        ) {

            link.href =
                BUSINESS.website;

        }


        /* MAP */

        if (
            text.includes("google maps")
        ) {

            link.href =
                BUSINESS.googleMaps;

        }


        /* FACEBOOK */

        if (
            text.includes("facebook")
        ) {

            link.href =
                BUSINESS.facebook;

        }


        /* INSTAGRAM */

        if (
            text.includes("instagram")
        ) {

            link.href =
                BUSINESS.instagram;

        }


        /* YOUTUBE */

        if (
            text.includes("youtube")
        ) {

            link.href =
                BUSINESS.youtube;

        }


        /* EMAIL */

        if (
            text === "email"
        ) {

            link.href =
                `mailto:${BUSINESS.email}`;

        }

    });

}


/* =========================================================
   RIPPLE EFFECT
========================================================= */

function initializeRipple() {

    $$(
        ".btn, .card, .bottom-nav-item"
    ).forEach(element => {

        element.addEventListener(
            "click",
            function() {

                element.classList.add(
                    "ripple-active"
                );


                setTimeout(() => {

                    element.classList.remove(
                        "ripple-active"
                    );

                }, 300);

            }
        );

    });

}


/* =========================================================
   TOP BUTTON / SCROLL
========================================================= */

function initializeTopButton() {

    const button =
        $("#topButton");


    if (!button) return;


    window.addEventListener(
        "scroll",
        function() {

            button.style.display =
                window.scrollY > 500
                    ? "flex"
                    : "none";

        }
    );


    button.addEventListener(
        "click",
        function() {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

}


/* =========================================================
   ANIMATIONS
========================================================= */

function initializeAnimations() {

    const elements =
        $$(
            ".service-card, .gallery-item, .review-card, .card"
        );


    if (
        !("IntersectionObserver" in window)
    ) {
        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

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

                });

            },
            {
                threshold: 0.1
            }
        );


    elements.forEach(element => {

        observer.observe(element);

    });

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function escapeAttribute(value) {

    return escapeHTML(value);

}


/* =========================================================
   MAIN INITIALIZATION
========================================================= */

function initializeApp() {

    console.log(
        "Initializing Sandeep ElectroFix..."
    );


    /* MASTER CONTROLS */

    initializeHero();

    initializeQuickAccess();

    initializeAbout();

    loadServices();

    initializeGallery();

    initializeLightbox();

    loadReviews();

    initializeGoogleMaps();

    initializeQuoteForm();

    initializeDiscountCalculation();

    initializeDiscountSections();

    initializeFAQ();

    initializeQR();

    initializeContact();

    initializeFooter();

    initializeBottomNavigation();

    initializeTheme();

    initializeLanguage();

    initializeShare();

    initializeSaveContact();

    updateBusinessLinks();

    initializeRipple();

    initializeTopButton();

    initializeAnimations();


    console.log(
        "Sandeep ElectroFix App Initialized Successfully"
    );

}


/* =========================================================
   DOM READY
========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeApp
    );

}

else {

    initializeApp();

}
