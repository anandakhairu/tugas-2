const laptopPrices = products
  .filter(p => p.category === "laptops")
  .map(p => p.price);

const avgLaptopPrice = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;
console.log("Rata-rata Harga Laptop:", avgLaptopPrice);


function getStatistics(products) {
  if (products.length === 0) return {};

  const totalProducts = products.length;
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
  const averagePrice = totalPrice / totalProducts;

  const highestPrice = Math.max(...products.map(p => p.price));
  const lowestPrice = Math.min(...products.map(p => p.price));

  const totalRating = products.reduce((sum, p) => sum + p.rating, 0);
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

console.log("Statistik Produk:", getStatistics(products));