export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await request.json();
  return response;
}

export async function getQuery(query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const response = await request.json();
  return response;
}

export async function getProductsById(id) {
  const returnRequest = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${id}`);
  const returnJson = await returnRequest.json();
  return returnJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = request.json();
  return response;
}
