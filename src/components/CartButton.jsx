import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartButton extends Component {
  render() {
    return (
      <div>
        <Link to="/Cart" data-testid="shopping-cart-button">Cart</Link>
      </div>
    );
  }
}

export default CartButton;
