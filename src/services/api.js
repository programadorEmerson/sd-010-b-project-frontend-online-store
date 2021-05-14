export async function getCategories() {
  // const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  // const result = await response.json();
  // return result;
  return fetch('https://api.mercadolibre.com/sites/MLB/categories%27')
    .then((response) => response.json())
    .then((data) => data);
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  // const result = await response.json();
  // return result;
  return fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((response) => response.json())
    .then((data) => data);
}
