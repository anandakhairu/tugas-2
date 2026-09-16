function printCategories(categories, depth = 0) {
  for (const category of categories) {
    console.log(" ".repeat(depth * 2) + category.name);
    if (category.children && category.children.length > 0) {
      printCategories(category.children, depth + 1);
    }
  }
}