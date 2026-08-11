/* =========================================================
   SANDEEP ELECTROFIX
   MATERIAL CATALOGUE JS
   Version 1.0.0
========================================================= */

"use strict";


/* =========================================================
   CONFIG
========================================================= */

const CATALOGUE_CONFIG = {

    whatsapp:
        "919026036445",

    currency:
        "₹",

    currencyText:
        "Price on Request"

};


/* =========================================================
   MATERIAL DATA
========================================================= */

const materials = [

    {
        id: 1,
        name: "PVC Conduit Pipe",
        category: "Conduit",
        categoryIcon: "🔌",
        size: "20mm",
        price: "Price on Request",
        image: "assets/materials/pvc-conduit.jpg",
        icon: "🔧",
        description:
            "Electrical PVC conduit pipe for concealed and surface wiring.",
        specifications: [
            "20mm standard size",
            "Suitable for electrical wiring",
            "Lightweight and durable",
            "Suitable for residential work"
        ]
    },

    {
        id: 2,
        name: "PVC Conduit Pipe",
        category: "Conduit",
        categoryIcon: "🔌",
        size: "25mm",
        price: "Price on Request",
        image: "assets/materials/pvc-conduit-25mm.jpg",
        icon: "🔧",
        description:
            "25mm PVC conduit pipe for electrical wiring and cable protection.",
        specifications: [
            "25mm standard size",
            "Good mechanical protection",
            "Suitable for concealed wiring",
            "Durable PVC construction"
        ]
    },

    {
        id: 3,
        name: "Modular Switch",
        category: "Switches",
        categoryIcon: "💡",
        size: "6A / 16A",
        price: "Price on Request",
        image: "assets/materials/modular-switch.jpg",
        icon: "💡",
        description:
            "Premium modular electrical switch for residential and commercial installations.",
        specifications: [
            "6A / 16A options",
            "Modular design",
            "Smooth operation",
            "Suitable for standard modular plates"
        ]
    },

    {
        id: 4,
        name: "Modular Socket",
        category: "Switches",
        categoryIcon: "💡",
        size: "6A / 16A",
        price: "Price on Request",
        image: "assets/materials/modular-socket.jpg",
        icon: "🔌",
        description:
            "Modular electrical socket for home and commercial electrical installations.",
        specifications: [
            "6A / 16A options",
            "Modular fitting",
            "Strong terminals",
            "Suitable for standard modular plates"
        ]
    },

    {
        id: 5,
        name: "MCB",
        category: "Protection",
        categoryIcon: "🛡️",
        size: "6A – 63A",
        price: "Price on Request",
        image: "assets/materials/mcb.jpg",
        icon: "⚡",
        description:
            "Miniature Circuit Breaker for protection against overload and short circuit.",
        specifications: [
            "Multiple current ratings",
            "Overload protection",
            "Short-circuit protection",
            "Suitable for DB installation"
        ]
    },

    {
        id: 6,
        name: "RCCB",
        category: "Protection",
        categoryIcon: "🛡️",
        size: "2P / 4P",
        price: "Price on Request",
        image: "assets/materials/rccb.jpg",
        icon: "🛡️",
        description:
            "Residual Current Circuit Breaker for protection against earth leakage.",
        specifications: [
            "2 Pole and 4 Pole options",
            "Earth leakage protection",
            "Suitable for residential DB",
            "Electrical safety device"
        ]
    },

    {
        id: 7,
        name: "Distribution Board",
        category: "DB",
        categoryIcon: "📦",
        size: "4 Way – 12 Way",
        price: "Price on Request",
        image: "assets/materials/distribution-board.jpg",
        icon: "📦",
        description:
            "Electrical distribution board for organized MCB and RCCB installation.",
        specifications: [
            "Multiple way options",
            "Suitable for MCB/RCCB",
            "Neat wiring arrangement",
            "Residential and commercial use"
        ]
    },

    {
        id: 8,
        name: "Flexible Conduit",
        category: "Conduit",
        categoryIcon: "🔌",
        size: "20mm / 25mm",
        price: "Price on Request",
        image: "assets/materials/flexible-conduit.jpg",
        icon: "〰️",
        description:
            "Flexible electrical conduit for wiring at bends and difficult locations.",
        specifications: [
            "Flexible construction",
            "20mm / 25mm options",
            "Useful for ceiling wiring",
            "Easy installation"
        ]
    },

    {
        id: 9,
        name: "Saddle Clamp",
        category: "Accessories",
        categoryIcon: "🔩",
        size: "20mm / 25mm",
        price: "Price on Request",
        image: "assets/materials/saddle-clamp.jpg",
        icon: "🔩",
        description:
            "Saddle clamp for fixing electrical conduit pipes securely.",
        specifications: [
            "20mm / 25mm options",
            "Conduit pipe fixing",
            "Easy installation",
            "Suitable for electrical work"
        ]
    },

    {
        id: 10,
        name: "Junction Box",
        category: "Accessories",
        categoryIcon: "📦",
        size: "Standard",
        price: "Price on Request",
        image: "assets/materials/junction-box.jpg",
        icon: "📦",
        description:
            "Electrical junction box for safe wire connections and branching.",
        specifications: [
            "Electrical wire junction",
            "Strong enclosure",
            "Suitable for concealed wiring",
            "Multiple entry points"
        ]
    },

    {
        id: 11,
        name: "Electrical Wire",
        category: "Wires",
        categoryIcon: "🧵",
        size: "1.5 / 2.5 / 4 / 6 sq.mm",
        price: "Price on Request",
        image: "assets/materials/electrical-wire.jpg",
        icon: "🧵",
        description:
            "Electrical copper wire for residential and commercial wiring applications.",
        specifications: [
            "Multiple sizes available",
            "Copper conductor",
            "Suitable for house wiring",
            "Different colours available"
        ]
    },

    {
        id: 12,
        name: "Ceiling Rose",
        category: "Accessories",
        categoryIcon: "🔩",
        size: "Standard",
        price: "Price on Request",
        image: "assets/materials/ceiling-rose.jpg",
        icon: "💡",
        description:
            "Ceiling rose for connecting and supporting ceiling light or fan wiring.",
        specifications: [
            "Standard electrical fitting",
            "Easy installation",
            "Suitable for ceiling points",
            "Residential use"
        ]
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const productContainer =
    document.getElementById("productsContainer");

const categoryContainer =
    document.getElementById("categoryContainer");

const searchInput =
    document.getElementById("materialSearch");

const clearSearchBtn =
    document.getElementById("clearSearch");

const searchToggle =
    document.getElementById("searchToggle");

const searchPanel =
    document.getElementById("catalogueSearch");

const productCount =
    document.getElementById("productCount");

const noProducts =
    document.getElementById("noProducts");

const resetFilters =
    document.getElementById("resetFilters");

const productModal =
    document.getElementById("productModal");

const modalBackdrop =
    document.getElementById("modalBackdrop");

const modalClose =
    document.getElementById("modalClose");

const modalContent =
    document.getElementById("modalProductContent");


/* =========================================================
   STATE
========================================================= */

let activeCategory = "All";

let searchTerm = "";


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderCategories();

        renderProducts();

        setupSearch();

        setupModal();

    }
);


/* =========================================================
   CATEGORIES
========================================================= */

function getCategories() {

    const categories = [];

    materials.forEach(
        function (material) {

            if (
                !categories.includes(
                    material.category
                )
            ) {

                categories.push(
                    material.category
                );

            }

        }
    );

    return categories;

}


/* =========================================================
   RENDER CATEGORIES
========================================================= */

function renderCategories() {

    if (!categoryContainer) return;

    categoryContainer.innerHTML = "";

    const allButton =
        createCategoryButton(
            "All",
            "🛒",
            "All"
        );

    categoryContainer.appendChild(
        allButton
    );


    getCategories().forEach(
        function (category) {

            const material =
                materials.find(
                    item =>
                        item.category === category
                );

            const button =
                createCategoryButton(
                    category,
                    material
                        ? material.categoryIcon
                        : "📦",
                    category
                );

            categoryContainer.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   CATEGORY BUTTON
========================================================= */

function createCategoryButton(
    value,
    icon,
    label
) {

    const button =
        document.createElement("button");

    button.type = "button";

    button.className =
        "category-item";

    if (
        value === activeCategory
    ) {

        button.classList.add(
            "active"
        );

    }

    button.dataset.category =
        value;

    button.innerHTML = `

        <span class="category-icon">
            ${icon}
        </span>

        <span class="category-name">
            ${label}
        </span>

    `;

    button.addEventListener(
        "click",
        function () {

            activeCategory =
                value;

            updateCategoryButtons();

            renderProducts();

        }
    );

    return button;

}


/* =========================================================
   UPDATE CATEGORY BUTTONS
========================================================= */

function updateCategoryButtons() {

    document
        .querySelectorAll(
            ".category-item"
        )
        .forEach(
            function (button) {

                button.classList.toggle(
                    "active",
                    button.dataset.category ===
                    activeCategory
                );

            }
        );

}


/* =========================================================
   FILTER PRODUCTS
========================================================= */

function getFilteredProducts() {

    return materials.filter(
        function (material) {

            const categoryMatch =
                activeCategory === "All" ||
                material.category ===
                activeCategory;


            const text =
                (
                    material.name +
                    " " +
                    material.category +
                    " " +
                    material.size +
                    " " +
                    material.description
                ).toLowerCase();


            const searchMatch =
                !searchTerm ||
                text.includes(
                    searchTerm.toLowerCase()
                );


            return (
                categoryMatch &&
                searchMatch
            );

        }
    );

}


/* =========================================================
   RENDER PRODUCTS
========================================================= */

function renderProducts() {

    if (!productContainer) return;

    const filtered =
        getFilteredProducts();

    productContainer.innerHTML = "";

    filtered.forEach(
        function (material) {

            const card =
                createProductCard(
                    material
                );

            productContainer.appendChild(
                card
            );

        }
    );


    if (productCount) {

        productCount.textContent =
            filtered.length;

    }


    if (noProducts) {

        noProducts.classList.toggle(
            "show",
            filtered.length === 0
        );

    }

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(
    material
) {

    const card =
        document.createElement("article");

    card.className =
        "product-card";


    const imageHTML =
        material.image
            ? `

                <img
                    src="${material.image}"
                    alt="${escapeHTML(material.name)}"
                    loading="lazy"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
                >

                <div
                    class="product-image-placeholder"
                    style="display:none;">

                    ${material.icon}

                </div>

              `
            : `

                <div
                    class="product-image-placeholder">

                    ${material.icon}

                </div>

              `;


    card.innerHTML = `

        <div class="product-image">

            ${imageHTML}

            <span class="product-category">
                ${escapeHTML(material.category)}
            </span>

        </div>


        <div class="product-info">

            <h3>
                ${escapeHTML(material.name)}
            </h3>

            <p class="product-size">
                ${escapeHTML(material.size)}
            </p>

            <div class="product-price">
                ${escapeHTML(material.price)}
            </div>


            <div class="product-actions">

                <button
                    type="button"
                    class="product-details-btn">

                    👁️ Details

                </button>


                <button
                    type="button"
                    class="product-whatsapp-btn">

                    💬 Enquire

                </button>

            </div>

        </div>

    `;


    const detailsButton =
        card.querySelector(
            ".product-details-btn"
        );


    const whatsappButton =
        card.querySelector(
            ".product-whatsapp-btn"
        );


    detailsButton.addEventListener(
        "click",
        function () {

            openProductModal(
                material
            );

        }
    );


    whatsappButton.addEventListener(
        "click",
        function () {

            enquireOnWhatsApp(
                material
            );

        }
    );


    return card;

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

    if (searchToggle) {

        searchToggle.addEventListener(
            "click",
            function () {

                if (!searchPanel) return;

                searchPanel.classList.toggle(
                    "show"
                );


                if (
                    searchPanel.classList.contains(
                        "show"
                    ) &&
                    searchInput
                ) {

                    setTimeout(
                        function () {

                            searchInput.focus();

                        },
                        100
                    );

                }

            }
        );

    }


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            function () {

                searchTerm =
                    searchInput.value.trim();

                renderProducts();

            }
        );

    }


    if (clearSearchBtn) {

        clearSearchBtn.addEventListener(
            "click",
            function () {

                if (searchInput) {

                    searchInput.value =
                        "";

                }

                searchTerm =
                    "";

                renderProducts();

                if (searchInput) {

                    searchInput.focus();

                }

            }
        );

    }

}


/* =========================================================
   RESET FILTERS
========================================================= */

if (resetFilters) {

    resetFilters.addEventListener(
        "click",
        function () {

            activeCategory =
                "All";

            searchTerm =
                "";

            if (searchInput) {

                searchInput.value =
                    "";

            }

            updateCategoryButtons();

            renderProducts();

        }
    );

}


/* =========================================================
   PRODUCT MODAL
========================================================= */

function setupModal() {

    if (modalClose) {

        modalClose.addEventListener(
            "click",
            closeProductModal
        );

    }


    if (modalBackdrop) {

        modalBackdrop.addEventListener(
            "click",
            closeProductModal
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeProductModal();

            }

        }
    );

}


/* =========================================================
   OPEN MODAL
========================================================= */

function openProductModal(
    material
) {

    if (
        !productModal ||
        !modalContent
    ) {

        return;

    }


    const imageHTML =
        material.image
            ? `

                <img
                    src="${material.image}"
                    alt="${escapeHTML(material.name)}"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
                >

                <div
                    class="product-image-placeholder"
                    style="display:none;">

                    ${material.icon}

                </div>

              `
            : `

                <div
                    class="product-image-placeholder">

                    ${material.icon}

                </div>

              `;


    const specifications =
        material.specifications
            .map(
                function (item) {

                    return `
                        <li>
                            ${escapeHTML(item)}
                        </li>
                    `;

                }
            )
            .join("");


    modalContent.innerHTML = `

        <div class="modal-product-image">

            ${imageHTML}

        </div>


        <div class="modal-product-content">

            <span class="modal-product-tag">
                SANDEEP ELECTROFIX MATERIAL
            </span>


            <h2>
                ${escapeHTML(material.name)}
            </h2>


            <p class="modal-product-size">
                Size / Specification:
                ${escapeHTML(material.size)}
            </p>


            <div class="modal-product-price">
                ${escapeHTML(material.price)}
            </div>


            <p class="modal-product-description">
                ${escapeHTML(material.description)}
            </p>


            <div class="modal-specifications">

                <h3>
                    Specifications
                </h3>

                <ul>
                    ${specifications}
                </ul>

            </div>


            <a
                href="${createWhatsAppLink(material)}"
                class="modal-whatsapp"
                target="_blank"
                rel="noopener">

                💬 Enquire on WhatsApp

            </a>

        </div>

    `;


    productModal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeProductModal() {

    if (!productModal) return;

    productModal.classList.remove(
        "show"
    );

    document.body.style.overflow =
        "";

}


/* =========================================================
   WHATSAPP
========================================================= */

function createWhatsAppLink(
    material
) {

    const message =
        `Hello Sandeep ElectroFix,

I want to enquire about:

Material: ${material.name}
Category: ${material.category}
Size: ${material.size}

Please share availability and latest price.

Thank you.`;

    return (
        "https://wa.me/" +
        CATALOGUE_CONFIG.whatsapp +
        "?text=" +
        encodeURIComponent(
            message
        )
    );

}


function enquireOnWhatsApp(
    material
) {

    window.open(
        createWhatsAppLink(
            material
        ),
        "_blank",
        "noopener"
    );

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(
    value
) {

    return String(value)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


/* =========================================================
   GLOBAL FUNCTION
========================================================= */

window.SandeepMaterialCatalogue = {

    materials,

    renderProducts,

    openProductModal,

    closeProductModal,

    enquireOnWhatsApp

};
