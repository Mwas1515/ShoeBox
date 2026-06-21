// ======================
// LOGIN CHECK
// ======================

const isLoggedIn =
    localStorage.getItem("isLoggedIn");

if (isLoggedIn !== "true") {

    alert("Please login first");

    window.location.href = "user.html";
}

// ======================
// LOAD CART
// ======================

const checkoutItems =
    document.getElementById("checkoutItems");

const checkoutTotal =
    document.getElementById("checkoutTotal");

const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

let subtotal = 0;

const deliveryFee = 300;

// ======================
// DISPLAY ITEMS
// ======================

cart.forEach(item => {

    const itemTotal =
        item.price * item.quantity;

    subtotal += itemTotal;

    checkoutItems.innerHTML += `
        <div class="flex justify-between items-center bg-white/10 p-4 rounded-xl mb-3">
            <div>
                <h3 class="text-white font-bold">
                    ${item.name}
                </h3>

                <p class="text-gray-300">
                    Quantity: ${item.quantity}
                </p>
            </div>

            <p class="text-green-400 font-bold">
                Ksh ${itemTotal.toLocaleString()}
            </p>
        </div>
    `;
});

// ======================
// TOTALS
// ======================

const grandTotal =
    subtotal + deliveryFee;

checkoutTotal.innerHTML = `
    <div class="space-y-2">

        <p>
            Subtotal:
            <span class="font-bold">
                Ksh ${subtotal.toLocaleString()}
            </span>
        </p>

        <p>
            Delivery Fee:
            <span class="font-bold">
                Ksh ${deliveryFee.toLocaleString()}
            </span>
        </p>

        <p class="text-2xl font-bold text-green-400">
            Total:
            Ksh ${grandTotal.toLocaleString()}
        </p>

    </div>
`;

// ======================
// CHECKOUT FORM
// ======================

const checkoutForm =
    document.getElementById("checkoutForm");

checkoutForm.addEventListener("submit", e => {

    e.preventDefault();

    const customerName =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const address =
        document.getElementById("address").value.trim();

    // ======================
    // M-PESA SIMULATION
    // ======================

    const paymentConfirmed = confirm(
        `Simulate M-Pesa payment of Ksh ${grandTotal.toLocaleString()}?`
    );

    if (!paymentConfirmed) {
        return;
    }

    // ======================
    // CREATE ORDER
    // ======================

    const order = {
        id: Date.now(),

        customerName,

        phone,

        address,

        items: cart,

        subtotal,

        deliveryFee,

        total: grandTotal,

        paymentMethod: "M-Pesa",

        status: "Paid",

        date: new Date().toLocaleString()
    };

    // ======================
    // SAVE ORDER HISTORY
    // ======================

    const orders =
        JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem(
        "orders",
        JSON.stringify(orders)
    );

    // ======================
    // REDUCE STOCK
    // ======================

    let products =
        JSON.parse(localStorage.getItem("products")) || [];

    cart.forEach(cartItem => {

        const product =
            products.find(
                p => Number(p.id) === Number(cartItem.id)
            );

        if (product) {

            product.stock -= cartItem.quantity;

            if (product.stock < 0) {
                product.stock = 0;
            }
        }
    });

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );

    // ======================
    // SAVE RECEIPT
    // ======================

    localStorage.setItem(
        "latestOrder",
        JSON.stringify(order)
    );

    // ======================
    // CLEAR CART
    // ======================

    localStorage.removeItem("cart");

    alert(
        "Payment Successful! Your order has been placed."
    );

    // ======================
    // GO TO RECEIPT PAGE
    // ======================

    window.location.href =
        "receipt.html";
});