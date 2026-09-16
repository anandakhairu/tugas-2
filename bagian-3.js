//3.1 Mengambil Semua Tag
const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",
        tags: ["computer", "electronics", "office"],
        dimensions: {
            width: 30,
            height: 2,
            depth: 20
        },
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
        dimensions: {
            width: 7,
            height: 0.8,
            depth: 15
        },
        reviews: [
            { user: "C", rating: 4, comment: "Nice camera" },
            { user: "D", rating: 5, comment: "Fast" },
            { user: "E", rating: 3, comment: "Battery so-so" }
        ]
    }
];
const allTags = products.map(product => product.tags);

console.log(allTags);

//3.2 Mencari Produk berdasarkan Tag
function findProductsByTag(products, tag) {
    return products.filter(product => product.tags.includes(tag));
}

console.log(findProductsByTag(products, "electronics"));

//3.3 Menghitung Jumlah Review Setiap Produk
const reviewCounts = products.map(product => ({
    id: product.id,
    title: product.title,
    totalReviews: product.reviews.length
}));

console.log(reviewCounts);

//3.4 Mengumpulkan Review dengan Rating 5
const fiveStarReviews = products.flatMap(product =>
    product.reviews.filter(review => review.rating === 5)
);

console.log(fiveStarReviews);

//3.5 Menghitung Rata-Rata Rating Review
const averageRatings = products.map(product => {
    const total = product.reviews.reduce(
        (sum, review) => sum + review.rating,
        0
    );

    return {
        id: product.id,
        title: product.title,
        averageRating: total / product.reviews.length
    };
});

console.log(averageRatings);

//3.6 Produk dengan Jumlah Review Terbanyak
const mostReviewedProduct = products.reduce((max, product) =>
    product.reviews.length > max.reviews.length ? product : max
);

console.log(mostReviewedProduct);

//3.7 Mengumpulkan Semua Rating Review
const allRatings = products.flatMap(product =>
    product.reviews.map(review => review.rating)
);

console.log(allRatings);
