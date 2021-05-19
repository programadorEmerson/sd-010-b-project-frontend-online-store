export function shoppingCardProductAdd(productParameter) {
  if (localStorage.getItem('dataShoppingCart') === null) {
    localStorage.setItem('dataShoppingCart', JSON.stringify([productParameter]));
  } else {
    const products = JSON.parse(localStorage.getItem('dataShoppingCart'));
    const { id } = productParameter;
    const existsInProduct = products.find((product) => product.id === id);

    if (!existsInProduct) {
      products.push(productParameter);
    } else {
      products.forEach((product) => {
        if (product.id === id) product.quantity += 1;
      });
    }

    localStorage.setItem('dataShoppingCart', JSON.stringify(products));
  }
}

export function shoppingCardProductUpdate(productParameter) {
  localStorage.setItem('dataShoppingCart', JSON.stringify(productParameter));
}

export function addLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function removeLocalStorage(key) {
  localStorage.removeItem(key);
}

export function clearLocalStorage() {
  localStorage.clear();
}
