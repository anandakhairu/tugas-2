//6.1
function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }

    return -1;
}

const numbers = [10, 20, 30, 40, 50];

console.log(linearSearch(numbers, 30));
console.log(linearSearch(numbers, 70));

//6.2
function searchProductById(products, id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            return products[i];
        }
    }

    return undefined;
}

console.log(searchProductById(products, 2));

