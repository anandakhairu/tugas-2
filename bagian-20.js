function getStatisticsRefactored(products) {
  if (!products?.length) return {};
  const totalProducts = products.length;
  const totalPrice = products.reduce((sum, { price }) => sum + price, 0);
  const averagePrice = totalPrice / totalProducts;
  const totalStock = products.reduce((sum, { stock }) => sum + stock, 0);
  const totalRating = products.reduce((sum, { rating }) => sum + rating, 0);
  const averageRating = totalRating / totalProducts;

  return {
    totalProducts,
    averagePrice,
    highestPrice: Math.max(...products.map(({ price }) => price)),
    lowestPrice: Math.min(...products.map(({ price }) => price)),
    totalStock,
    averageRating
  };
}