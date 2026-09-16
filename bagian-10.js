//10.1
function countFrequency(array) {
    return array.reduce((counts, item) => {
        counts[item] = (counts[item] || 0) + 1;
        return counts;
    }, {});
}

const words = [
    "laptop",
    "phone",
    "laptop",
    "tablet",
    "phone",
    "laptop"
];

console.log(countFrequency(words));

//10.2 Frekuensi category:
const categoryFrequency = countFrequency(
    products.map(product => product.category)
);

console.log(categoryFrequency);

//10.2 Frekuensi tag:
const tagFrequency = countFrequency(
    products.flatMap(product => product.tags)
);

console.log(tagFrequency);
