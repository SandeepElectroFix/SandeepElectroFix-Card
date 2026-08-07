console.log("Script Loaded");
console.log(CONFIG);








/* ==========================================
   SANDEEP ELECTROFIX CARD
   Version 1.0
========================================== */

/* Share Button */

const shareButton = document.getElementById("shareCard");

if (shareButton) {

shareButton.addEventListener("click", async (e) => {

e.preventDefault();

const shareData = {

title: "Sandeep ElectroFix",

text: "Professional Electrical Services in Lucknow",

url: window.location.href

};

if (navigator.share) {

try {

await navigator.share(shareData);

} catch (err) {

console.log(err);

}

} else {

navigator.clipboard.writeText(window.location.href);

alert("Website link copied successfully.");

}

});

}

/* Save Contact */

const saveButton = document.getElementById("saveContact");

if (saveButton) {

saveButton.addEventListener("click", function (e) {

e.preventDefault();

const vcard = `

BEGIN:VCARD
VERSION:3.0
FN:Sandeep ElectroFix
ORG:Sandeep ElectroFix
TEL:+919026036445
EMAIL:SandeepElectroFix@gmail.com
URL:https://sandeepelectrofix.github.io
END:VCARD

`;

const blob = new Blob([vcard], {

type: "text/vcard"

});

const link = document.createElement("a");

link.href = URL.createObjectURL(blob);

link.download = "SandeepElectroFix.vcf";

document.body.appendChild(link);

link.click();

document.body.removeChild(link);

});

}

/* Page Loaded */

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});

/* ==========================================
   TOAST NOTIFICATION
========================================== */

function showToast(message) {

const oldToast = document.querySelector(".toast");

if (oldToast) oldToast.remove();

const toast = document.createElement("div");

toast.className = "toast";

toast.innerText = message;

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
   RIPPLE EFFECT
========================================== */

document.querySelectorAll(".btn,.card").forEach(item => {

item.addEventListener("click", function(e){

const ripple = document.createElement("span");

ripple.className = "ripple";

const rect = this.getBoundingClientRect();

ripple.style.left = (e.clientX - rect.left) + "px";
ripple.style.top = (e.clientY - rect.top) + "px";

this.appendChild(ripple);

setTimeout(() => {

ripple.remove();

},600);

});

});

/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.classList.add("show");

}else{

topButton.classList.remove("show");

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* ==========================================
   BUTTON FEEDBACK
========================================== */

document.querySelectorAll(".btn,.card").forEach(button=>{

button.addEventListener("click",()=>{

if(button.id!=="shareCard" && button.id!=="saveContact"){

showToast("Opening...");

}

});

});

/* ==========================================
   INSTALL APP (PWA)
========================================== */

let deferredPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {

e.preventDefault();

deferredPrompt = e;

showToast("📱 App can be installed");

});

async function installApp(){

if(!deferredPrompt) return;

deferredPrompt.prompt();

await deferredPrompt.userChoice;

deferredPrompt=null;

}

/* ==========================================
   CARD ENTRANCE ANIMATION
========================================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},{
threshold:.15
});

document.querySelectorAll(".card,.service-card").forEach(item=>{

observer.observe(item);

});

/* ==========================================
   CURRENT YEAR
========================================== */

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Sandeep ElectroFix`;

}

/* ==========================================
   PREVENT DOUBLE TAP ZOOM
========================================== */

let lastTouchEnd=0;

document.addEventListener("touchend",function(event){

const now=(new Date()).getTime();

if(now-lastTouchEnd<=300){

event.preventDefault();

}

lastTouchEnd=now;

},{passive:false});

/* ==========================================
   VERSION INFO
========================================== */

console.log("Sandeep ElectroFix Card v1.0 Loaded");




/* ==========================================
   FEATURE TOGGLE SYSTEM
========================================== */

function toggleSection(id, enabled) {

    const section = document.getElementById(id);

    if (!section) return;

    section.style.display = enabled ? "" : "none";
}

window.addEventListener("DOMContentLoaded", () => {

    toggleSection("gallery", CONFIG.gallery);

    toggleSection("reviews", CONFIG.reviews);

    toggleSection("google-maps", CONFIG.googleMaps);

    toggleSection("youtube", CONFIG.youtube);

    toggleSection("faq", CONFIG.faq);

    toggleSection("offers", CONFIG.offers);
console.log("Contact Form:", CONFIG.contactForm);
    toggleSection("contact-form", CONFIG.contactForm);

});


/* Gallery */

const images=document.querySelectorAll(".gallery-grid img");

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightboxImage");

const closeLightbox=document.getElementById("closeLightbox");

images.forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImage.src=img.src;

}

});

if(closeLightbox){

closeLightbox.onclick=()=>{

lightbox.style.display="none";

}

}

if(lightbox){

lightbox.onclick=(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

}

}
/* ==========================================
   LOAD PROFILE DATA
========================================== */

fetch("data/profile.json")
.then(response => response.json())
.then(profile => {

    const name = document.querySelector(".hero h1");
    const tagline = document.querySelector(".tagline");
    const location = document.querySelector(".location");

    if(name){
        name.innerHTML = profile.businessName;
    }

    if(tagline){
        tagline.innerHTML = profile.tagline;
    }

    if(location){
        location.innerHTML = "📍 " + profile.location;
    }


    // Update Title
    document.title = profile.businessName + " | Digital Card";


    // Phone Links
    document.querySelectorAll(
    'a[href^="tel:"]'
    ).forEach(btn=>{

        btn.href="tel:"+profile.phone;

    });


    // WhatsApp Links
    document.querySelectorAll(
    'a[href*="wa.me"]'
    ).forEach(btn=>{

        btn.href=
        "https://wa.me/"+profile.whatsapp;

    });


})
.catch(error=>{
console.log("Profile loading error",error);
});
/* ==========================================
   LOAD SERVICES
========================================== */

fetch("data/services.json")

.then(response => response.json())

.then(services => {


const container =
document.getElementById("serviceContainer");


if(container){


services.forEach(service=>{


container.innerHTML += `

<div class="service-card">

<div class="service-icon">
${service.icon}
</div>

${service.name}

</div>

`;


});


}


})

.catch(error=>{

console.log("Services loading error",error);

});
/* ==========================================
   LOAD GALLERY
========================================== */

fetch("data/gallery.json")

.then(response => response.json())

.then(gallery => {


const container =
document.getElementById("galleryContainer");


if(container){


gallery.forEach(item=>{


container.innerHTML += `

<div class="gallery-item">

<img src="${item.image}" 
alt="${item.title}">

<p>${item.title}</p>

</div>

`;


});


}


})

.catch(error=>{

console.log("Gallery loading error",error);

});
/* ==========================================
   LOAD REVIEWS
========================================== */

fetch("data/reviews.json")

.then(response => response.json())

.then(reviews => {


const container =
document.getElementById("reviewContainer");


if(container){


reviews.forEach(item=>{


container.innerHTML += `

<div class="review-card">

<div class="rating">
${item.rating}
</div>

<p>
${item.review}
</p>

<h4>
- ${item.name}
</h4>

<small>
${item.date}
</small>

</div>

`;


});


}


})

.catch(error=>{

console.log("Reviews loading error",error);

});
/* ==========================================
   WHATSAPP QUOTE
========================================== */

function sendWhatsApp(){

let name =
document.getElementById("customerName").value;


let phone =
document.getElementById("customerPhone").value;


let service =
document.getElementById("serviceName").value;


let message =
document.getElementById("customerMessage").value;


let text =

`New Enquiry
Name: ${name}
Mobile: ${phone}
Service: ${service}
Message: ${message}`;


let whatsapp =
"919026036445";


let url =
"https://wa.me/"+whatsapp+
"?text="+encodeURIComponent(text);


window.open(url,"_blank");


}
/* ==========================================
   LOAD FAQ
========================================== */

fetch("data/faq.json")

.then(response => response.json())

.then(faqs => {

    const container =
        document.getElementById("faqContainer");

    if (!container) return;

    faqs.forEach(item => {

        container.innerHTML += `

        <div class="faq-item">

            <button class="faq-question">
                ${item.question}
                <span>+</span>
            </button>

            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>

        </div>

        `;

    });

    document
    .querySelectorAll(".faq-question")
    .forEach(button => {

        button.addEventListener("click", () => {

            const answer =
                button.nextElementSibling;

            const isOpen =
                answer.classList.contains("open");

            document
            .querySelectorAll(".faq-answer")
            .forEach(item => {
                item.classList.remove("open");
            });

            document
            .querySelectorAll(".faq-question span")
            .forEach(icon => {
                icon.textContent = "+";
            });

            if (!isOpen) {

                answer.classList.add("open");

                button
                .querySelector("span")
                .textContent = "−";

            }

        });

    });

})

.catch(error => {

    console.log("FAQ loading error:", error);

});
/* ==========================================
   THEME TOGGLE + SAVE USER PREFERENCE
========================================== */

const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {

    if (theme === "light") {

        document.body.classList.add("light-theme");

    } else {

        document.body.classList.remove("light-theme");

    }

    updateThemeButton();
}


function updateThemeButton() {

    if (!themeToggle) return;

    const isLight =
        document.body.classList.contains("light-theme");

    themeToggle.innerHTML =
        isLight ? "🌙 Dark Mode" : "☀️ Light Mode";
}


/* ==========================================
   LOAD SAVED THEME
========================================== */

const savedTheme =
    localStorage.getItem("sandeepTheme");


if (CONFIG.darkMode !== false) {

    if (savedTheme === "light") {

        applyTheme("light");

    } else {

        applyTheme("dark");

    }

} else {

    applyTheme("dark");

}


/* ==========================================
   CHANGE THEME
========================================== */

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const isLight =
            document.body.classList.contains("light-theme");

        const newTheme =
            isLight ? "dark" : "light";


        /* Save user's preference */

        localStorage.setItem(
            "sandeepTheme",
            newTheme
        );


        /* Apply theme */

        applyTheme(newTheme);

    });

}
/* ==========================================
   MOBILE NAV ACTIVE SECTION
========================================== */

const bottomNavItems =
    document.querySelectorAll(".bottom-nav-item");

const navSections = [
    "top",
    "services",
    "gallery",
    "contact-form"
];

function updateActiveNav() {

    let currentSection = "top";

    navSections.forEach(id => {

        const section = document.getElementById(id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
            currentSection = id;
        }

    });

    bottomNavItems.forEach(item => {

        item.classList.remove("active");

        const href = item.getAttribute("href");

        if (href === "#" + currentSection) {
            item.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);

window.addEventListener("load", updateActiveNav);



/* ==========================================
   MOBILE NAV CLICK
========================================== */

document.querySelectorAll(".bottom-nav-item").forEach(item => {

    item.addEventListener("click", function () {

        document.querySelectorAll(".bottom-nav-item")
        .forEach(nav => nav.classList.remove("active"));

        this.classList.add("active");

    });

});
