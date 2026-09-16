//12.1
function buildProductLookup(products) {
    const productMap = new Map();

    for (const product of products) {
        productMap.set(product.id, product);
    }

    return productMap;
}
const productLookup = buildProductLookup(products);

console.log(productLookup);
const product = productLookup.get(2);

console.log(product);

console.log(productLookup.has(2));
