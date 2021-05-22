import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  render() {
    const { product: { id, title, price, thumbnail, quantity = 1 } } = this.props;
    return (
      <div data-testid="shopping-cart-product-name">
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img className="img" src={ thumbnail } alt={ title } />
        <p>{ id }</p>
        <p>{ price }</p>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade:
          { quantity }
        </p>
      </div>
    );
  }
}

CartItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  thumbnail: PropTypes.string,
}.isRequired;

export default CartItem;
