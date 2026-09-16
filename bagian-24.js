async function fetchProducts() {
  state.status = "loading";
  renderStatusUI();

  try {
    const response = await fetch("https://dummyjson.com/products?limit=30");
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    state.products = data.products;
    state.status = "success";
  } catch (error) {
    state.status = "error";
    console.error("Gagal mengambil data:", error);
  } finally {
    render();
  }
}

function renderStatusUI() {
  const container = document.querySelector("#product-list");
  if (!container) return;
  if (state.status === "loading") {
    container.innerHTML = "<p>Loading data produk...</p>";
  } else if (state.status === "error") {
    container.innerHTML = "<p>Gagal memuat data. Periksa koneksi internet Anda.</p>";
  }
}