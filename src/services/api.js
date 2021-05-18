export async function getCategories() {
  const categories = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );

  const response = categories.json();

  return response;
}

export async function getAllByTestId(categoryId) {
  const categories = await fetch(
    ` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
  );
  return categories;
}

export async function getProductsFromQuery(query) {
  const categories = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
  );
  return categories;
}

export async function getProductsFromCategoryAndQuery(query, categoryId) {
  let categories = {};
  if (query && categoryId) {
    categories = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
    );
  } else if (!categoryId) categories = await getProductsFromQuery(query);
  else if (!query) categories = await getAllByTestId(categoryId);
  const response = categories.json();
  return response;
}
