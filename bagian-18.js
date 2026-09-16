const state = {
  products: [],
  search: "",
  category: "all",
  sortBy: "default",
  favorites: [],
  status: "idle"
};

function render() {
  let filtered = [...state.products];
  if (state.category !== "all") {
    filtered = filtered.filter(p => p.category === state.category);
  }
  if (state.search) {
    filtered = filtered.filter(p => p.title.toLowerCase().includes(state.search.toLowerCase()));
  }
  renderProducts(filtered);
}