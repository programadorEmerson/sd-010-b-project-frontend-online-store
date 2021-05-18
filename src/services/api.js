export async function getCategories() {
  // Implemente aqui
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const allCategories = request.json();
  return allCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  if (categoryId && !query) {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const searchByCategory = await request.json();
    return searchByCategory;
  }

  if (query && !categoryId) {
    const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const searchByCategory = await request.json();
    return searchByCategory;
  }

  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const searchByCategoryAndQuery = request.json();
  return searchByCategoryAndQuery;
}
