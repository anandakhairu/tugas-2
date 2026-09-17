export function renderProducts(products) {
    const container = document.querySelector("#products");

    container.innerHTML = products.map(product => `
        <div>
            <h3>${product.title}</h3>
            <p>Kategori: ${product.category}</p>
            <p>Harga: Rp${product.price}</p>
        </div>
    `).join("");
}