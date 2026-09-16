//9.1
function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const key = product.category;

        if (!groups[key]) {
            groups[key] = [];
        }

        groups[key].push(product);

        return groups;
    }, {});
}

const groupedProducts = groupByCategory(products);

console.log(groupedProducts);

//9.2
const categorySummary = Object.entries(groupedProducts).map(
    ([category, products]) => ({
        category: category,
        totalProducts: products.length
    })
);

console.table(categorySummary);
