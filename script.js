console.log("Sandeep ElectroFix Script Loaded");
console.log("CONFIG:", CONFIG);


/* ==========================================
   HELPER
========================================== */

function showToast(message) {

    const oldToast = document.querySelector(".toast");

    if (oldToast) oldToast.remove();

    const toast = document.createElement("div");

    toast.className = "toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 2500);
}


/* ==========================================
   FEATURE TOGGLE
========================================== */

function toggleSection(id, enabled) {

    const section = document.getElementById(id);

    if (!section) return;

    section.style.display = enabled ? "" : "none";
}


/* ==========================================
   SHARE CARD
========================================== */

const shareButton = document.getElementById("shareCard");

if (shareButton) {

    shareButton.addEventListener("click", async function (e) {

        e.preventDefault();

        const shareData = {
            title: "Sandeep ElectroFix",
            text: "Professional Electrical Services in Lucknow",
            url: window.location.href
        };

        try {

            if (navigator.share) {

                await navigator.share(shareData);

            } else {

                await navigator.clipboard.writeText(
                    window.location.href
                );

                showToast("Website link copied successfully.");

            }

        } catch (error) {

            console.log("Share cancelled/error:", error);

        }

    });

}


/* ==========================================
   SAVE CONTACT
========================================== */

const saveButton = document.getElementById("saveContact");

if (saveButton) {

    saveButton.addEventListener("click", function (e) {

        e.preventDefault();

        const vcard = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            "FN:Sandeep ElectroFix",
            "ORG:Sandeep ElectroFix",
            "TEL:+919026036445",
            "EMAIL:SandeepElectroFix@gmail.com",
            "URL:https://sandeepelectrofix.github.io/SandeepElectroFix-Card/",
            "END:VCARD"
        ].join("\n");

        const blob = new Blob(
            [vcard],
            { type: "text/vcard;charset=utf-8" }
        );

        const link = document.createElement("a");

        link.href = URL.createObjectURL(blob);
        link.download = "SandeepElectroFix.vcf";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        URL.revokeObjectURL(link.href);

        showToast("Contact file created.");

    });

}


/* ==========================================
   PAGE LOADED
========================================== */

window.addEventListener("load", function () {

    document.body.classList.add("loaded");

});


/* ==========================================
   RIPPLE EFFECT
========================================== */

document.addEventListener("click", function (e) {

    const target = e.target.closest(".btn, .card");

    if (!target) return;

    const ripple = document.createElement("span");

    ripple.className = "ripple";

    const rect = target.getBoundingClientRect();

    ripple.style.left =
        (e.clientX - rect.left) + "px";

    ripple.style.top =
        (e.clientY - rect.top) + "px";

    target.appendChild(ripple);

    setTimeout(() => {

        ripple.remove();

    }, 600);

});


/* ==========================================
   SCROLL TO TOP
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";
topButton.id = "topButton";
topButton.setAttribute("aria-label", "Back to top");

document.body.appendChild(topButton);

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================================
   BUTTON FEEDBACK
========================================== */

document.addEventListener("click", function (e) {

    const button = e.target.closest(".btn, .card");

    if (!button) return;

    if (
        button.id !== "shareCard" &&
        button.id !== "saveContact"
    ) {

        showToast("Opening...");

    }

});


/* ==========================================
   FEATURE CONFIG
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    toggleSection("gallery", CONFIG.gallery);
    toggleSection("reviews", CONFIG.reviews);
    toggleSection("google-maps", CONFIG.googleMaps);
    toggleSection("youtube", CONFIG.youtube);
    toggleSection("faq", CONFIG.faq);
    toggleSection("offers", CONFIG.offers);
    toggleSection("contact-form", CONFIG.contactForm);

});


/* ==========================================
   LOAD PROFILE
========================================== */

fetch("data/profile.json")

.then(response => {

    if (!response.ok) {
        throw new Error("Profile file not found");
    }

    return response.json();

})

.then(profile => {

    const name =
        document.querySelector(".hero h1");

    const tagline =
        document.querySelector(".tagline");

    const location =
        document.querySelector(".location");


    if (name && profile.businessName) {

        name.textContent =
            profile.businessName;

    }


    if (tagline && profile.tagline) {

        tagline.textContent =
            profile.tagline;

    }


    if (location && profile.location) {

        location.textContent =
            "📍 " + profile.location;

    }


    /* Phone */

    if (profile.phone) {

        document
            .querySelectorAll('a[href^="tel:"]')
            .forEach(link => {

                link.href =
                    "tel:" + profile.phone;

            });

    }


    /* WhatsApp */

    if (profile.whatsapp) {

        document
            .querySelectorAll('a[href*="wa.me"]')
            .forEach(link => {

                link.href =
                    "https://wa.me/" +
                    profile.whatsapp;

            });

    }

})

.catch(error => {

    console.log(
        "Profile loading error:",
        error
    );

});


/* ==========================================
   LOAD SERVICES
========================================== */

fetch("data/services.json")

.then(response => {

    if (!response.ok) {
        throw new Error("Services file not found");
    }

    return response.json();

})

.then(services => {

    const container =
        document.getElementById("serviceContainer");

    if (!container) return;

    container.innerHTML = "";

    services.forEach(service => {

        container.innerHTML += `

            <div class="service-card">

                <div class="service-icon">
                    ${service.icon || "⚡"}
                </div>

                <div>
                    ${service.name || ""}
                </div>

            </div>

        `;

    });

})

.catch(error => {

    console.log(
        "Services loading error:",
        error
    );

});


/* ==========================================
   LOAD GALLERY
========================================== */

fetch("data/gallery.json")

.then(response => {

    if (!response.ok) {
        throw new Error("Gallery file not found");
    }

    return response.json();

})

.then(gallery => {

    const container =
        document.getElementById("galleryContainer");

    if (!container) return;

    container.innerHTML = "";

    gallery.forEach(item => {

        container.innerHTML += `

            <div class="gallery-item">

                <img
                    src="${item.image}"
                    alt="${item.title || "Electrical Work"}"
                    loading="lazy"
                >

                <p>${item.title || ""}</p>

            </div>

        `;

    });

    setupGalleryLightbox();

})

.catch(error => {

    console.log(
        "Gallery loading error:",
        error
    );

});


/* ==========================================
   GALLERY LIGHTBOX
========================================== */

function setupGalleryLightbox() {

    const lightbox =
        document.getElementById("lightbox");

    const lightboxImage =
        document.getElementById("lightboxImage");

    const closeLightbox =
        document.getElementById("closeLightbox");

    if (!lightbox || !lightboxImage) return;


    document
        .querySelectorAll(".gallery-grid img")
        .forEach(img => {

            img.addEventListener("click", function () {

                lightboxImage.src =
                    this.src;

                lightboxImage.alt =
                    this.alt;

                lightbox.style.display =
                    "flex";

            });

        });


    if (closeLightbox) {

        closeLightbox.onclick =
            function () {

                lightbox.style.display =
                    "none";

            };

    }


    lightbox.onclick =
        function (e) {

            if (e.target === lightbox) {

                lightbox.style.display =
                    "none";

            }

        };


    document.addEventListener(
        "keydown",
        function (e) {

            if (e.key === "Escape") {

                lightbox.style.display =
                    "none";

            }

        }
    );

}


/* ==========================================
   LOAD REVIEWS
========================================== */

fetch("data/reviews.json")

.then(response => {

    if (!response.ok) {
        throw new Error("Reviews file not found");
    }

    return response.json();

})

.then(reviews => {

    const container =
        document.getElementById("reviewContainer");

    if (!container) return;

    container.innerHTML = "";

    reviews.forEach(item => {

        container.innerHTML += `

            <div class="review-card">

                <div class="rating">
                    ${item.rating || "★★★★★"}
                </div>

                <p>
                    ${item.review || ""}
                </p>

                <h4>
                    - ${item.name || "Customer"}
                </h4>

                <small>
                    ${item.date || ""}
                </small>

            </div>

        `;

    });

})

.catch(error => {

    console.log(
        "Reviews loading error:",
        error
    );

});


/* ==========================================
   REQUEST QUOTE - LOCATION
========================================== */

const locationInput =
    document.getElementById("customerLocation");

const locationStatus =
    document.getElementById("locationStatus");

const getLocationBtn =
    document.getElementById("getLocationBtn");


if (getLocationBtn) {

    getLocationBtn.addEventListener(
        "click",
        function () {

            if (!navigator.geolocation) {

                if (locationStatus) {

                    locationStatus.textContent =
                        "❌ Location is not supported by your browser.";

                }

                return;

            }


            if (locationStatus) {

                locationStatus.textContent =
                    "📍 Getting your location...";

            }


            getLocationBtn.disabled = true;

            getLocationBtn.textContent =
                "📍 Getting Location...";


            navigator.geolocation.getCurrentPosition(

                function (position) {

                    const latitude =
                        position.coords.latitude;

                    const longitude =
                        position.coords.longitude;


                    const mapsURL =
                        "https://www.google.com/maps?q=" +
                        latitude +
                        "," +
                        longitude;


                    if (locationInput) {

                        locationInput.value =
                            mapsURL;

                    }


                    if (locationStatus) {

                        locationStatus.textContent =
                            "✅ Location captured successfully.";

                    }


                    getLocationBtn.disabled = false;

                    getLocationBtn.textContent =
                        "📍 Location Captured";

                },


                function (error) {

                    console.log(
                        "Location error:",
                        error
                    );


                    if (locationStatus) {

                        locationStatus.textContent =
                            "❌ Location permission denied. Please paste your Google Maps link.";

                    }


                    getLocationBtn.disabled = false;

                    getLocationBtn.textContent =
                        "📍 Try Again";

                },

                {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }

            );

        }
    );

}


/* ==========================================
   REQUEST QUOTE
   GOOGLE SHEET + WHATSAPP
========================================== */

const sendQuoteBtn =
    document.getElementById("sendQuoteBtn");


if (sendQuoteBtn) {

    sendQuoteBtn.addEventListener(
        "click",
        sendQuote
    );

}


function sendQuote() {

    const name =
        document
            .getElementById("customerName")
            ?.value.trim() || "";

    const phone =
        document
            .getElementById("customerPhone")
            ?.value.trim() || "";

    const service =
        document
            .getElementById("serviceName")
            ?.value.trim() || "";

    const message =
        document
            .getElementById("customerMessage")
            ?.value.trim() || "";

    const location =
        document
            .getElementById("customerLocation")
            ?.value.trim() || "";


    /* Validation */

    if (!name) {

        alert("Please enter your name.");
        return;

    }


    if (!phone) {

        alert("Please enter your mobile number.");
        return;

    }


    if (!service) {

        alert("Please select a service.");
        return;

    }


    if (!location) {

        alert("Please share your service location.");
        return;

    }


    /* Google Sheet data */

    const enquiryData = {

        name: name,
        phone: phone,
        service: service,
        message: message,
        location: location

    };


    const googleSheetURL =
        "https://script.google.com/macros/s/AKfycbxShXAXNiKStkhDZLywJ4YeRVUJ2Ljv44qOjsofiVP27vArOk2OhiN1i4BXKwv21joF/exec";


    fetch(googleSheetURL, {

        method: "POST",

        mode: "no-cors",

        headers: {
            "Content-Type":
                "text/plain;charset=utf-8"
        },

        body: JSON.stringify(enquiryData)

    })

    .then(() => {

        console.log(
            "Enquiry sent to Google Sheet"
        );

    })

    .catch(error => {

        console.log(
            "Google Sheet error:",
            error
        );

    });


    /* WhatsApp */

    const whatsappMessage =

`🔔 *NEW SERVICE ENQUIRY*

👤 *Name:* ${name}

📱 *Mobile:* ${phone}

⚡ *Service:* ${service}

📝 *Message:*
${message || "No message provided"}

📍 *Service Location:*
${location}

━━━━━━━━━━━━━━

⚡ *Sandeep ElectroFix*
Professional Electrical Services
📍 Lucknow, Uttar Pradesh`;


    const whatsappNumber =
        "919026036445";


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(
            whatsappMessage
        );


    showToast(
        "Enquiry prepared. Opening WhatsApp..."
    );


    setTimeout(() => {

        window.open(
            whatsappURL,
            "_blank"
        );

    }, 300);

}


/* ==========================================
   LOAD FAQ
========================================== */

fetch("data/faq.json")

.then(response => {

    if (!response.ok) {
        throw new Error("FAQ file not found");
    }

    return response.json();

})

.then(faqs => {

    const container =
        document.getElementById("faqContainer");

    if (!container) return;

    container.innerHTML = "";

    faqs.forEach(item => {

        container.innerHTML += `

            <div class="faq-item">

                <button
                    class="faq-question"
                    type="button">

                    ${item.question || ""}

                    <span>+</span>

                </button>

                <div class="faq-answer">

                    <p>
                        ${item.answer || ""}
                    </p>

                </div>

            </div>

        `;

    });


    container
        .querySelectorAll(".faq-question")
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    const answer =
                        this.nextElementSibling;

                    const isOpen =
                        answer.classList.contains("open");


                    container
                        .querySelectorAll(".faq-answer")
                        .forEach(item => {

                            item.classList.remove("open");

                        });


                    container
                        .querySelectorAll(
                            ".faq-question span"
                        )
                        .forEach(icon => {

                            icon.textContent = "+";

                        });


                    if (!isOpen) {

                        answer.classList.add("open");

                        this
                            .querySelector("span")
                            .textContent = "−";

                    }

                }
            );

        });

})

.catch(error => {

    console.log(
        "FAQ loading error:",
        error
    );

});


/* ==========================================
   THEME TOGGLE
========================================== */

const themeToggle =
    document.getElementById("themeToggle");


function applyTheme(theme) {

    if (theme === "light") {

        document.body.classList.add(
            "light-theme"
        );

    } else {

        document.body.classList.remove(
            "light-theme"
        );

    }


    updateThemeButton();

}


function updateThemeButton() {

    if (!themeToggle) return;

    const isLight =
        document.body.classList.contains(
            "light-theme"
        );


    themeToggle.textContent =
        isLight
            ? "🌙 Dark Mode"
            : "☀️ Light Mode";

}


const savedTheme =
    localStorage.getItem(
        "sandeepTheme"
    );


if (CONFIG.darkMode !== false) {

    applyTheme(
        savedTheme === "light"
            ? "light"
            : "dark"
    );

} else {

    applyTheme("dark");

}


if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        function () {

            const isLight =
                document.body.classList.contains(
                    "light-theme"
                );


            const newTheme =
                isLight
                    ? "dark"
                    : "light";

           localStorage.setItem(
                "sandeepTheme",
                newTheme
            );


            applyTheme(newTheme);

        }
    );

}


/* ==========================================
   CURRENT YEAR
========================================== */

const footer =
    document.querySelector("footer p");


if (footer) {

    footer.textContent =
        `© ${new Date().getFullYear()} Sandeep ElectroFix`;

}


/* ==========================================
   MOBILE BOTTOM NAVIGATION
========================================== */

const bottomNavItems =
    document.querySelectorAll(
        ".bottom-nav-item"
    );


const navSections = [
    "top",
    "services",
    "gallery",
    "contact-form"
];


function updateActiveNav() {

    let currentSection = "top";


    navSections.forEach(id => {

        const section =
            document.getElementById(id);

        if (!section) return;


        const rect =
            section.getBoundingClientRect();


        if (rect.top <= 180) {

            currentSection = id;

        }

    });


    bottomNavItems.forEach(item => {

        item.classList.remove("active");


        const href =
            item.getAttribute("href");


        if (
            href === "#" +
            currentSection
        ) {

            item.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav
);


window.addEventListener(
    "load",
    updateActiveNav
);


bottomNavItems.forEach(item => {

    item.addEventListener(
        "click",
        function () {

            bottomNavItems.forEach(nav => {

                nav.classList.remove(
                    "active"
                );

            });


            this.classList.add("active");

        }
    );

});


/* ==========================================
   QR DOWNLOAD
========================================== */

const downloadQR =
    document.getElementById("downloadQR");

const cardQR =
    document.getElementById("cardQR");


if (downloadQR && cardQR) {

    downloadQR.addEventListener(
        "click",
        function () {

            const link =
                document.createElement("a");

            link.href =
                cardQR.src;

            link.download =
                "Sandeep-ElectroFix-QR.png";

            document.body.appendChild(link);

            link.click();

            document.body.removeChild(link);

            showToast(
                "QR download started."
            );

        }
    );

}


/* ==========================================
   PWA INSTALL
========================================== */

let deferredPrompt = null;


window.addEventListener(
    "beforeinstallprompt",
    function (e) {

        e.preventDefault();

        deferredPrompt = e;

        showToast(
            "📱 App can be installed"
        );

    }
);


async function installApp() {

    if (!deferredPrompt) return;

    deferredPrompt.prompt();

    await deferredPrompt.userChoice;

    deferredPrompt = null;

}


/* ==========================================
   CARD ENTRANCE ANIMATION
========================================== */

if ("IntersectionObserver" in window) {

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

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    document
        .querySelectorAll(
            ".card, .service-card, .gallery-item"
        )
        .forEach(item => {

            observer.observe(item);

        });

}


/* ==========================================
   SERVICE WORKER
========================================== */

console.log(
    "Sandeep ElectroFix Card v2.0 Loaded"
);


       
