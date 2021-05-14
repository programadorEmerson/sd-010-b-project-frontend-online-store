import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  render() {
    const { cart } = this.props;
    const emptyCart = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    return <div>{cart.length < 1 ? emptyCart : ' '}</div>;
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf,
}.isRequired;

export default ShoppingCart;
