//5.1 Rata-Rata Harga Laptop
const laptopPrices = products
    .filter(product => product.category === "laptops")
    .map(product => product.price);

const averageLaptopPrice =
    laptopPrices.reduce((total, price) => total + price, 0)
    / laptopPrices.length;

console.log(averageLaptopPrice);

//5.2 getStatistics()
function getStatistics(products) {
    const totalProducts = products.length;

    const totalPrice = products.reduce(
        (sum, product) => sum + product.price,
        0
    );

    const averagePrice = totalPrice / totalProducts;

    const highestPrice = Math.max(
        ...products.map(product => product.price)
    );

    const lowestPrice = Math.min(
        ...products.map(product => product.price)
    );

    const totalStock = products.reduce(
        (sum, product) => sum + product.stock,
        0
    );

    const totalRating = products.reduce(
        (sum, product) => sum + product.rating,
        0
    );

    const averageRating = totalRating / totalProducts;

    return {
        totalProducts,
        averagePrice,
        highestPrice,
        lowestPrice,
        totalStock,
        averageRating
    };
}

console.log(getStatistics(products));
