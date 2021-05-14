export async function getCategories() {
  // Implemente aqui
  const returnCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
  const dataCat = await returnCategories.json()
  return dataCat
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const returnProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
  const dataProd = await returnProducts.json()
  return dataProd
}
