function countLinearSearchSteps(arr, target) {
  let steps = 0;
  for (let i = 0; i < arr.length; i++) {
    steps++;
    if (arr[i] === target) return steps;
  }
  return steps;
}

function countBinarySearchSteps(arr, target) {
  let steps = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    steps++;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return steps;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return steps;
}


function findPairsNested(products) {
  const pairs = [];
  for (let i = 0; i < products.length; i++) {
    for (let j = i + 1; j < products.length; j++) {
      if (products[i].category === products[j].category) {
        pairs.push([products[i], products[j]]);
      }
    }
  }
  return pairs;
}

function findPairsMap(products) {
  const map = new Map();
  for (const p of products) {
    if (!map.has(p.category)) map.set(p.category, []);
    map.get(p.category).push(p);
  }
  return map;
}