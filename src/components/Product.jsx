import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/Product.css';

class Product extends Component {
  render() {
    const { product: { id, title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <div className="productContainer" id={ id }>
          <h3 className="title">{ title }</h3>
          <img className="img" src={ thumbnail } alt={ title } />
          <p className="price">{`R$-${price}`}</p>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.string,
  thumbnail: PropTypes.string,
}.isRequired;

export default Product;
