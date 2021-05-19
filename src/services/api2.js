async function getProductById(id) {
  const productId = await fetch(`https://api.mercadolibre.com/items?ids=${id}`, { method: 'GET' });
  const responseproductId = await productId.json();
  return responseproductId;
}

export default getProductById;
