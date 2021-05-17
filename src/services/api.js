export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const categories = await fetch(url);
  const resposta = await categories.json();
  return resposta;
}

export async function getProductsFromCategoryAndQuery(categoryId = null, query = '') {
  const endpointQuery = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const endpointCategoryId = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const endpointCategoryIdQuery = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  let endpoints;
  if (categoryId === null && query !== '') {
    endpoints = endpointQuery;
  }
  if (categoryId !== null && query === '') {
    endpoints = endpointCategoryId;
  }
  if (categoryId !== null && query !== '') {
    endpoints = endpointCategoryIdQuery;
  }

  const products = await fetch(endpoints);
  const resposta = await products.json();

  return resposta;
}
