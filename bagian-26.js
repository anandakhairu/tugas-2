async function initApp() {
  initEventListeners();
  await fetchProducts();
}

initApp();