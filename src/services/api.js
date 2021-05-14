export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestObj = await request.json();
  return requestObj;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const reqCat = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId.id}&q=${query.query}`);
  const reqCatObj = await reqCat.json();
  return reqCatObj;
}
