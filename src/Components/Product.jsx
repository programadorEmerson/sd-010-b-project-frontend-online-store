import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Product extends Component {
  render() {
    const { title, img, price, id } = this.props;
    return (
      <div data-testid="product" key={ id }>
        <div>{ title }</div>
        <img src={ img } alt={ title } />
        <div>{ price }</div>
      </div>
    );
  }
}

Product.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
}.isRequired;

export default Product;
