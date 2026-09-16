//11.1 Unique Category
const uniqueCategories = [
    ...new Set(products.map(product => product.category))
];

console.log(uniqueCategories);
//11.1 Unique Brand
const uniqueBrands = [
    ...new Set(products.map(product => product.brand))
];

console.log(uniqueBrands);
//11.1 Unique Tags
const uniqueTags = [
    ...new Set(products.flatMap(product => product.tags))
];

console.log(uniqueTags);
