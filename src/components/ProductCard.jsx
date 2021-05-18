import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import * as modules from '../services/modules';
import './ProductCard.css';

export default class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.state = {};
  }

  handleAddToCart() {
    const { item, handleReload } = this.props;
    modules.addProductCart(item);
    handleReload();
  }

  render() {
    const { item } = this.props;
    const { title, thumbnail, price, shipping } = item;

    return (
      <div className="card" data-testid="product">
        <p data-testid="shopping-cart-product-name">{title}</p>
        <div className="img">
          <img src={ thumbnail } alt="img" />
        </div>
        <p>{price}</p>
        { shipping.free_shipping ? <p data-testid="free-shipping">Frete grátis</p> : ''}
        <button
          type="button"
          onClick={ this.handleAddToCart }
          data-testid="product-add-to-cart"
        >
          Adicionar
        </button>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: '/datails', state: { item } } }
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool.isRequired,
    }),
  }).isRequired,
  handleReload: PropTypes.func.isRequired,
};
