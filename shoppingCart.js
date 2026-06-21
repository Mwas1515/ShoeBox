// ======================
// ADD TO CART
// ======================
function addToCart(productId) {

    const isLoggedIn =
        localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {

        const loginFirst = confirm(
            "Please login before adding items to your cart."
        );

        if (loginFirst) {
            window.location.href = "user.html";
        }

        return;
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = products.find(
        item => Number(item.id) === Number(productId)
    );

    if (!product) {
        alert("Product not found");
        return;
    }

    const existingItem = cart.find(
        item => Number(item.id) === Number(productId)
    );

    if (existingItem) {

        if (existingItem.quantity >= product.stock) {
            alert("Maximum stock reached");
            return;
        }

        existingItem.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();
    displayCart();

    alert(`${product.name} added to cart`);
}

// ======================
// REMOVE FROM CART
// ======================
function removeFromCart(productId) {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart = cart.filter(
        item => Number(item.id) !== Number(productId)
    );

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();
    updateCartCount();
}

// ======================
// DISPLAY CART
// ======================
function displayCart() {

    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");

    if (!cartItems || !cartTotal) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="text-white text-center text-lg">
                Your cart is empty
            </p>
        `;

        cartTotal.textContent = "Ksh 0";

        return;
    }

    cart.forEach(item => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="flex justify-between items-center bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">

                <div class="flex items-center gap-4">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        class="w-20 h-20 rounded-xl object-cover"
                    >

                    <div>
                        <h3 class="text-white font-bold">
                            ${item.name}
                        </h3>

                        <p class="text-gray-300">
                            Ksh ${item.price.toLocaleString()}
                        </p>

                        <p class="text-gray-300">
                            Quantity: ${item.quantity}
                        </p>
                    </div>

                </div>

                <button
                    onclick="removeFromCart(${item.id})"
                    class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Remove
                </button>

            </div>
        `;
    });

    cartTotal.textContent =
        `Ksh ${total.toLocaleString()}`;
}

// ======================
// CART BADGE
// ======================
function updateCartCount() {

    const cartCount = document.getElementById("cartCount");

    if (!cartCount) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    cartCount.textContent = totalItems;
}

// ======================
// CONNECT PRODUCT BUTTONS
// ======================
document.querySelectorAll(".cart-btn").forEach(button => {

    button.addEventListener("click", () => {

        const productId = Number(
            button.dataset.id
        );

        addToCart(productId);
    });
});

// ======================
// DRAWER CONTROLS
// ======================
const viewCartBtn = document.getElementById("viewCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartDrawer = document.getElementById("cartDrawer");

if (viewCartBtn && cartDrawer) {

    viewCartBtn.addEventListener("click", () => {

        const isLoggedIn =
            localStorage.getItem("isLoggedIn");

        if (isLoggedIn !== "true") {

            alert("Please login first");

            window.location.href = "user.html";

            return;
        }

        cartDrawer.classList.remove("-translate-y-full");

        displayCart();
    });
}

if (closeCartBtn && cartDrawer) {

    closeCartBtn.addEventListener("click", () => {

        cartDrawer.classList.add("-translate-y-full");
    });
}

// ======================
// CHECKOUT
// ======================
const checkoutBtn =
    document.getElementById("checkoutBtn");

if (checkoutBtn) {

    checkoutBtn.addEventListener("click", () => {

        if (
            JSON.parse(
                localStorage.getItem("cart")
            )?.length > 0
        ) {

            window.location.href =
                "checkout.html";

        } else {

            alert("Your cart is empty");
        }
    });
}

// ======================
// INITIALIZE
// ======================
document.addEventListener("DOMContentLoaded", () => {

    updateCartCount();
    displayCart();

});

// ======================
// LOGOUT
// ======================
document.addEventListener("DOMContentLoaded", () => {

    const logoutBtn = document.getElementById("logoutBtn");

    if (logoutBtn) {

        logoutBtn.addEventListener("click", () => {

            localStorage.removeItem("isLoggedIn");

            alert("Logged out successfully");

            window.location.href = "index.html";
        });

    }

});