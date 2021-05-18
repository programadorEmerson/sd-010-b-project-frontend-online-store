export async function getCategories() {
  // Implemente aqui
  const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  return fetch(URL)
    .then((result) => result.json())
    .catch((error) => { console.log(`Erro na requisição: ${error}`); });
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(URL)
    .then((result) => result.json())
    .catch((error) => { console.log(`Erro na requisição: ${error}`); });
}

export async function getProductsFromId(productId) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const URL = `https://api.mercadolibre.com/items/${productId}`;
  return fetch(URL)
    .then((result) => result.json())
    .catch((error) => { console.log(`Erro na requisição: ${error}`); });
}
