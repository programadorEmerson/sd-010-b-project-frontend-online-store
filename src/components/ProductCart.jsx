import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCart extends Component {
  render() {
    const {
      product: { title, quant, id, available, thumbnail },
      updateQuant,
    } = this.props;
    const checkLength = quant <= 0 ? null : true;
    const checkQuant = quant >= available;

    return (
      <div className="cart-item">
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail } alt={ title } />
        <div className="quant-btns">
          <button
            type="button"
            data-testid="product-increase-quantity"
            onClick={ () => updateQuant(id, true) }
            disabled={ checkQuant }
          >
            +
          </button>
          <button
            type="button"
            onClick={ () => updateQuant(id, false) }
            data-testid="product-decrease-quantity"
            disabled={ !checkLength }
          >
            -
          </button>
        </div>
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
    available: PropTypes.number,
    thumbnail: PropTypes.string,
  }).isRequired,
  updateQuant: PropTypes.func.isRequired,
};

export default ProductCart;
