import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="item-container">
        <div className="info-wrap">
          <img src={ product.product.thumbnail } alt="" width="120px" />
          <p data-testid="shopping-cart-product-name">{ product.product.title }</p>
        </div>
        <div className="quantity">
          <span data-testid="shopping-cart-product-quantity">{ product.quantity }</span>
        </div>
        <div className="prices">
          <p>{ `R$ ${product.product.price}` }</p>
        </div>
      </div>
    );
  }
}

ItemCard.propTypes = {
  product: PropTypes.shape({
    product: PropTypes.shape(),
    quantity: PropTypes.number,
  }).isRequired,
};
