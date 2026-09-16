//16.1 Linear Search vs Binary Search
// linear search
function linearSearchCount(arr, target) {
    let steps = 0;

    for (let i = 0; i < arr.length; i++) {
        steps++;

        if (arr[i] === target) {
            return steps;
        }
    }

    return steps;
}
// binary search
function binarySearchCount(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let steps = 0;

    while (left <= right) {
        steps++;

        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return steps;
        }

        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return steps;
}

const numbers = Array.from(
    { length: 10000 },
    (_, index) => index + 1
);

console.log(linearSearchCount(numbers, 10000));
console.log(binarySearchCount(numbers, 10000));

//16.2 Nested Loop vs Grouping
for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
        if (products[i].category === products[j].category) {
            // pasangan dengan kategori sama
        }
    }
}
const categoryMap = new Map();

for (const product of products) {
    if (!categoryMap.has(product.category)) {
        categoryMap.set(product.category, []);
    }

    categoryMap.get(product.category).push(product);
}
