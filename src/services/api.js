export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((fetchReturn) => fetchReturn.json())
    .catch((error) => error);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  console.log('api');
  console.log(query);
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((fetchReturn) => fetchReturn.json())
    .catch((error) => error);
}
