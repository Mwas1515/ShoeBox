// ======================
// LOAD ORDER
// ======================

const order =
    JSON.parse(
        localStorage.getItem("latestOrder")
    );

// Redirect if no receipt exists
if (!order) {

    alert("No receipt found.");

    window.location.href = "index.html";
}

// ======================
// GET ELEMENTS
// ======================

const orderInfo =
    document.getElementById("orderInfo");

const receiptItems =
    document.getElementById("receiptItems");

const receiptSubtotal =
    document.getElementById("receiptSubtotal");

const receiptDelivery =
    document.getElementById("receiptDelivery");

const receiptTotal =
    document.getElementById("receiptTotal");

// ======================
// CUSTOMER INFORMATION
// ======================

orderInfo.innerHTML = `
    <div class="bg-white/5 p-4 rounded-xl">
        <h3 class="text-lg font-bold mb-2">
            Customer
        </h3>

        <p>${order.customerName}</p>

        <p>${order.phone}</p>

        <p>${order.address}</p>
    </div>

    <div class="bg-white/5 p-4 rounded-xl">
        <h3 class="text-lg font-bold mb-2">
            Order Details
        </h3>

        <p>
            Order ID:
            #${order.id}
        </p>

        <p>
            Date:
            ${order.date}
        </p>

        <p>
            Payment:
            ${order.paymentMethod}
        </p>

        <p class="text-green-400">
            ${order.status}
        </p>
    </div>
`;

// ======================
// DISPLAY PRODUCTS
// ======================

order.items.forEach(item => {

    const itemTotal =
        item.price * item.quantity;

    receiptItems.innerHTML += `
        <div
            class="flex justify-between items-center bg-white/10 p-4 rounded-xl border border-white/10"
        >

            <div class="flex items-center gap-4">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                    class="w-20 h-20 object-cover rounded-xl"
                >

                <div>

                    <h3 class="font-bold">
                        ${item.name}
                    </h3>

                    <p class="text-gray-300">
                        Quantity:
                        ${item.quantity}
                    </p>

                    <p class="text-gray-300">
                        Ksh ${item.price.toLocaleString()}
                    </p>

                </div>

            </div>

            <div
                class="text-green-400 font-bold"
            >
                Ksh ${itemTotal.toLocaleString()}
            </div>

        </div>
    `;
});

// ======================
// TOTALS
// ======================

receiptSubtotal.textContent =
    `Ksh ${order.subtotal.toLocaleString()}`;

receiptDelivery.textContent =
    `Ksh ${order.deliveryFee.toLocaleString()}`;

receiptTotal.textContent =
    `Ksh ${order.total.toLocaleString()}`;

// ======================
// CONSOLE LOG (OPTIONAL)
// ======================

console.log("Receipt Loaded:", order);