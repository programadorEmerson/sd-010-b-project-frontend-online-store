import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Style/Product.css';

import { Link } from 'react-router-dom';
import Cart from './Cart';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastClickedItem: [],
    };
  }

  render() {
    const { product: { id, title, price, thumbnail }, addToCart } = this.props;
    const link = `/products/${id}`;
    return (
      <div data-testid="product">
        <Link to={ link } data-testid="product-detail-link">
          <div className="productContainer">
            <h3 className="title">{ title }</h3>
            <img className="img" src={ thumbnail } alt={ title } />
            <p className="price">{`R$-${price}`}</p>
          </div>
        </Link>
        <button onClick={ addToCart } data-testid="product-add-to-cart" type="button">
          Adicionar ao carrinho
        </button>
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
