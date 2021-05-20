import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { product, addCart, removeItemCart, removeCart } = this.props;
    const { title, price, thumbnail, countItems } = product;

    return (
      <div className="product-card">
        <p data-testid="shopping-cart-product-name">{title}</p>
        <img src={ thumbnail } alt={ title } />
        <p>
          R$
          { price }
        </p>

        <button
          type="button"
          data-testid="product-increase-quantity"
          onClick={ () => addCart(product) }
        >
          +
        </button>
        <button
          type="button"
          data-testid="product-decrease-quantity"
          onClick={ () => removeItemCart(product) }
        >
          -
        </button>
        <button type="button" onClick={ () => removeCart(product) }>X</button>
        <p data-testid="shopping-cart-product-quantity">
          { `Quantidade de itens: ${countItems}` }
        </p>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf({
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    countItems: PropTypes.number.isRequired,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  removeItemCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
};

export default ProductCard;
