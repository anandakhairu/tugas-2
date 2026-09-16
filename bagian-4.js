//latihan 4.1
const allTags = products.flatMap(product => product.tags);

console.log(allTags);

//latihan 4.2
const allComments = products.flatMap(product =>
    product.reviews.map(review => review.comment)
);

console.log(allComments);
