import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductsReview extends Component {
  render() {
    const { cart } = this.props;
    const magicNumber = 0;
    return (
      <div className="checkout-cart">
        <h3>Revise seus produtos</h3>
        {cart.map((product) => (
          <div key={ product.id }>
            <img src={ product.thumbnail } alt="product" />
            <p>{product.title}</p>
            <p>{product.price * product.quant}</p>
            <p>{product.quant}</p>
          </div>
        ))}
        <p>
          Total:
          {cart.reduce((a, b) => {
            a += b.price * b.quant;
            return a;
          }, magicNumber)}
        </p>
      </div>
    );
  }
}

ProductsReview.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProductsReview;
