export default async function getCategories() {
  const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await fetchCategories.json();
  return categories;
}
console.log(getCategories());

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const fetchCategoriesQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const categoryQuery = await fetchCategoriesQuery.json();
  return categoryQuery;
}

console.log(getProductsFromCategoryAndQuery('MLB1384', 'Cadeira'));
