import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="cart-product-container">
        <img src={ product.product.thumbnail } alt="" width="120px" />
        <p data-testid="shopping-cart-product-name">{ product.product.title }</p>
        <span data-testid="shopping-cart-product-quantity">{ product.quantity }</span>
        <p>{ `R$ ${product.product.price}` }</p>
      </div>
    );
  }
}

ItemCard.propTypes = {
  product: PropTypes.shape({
    product: PropTypes.arrayOf(Object),
    quantity: PropTypes.number,
  }).isRequired,
};
