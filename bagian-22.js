const checkDataPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) resolve("Data berhasil diambil");
  else reject("Terjadi error");
});

checkDataPromise
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => console.log("Selesai, apa pun hasilnya"));


// ==========================================
// BAGIAN 23 & 24: ASYNC/AWAIT & FETCH API (DUMMYJSON)
// ==========================================
// Latihan 24.1: Fetch Products, Simpan ke State, Render ke DOM + Handling Status
async function fetchProducts() {
  state.status = "loading";
  renderStatusUI(); // Menampilkan pesan loading

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
    render(); // Render hasil produk atau tampilan error
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