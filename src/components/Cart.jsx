import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartProducts: [],
    };

    this.emptyCart = this.emptyCart.bind(this);
  }

  emptyCart() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  render() {
    const { cartProducts } = this.state;
    const { lastClickedItem } = this.props;
    console.log(this.props)
    if (cartProducts.length === 0) return this.emptyCart();

    return (
      <p>Carrinho cheio</p>
    );
  }
}

export default Cart;
