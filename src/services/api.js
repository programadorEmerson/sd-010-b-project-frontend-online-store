export async function getCategories() {
  const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(endPoint);
  const categories = response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(endPoint);
  const productsByCategory = response.json();
  return productsByCategory;
}

// export async function getCategoryById(categoryId) {
//   const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
//   const response = await fetch(endPoint);
//   const categoryById = response.json();
//   return categoryById;
// }
