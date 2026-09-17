export function searchProducts(products, keyword) {
    const lowerKeyword = keyword.toLowerCase();

    return products.filter(product =>
        product.title.toLowerCase().includes(lowerKeyword)
    );
}


export function filterByCategory(products, category = "all") {
    if (category === "all") {
        return products;
    }

    return products.filter(
        product => product.category === category
    );
}


export function sortProducts(products, sortBy) {
    const result = [...products];

    if (sortBy === "price-asc") {
        result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-desc") {
        result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
        result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "title") {
        result.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    return result;
}


export function getStatistics(products) {
    const totalProducts = products.length;

    if (totalProducts === 0) {
        return {
            totalProducts: 0,
            averagePrice: 0,
            totalStock: 0,
            averageRating: 0
        };
    }

    const totalPrice = products.reduce(
        (sum, product) => sum + product.price,
        0
    );

    const totalStock = products.reduce(
        (sum, product) => sum + product.stock,
        0
    );

    const totalRating = products.reduce(
        (sum, product) => sum + product.rating,
        0
    );

    return {
        totalProducts,
        averagePrice: totalPrice / totalProducts,
        totalStock,
        averageRating: totalRating / totalProducts
    };
}


// find()
// Mencari satu produk berdasarkan ID
export function findProductById(products, id) {
    return products.find(product => product.id === id);
}


// some()
// Mengecek apakah ada produk dengan stok rendah
export function hasLowStock(products) {
    return products.some(product => product.stock < 10);
}


// every()
// Mengecek apakah semua produk memiliki rating
export function allProductsHaveRating(products) {
    return products.every(product =>
        product.rating !== undefined &&
        product.rating !== null
    );
}


// Map
// Menghitung jumlah produk berdasarkan kategori
export function countProductsByCategory(products) {
    const categoryMap = new Map();

    products.forEach(product => {
        const category = product.category;

        const currentCount =
            categoryMap.get(category) || 0;

        categoryMap.set(
            category,
            currentCount + 1
        );
    });

    return categoryMap;
}