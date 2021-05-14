import React from 'react';
import { Link } from 'react-router-dom';

class Cart extends React.Component {
  render() {
    return (
      <div>
        <h1 data-testid="shopping-cart-empty-message"> Seu carrinho está vazio </h1>
        <Link to="/"> home </Link>
      </div>
    );
  }
}

export default Cart;
