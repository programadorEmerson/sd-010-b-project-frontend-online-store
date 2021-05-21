import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class CartItem extends Component {
  render() {
    const { product: { id, title, price, thumbnail } } = this.props;
    return (
      <div>
        <img className="img" src={ thumbnail } alt={ title } />
        <h3>{ title }</h3>
        <p>{ price }</p>
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
