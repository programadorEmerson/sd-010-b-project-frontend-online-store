import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCartFinal extends Component {
  constructor() {
    super();
    this.state = {
      itensCart: false,
      ForcedRender: '',
    };
  }

  componentDidMount() {
    this.fillItensCart();
  }

  countItens = (value) => {
    const onlyItens = [...new Set([...value])];
    return onlyItens.map((item) => ({
      item,
      quanty: value.filter((v) => v === item).length,
    }));
  }

  fillItensCart = () => {
    const value = JSON.parse(localStorage.getItem('cartItems'));
    const itensCart = !value ? false : this.countItens(value);
    this.setState({ itensCart });
  }

  forceRender = () => {
    this.setState({ ForcedRender: '' });
  }

  render() {
    const { itensCart, ForcedRender } = this.state;
    return (
      <main>
        { ForcedRender }
        { itensCart
          ? itensCart.map(({ item, quanty }) => (
            <div key={ item }>
              <p>
                Quantidade:
                <span data-testid="shopping-cart-product-quantity">
                  {quanty}
                </span>
                <span data-testid="shopping-cart-product-name">
                  { item }
                </span>
              </p>
            </div>))
          : <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>}
        <Link to="/">Home</Link>
      </main>
    );
  }
}

export default ShoppingCartFinal;
