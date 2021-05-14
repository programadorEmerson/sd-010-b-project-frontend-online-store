export async function getCategories() {
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories', { method: 'GET' });
  const responseCategories = await categories.json();
  return responseCategories;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
// nada
}
