/* =========================================================
   SANDEEP ELECTROFIX
   MATERIAL CATALOGUE
   PREMIUM JAVASCRIPT
   Version 1.0.0
========================================================= */


/* =========================================================
   SETTINGS
========================================================= */

const WHATSAPP_NUMBER = "919026036445";

const CATALOGUE_HOME =
    "index.html";


/* =========================================================
   MATERIAL DATA
========================================================= */

const materials = [

    {
        id: 1,

        name: "PVC Conduit Pipe",

        category: "Conduit",

        icon: "🔌",

        size: "20mm",

        price: "Price on Request",

        image: "",

        description:
            "High quality PVC conduit pipe for concealed and surface electrical wiring.",

        specifications: [
            "20mm standard size",
            "Suitable for house wiring",
            "Durable PVC material",
            "Easy installation"
        ]
    },


    {
        id: 2,

        name: "PVC Conduit Pipe",

        category: "Conduit",

        icon: "🔌",

        size: "25mm",

        price: "Price on Request",

        image: "",

        description:
            "Heavy-duty PVC conduit pipe suitable for electrical wiring and cable protection.",

        specifications: [
            "25mm standard size",
            "Strong PVC construction",
            "Suitable for electrical installations",
            "Good mechanical protection"
        ]
    },


    {
        id: 3,

        name: "Modular Switch",

        category: "Switches",

        icon: "💡",

        size: "6A / 10A / 16A",

        price: "Price on Request",

        image: "",

        description:
            "Premium modular electrical switch suitable for residential and commercial applications.",

        specifications: [
            "Modern modular design",
            "Smooth operation",
            "Multiple ampere options",
            "Suitable for standard modular plates"
        ]
    },


    {
        id: 4,

        name: "Modular Socket",

        category: "Switches",

        icon: "🔌",

        size: "6A / 16A",

        price: "Price on Request",

        image: "",

        description:
            "Reliable modular socket for household electrical connections.",

        specifications: [
            "6A and 16A options",
            "Strong terminals",
            "Modular design",
            "Suitable for residential wiring"
        ]
    },


    {
        id: 5,

        name: "MCB",

        category: "Protection",

        icon: "⚡",

        size: "6A – 63A",

        price: "Price on Request",

        image: "",

        description:
            "Miniature Circuit Breaker for protection against overload and short circuit.",

        specifications: [
            "Multiple current ratings",
            "Overload protection",
            "Short-circuit protection",
            "Suitable for distribution boards"
        ]
    },


    {
        id: 6,

        name: "RCCB",

        category: "Protection",

        icon: "🛡️",

        size: "2P / 4P",

        price: "Price on Request",

        image: "",

        description:
            "Residual Current Circuit Breaker for protection against electrical leakage.",

        specifications: [
            "Earth leakage protection",
            "2 pole and 4 pole options",
            "Suitable for residential applications",
            "Enhanced electrical safety"
        ]
    },


    {
        id: 7,

        name: "Distribution Box",

        category: "Protection",

        icon: "📦",

        size: "4 Way – 16 Way",

        price: "Price on Request",

        image: "",

        description:
            "Electrical distribution box suitable for MCB and RCCB installation.",

        specifications: [
            "Multiple way options",
            "Neat wiring arrangement",
            "Suitable for residential DB",
            "Easy maintenance"
        ]
    },


    {
        id: 8,

        name: "Electrical Wire",

        category: "Wires",

        icon: "🧵",

        size: "1.5 / 2.5 / 4 / 6 sq.mm",

        price: "Price on Request",

        image: "",

        description:
            "Electrical copper wire suitable for different household wiring applications.",

        specifications: [
            "Multiple sizes available",
            "Copper conductor",
            "House wiring applications",
            "Flexible insulation"
        ]
    },


    {
        id: 9,

        name: "Flexible Wire",

        category: "Wires",

        icon: "〰️",

        size: "0.75 – 2.5 sq.mm",

        price: "Price on Request",

        image: "",

        description:
            "Flexible electrical wire for appliance and connection applications.",

        specifications: [
            "Flexible conductor",
            "Easy installation",
            "Multiple sizes",
            "Suitable for electrical connections"
        ]
    },


    {
        id: 10,

        name: "Cable Tie",

        category: "Accessories",

        icon: "🔗",

        size: "Various Sizes",

        price: "Price on Request",

        image: "",

        description:
            "Strong nylon cable ties for electrical cable management.",

        specifications: [
            "Strong nylon material",
            "Multiple sizes",
            "Cable management",
            "Easy locking mechanism"
        ]
    },


    {
        id: 11,

        name: "Saddle Clamp",

        category: "Accessories",

        icon: "🔩",

        size: "20mm / 25mm",

        price: "Price on Request",

        image: "",

        description:
            "PVC conduit saddle clamp for secure pipe fixing.",

        specifications: [
            "20mm and 25mm options",
            "Secure pipe holding",
            "Easy installation",
            "Suitable for conduit work"
        ]
    },


    {
        id: 12,

        name: "Ceiling Rose",

        category: "Accessories",

        icon: "💡",

        size: "Standard",

        price: "Price on Request",

        image: "",

        description:
            "Ceiling rose for electrical light and fan connection applications.",

        specifications: [
            "Standard size",
            "Easy installation",
            "Suitable for ceiling wiring",
            "Compact design"
        ]
    }

];


/* =========================================================
   CATEGORY DATA
========================================================= */

const categories = [

    {
        name: "All",
        icon: "🛒"
    },

    {
        name: "Conduit",
        icon: "🔌"
    },

    {
        name: "Wires",
        icon: "🧵"
    },

    {
        name: "Switches",
        icon: "💡"
    },

    {
        name: "Protection",
        icon: "🛡️"
    },

    {
        name: "Accessories",
        icon: "🔩"
    }

];


/* =========================================================
   STATE
========================================================= */

let selectedCategory = "All";

let searchText = "";


/* =========================================================
   DOM READY
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        createCategories();

        renderProducts();

        setupSearch();

        setupModal();

        setupBackButton();

        console.log(
            "Sandeep ElectroFix Material Catalogue Loaded"
        );

    }
);


/* =========================================================
   CATEGORY CREATION
========================================================= */

function createCategories() {

    const container =
        document.getElementById(
            "categoryContainer"
        );

    if (!container) return;


    container.innerHTML = "";


    categories.forEach(
        function (category) {

            const button =
                document.createElement("button");


            button.type = "button";


            button.className =
                "category-item";


            if (
                category.name ===
                selectedCategory
            ) {

                button.classList.add(
                    "active"
                );

            }


            button.innerHTML = `

                <span class="category-icon">
                    ${category.icon}
                </span>

                <span class="category-name">
                    ${category.name}
                </span>

            `;


            button.addEventListener(
                "click",
                function () {

                    selectedCategory =
                        category.name;


                    document
                        .querySelectorAll(
                            ".category-item"
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


                    renderProducts();

                }
            );


            container.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   FILTER PRODUCTS
========================================================= */

function getFilteredProducts() {

    return materials.filter(
        function (product) {

            const categoryMatch =
                selectedCategory === "All" ||
                product.category ===
                selectedCategory;


            const searchMatch =
                product.name
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    ) ||

                product.category
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
                    ) ||

                product.size
                    .toLowerCase()
                    .includes(
                        searchText.toLowerCase()
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

    const container =
        document.getElementById(
            "productsGrid"
        );


    if (!container) return;


    const filteredProducts =
        getFilteredProducts();


    container.innerHTML = "";


    filteredProducts.forEach(
        function (product, index) {

            const card =
                createProductCard(
                    product,
                    index
                );


            container.appendChild(
                card
            );

        }
    );


    updateProductCounter(
        filteredProducts.length
    );


    updateNoProducts(
        filteredProducts.length
    );

}


/* =========================================================
   PRODUCT CARD
========================================================= */

function createProductCard(
    product,
    index
) {

    const card =
        document.createElement("article");


    card.className =
        "product-card";


    card.style.animationDelay =
        `${index * 0.04}s`;


    let imageHTML = "";


    if (product.image) {

        imageHTML = `

            <img
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"
            >

        `;

    } else {

        imageHTML = `

            <div
                class="product-image-placeholder"
                style="
                    display:flex;
                "
            >

                ${product.icon}

            </div>

        `;

    }


    card.innerHTML = `

        <div class="product-image">

            ${imageHTML}

            <span class="product-category">
                ${product.category}
            </span>

        </div>


        <div class="product-info">

            <h3>
                ${product.name}
            </h3>

            <div class="product-size">
                ${product.size}
            </div>

            <div class="product-price">
                ${product.price}
            </div>


            <div class="product-actions">

                <button
                    type="button"
                    class="product-details-btn"
                    data-id="${product.id}"
                >

                    👁️ Details

                </button>


                <button
                    type="button"
                    class="product-whatsapp-btn"
                    data-id="${product.id}"
                >

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
                product.id
            );

        }
    );


    whatsappButton.addEventListener(
        "click",
        function () {

            sendWhatsAppEnquiry(
                product
            );

        }
    );


    return card;

}


/* =========================================================
   PRODUCT COUNTER
========================================================= */

function updateProductCounter(
    count
) {

    const counter =
        document.getElementById(
            "productCounter"
        );


    if (!counter) return;


    counter.textContent =
        `${count} Materials`;

}


/* =========================================================
   NO PRODUCT MESSAGE
========================================================= */

function updateNoProducts(
    count
) {

    const message =
        document.getElementById(
            "noProducts"
        );


    if (!message) return;


    if (count === 0) {

        message.classList.add(
            "show"
        );

    } else {

        message.classList.remove(
            "show"
        );

    }

}


/* =========================================================
   SEARCH
========================================================= */

function setupSearch() {

    const input =
        document.getElementById(
            "materialSearch"
        );


    const clearButton =
        document.getElementById(
            "clearSearch"
        );


    if (!input) return;


    input.addEventListener(
        "input",
        function () {

            searchText =
                input.value.trim();


            renderProducts();


            if (
                clearButton
            ) {

                clearButton.classList.toggle(
                    "show",
                    searchText.length > 0
                );

            }

        }
    );


    if (clearButton) {

        clearButton.addEventListener(
            "click",
            function () {

                input.value = "";

                searchText = "";

                clearButton.classList.remove(
                    "show"
                );

                renderProducts();

                input.focus();

            }
        );

    }

}


/* =========================================================
   SEARCH TOGGLE
========================================================= */

function setupSearchToggle() {

    const toggle =
        document.getElementById(
            "searchToggle"
        );


    const panel =
        document.getElementById(
            "searchPanel"
        );


    if (
        !toggle ||
        !panel
    ) return;


    toggle.addEventListener(
        "click",
        function () {

            panel.classList.toggle(
                "show"
            );

        }
    );

}


/* =========================================================
   MODAL
========================================================= */

function setupModal() {

    const modal =
        document.getElementById(
            "productModal"
        );


    const closeButton =
        document.getElementById(
            "modalClose"
        );


    const backdrop =
        document.querySelector(
            ".modal-backdrop"
        );


    if (!modal) return;


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeProductModal
        );

    }


    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeProductModal
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key ===
                "Escape"
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
    productId
) {

    const product =
        materials.find(
            function (item) {

                return item.id ===
                    productId;

            }
        );


    if (!product) return;


    const modal =
        document.getElementById(
            "productModal"
        );


    if (!modal) return;


    const image =
        document.getElementById(
            "modalProductImage"
        );


    const tag =
        document.getElementById(
            "modalProductTag"
        );


    const title =
        document.getElementById(
            "modalProductTitle"
        );


    const size =
        document.getElementById(
            "modalProductSize"
        );


    const price =
        document.getElementById(
            "modalProductPrice"
        );


    const description =
        document.getElementById(
            "modalProductDescription"
        );


    const specifications =
        document.getElementById(
            "modalSpecifications"
        );


    if (product.image) {

        image.src =
            product.image;

        image.alt =
            product.name;

        image.style.display =
            "block";

    } else {

        image.removeAttribute(
            "src"
        );

        image.alt =
            product.name;

        image.style.display =
            "none";

    }


    tag.textContent =
        product.category;


    title.textContent =
        product.name;


    size.textContent =
        product.size;


    price.textContent =
        product.price;


    description.textContent =
        product.description;


    specifications.innerHTML =
        product.specifications
            .map(
                function (item) {

                    return `
                        <li>
                            ${item}
                        </li>
                    `;

                }
            )
            .join("");


    const whatsappButton =
        document.getElementById(
            "modalWhatsapp"
        );


    if (whatsappButton) {

        whatsappButton.onclick =
            function () {

                sendWhatsAppEnquiry(
                    product
                );

            };

    }


    modal.classList.add(
        "show"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeProductModal() {

    const modal =
        document.getElementById(
            "productModal"
        );


    if (!modal) return;


    modal.classList.remove(
        "show"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   WHATSAPP ENQUIRY
========================================================= */

function sendWhatsAppEnquiry(
    product
) {

    const message =
        `Hello Sandeep ElectroFix 👋

I am interested in this material:

🛒 Material:
${product.name}

📏 Size:
${product.size}

📂 Category:
${product.category}

Please share the availability and price.

Thank you.`;


    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=` +
        encodeURIComponent(
            message
        );


    window.open(
        url,
        "_blank",
        "noopener"
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
   SETUP SEARCH TOGGLE
========================================================= */

setupSearchToggle();


/* =========================================================
   GLOBAL ACCESS
========================================================= */

window.SandeepMaterialCatalogue = {

    materials,

    openProductModal,

    closeProductModal,

    sendWhatsAppEnquiry

};


console.log(
    "⚡ Material Catalogue JS Ready"
);
