# ShoeBox

ShoeBox is a modern sneaker store platform created for sneaker lovers who want a smooth and stylish shopping experience. The website showcases a wide range of trendy sneakers across different categories, including Men, Women, and Kids collections.

The platform features interactive product displays, advanced search and filtering options, price sorting, detailed sneaker previews, ratings, and shopping cart functionality that allows users to easily discover and manage their favorite footwear. Its clean layout and immersive shopping environment are designed to make browsing simple, engaging, and visually appealing.

ShoeBox aims to bring together fashion, comfort, and convenience in one modern digital sneaker marketplace while providing a seamless shopping experience across all devices.


---

# Features

## Dynamic Product Management

* Products loaded dynamically from `products.json`
* Centralized product data management
* Easy product updates without editing HTML
* Support for Men, Women, and Kids collections

## Product Search

Users can quickly find sneakers using the search bar.

* Real-time search filtering
* Case-insensitive search
* Search by product name

## Product Filtering

Filter products by:

* Category (Men, Women, Kids)
* Brand
* Search keyword

## Product Sorting

Sort products by price:

* Low to High
* High to Low

## Shopping Cart

* Add products to cart
* Cart data stored using Local Storage
* Quantity tracking
* Persistent cart between page refreshes

## Product Display

Each product includes:

* Product image
* Product name
* Brand name
* Price
* Star rating
* Add-to-cart button

## Product Preview Modal

* Clickable product images
* Enlarged product preview
* Improved browsing experience

## Modern UI Design

* Glassmorphism cards
* Dark themed layout
* Smooth hover animations
* Responsive product grid
* Consistent spacing and typography

## Animated Background

* Custom star-field effect
* Glowing star animations
* Enhanced visual experience

## Responsive Design

Optimized for:

* Mobile devices
* Tablets
* Laptops
* Desktop screens

---

# Testing

The project includes unit testing using Jest.

### Tested Functionality

* Product search filtering
* Category filtering
* Brand filtering
* Price sorting (Low → High)
* Price sorting (High → Low)
* Product filtering logic

Run tests using:

```bash
npm test
```

---

# Built With

* HTML5
* Tailwind CSS
* JavaScript (ES6+)
* Local Storage API
* Font Awesome
* Jest

---

# Project Structure

```
C:.
|   .gitignore
|   cart.html
|   checkout.html
|   checkout.js
|   collection.html
|   index.html
|   kids.html
|   LICENSE
|   men.html
|   package-lock.json
|   package.json
|   products.js
|   products.json
|   products.test.js
|   productsLoader.js
|   project-structure.txt
|   README.md
|   receipt.html
|   receipt.js
|   register.html
|   register.js
|   shoppingCart.js
|   structure.txt
|   user.html
|   user.js
|   women.html
|   
+---assets
|   \---images
|           ADDIDAS.jpg
|           AF-1 GRAFFITY.jpg
|           AF-1.jpg
|           AIR MAX COLORED.jpg
|           AIRMAX.jpg
|           ALLSTARS.jpg
|           ASICIS.jpg
|           CORTEZ.jpg
|           DUNKS HIGH W.jpg
|           DUNKS OFFWHITE.jpg
|           DUNKS-HIGH.jpg
|           DUNKS-LOW.jpg
|           FILA.jpg
|           J4.jpg
|           JORDAN-12.jpg
|           logo.png
|           NB-550.jpg
|           OLDSKOOL.jpg
|           PINK AF-1.jpg
|           PUMA F2.jpg
|           PUMA-SUEDE.jpg
|           SACAI.jpg
|           TIMBZ.jpg
|           VANS.jpg
|           YEEZY.jpg
```

---

# Installation

Clone the repository:

```bash
git clone https://github.com/Mwas1515/ShoeBox.git
```

Navigate to the project directory:

```bash
cd ShoeBox
```

Install project dependencies:

```bash
npm install
```

Start Live Server or open the project in your browser.

---

# UI Highlights

* Glassmorphism inspired design
* Dynamic product rendering
* Responsive ecommerce layout
* Smooth transitions and hover effects
* Interactive filtering system
* Modern sneaker store aesthetic

---

# Future Improvements

* Product details page
* Wishlist functionality
* Product reviews and ratings
* Checkout process
* User authentication
* Backend integration
* Payment gateway support
* Inventory management system
* Admin dashboard
* Product pagination

---

# Author

Developed by Denis Mwangi

---

# License

This project is licensed under the MIT License.
