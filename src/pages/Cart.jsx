import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <section>
        <Link to="/">Voltar</Link>
        <header>Carrinho de compras</header>
        <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
      </section>
    );
  }
}
export default Cart;
