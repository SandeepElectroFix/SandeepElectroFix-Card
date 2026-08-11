/* =========================================================
   SANDEEP ELECTROFIX
   OUR WORK
   PREMIUM JAVASCRIPT
   Version 1.0.0
========================================================= */


/* =========================================================
   SETTINGS
========================================================= */

const WHATSAPP_NUMBER =
    "919026036445";


const HOME_PAGE =
    "index.html";


/* =========================================================
   WORK DATA
========================================================= */

const workItems = [


    /* =====================================================
       HOUSE WIRING
    ===================================================== */

    {
        id: 1,

        title:
            "House Wiring",

        category:
            "House Wiring",

        type:
            "image",

        image:
            "assets/work/house-wiring-01.jpg",

        description:
            "Professional house wiring work with proper cable routing and electrical installation."
    },


    {
        id: 2,

        title:
            "Concealed Wiring",

        category:
            "House Wiring",

        type:
            "image",

        image:
            "assets/work/concealed-wiring-01.jpg",

        description:
            "Concealed electrical wiring work for clean and organized residential installation."
    },


    {
        id: 3,

        title:
            "Slab Piping",

        category:
            "House Wiring",

        type:
            "image",

        image:
            "assets/work/slab-piping-01.jpg",

        description:
            "Electrical conduit piping work inside slab for residential construction."
    },


    {
        id: 4,

        title:
            "False Ceiling Wiring",

        category:
            "House Wiring",

        type:
            "image",

        image:
            "assets/work/false-ceiling-wiring-01.jpg",

        description:
            "Electrical wiring preparation and cable routing for false ceiling installation."
    },


    /* =====================================================
       DB / PROTECTION
    ===================================================== */

    {
        id: 5,

        title:
            "Distribution Board Installation",

        category:
            "DB & Protection",

        type:
            "image",

        image:
            "assets/work/db-installation-01.jpg",

        description:
            "Distribution board installation with organized protection devices and wiring."
    },


    {
        id: 6,

        title:
            "MCB Installation",

        category:
            "DB & Protection",

        type:
            "image",

        image:
            "assets/work/mcb-installation-01.jpg",

        description:
            "MCB installation and circuit protection work."
    },


    {
        id: 7,

        title:
            "RCCB Installation",

        category:
            "DB & Protection",

        type:
            "image",

        image:
            "assets/work/rccb-installation-01.jpg",

        description:
            "RCCB installation for suitable residual-current protection."
    },


    /* =====================================================
       LIGHTING
    ===================================================== */

    {
        id: 8,

        title:
            "LED Light Installation",

        category:
            "Lighting",

        type:
            "image",

        image:
            "assets/work/led-light-01.jpg",

        description:
            "Professional LED light installation for residential and commercial spaces."
    },


    {
        id: 9,

        title:
            "Ceiling Light Installation",

        category:
            "Lighting",

        type:
            "image",

        image:
            "assets/work/ceiling-light-01.jpg",

        description:
            "Ceiling light fitting and electrical connection work."
    },


    {
        id: 10,

        title:
            "Fan Installation",

        category:
            "Lighting",

        type:
            "image",

        image:
            "assets/work/fan-installation-01.jpg",

        description:
            "Ceiling fan installation and electrical connection work."
    },


    /* =====================================================
       REPAIR
    ===================================================== */

    {
        id: 11,

        title:
            "Electrical Repair",

        category:
            "Repair",

        type:
            "image",

        image:
            "assets/work/electrical-repair-01.jpg",

        description:
            "Electrical fault finding, repair and maintenance work."
    },


    {
        id: 12,

        title:
            "Switch & Socket Installation",

        category:
            "Repair",

        type:
            "image",

        image:
            "assets/work/switch-socket-01.jpg",

        description:
            "Switch and socket replacement and installation work."
    },


    /* =====================================================
       VIDEOS
    ===================================================== */

    {
        id: 13,

        title:
            "House Wiring Work Video",

        category:
            "Videos",

        type:
            "video",

        image:
            "assets/work/video-thumb-01.jpg",

        video:
            "assets/videos/house-wiring-01.mp4",

        description:
            "Short video showing professional house wiring work."
    },


    {
        id: 14,

        title:
            "DB Installation Work Video",

        category:
            "Videos",

        type:
            "video",

        image:
            "assets/work/video-thumb-02.jpg",

        video:
            "assets/videos/db-installation-01.mp4",

        description:
            "Short video showing distribution board installation work."
    }


];


/* =========================================================
   CATEGORY DATA
========================================================= */

const workCategories = [

    {
        name:
            "All",

        icon:
            "🛠️"
    },


    {
        name:
            "House Wiring",

        icon:
            "🏠"
    },


    {
        name:
            "DB & Protection",

        icon:
            "🛡️"
    },


    {
        name:
            "Lighting",

        icon:
            "💡"
    },


    {
        name:
            "Repair",

        icon:
            "🔧"
    },


    {
        name:
            "Videos",

        icon:
            "🎥"
    }

];


/* =========================================================
   STATE
========================================================= */

let selectedWorkCategory =
    "All";


let workSearchText =
    "";


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        createWorkCategories();

        renderWork();

        setupWorkSearch();

        setupLightbox();

        setupBackButton();

        setupResetButton();

        setCurrentYear();


        console.log(
            "Sandeep ElectroFix Our Work Loaded"
        );

    }
);


/* =========================================================
   CREATE CATEGORIES
========================================================= */

function createWorkCategories() {

    const container =
        document.getElementById(
            "workCategoryContainer"
        );


    if (!container) return;


    container.innerHTML = "";


    workCategories.forEach(
        function (category) {


            const button =
                document.createElement(
                    "button"
                );


            button.type =
                "button";


            button.className =
                "work-category";


            if (
                category.name ===
                selectedWorkCategory
            ) {

                button.classList.add(
                    "active"
                );

            }


            button.innerHTML = `

                <span class="work-category-icon">
                    ${category.icon}
                </span>

                <span class="work-category-name">
                    ${category.name}
                </span>

            `;


            button.addEventListener(
                "click",
                function () {


                    selectedWorkCategory =
                        category.name;


                    document
                        .querySelectorAll(
                            ".work-category"
                        )
                        .forEach(
                            function (item) {

                                item.classList.remove(
                                    "active"
                                );

                            }
                        );


                    button.classList.add(
                        "active"
                    );


                    renderWork();

                }
            );


            container.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   FILTER WORK
========================================================= */

function getFilteredWork() {

    return workItems.filter(
        function (work) {


            const categoryMatch =

                selectedWorkCategory ===
                "All"

                ||

                work.category ===
                selectedWorkCategory;


            const search =
                workSearchText
                    .toLowerCase();


            const searchMatch =

                work.title
                    .toLowerCase()
                    .includes(search)

                ||

                work.category
                    .toLowerCase()
                    .includes(search)

                ||

                work.description
                    .toLowerCase()
                    .includes(search);


            return (
                categoryMatch &&
                searchMatch
            );

        }
    );

}


/* =========================================================
   RENDER WORK
========================================================= */

function renderWork() {

    const container =
        document.getElementById(
            "workGrid"
        );


    if (!container) return;


    const filteredWork =
        getFilteredWork();


    container.innerHTML =
        "";


    filteredWork.forEach(
        function (
            work,
            index
        ) {


            const card =
                createWorkCard(
                    work,
                    index
                );


            container.appendChild(
                card
            );

        }
    );


    updateWorkCounter(
        filteredWork.length
    );


    updateNoWork(
        filteredWork.length
    );

}


/* =========================================================
   CREATE WORK CARD
========================================================= */

function createWorkCard(
    work,
    index
) {


    const card =
        document.createElement(
            "article"
        );


    card.className =
        "work-card";


    card.style.animationDelay =
        `${index * 0.04}s`;


    let mediaHTML =
        "";


    /* =====================================================
       IMAGE
    ===================================================== */

    if (
        work.type ===
        "image"
    ) {


        mediaHTML = `

            <img
                src="${work.image}"
                alt="${work.title}"
                loading="lazy"
            >

        `;

    }


    /* =====================================================
       VIDEO
    ===================================================== */

    else {


        if (work.image) {

            mediaHTML = `

                <img
                    src="${work.image}"
                    alt="${work.title}"
                    loading="lazy"
                >

                <div class="video-thumbnail">

                    <span class="video-play">
                        ▶
                    </span>

                </div>

            `;

        }

        else {

            mediaHTML = `

                <div class="video-thumbnail">

                    <span class="video-play">
                        ▶
                    </span>

                </div>

            `;

        }

    }


    const mediaType =
        work.type ===
        "video"

        ? "🎥 Video"

        : "📸 Photo";


    card.innerHTML = `

        <div
            class="work-media"
            data-id="${work.id}"
        >

            ${mediaHTML}


            <span class="work-media-type">
                ${mediaType}
            </span>


            <span class="work-media-category">
                ${work.category}
            </span>

        </div>


        <div class="work-info">


            <h3>
                ${work.title}
            </h3>


            <p>
                ${work.description}
            </p>


            <button
                type="button"
                class="work-view-button"
                data-id="${work.id}"
            >

                ${
                    work.type === "video"
                    ? "▶️ Watch Video"
                    : "🔍 View Photo"
                }

            </button>


        </div>

    `;


    const media =
        card.querySelector(
            ".work-media"
        );


    const button =
        card.querySelector(
            ".work-view-button"
        );


    media.addEventListener(
        "click",
        function () {

            openWorkLightbox(
                work.id
            );

        }
    );


    button.addEventListener(
        "click",
        function () {

            openWorkLightbox(
                work.id
            );

        }
    );


    return card;

}


/* =========================================================
   COUNTER
========================================================= */

function updateWorkCounter(
    count
) {

    const counter =
        document.getElementById(
            "workCounter"
        );


    if (!counter) return;


    counter.textContent =
        `${count} ${count === 1 ? "Project" : "Projects"}`;

}


/* =========================================================
   NO WORK
========================================================= */

function updateNoWork(
    count
) {

    const noWork =
        document.getElementById(
            "noWork"
        );


    if (!noWork) return;


    if (count === 0) {

        noWork.classList.add(
            "show"
        );

    }

    else {

        noWork.classList.remove(
            "show"
        );

    }

}


/* =========================================================
   SEARCH
========================================================= */

function setupWorkSearch() {

    const input =
        document.getElementById(
            "workSearch"
        );


    const clear =
        document.getElementById(
            "clearWorkSearch"
        );


    if (!input) return;


    input.addEventListener(
        "input",
        function () {


            workSearchText =
                input.value.trim();


            renderWork();


            if (clear) {

                clear.classList.toggle(
                    "show",
                    workSearchText.length > 0
                );

            }

        }
    );


    if (clear) {

        clear.addEventListener(
            "click",
            function () {


                input.value =
                    "";


                workSearchText =
                    "";


                clear.classList.remove(
                    "show"
                );


                renderWork();


                input.focus();

            }
        );

    }

}


/* =========================================================
   LIGHTBOX SETUP
========================================================= */

function setupLightbox() {

    const lightbox =
        document.getElementById(
            "workLightbox"
        );


    const closeButton =
        document.getElementById(
            "lightboxClose"
        );


    const backdrop =
        document.querySelector(
            ".lightbox-backdrop"
        );


    if (!lightbox) return;


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeWorkLightbox
        );

    }


    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeWorkLightbox
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {


            if (
                event.key ===
                "Escape"
            ) {

                closeWorkLightbox();

            }

        }
    );

}


/* =========================================================
   OPEN LIGHTBOX
========================================================= */

function openWorkLightbox(
    workId
) {


    const work =
        workItems.find(
            function (item) {

                return item.id ===
                    workId;

            }
        );


    if (!work) return;


    const lightbox =
        document.getElementById(
            "workLightbox"
        );


    const image =
        document.getElementById(
            "lightboxImage"
        );


    const video =
        document.getElementById(
            "lightboxVideo"
        );


    const category =
        document.getElementById(
            "lightboxCategory"
        );


    const title =
        document.getElementById(
            "lightboxTitle"
        );


    const description =
        document.getElementById(
            "lightboxDescription"
        );


    const whatsapp =
        document.getElementById(
            "lightboxWhatsApp"
        );


    if (
        !lightbox ||
        !image ||
        !video
    ) return;


    /* =====================================================
       IMAGE
    ===================================================== */

    if (
        work.type ===
        "image"
    ) {


        image.src =
            work.image;


        image.alt =
            work.title;


        image.style.display =
            "block";


        video.pause();


        video.removeAttribute(
            "src"
        );


        video.load();


        video.style.display =
            "none";

    }


    /* =====================================================
       VIDEO
    ===================================================== */

    else {


        image.style.display =
            "none";


        image.removeAttribute(
            "src"
        );


        video.src =
            work.video;


        video.style.display =
            "block";


        video.load();

    }


    category.textContent =
        work.category;


    title.textContent =
        work.title;


    description.textContent =
        work.description;


    /* =====================================================
       WHATSAPP
    ===================================================== */

    const message =
        `Hello Sandeep ElectroFix 👋

I am interested in your work:

🔧 Work:
${work.title}

📂 Category:
${work.category}

Please share more details.

Thank you.`;


    whatsapp.href =
        `https://wa.me/${WHATSAPP_NUMBER}?text=` +
        encodeURIComponent(
            message
        );


    /* =====================================================
       SHOW
    ===================================================== */

    lightbox.classList.add(
        "show"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE LIGHTBOX
========================================================= */

function closeWorkLightbox() {

    const lightbox =
        document.getElementById(
            "workLightbox"
        );


    const video =
        document.getElementById(
            "lightboxVideo"
        );


    if (!lightbox) return;


    if (video) {

        video.pause();

        video.removeAttribute(
            "src"
        );

        video.load();

    }


    lightbox.classList.remove(
        "show"
    );


    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   RESET
========================================================= */

function setupResetButton() {

    const button =
        document.getElementById(
            "resetWork"
        );


    if (!button) return;


    button.addEventListener(
        "click",
        function () {


            selectedWorkCategory =
                "All";


            workSearchText =
                "";


            const input =
                document.getElementById(
                    "workSearch"
                );


            const clear =
                document.getElementById(
                    "clearWorkSearch"
                );


            if (input) {

                input.value =
                    "";

            }


            if (clear) {

                clear.classList.remove(
                    "show"
                );

            }


            createWorkCategories();

            renderWork();

        }
    );

}


/* =========================================================
   BACK BUTTON
========================================================= */

function setupBackButton() {

    const button =
        document.getElementById(
            "backButton"
        );


    if (!button) return;


    button.addEventListener(
        "click",
        function (event) {


            if (
                window.history.length >
                1
            ) {


                event.preventDefault();


                window.history.back();

            }

        }
    );

}


/* =========================================================
   CURRENT YEAR
========================================================= */

function setCurrentYear() {

    const year =
        document.getElementById(
            "currentYear"
        );


    if (!year) return;


    year.textContent =
        new Date().getFullYear();

}


/* =========================================================
   GLOBAL ACCESS
========================================================= */

window.SandeepOurWork = {

    workItems,

    openWorkLightbox,

    closeWorkLightbox

};


/* =========================================================
   READY
========================================================= */

console.log(
    "⚡ Sandeep ElectroFix Our Work JS Ready"
);
