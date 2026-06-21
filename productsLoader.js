let allProducts = [];

async function loadProducts() {
    try {
        const response = await fetch("products.json");

        const products = await response.json();

        allProducts = products;

        renderProducts(products);

    } catch (error) {
        console.error("Error loading products:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadProducts);