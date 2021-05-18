export default async function getProductById(id) {
  const product = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const productJSON = await product.json();
  return productJSON;
}
