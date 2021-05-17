export async function getCategories() {
  return fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((fetchReturn) => fetchReturn.json())
    .catch((error) => error);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((fetchReturn) => fetchReturn.json())
    .catch((error) => error);
}

export async function getProductsFromQuery(query) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
    .then((fetchReturn) => fetchReturn.json())
    .catch((error) => error);
}

export async function getProductsCategories(categoriesId) {
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoriesId}`)
    .then((fetchReturn) => fetchReturn.json())
    .catch((error) => error);
}