import React from 'react';

class Checkout extends React.Component {
  render() {
    if (!localStorage.getItem('shoppingCart')) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio </p>;
    }
  }
}

export default Checkout;
