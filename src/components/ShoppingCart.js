import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
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

  increment = (item) => {
    const { increment } = this.props;
    const value = JSON.parse(localStorage.getItem('cartItems'));
    value.push(item);
    localStorage.setItem('cartItems', JSON.stringify(value));
    this.setState({ itensCart: this.countItens(value) });
    increment();
  }

  decrament = (item) => {
    const { decrement } = this.props;
    const value = JSON.parse(localStorage.getItem('cartItems'));
    for (let i = value.length - 1; i >= 0; i -= 1) {
      if (item === value[i]) {
        value.splice(i, 1);
        break;
      }
    }
    decrement();
    localStorage.setItem('cartItems', JSON.stringify(value));
    const itensCart = value.length === 0 ? false : this.countItens(value);
    this.setState({ itensCart });
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
              <button
                onClick={ () => this.increment(item) }
                type="button"
                data-testid="product-increase-quantity"
              >
                +
              </button>
              <button
                onClick={ () => this.decrament(item) }
                type="button"
                data-testid="product-decrease-quantity"
              >
                -
              </button>
            </div>))
          : <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>}
        <Link to="/">Home</Link>
      </main>
    );
  }
}

export default ShoppingCart;
