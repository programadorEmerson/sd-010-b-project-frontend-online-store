import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const {
      product: { title, qtd },
    } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p data-testid="shopping-cart-product-quantity">{qtd}</p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    qtd: PropTypes.number,
  }).isRequired,
};

export default ProductCard;
