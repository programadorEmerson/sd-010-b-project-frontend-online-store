import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// import shoppingCartSVG from '../icons/shopping_cart_black_24dp.svg';

class CartButton extends Component {
  render() {
    return (
      <Link
        to="/shopping-cart"
        data-testid="shopping-cart-button"
      >
        <button type="button" className="cart-button" aria-label="Shopping Cart" />
      </Link>
    );
  }
}

export default CartButton;
