import { state } from "./state.js";
import { products } from "./data.js";
import { fetchProducts } from "./api.js";
import { renderProducts } from "./ui.js";
import {
    linearSearch,
    groupByCategory
} from "./algorithms.js";

async function main() {
    // Menggunakan dataset lokal
    state.products = products;

    renderProducts(state.products);

    // Contoh penggunaan linear search
    console.log(
        "Hasil pencarian:",
        linearSearch(state.products, "lap")
    );

    // Contoh grouping berdasarkan kategori
    console.log(
        "Grouping kategori:",
        groupByCategory(state.products)
    );

    // Jika ingin mengambil data dari DummyJSON:
    // state.products = await fetchProducts();
    // renderProducts(state.products);
}

main();