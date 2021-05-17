let arrayCart = [];

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
      ? { ...elem, qty: elem.qty > 0 && elem.qty - 1 } : elem));
  }
};

export const handleDelete = (prod) => {
  arrayCart = arrayCart.filter((item) => item.id !== prod.id);
  console.log(arrayCart);
};

// export const handleQuantity = () => {
//   return arrayCart.reduce((total, item) => {
//     total += item.qty;
//     return total;
//   }, 0);
// };

export const getCartState = () => arrayCart;
