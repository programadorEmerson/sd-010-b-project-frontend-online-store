export async function getCategories() {
  const fetchApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((response) => response.json());
  return fetchApi;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchApiCategory = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
  return fetchApiCategory;
}
