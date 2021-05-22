import React, { Component } from 'react';
import '../Style/Cart.css';

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <p
          className="cart-link"
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </p>
      </div>
    );
  }
}

export default Cart;
