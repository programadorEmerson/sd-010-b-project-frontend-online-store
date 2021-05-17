export async function getCategories() {
  // Implemente aqui
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesJSON = await categories.json();
  return categoriesJSON;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const products = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const productsJSON = await products.json();
  return productsJSON;
}

export async function getProducById(id) {
  const product = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const productJSON = await product.json();
  return productJSON;
}
