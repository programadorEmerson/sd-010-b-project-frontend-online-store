import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShoppingCartPage extends Component {
  render() {
    const { location: { state: { shoppingCart } } } = this.props;
    if (shoppingCart) {
      return (
        <div>
          {shoppingCart.map((productCart) => (
            <div key={ productCart.id } div data-testid="shopping-cart-product-name">
              <h2>{productCart.title}</h2>
            </div>
          ))}
          <p data-testid="shopping-cart-product-quantity">
            <h3>Itens no carrinho:</h3>
            {shoppingCart.length}
          </p>
        </div>
      );
    }

    return (
      <>
        <h1>
          Shopping Cart Page
        </h1>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      </>
    );
  }
}

ShoppingCartPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape(),
    pathname: PropTypes.string.isRequired,
  }),
};

ShoppingCartPage.defaultProps = {
  location: {
    pathname: '',
  },
};
