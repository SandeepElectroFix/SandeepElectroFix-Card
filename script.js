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

    toggleSection("contact-form", CONFIG.contactForm);

});


