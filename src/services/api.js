export async function getCategories() {
  const request = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestObj = await request.json();
  return requestObj;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId === '') {
    const reqQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const reqQueryObj = await reqQuery.json();
    return reqQueryObj;
  }
  if (query === '') {
    const reqId = await fetch(`https://api.mercadolibre.com/items?ids=${categoryId}`);
    const reqIdObj = await reqId.json();
    return reqIdObj;
  }
  const reqCat = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId.id}&q=${query.query}`);
  const reqCatObj = await reqCat.json();
  return reqCatObj;
}

export async function getProductsByQuery(query) {
  const reqQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const reqQueryObj = await reqQuery.json();
  return reqQueryObj;
}

// export async function getProductsByQuery(query) {
//   fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`)
//     .then((data) => data.json())
//     .then((result) => result.results)
// }
