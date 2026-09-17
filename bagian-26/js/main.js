import { state } from "./state.js";

import { fetchProducts } from "./api.js";

import {
    searchProducts,
    filterByCategory,
    sortProducts,
    getStatistics,
    findProductById,
    hasLowStock,
    allProductsHaveRating,
    countProductsByCategory
} from "./algorithms.js";

import {
    renderProducts,
    renderStatistics,
    renderCategories,
    renderStatus
} from "./ui.js";


function render() {
    let result = [...state.products];

    // Search
    if (state.search) {
        result = searchProducts(
            result,
            state.search
        );
    }

    // Filter category
    result = filterByCategory(
        result,
        state.category
    );

    // Sorting
    result = sortProducts(
        result,
        state.sortBy
    );

    renderProducts(result);

    const statistics = getStatistics(result);

    renderStatistics(statistics);

    renderStatus(state.status);
}


async function loadProducts() {
    state.status = "loading";
    render();

    try {
        const products = await fetchProducts();

        state.products = products;
        state.status = "success";

        renderCategories(products);

        // =========================
        // find()
        // =========================

        const firstProduct = findProductById(
            products,
            1
        );

        console.log(
            "Produk dengan ID 1:",
            firstProduct
        );


        // =========================
        // some()
        // =========================

        const lowStock = hasLowStock(products);

        console.log(
            "Apakah ada produk dengan stok rendah?",
            lowStock
        );


        // =========================
        // every()
        // =========================

        const allHaveRating =
            allProductsHaveRating(products);

        console.log(
            "Apakah semua produk memiliki rating?",
            allHaveRating
        );


        // =========================
        // Map
        // =========================

        const categoryMap =
            countProductsByCategory(products);

        console.log(
            "Jumlah produk berdasarkan kategori:",
            categoryMap
        );

        console.log(
            "Isi Map:",
            [...categoryMap.entries()]
        );

    } catch (error) {
        console.error(error);

        state.status = "error";
    }

    render();
}


// Search
document
    .querySelector("#search")
    .addEventListener("input", event => {

        state.search = event.target.value;

        render();
    });


// Category
document
    .querySelector("#category")
    .addEventListener("change", event => {

        state.category = event.target.value;

        render();
    });


// Sorting
document
    .querySelector("#sort")
    .addEventListener("change", event => {

        state.sortBy = event.target.value;

        render();
    });


loadProducts();