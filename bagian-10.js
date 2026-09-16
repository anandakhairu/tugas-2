function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}


const categoryFreq = countFrequency(products.map(p => p.category));
const allTagsFlat = nestedProducts.flatMap(p => p.tags);
const tagFreq = countFrequency(allTagsFlat);
const ratingFreq = countFrequency(products.map(p => Math.round(p.rating)));

console.log("Frekuensi Kategori:", categoryFreq);
console.log("Frekuensi Tag:", tagFreq);
console.log("Frekuensi Rating:", ratingFreq);