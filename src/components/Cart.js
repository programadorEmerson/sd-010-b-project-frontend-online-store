import React from 'react';
import ItemProductCart from './ItemProductCart';

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartItems: JSON.parse(localStorage.getItem('cartState')),
    };
    this.renderCart = this.renderCart.bind(this);
  }

  componentDidUpdate() {
    this.renderCart();
  }

  renderCart() {
    const { cartItems } = this.state;
    if (!cartItems) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      cartItems.map((cartItem, index) => (
        <ItemProductCart cartItem={ cartItem } key={ index + 1 } />
      ))
    );
  }

  render() {
    const { cartItems } = this.state;
    const total = cartItems.length;
    return (
      <div>
        <h1>Carrinho de Compras</h1>
        <p data-testid="shopping-cart-product-quantity">{ total }</p>
        {this.renderCart()}
      </div>
    );
  }
}

export default Cart;
