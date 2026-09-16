const uniqueCategories = [...new Set(products.map(p => p.category))];
const uniqueTags = [...new Set(nestedProducts.flatMap(p => p.tags))];

console.log("Unique Categories:", uniqueCategories);
console.log("Unique Tags:", uniqueTags);