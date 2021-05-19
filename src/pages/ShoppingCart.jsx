import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  componentDidMount = () => {
    this.getLocalstorage();
  }

  getLocalstorage = () => {
    this.setState({
      products: JSON.parse(localStorage.getItem('cartProducts')),
    });
  }

  render() {
    const { products } = this.state;
    return (
      <section>
        <h1>Carrinho de Compras</h1>
        { products
          ? products.map(({ title, imgUrl, price }) => (
            <section key={ title }>
              <p data-testid="shopping-cart-product-name">{title}</p>
              <img src={ imgUrl } alt={ title } width="150px" />
              <p>{price}</p>
              <span data-testid="shopping-cart-product-quantity">
                <button type="button">
                  +
                </button>
                1
                <button type="button">
                  -
                </button>
              </span>
            </section>
          ))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({}),
  }).isRequired,
};

export default ShoppingCart;
