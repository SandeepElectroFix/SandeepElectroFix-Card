/* =========================================================
SANDEEP ELECTROFIX - DIGITAL CARD
PROJECT 2
script.js - CLEAN VERSION
========================================================= */

"use strict";

/* =========================================================
CONFIG SAFETY
========================================================= */

const APP = window.CONFIG || {};

const FEATURES = APP.features || {};

/* =========================================================
DOM READY
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

initializeTheme();

initializeFeatureControls();

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

        toast.remove();

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


/* Phone */

document
    .querySelectorAll('a[href^="tel:"]')
    .forEach(link => {

        link.href =
            "tel:" + phone.replace(/\s/g, "");

    });


/* WhatsApp */

document
    .querySelectorAll('a[href*="wa.me"]')
    .forEach(link => {

        link.href =
            "https://wa.me/" +
            whatsapp.replace(/\D/g, "");

    });


/* Website */

document
    .querySelectorAll(
        'a[href*="sandeepelectrofix.github.io"]'
    )
    .forEach(link => {

        if (
            link.textContent
                .toLowerCase()
                .includes("website")
        ) {

            link.href = website;

        }

    });


/* Maps */

document
    .querySelectorAll(
        'a[href*="maps.app.goo.gl"], a[href*="share.google"]'
    )
    .forEach(link => {

        link.href = maps;

        link.target = "_blank";

        link.rel = "noopener";

    });


/* Facebook */

document
    .querySelectorAll(
        'a[href*="facebook.com"]'
    )
    .forEach(link => {

        link.href = facebook;

        link.target = "_blank";

        link.rel = "noopener";

    });


/* Instagram */

document
    .querySelectorAll(
        'a[href*="instagram.com"]'
    )
    .forEach(link => {

        link.href = instagram;

        link.target = "_blank";

        link.rel = "noopener";

    });


/* YouTube */

document
    .querySelectorAll(
        'a[href*="youtube.com"]'
    )
    .forEach(link => {

        link.href = youtube;

        link.target = "_blank";

        link.rel = "noopener";

    });


/* Email */

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
        '[onclick*="shareCard"], #shareCard, .share-icon'
    );


shareButtons.forEach(button => {

    const card =
        button.closest(".card") ||
        button;


    card.addEventListener(
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

                } else if (
                    navigator.clipboard
                ) {

                    await navigator.clipboard.writeText(
                        window.location.href
                    );

                    showToast(
                        "Website link copied successfully."
                    );

                } else {

                    showToast(
                        "Copy the website link from your browser."
                    );

                }

            } catch (error) {

                if (
                    error.name !==
                    "AbortError"
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

            const vcard = [

                "BEGIN:VCARD",

                "VERSION:3.0",

                "FN:Sandeep ElectroFix",

                "ORG:Sandeep ElectroFix",

                "TEL:+919026036445",

                "EMAIL:SandeepElectroFix@gmail.com",

                "URL:https://sandeepelectrofix.github.io/SandeepElectroFix-Card/",

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


/* Use CONFIG first */

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


/* Fallback to JSON */

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

    wrapper.appendChild(title);

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
) return;


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
                    ratingValue
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


faqs.forEach(item => {

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


    const question =
        document.createElement("span");

    question.textContent =
        item.question || "";


    const icon =
        document.createElement("span");

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


    button.addEventListener(
        "click",
        () => {

            const isOpen =
                answer.classList.contains(
                    "open"
                );


            container
                .querySelectorAll(
                    ".faq-answer"
                )
                .forEach(item => {

                    item.classList.remove(
                        "open"
                    );

                });
/* =========================================================
   FAQ DATA
========================================================= */

const faqData = [

    {
        question: "What electrical services do you provide?",
        answer:
            "Sandeep ElectroFix provides house wiring, electrical installation, MCB & DB installation, false ceiling wiring, fan and light fitting, inverter wiring, electrical repair, fault finding, maintenance and other electrical services."
    },

    {
        question: "Do you provide house wiring services?",
        answer:
            "Yes. We provide new house wiring, concealed wiring, surface wiring, slab piping, conduit installation and other residential electrical wiring services."
    },

    {
        question: "Do you provide electrical repair services?",
        answer:
            "Yes. We provide electrical fault finding, switch and socket repair, MCB and DB related work, fan and light repair, wiring faults and other electrical repair services."
    },

    {
        question: "How can I request a quotation?",
        answer:
            "You can request a quotation by using the Request a Quote form on this website or contact Sandeep ElectroFix directly through WhatsApp or phone."
    },

    {
        question: "Which area do you serve?",
        answer:
            "Sandeep ElectroFix provides electrical services in Lucknow, Uttar Pradesh and nearby areas, subject to service availability."
    },

    {
        question: "How can I contact Sandeep ElectroFix?",
        answer:
            "You can contact us by calling +91 90260 36445 or by sending an enquiry through WhatsApp."
    },

    {
        question: "Do you provide installation and maintenance services?",
        answer:
            "Yes. We provide electrical installation, replacement, maintenance and troubleshooting services for residential and other suitable electrical requirements."
    },

    {
        question: "How can I book an electrician?",
        answer:
            "You can call +91 90260 36445 or send your requirement through WhatsApp to discuss your electrical work and availability."
    }

];


/* =========================================================
   SETUP FAQ
========================================================= */

function setupFAQ() {

    const container =
        document.getElementById("faqContainer");

    if (!container) {
        console.log("FAQ container not found.");
        return;
    }

    container.innerHTML = "";


    faqData.forEach(function (faq, index) {

        const item =
            document.createElement("div");

        item.className = "faq-item";


        item.innerHTML = `

            <button
                type="button"
                class="faq-question"
                aria-expanded="false"
                aria-controls="faq-answer-${index}">

                <span class="faq-question-text">
                    ${faq.question}
                </span>

                <span class="faq-icon">
                    +
                </span>

            </button>


            <div
                class="faq-answer"
                id="faq-answer-${index}">

                <p>
                    ${faq.answer}
                </p>

            </div>

        `;


        container.appendChild(item);


        const question =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");

        const icon =
            item.querySelector(".faq-icon");


        question.addEventListener(
            "click",
            function () {

                const isOpen =
                    item.classList.contains("active");


                /* CLOSE ALL */

                container
                    .querySelectorAll(".faq-item")
                    .forEach(function (otherItem) {

                        otherItem.classList.remove(
                            "active"
                        );


                        const otherQuestion =
                            otherItem.querySelector(
                                ".faq-question"
                            );


                        const otherAnswer =
                            otherItem.querySelector(
                                ".faq-answer"
                            );


                        const otherIcon =
                            otherItem.querySelector(
                                ".faq-icon"
                            );


                        if (otherQuestion) {

                            otherQuestion
                                .setAttribute(
                                    "aria-expanded",
                                    "false"
                                );

                        }


                        if (otherAnswer) {

                            otherAnswer.style.maxHeight =
                                null;

                        }


                        if (otherIcon) {

                            otherIcon.textContent =
                                "+";

                        }

                    });


                /* OPEN CLICKED ITEM */

                if (!isOpen) {

                    item.classList.add(
                        "active"
                    );


                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );


                    answer.style.maxHeight =
                        answer.scrollHeight + "px";


                    icon.textContent =
                        "−";

                }

            }
        );

    });


    console.log(
        "FAQ loaded:",
        faqData.length,
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

        if (!navigator.geolocation) {

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
WHATSAPP QUOTE
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


/* Optional Google Sheet */

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


if (
    !googleSheetURL
) return;


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


const savedTheme =
    localStorage.getItem(
        "sandeepTheme"
    );


if (
    savedTheme === "light"
) {

    document.body.classList.add(
        "light-theme"
    );

} else {

    document.body.classList.remove(
        "light-theme"
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

        } else {

            document.body.classList.remove(
                "light-theme"
            );

        }


        localStorage.setItem(
            "sandeepTheme",
            newTheme
        );


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
) return;


button.addEventListener(
    "click",
    () => {

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

    } else {

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
                nav =>
                    nav.classList.remove(
                        "active"
                    )
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
RIPPLE
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

                ripple.remove();

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
) return;


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



/* =========================================
   SANDEEP ELECTROFIX
   SERVICE WORKER
   CACHE-BUSTING VERSION 2.0
========================================= */

const CACHE_NAME = "sandeep-electrofix-card-v2";


/* =========================================
   FILES TO CACHE
========================================= */

const STATIC_ASSETS = [

    "./",

    "./index.html",
    "./style.css",
    "./config.js",
    "./script.js",

    "./assets/logo.png",
    "./assets/qr-card.png"

];


/* =========================================
   INSTALL
========================================= */

self.addEventListener("install", event => {

    console.log(
        "Sandeep ElectroFix SW: Installing..."
    );

    event.waitUntil(

        caches.open(CACHE_NAME)
            .then(cache => {

                return cache.addAll(STATIC_ASSETS);

            })
            .then(() => {

                console.log(
                    "Sandeep ElectroFix SW: Assets cached."
                );

                /*
                 * Activate new Service Worker
                 * immediately.
                 */

                return self.skipWaiting();

            })

    );

});


/* =========================================
   ACTIVATE
   DELETE OLD CACHES
========================================= */

self.addEventListener("activate", event => {

    console.log(
        "Sandeep ElectroFix SW: Activated."
    );

    event.waitUntil(

        caches.keys()
            .then(cacheNames => {

                return Promise.all(

                    cacheNames.map(cacheName => {

                        /*
                         * Delete every old
                         * Sandeep ElectroFix cache.
                         */

                        if (
                            cacheName.startsWith(
                                "sandeep-electrofix-card-"
                            )
                            &&
                            cacheName !== CACHE_NAME
                        ) {

                            console.log(
                                "Deleting old cache:",
                                cacheName
                            );

                            return caches.delete(
                                cacheName
                            );

                        }

                        return null;

                    })

                );

            })
            .then(() => {

                /*
                 * Take control of all open pages.
                 */

                return self.clients.claim();

            })

    );

});


/* =========================================
   FETCH
========================================= */

self.addEventListener("fetch", event => {

    const request = event.request;


    /*
     * Only handle GET requests.
     */

    if (request.method !== "GET") {

        return;

    }


    /*
     * Ignore external websites.
     */

    const requestURL =
        new URL(request.url);

    if (
        requestURL.origin !==
        self.location.origin
    ) {

        return;

    }


    /*
     * NETWORK FIRST
     *
     * This is important for your website.
     *
     * Browser tries to get the latest
     * version from GitHub Pages first.
     *
     * If internet is unavailable,
     * cached version is used.
     */

    event.respondWith(

        fetch(request)
            .then(response => {

                /*
                 * Save successful response
                 * into current cache.
                 */

                if (
                    response &&
                    response.status === 200
                ) {

                    const responseClone =
                        response.clone();

                    caches.open(CACHE_NAME)
                        .then(cache => {

                            cache.put(
                                request,
                                responseClone
                            );

                        });

                }


                return response;

            })

            .catch(() => {

                /*
                 * Internet unavailable.
                 * Use cached version.
                 */

                return caches.match(request);

            })

    );

});


/* =========================================
   MESSAGE
   FORCE UPDATE
========================================= */

self.addEventListener("message", event => {

    if (
        event.data &&
        event.data.type === "SKIP_WAITING"
    ) {

        self.skipWaiting();

    }

});
/* =========================================
   LANGUAGE SYSTEM
   SANDEEP ELECTROFIX
========================================= */

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


/* =========================================
   CHANGE LANGUAGE
========================================= */

function setLanguage(language) {

    const selectedLanguage =
        translations[language]
            ? language
            : "en";


    /*
     * Change all elements
     * having data-i18n
     */

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (
                translations[selectedLanguage][key]
            ) {

                element.textContent =
                    translations[selectedLanguage][key];

            }

        });


    /*
     * Save selected language
     */

    localStorage.setItem(
        "sandeepLanguage",
        selectedLanguage
    );


    /*
     * Update buttons
     */

    document
        .querySelectorAll(".language-btn")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.lang ===
                selectedLanguage
            );

        });


    /*
     * HTML language attribute
     */

    document.documentElement.lang =
        selectedLanguage === "hi"
            ? "hi"
            : "en";

}


/* =========================================
   LANGUAGE BUTTONS
========================================= */

document
    .querySelectorAll(".language-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                setLanguage(
                    button.dataset.lang
                );

            }
        );

    });


/* =========================================
   LOAD SAVED LANGUAGE
========================================= */

(function () {

    const savedLanguage =
        localStorage.getItem(
            "sandeepLanguage"
        ) || "en";

    setLanguage(savedLanguage);

})();
