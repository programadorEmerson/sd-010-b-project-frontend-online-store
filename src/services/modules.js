let arrayCart = [];
let arrReviews = [];

export const addProductCart = (item) => {
  const itemProduct = { ...item, qty: 1 };
  arrayCart = [...arrayCart, itemProduct];
  console.log(arrayCart);
};

export const handleAmount = (prod, bool) => {
  if (bool) {
    arrayCart = arrayCart.map((elem) => (elem.id === prod.id
      ? { ...elem, qty: elem.qty + 1 } : elem));
  } else {
    arrayCart = arrayCart.map((elem) => (elem.id === prod.id
      ? { ...elem, qty: elem.qty - 1 } : elem));
  }
};

export const handleDelete = (prod) => {
  arrayCart = arrayCart.filter((item) => item.id !== prod.id);
  console.log(arrayCart);
};

// export const handleQuantity = () => {
//   return arrayCart.reduce((total, item) => {
//     total += item.price * item.qty;
//     return total;
//   }, 0);
// };

export const setReview = (obj) => {
  arrReviews = [...arrReviews, obj];
  console.log(arrReviews);
};

export const getReviews = (id) => {
  const product = arrReviews.filter((item) => item.id === id);
  return product;
};

export const getCartState = () => arrayCart;

export const getLength = () => {
  const reduceArr = arrayCart.reduce((total, item) => {
    total += item.qty;
    return total;
  }, 0);

  return reduceArr;
};

export const handleTotalCart = () => {
  const reduceTotalPrice = arrayCart.reduce((total, item) => {
    total += item.price * item.qty;
    return total;
  }, 0);

  return reduceTotalPrice;
};
