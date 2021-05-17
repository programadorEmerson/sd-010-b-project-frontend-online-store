export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(url).then((categories) => categories.json());
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(url).then((products) => products.json());
}

// export async function getProductsFromQuery(query) {
//   const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
//   return fetch(url).then((products) => products.json());
// }
