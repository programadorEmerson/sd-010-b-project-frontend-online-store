import React from 'react';

class Cart extends React.Component {
  render() {
    const a = this.props;
    console.log(a);
    // const { product: { title, thumbnail, price, id } } = this.props;
    return (<p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
  }
}

export default Cart;
