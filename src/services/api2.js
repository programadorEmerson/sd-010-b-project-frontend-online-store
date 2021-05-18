export default async function getProductsFromId(productId) {
  const product = await fetch(
    `https://api.mercadolibre.com/items?ids=${productId}`,
  );
  const response = await product.json();

  return response[0].body;
}
