export async function getCategories() {
  // Implemente aqui
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categories = await fetch(url);
  const resposta = await categories.json();
  return resposta;
}

export async function getProductsFromCategoryAndQuery(categoryId = null, query = null) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const endpointQuery = `https://api.mercadolibre.com/sites/MLB/search?q=$${query}`;
  const endpointCategoryId = `https://api.mercadolibre.com/sites/MLB/search?q=$${categoryId}`;
  const endpointCategoryIdQuery = `https://api.mercadolibre.com/sites/MLB/search?category=$${categoryId}&q=$${query}`;

  // const endpoits = [endpointQuery, endpointCategoryId, endpointCategoryIdQuery];
  let endpoints = null;

  if (categoryId === null && query !== null) {
    endpoints = endpointQuery;
  }
  if (categoryId !== null && query === null) {
    endpoints = endpointCategoryId;
  }
  if (categoryId === null && query === null) {
    endpoints = endpointCategoryIdQuery;
  }

  const products = await fetch(endpoints);
  const resposta = await products.json();

  return resposta;
}
