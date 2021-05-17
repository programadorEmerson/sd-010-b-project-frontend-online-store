import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <button type="button">
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
        >
          Shopping Cart
        </Link>
      </button>
    );
  }
}

export default CartButton;
