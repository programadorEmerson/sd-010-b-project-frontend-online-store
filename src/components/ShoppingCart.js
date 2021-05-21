import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      itensCart: false,
      storageProducts: [],
    };
  }

  componentDidMount() {
    this.fillItensCart();
  }

  fillItensCart = () => {
    const value = JSON.parse(localStorage.getItem('cartItems'));
    const itensCart = !value ? false : this.countItens(value);
    this.setState({ itensCart, storageProducts: value });
  }

  countItens = (value) => {
    const onlyItens = [...new Set([...value.map((p) => p.title)])];
    return onlyItens.map((item) => ({
      item,
      quanty: value.filter(({ title }) => title === item).length,
    }));
  }

  increment = (item) => {
    const { storageProducts } = this.state;
    const { increment } = this.props;
    increment();
    storageProducts.push(
      storageProducts.find(({ title }) => title === item),
    );
    localStorage.setItem('cartItems', JSON.stringify(storageProducts));
    this.setState({ itensCart: this.countItens(storageProducts) });
  }

  decrament = (item) => {
    const { storageProducts } = this.state;
    const { decrement } = this.props;
    decrement();
    for (let i = storageProducts.length - 1; i >= 0; i -= 1) {
      if (item === storageProducts[i].title) {
        storageProducts.splice(i, 1);
        break;
      }
    }
    localStorage.setItem('cartItems', JSON.stringify(storageProducts));
    const itensCart = storageProducts.length === 0
      ? false : this.countItens(storageProducts);
    this.setState({ itensCart });
  }

  render() {
    const { itensCart } = this.state;
    return (
      <main>
        <Link data-testid="checkout-products" to="/checkout">Finalizar Compra</Link>
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

ShoppingCart.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

export default ShoppingCart;
