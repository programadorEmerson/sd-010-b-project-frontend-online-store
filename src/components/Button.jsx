import React from 'react';
import { Link } from 'react-router-dom';

class Button extends React.Component {
  render() {
    return (
      <button
        type="button"
      >
        <Link data-testid="shopping-cart-button" to="/ShoppingCart">Carrinho</Link>
      </button>
    );
  }
}

export default Button;
