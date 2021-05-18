import React from 'react';

class ShoppingCart extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     products: [],
  //   };
  // }

  // lista = (oldState) => {
  //   const { produto } = this.props;
  //   this.setState({ products: [...oldState, produto] });
  // }

  render() {
    // const { products } = this.state;
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}

export default ShoppingCart;
