const products = [
  // MEN
  {
    id: 1,
    name: "Air Force 1",
    price: 2500,
    image: "assets/images/AF-1.jpg",
    category: "Men",
    stock: 30
  },
  {
    id: 2,
    name: "Nike Cortez",
    price: 4500,
    image: "assets/images/CORTEZ.jpg",
    category: "Men",
    stock: 30
  },
  {
    id: 3,
    name: "Vans Old Skool",
    price: 3500,
    image: "assets/images/VANS.jpg",
    category: "Men",
    stock: 30
  },
  {
    id: 4,
    name: "Nike Dunks Low",
    price: 5500,
    image: "assets/images/DUNKS-LOW.jpg",
    category: "Men",
    stock: 30
  },
  {
    id: 5,
    name: "Jordan 4",
    price: 6500,
    image: "assets/images/J4.jpg",
    category: "Men",
    stock: 30
  },
  {
    id: 6,
    name: "Puma Suede",
    price: 3000,
    image: "assets/images/PUMA-SUEDE.jpg",
    category: "Men",
    stock: 30
  },
  {
    id: 7,
    name: "Timberlands",
    price: 7500,
    image: "assets/images/TIMBZ.jpg",
    category: "Men",
    stock: 30
  },
  {
    id: 8,
    name: "Nike Dunks High",
    price: 8500,
    image: "assets/images/DUNKS-HIGH.jpg",
    category: "Men",
    stock: 30
  },

  // WOMEN
  {
    id: 9,
    name: "Nike Air Max",
    price: 4500,
    image: "assets/images/AIRMAX.jpg",
    category: "Women",
    stock: 30
  },
  {
    id: 10,
    name: "Nike Airforce-1 Pink",
    price: 2500,
    image: "assets/images/PINK AF-1.jpg",
    category: "Women",
    stock: 30
  },
  {
    id: 11,
    name: "Converse Old Skool",
    price: 2000,
    image: "assets/images/OLDSKOOL.jpg",
    category: "Women",
    stock: 30
  },
  {
    id: 12,
    name: "Fila",
    price: 3500,
    image: "assets/images/FILA.jpg",
    category: "Women",
    stock: 30
  },
  {
    id: 13,
    name: "New Balance 550",
    price: 4500,
    image: "assets/images/NB-550.jpg",
    category: "Women",
    stock: 30
  },
  {
    id: 14,
    name: "Puma-F2",
    price: 3000,
    image: "assets/images/PUMA F2.jpg",
    category: "Women",
    stock: 30
  },
  {
    id: 15,
    name: "ASICS Gel Kayano 14",
    price: 4500,
    image: "assets/images/ASICIS.jpg",
    category: "Women",
    stock: 30
  },
  {
    id: 16,
    name: "Nike Dunks High",
    price: 8500,
    image: "assets/images/DUNKS HIGH W.jpg",
    category: "Women",
    stock: 30
  },

  // KIDS
  {
    id: 17,
    name: "Air Force 1 Graffiti",
    price: 2500,
    image: "assets/images/AF-1 GRAFFITY.jpg",
    category: "Kids",
    stock: 30
  },
  {
    id: 18,
    name: "Adidas Rubbers",
    price: 1500,
    image: "assets/images/ADDIDAS.jpg",
    category: "Kids",
    stock: 30
  },
  {
    id: 19,
    name: "Airmax Colored",
    price: 3500,
    image: "assets/images/AIR MAX COLORED.jpg",
    category: "Kids",
    stock: 30
  },
  {
    id: 20,
    name: "Converse Allstar",
    price: 3000,
    image: "assets/images/ALLSTARS.jpg",
    category: "Kids",
    stock: 30
  },
  {
    id: 21,
    name: "Jordan 12",
    price: 4500,
    image: "assets/images/JORDAN-12.jpg",
    category: "Kids",
    stock: 30
  },
  {
    id: 22,
    name: "Nike Offwhite Dunks High",
    price: 5000,
    image: "assets/images/DUNKS OFFWHITE.jpg",
    category: "Kids",
    stock: 30
  },
  {
    id: 23,
    name: "Nike Sacai",
    price: 4000,
    image: "assets/images/SACAI.jpg",
    category: "Kids",
    stock: 30
  },
  {
    id: 24,
    name: "Adidas Yeezy 700",
    price: 5500,
    image: "assets/images/YEEZY.jpg",
    category: "Kids",
    stock: 30
  }
];

// Save products to localStorage
localStorage.setItem("products", JSON.stringify(products));

// Helper function
function getProducts() {
    return JSON.parse(localStorage.getItem("products")) || [];
}