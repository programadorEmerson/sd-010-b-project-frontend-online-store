import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCart extends Component {
  render() {
    const {
      product: { title, quant, id },
      increaseProduct,
    } = this.props;
    console.log(increaseProduct);
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => increaseProduct(id) }
        >
          +
        </button>
        <button type="button" data-testid="product-decrease-quantity">+</button>
        <p data-testid="shopping-cart-product-quantity">{quant}</p>
      </div>
    );
  }
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    quant: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
  increaseProduct: PropTypes.func.isRequired,
};

export default ProductCart;
