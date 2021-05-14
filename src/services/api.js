export async function getCategories() {
  return fetch(test)
    .then((fetchReturn) => fetchReturn.json())
    .catch((error) => error);
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
