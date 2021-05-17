export default async function getItemById(itemId) {
  const endpoint = `https://api.mercadolibre.com/items/${itemId}`;
  const response = await fetch(endpoint);
  return response.json();
}
