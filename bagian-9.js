function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}

const groupedProducts = groupByCategory(products);
console.log("Grouped Products:", groupedProducts);


console.table(
  Object.keys(groupedProducts).map(cat => ({
    Category: cat,
    TotalProducts: groupedProducts[cat].length
  }))
);