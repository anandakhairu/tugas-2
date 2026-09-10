const nestedProducts = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];

//soal 1
const allTagsNested = nestedProducts.map(p => p.tags);
console.log(allTagsNested);

//soal 2
function findProductsByTag(products, tag) {
  return products.filter(p => p.tags.includes(tag));
}
console.log(findProductsByTag(nestedProducts, "mobile"));

//soal 3
const reviewCounts = nestedProducts.map(p => ({
  id: p.id,
  title: p.title,
  totalReviews: p.reviews.length
}));
console.log(reviewCounts);

//soal 4
const topReviews = nestedProducts.flatMap(p => p.reviews).filter(r => r.rating === 5);
console.log(topReviews);

//soal 5
const calculatedRatings = nestedProducts.map(p => {
  const total = p.reviews.reduce((sum, r) => sum + r.rating, 0);
  const avg = p.reviews.length > 0 ? total / p.reviews.length : 0;
  return {
    id: p.id,
    title: p.title,
    averageRating: avg
  };
});
console.log(calculatedRatings);

//soal 6
const mostReviewedProduct = nestedProducts.reduce((max, p) => 
  p.reviews.length > max.reviews.length ? p : max
, nestedProducts[0]);
console.log(mostReviewedProduct);

//soal 7
const allRatingsFlat = nestedProducts.flatMap(p => p.reviews.map(r => r.rating));
console.log(allRatingsFlat); 