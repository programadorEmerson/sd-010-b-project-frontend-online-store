export async function getCategories() {
  const response = await fetch('https://github.com/tryber/sd-010-b-project-frontend-online-store');
  const result = response.json();
  console.log(result);
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
