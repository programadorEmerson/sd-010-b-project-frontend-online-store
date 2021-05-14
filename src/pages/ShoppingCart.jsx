import React from 'react';

class ShoppingCart extends React.Component {
  render() {
    return (
      <section>
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
      </section>
    );
  }
}

export default ShoppingCart;
