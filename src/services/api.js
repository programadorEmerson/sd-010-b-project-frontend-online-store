export async function getCategories() {
  const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await fetchCategories.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchCategoriesQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const categoryQuery = await fetchCategoriesQuery.json();
  return categoryQuery;
}

export async function getProductsByQuery(query) {
  const fetchQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const productsQuery = await fetchQuery.json();
  return productsQuery;
}
