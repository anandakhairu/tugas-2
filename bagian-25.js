// 25.1 Statistics
// Diproses menggunakan fungsi getStatisticsRefactored yang sudah dibuat sebelumnya.

// 25.2 Category Analytics
function getCategoryAnalytics(products) {
  const grouped = groupByCategory(products);
  return Object.keys(grouped).map(cat => {
    const items = grouped[cat];
    const totalProducts = items.length;
    const avgPrice = items.reduce((sum, p) => sum + p.price, 0) / totalProducts;
    const avgRating = items.reduce((sum, p) => sum + p.rating, 0) / totalProducts;
    const totalStock = items.reduce((sum, p) => sum + p.stock, 0);

    return {
      category: cat,
      totalProducts,
      averagePrice: avgPrice,
      averageRating: avgRating,
      totalStock
    };
  });
}

// 25.3 Product Search dengan Tiga Mode
function exactSearch(products, keyword) {
  return products.filter(p => p.title === keyword);
}

function partialSearch(products, keyword) {
  const lower = keyword.toLowerCase();
  return products.filter(p => p.title.toLowerCase().includes(lower));
}

function caseInsensitiveSearch(products, keyword) {
  return products.filter(p => p.title.toLowerCase() === keyword.toLowerCase());
}