import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCart extends Component {
  render() {
    const {
      product: { title, quant },
    } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p data-testid="shopping-cart-product-quantity">{quant}</p>
      </div>
    );
  }
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    quant: PropTypes.number,
  }).isRequired,
};

export default ProductCart;
