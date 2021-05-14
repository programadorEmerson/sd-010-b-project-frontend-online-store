import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  render() {
    return (
      <div>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Link data-testid="shopping-cart-button" to="/checkout">Compra</Link>
      </div>
    );
  }
}

export default ShoppingCart;
