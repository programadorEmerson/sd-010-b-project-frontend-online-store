import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/Product.css';
import { Link } from 'react-router-dom';

class Product extends Component {
  render() {
    const { product: { id, title, price, thumbnail } } = this.props;
    const link = `/products/${id}`;
    return (
      <div>
        <Link to={ link } data-testid="product-detail-link">
          <div className="productContainer">
            <h3 className="title">{ title }</h3>
            <img className="img" src={ thumbnail } alt={ title } />
            <p className="price">{`R$-${price}`}</p>
          </div>
        </Link>
        {/* {console.log('seilah')} */}
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
