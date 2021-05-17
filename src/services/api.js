export async function getCategories() {
  // Implemente aqui
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const allCategories = request.json();
  return allCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}_ID&q=$${query}`);
  const searchByCategoryAndQuery = request.json();
  return searchByCategoryAndQuery;
}

export async function getProductsFromQuery(query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=$${query}`);
  const searchByQuery = request.json();
  return searchByQuery;
}
