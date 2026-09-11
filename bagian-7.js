function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

const sortedProductsByPrice = [...products].sort((a, b) => a.price - b.price);

function binarySearchByPrice(sortedProducts, targetPrice) {
  let left = 0;
  let right = sortedProducts.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedProducts[mid].price === targetPrice) return sortedProducts[mid];
    if (sortedProducts[mid].price < targetPrice) left = mid + 1;
    else right = mid - 1;
  }
  return null;
}

console.log("Cari Produk Harga 800 (Binary):", binarySearchByPrice(sortedProductsByPrice, 800));