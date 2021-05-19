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
