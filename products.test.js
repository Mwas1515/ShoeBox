const {
    getFilteredProducts
} = require("./products.js");

const products = [
    {
        id: 1,
        name: "Air Force 1",
        brand: "Nike",
        category: "Men",
        price: 2500
    },
    {
        id: 2,
        name: "Jordan 4",
        brand: "Jordan",
        category: "Men",
        price: 6500
    },
    {
        id: 3,
        name: "Nike Air Max",
        brand: "Nike",
        category: "Women",
        price: 4500
    },
    {
        id: 4,
        name: "Adidas Yeezy 700",
        brand: "Adidas",
        category: "Kids",
        price: 5500
    }
];

describe("getFilteredProducts", () => {

    test("returns all products", () => {

        const result = getFilteredProducts(
            products,
            "",
            "All",
            "All",
            "default"
        );

        expect(result).toHaveLength(4);
    });

    test("filters by category", () => {

        const result = getFilteredProducts(
            products,
            "",
            "Women",
            "All",
            "default"
        );

        expect(result).toHaveLength(1);
        expect(result[0].name)
            .toBe("Nike Air Max");
    });

    test("filters by brand", () => {

        const result = getFilteredProducts(
            products,
            "",
            "All",
            "Nike",
            "default"
        );

        expect(result).toHaveLength(2);
    });

    test("filters by search term", () => {

        const result = getFilteredProducts(
            products,
            "Jordan",
            "All",
            "All",
            "default"
        );

        expect(result).toHaveLength(1);
        expect(result[0].name)
            .toBe("Jordan 4");
    });

    test("sorts low to high", () => {

        const result = getFilteredProducts(
            products,
            "",
            "All",
            "All",
            "low-high"
        );

        expect(result[0].price)
            .toBe(2500);

        expect(result[3].price)
            .toBe(6500);
    });

    test("sorts high to low", () => {

        const result = getFilteredProducts(
            products,
            "",
            "All",
            "All",
            "high-low"
        );

        expect(result[0].price)
            .toBe(6500);

        expect(result[3].price)
            .toBe(2500);
    });

});