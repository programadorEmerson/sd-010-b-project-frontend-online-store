async function getProductById(productId) {
  const fetchId = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const product = await fetchId.json();
  return product;
}

export default getProductById;
