async function loadProducts() {
  try {
    const products = await getProducts();
    state.products = products;
    state.status = "success";
  } catch (error) {
    state.status = "error";
    console.error(error);
  } finally {
    render();
  }
}