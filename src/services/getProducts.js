export default async function getProductById(id) {
  const request = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const product = request.json();
  return product;
}
