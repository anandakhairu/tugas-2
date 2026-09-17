export function renderProducts(products) {
    const container = document.querySelector("#products");

    if (products.length === 0) {
        container.innerHTML = "<p>Produk tidak ditemukan.</p>";
        return;
    }

    container.innerHTML = products.map(product => `
        <div class="product">
            <img
                src="${product.thumbnail}"
                alt="${product.title}"
                width="150"
            >

            <h3>${product.title}</h3>

            <p>Price: $${product.price}</p>

            <p>Category: ${product.category}</p>

            <p>Rating: ${product.rating}</p>

            <p>Stock: ${product.stock}</p>
        </div>

        <hr>
    `).join("");
}


export function renderStatistics(statistics) {
    const container =
        document.querySelector("#statistics");

    container.innerHTML = `
        <p>Total Products: ${statistics.totalProducts}</p>

        <p>
            Average Price:
            $${statistics.averagePrice.toFixed(2)}
        </p>

        <p>Total Stock: ${statistics.totalStock}</p>

        <p>
            Average Rating:
            ${statistics.averageRating.toFixed(2)}
        </p>
    `;
}


export function renderCategories(products) {
    const select =
        document.querySelector("#category");

    const categories = [
        ...new Set(products.map(product => product.category))
    ];

    select.innerHTML = `
        <option value="all">All Categories</option>

        ${categories.map(category => `
            <option value="${category}">
                ${category}
            </option>
        `).join("")}
    `;
}


export function renderStatus(status) {
    const statusElement =
        document.querySelector("#status");

    if (status === "loading") {
        statusElement.textContent = "Loading...";
    } else if (status === "error") {
        statusElement.textContent =
            "Gagal mengambil data.";
    } else {
        statusElement.textContent = "";
    }
}