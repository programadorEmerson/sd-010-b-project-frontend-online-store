export default async function getProducById(id) {
  const product = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const productJSON = await product.json();
  return productJSON;
}
