export async function getCategories() {
  try {
    return (
      await fetch('https://api.mercadolibre.com/sites/MLB/categories')
        .then((response) => response.json())
    );
  } catch (error) {
    console.log(error);
  }
}
// https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY
export async function getProductsFromCategoryAndQuery(catId, query) {
  try {
    return (
      await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${catId}&q=${query}`)
        .then((response) => response.json())
    );
  } catch (error) {
    console.log(error);
  }
}
