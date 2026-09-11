function bubbleSort(numbers) {
  const arr = [...numbers];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log("Bubble Sort Manual:", bubbleSort([5, 3, 8, 1]));

function sortProducts(products, sortBy) {
  const sorted = [...products];

  if (sortBy === "price-asc") {
    return sorted.sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-desc") {
    return sorted.sort((a, b) => b.price - a.price);
  } else if (sortBy === "rating") {
    return sorted.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === "title") {
    return sorted.sort((a, b) => a.title.localeCompare(b.title));
  }

  return sorted;
}

console.log("Sort by Rating:", sortProducts(products, "rating"));