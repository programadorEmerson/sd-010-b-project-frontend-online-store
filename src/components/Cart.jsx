import React, { Component } from 'react';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.emptyCart = this.emptyCart.bind(this);

    this.state = {
      cartItensID: [],
    };
  }

  // componentDidMount() {
  //   this.updateState();
  // }

  // updateState() {
  //   const savedItensID = localStorage.getItem('cartItens');
  //   this.setState({
  //     cartItensID: savedItensID,
  //   });
  // }

  emptyCart() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  render() {
    if (localStorage.getItem('cartItens').length === 0) return this.emptyCart();

    return (
      <p>Carrinho cheio</p>
    );
  }
}

export default Cart;
