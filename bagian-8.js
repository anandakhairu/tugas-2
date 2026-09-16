//8.1
function bubbleSort(numbers) {
    const arr = [...numbers];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] =
                [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

const numbers = [5, 3, 8, 1, 4];

console.log(bubbleSort(numbers));

//8.2
function sortProducts(products, sortBy) {
    const result = [...products];

    switch (sortBy) {
        case "price-asc":
            return result.sort((a, b) => a.price - b.price);

        case "price-desc":
            return result.sort((a, b) => b.price - a.price);

        case "rating":
            return result.sort((a, b) => b.rating - a.rating);

        case "title":
            return result.sort((a, b) =>
                a.title.localeCompare(b.title)
            );

        default:
            return result;
    }
}
