import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { title, img, price, id } = this.props;
    return (
      <div data-testid="product" key={ id } className="product-card">
        <div className="product-title">{ title }</div>
        <div className="product-img-ctn">
          <div>
            <img className="product-img" src={ img } alt={ title } />
          </div>
        </div>
        <div className="price-tag">{ `R$ ${price}` }</div>
        <Link to={ `/${id}` }> VER DETALHES </Link>
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
