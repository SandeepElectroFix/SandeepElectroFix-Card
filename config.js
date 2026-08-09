/* =========================================
SANDEEP ELECTROFIX
PROJECT 2 - DIGITAL CARD
CONFIGURATION
========================================= */

const CONFIG = {

/* =====================================
   BUSINESS INFORMATION
====================================== */

businessName: "Sandeep ElectroFix",

ownerName: "Sandeep Verma",

tagline: "Powering Your Trust",

phone: "+919026036445",

whatsapp: "919026036445",

email: "SandeepElectroFix@gmail.com",

location: "Lucknow, Uttar Pradesh",

website:
    "https://sandeepelectrofix.github.io/",


/* =====================================
   SOCIAL MEDIA
====================================== */

facebook:
    "https://www.facebook.com/SandeepElectroFix",

instagram:
    "https://www.instagram.com/sandeep_electrofix",

youtube:
    "https://youtube.com/@sandeepelectrofix",


/* =====================================
   GOOGLE MAPS
====================================== */

googleMaps:
    "https://maps.app.goo.gl/XYZnm7sFAVRT68Vs7",


/* =====================================
   LOGO
====================================== */

logo:
    "assets/logo.png",


/* =====================================
   DIGITAL CARD QR
====================================== */

cardQR:
    "assets/qr-card.png",


/* =====================================
   FEATURE CONTROLS
====================================== */

features: {

    gallery: true,

    reviews: false,

    googleMaps: true,

    youtube: true,

    faq: true,

    offers: true,

    contactForm: true,

    visitorCounter: false,

    darkMode: true,

    qrCode: true

},


/* =====================================
   SERVICES
====================================== */

services: [

    {
        icon: "🏠",
        title: "House Wiring",
        description:
            "Safe and professional house wiring for new and existing homes."
    },

    {
        icon: "💡",
        title: "Fan & Light Fitting",
        description:
            "Professional installation of fans, lights and electrical fittings."
    },

    {
        icon: "⚡",
        title: "MCB & DB Installation",
        description:
            "MCB, DB and electrical protection system installation."
    },

    {
        icon: "🔌",
        title: "False Ceiling Wiring",
        description:
            "Neat and safe wiring for false ceiling lights and electrical points."
    },

    {
        icon: "🔋",
        title: "Inverter Wiring",
        description:
            "Professional inverter and backup power wiring solutions."
    },

    {
        icon: "🛠️",
        title: "Electrical Repair",
        description:
            "Electrical repair and maintenance for homes and shops."
    },

    {
        icon: "🔎",
        title: "Fault Finding",
        description:
            "Electrical fault detection and troubleshooting."
    },

    {
        icon: "🏢",
        title: "Commercial Wiring",
        description:
            "Electrical wiring and installation for shops and commercial spaces."
    }

],


/* =====================================
   GALLERY
====================================== */

gallery: [

    {
        image: "assets/work1.jpg",
        title: "Electrical Work"
    },

    {
        image: "assets/work2.jpg",
        title: "House Wiring"
    },

    {
        image: "assets/work3.jpg",
        title: "Electrical Installation"
    },

    {
        image: "assets/work4.jpg",
        title: "Professional Electrical Work"
    }

],


/* =====================================
   CUSTOMER REVIEWS
====================================== */

reviews: [

    {
        name: "Customer",
        rating: 5,
        text:
            "Professional electrical service with good workmanship."
    },

    {
        name: "Customer",
        rating: 5,
        text:
            "Good quality electrical work and proper guidance."
    },

    {
        name: "Customer",
        rating: 5,
        text:
            "Reliable electrician service in Lucknow."
    }

],


/* =====================================
   FAQ
====================================== */

faq: [

    {
        question:
            "What electrical services do you provide?",

        answer:
            "We provide house wiring, false ceiling wiring, MCB & DB installation, fan and light fitting, inverter wiring, electrical repair, fault finding and maintenance services."
    },

    {
        question:
            "Do you provide house wiring services?",

        answer:
            "Yes. We provide professional electrical wiring services for new construction, renovation and existing homes."
    },

    {
        question:
            "Do you provide electrical repair services?",

        answer:
            "Yes. We provide electrical fault finding, repair and maintenance services."
    },

    {
        question:
            "How can I request a quotation?",

        answer:
            "Use the Request a Quote form on this digital card and send your enquiry directly through WhatsApp."
    },

    {
        question:
            "Which area do you serve?",

        answer:
            "Sandeep ElectroFix provides electrical services in Lucknow, Uttar Pradesh."
    }

],


/* =====================================
   WHATSAPP QUOTE SETTINGS
====================================== */

quote: {

    whatsappNumber:
        "919026036445",

    defaultMessage:
        "Hello Sandeep ElectroFix, I would like to enquire about electrical service."

}

};

/* =========================================
EXPORT / GLOBAL ACCESS
========================================= */

window.CONFIG = CONFIG;
