function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

function linearSearchById(products, targetId) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].id === targetId) return products[i];
  }
  return null;
}

console.log("Cari ID 3 (Linear):", linearSearchById(products, 3));