import React, { Component } from 'react';
import CartItemCheckout from './CartItemCheckout';
import * as dataLocalStorage from '../../services/dataLocalStorage';

class CartProducts extends Component {
  showTotalPurchase = () => {
    const products = dataLocalStorage.getLocalStorage('dataShoppingCart');
    const totalPurchase = products.reduce((acc, { quantity, price }) => {
      let total = acc;
      total += quantity * price;
      return total;
    }, 0);

    return (
      <p>
        Total: R$
        { totalPurchase }
      </p>);
  }

  render() {
    const products = dataLocalStorage.getLocalStorage('dataShoppingCart');
    return (
      <div>
        { products.map((product) => (
          <CartItemCheckout key={ product.id } cartProduct={ product } />
        ))}
        {this.showTotalPurchase()}
      </div>
    );
  }
}

export default CartProducts;
