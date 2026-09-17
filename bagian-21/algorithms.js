export function linearSearch(array, target) {
    return array.filter(product =>
        product.title.toLowerCase().includes(target.toLowerCase())
    );
}

export function groupByCategory(products) {
    return products.reduce((groups, product) => {
        const category = product.category;

        if (!groups[category]) {
            groups[category] = [];
        }

        groups[category].push(product);

        return groups;
    }, {});
}