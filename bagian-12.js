function buildProductLookup(products) {
  const productMap = new Map();
  for (const product of products) {
    productMap.set(product.id, product);
  }
  return productMap;
}

const productLookup = buildProductLookup(products);
console.log("Lookup ID 10:", productLookup.get(10));