import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Style/Cart.css';

class CartButton extends Component {
  render() {
    return (
      <div className="cart-button">
        <Link
          to="/Cart"
          className="cart-link"
          data-testid="shopping-cart-button"
        >
          Cart
        </Link>
      </div>
    );
  }
}

export default CartButton;
