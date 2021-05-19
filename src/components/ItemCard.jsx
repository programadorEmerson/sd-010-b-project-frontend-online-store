import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ItemCard extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="item-container">
        <div className="info-wrap">
          <h4>Produto</h4>
          <div className="description">
          <img src={ product.product.thumbnail } alt="" width="120px" />
          <p data-testid="shopping-cart-product-name">{ product.product.title }</p>
          </div>
        </div>
        <div className="quantity">
          <h4>Quantidade</h4>
          <p data-testid="shopping-cart-product-quantity">{ product.quantity }</p>
        </div>
        <div className="prices">
          <h4>Preço</h4>
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
