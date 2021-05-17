import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCart from '../components/ProductCart';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.renderList = this.renderList.bind(this);
    this.renderIsEmpty = this.renderIsEmpty.bind(this);
  }

  renderList() {
    const { cart, increaseProduct } = this.props;
    return cart.map((product, index) => (
      <ProductCart
        increaseProduct={ increaseProduct }
        key={ `${product.title} - ${index}` }
        product={ product }
      />
    ));
  }

  renderIsEmpty() {
    return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
  }

  render() {
    const { cart } = this.props;
    return <div>{cart.length < 1 ? this.renderIsEmpty() : this.renderList()}</div>;
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf,
  increaseProduct: PropTypes.func.isRequired,
}.isRequired;

export default ShoppingCart;
