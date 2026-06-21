let allProducts = [];

// LOAD PRODUCTS
async function loadProducts() {
    try {
        const response = await fetch("./products.json");

        if (!response.ok) {
            throw new Error("Failed to load products");
        }

        allProducts = await response.json();

// Get category from the page
const pageCategory = document.body.dataset.category;

// Filter products for this page only
if (pageCategory) {
    allProducts = allProducts.filter(
        product => product.category === pageCategory
    );
}

populateBrands(allProducts);
displayProducts(allProducts);
    } catch (error) {
        console.error("Error loading products:", error);
    }
}

// DISPLAY PRODUCTS
function displayProducts(products) {

    const container =
        document.getElementById("productsContainer");

    if (!container) return;

    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = `
            <p class="text-white text-center col-span-full text-xl">
                No products found.
            </p>
        `;
        return;
    }

    products.forEach(product => {

        const card = document.createElement("div");

        card.className =
            "bg-white/10 backdrop-blur-md border border-white/20 rounded-[40px] p-6 shadow-lg hover:scale-105 transition-all duration-300";

        card.innerHTML = `
            <img
                src="${product.image}"
                alt="${product.name}"
                class="w-full h-60 object-cover rounded-2xl hover:scale-110 transition-all duration-300 cursor-pointer"
            >

            <h2 class="text-white text-xl font-bold mt-4">
                ${product.name}
            </h2>

            <p class="text-gray-400 mt-1">
                ${product.brand}
            </p>

            <div class="text-yellow-400 text-lg mt-2">
                ⭐⭐⭐⭐⭐
            </div>

            <p class="text-gray-300 mt-2 font-semibold">
                Ksh ${product.price.toLocaleString()}
            </p>

            <button
                class="cart-btn w-full flex justify-center mt-7 bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-300 tracking-widest transition-all"
                data-id="${product.id}"
            >
                <i class="fa-solid fa-cart-arrow-down"></i>
            </button>
        `;

        container.appendChild(card);
    });

    connectCartButtons();
}

// POPULATE BRANDS
function populateBrands(products) {

    const brandFilter =
        document.getElementById("brandFilter");

    if (!brandFilter) {
        console.error("brandFilter not found");
        return;
    }

    brandFilter.innerHTML =
        `<option value="All">All Brands</option>`;

    const brands =
        [...new Set(products.map(product => product.brand))]
            .sort();

    brands.forEach(brand => {

        const option =
            document.createElement("option");

        option.value = brand;
        option.textContent = brand;

        brandFilter.appendChild(option);
    });
}

// PURE FUNCTION (Jest can test this)

function getFilteredProducts(
    products,
    searchValue,
    categoryValue,
    brandValue,
    priceValue
) {

    let filteredProducts = products.filter(product => {

        const matchesSearch =
            product.name
                .toLowerCase()
                .includes(searchValue.toLowerCase());

        const matchesCategory =
            categoryValue === "All" ||
            product.category === categoryValue;

        const matchesBrand =
            brandValue === "All" ||
            product.brand === brandValue;

        return (
            matchesSearch &&
            matchesCategory &&
            matchesBrand
        );
    });

    // clone before sorting
    filteredProducts = [...filteredProducts];

    if (priceValue === "low-high") {
        filteredProducts.sort(
            (a, b) => a.price - b.price
        );
    }

    if (priceValue === "high-low") {
        filteredProducts.sort(
            (a, b) => b.price - a.price
        );
    }

    return filteredProducts;
}

// FILTER PRODUCTS
function filterProducts() {

    const searchValue =
        document.getElementById("searchInput")
            ?.value || "";

    const categoryValue =
        document.getElementById("categoryFilter")
            ?.value || "All";

    const brandValue =
        document.getElementById("brandFilter")
            ?.value || "All";

    const priceValue =
        document.getElementById("priceFilter")
            ?.value || "default";

    const filteredProducts =
        getFilteredProducts(
            allProducts,
            searchValue,
            categoryValue,
            brandValue,
            priceValue
        );

    displayProducts(filteredProducts);
}

// CART BUTTONS
function connectCartButtons() {

    const buttons =
        document.querySelectorAll(".cart-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const productId =
                Number(button.dataset.id);

            const product =
                allProducts.find(
                    item => item.id === productId
                );

            if (!product) return;

            let cart =
                JSON.parse(
                    localStorage.getItem("cart")
                ) || [];

            const existingItem =
                cart.find(
                    item => item.id === productId
                );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    ...product,
                    quantity: 1
                });
            }

            localStorage.setItem(
                "cart",
                JSON.stringify(cart)
            );

            alert(`${product.name} added to cart!`);
        });
    });
}

// EVENT LISTENERS
if (typeof document !== "undefined") {

    document.addEventListener(
        "DOMContentLoaded",
        () => {

            loadProducts();

            const searchInput =
                document.getElementById("searchInput");

            const categoryFilter =
                document.getElementById("categoryFilter");

            const brandFilter =
                document.getElementById("brandFilter");

            const priceFilter =
                document.getElementById("priceFilter");

            if (searchInput)
                searchInput.addEventListener(
                    "input",
                    filterProducts
                );

            if (categoryFilter)
                categoryFilter.addEventListener(
                    "change",
                    filterProducts
                );

            if (brandFilter)
                brandFilter.addEventListener(
                    "change",
                    filterProducts
                );

            if (priceFilter)
                priceFilter.addEventListener(
                    "change",
                    filterProducts
                );
        }
    );

}

// Export for Jest testing
if (typeof module !== "undefined") {
    module.exports = {
        getFilteredProducts
    };
}