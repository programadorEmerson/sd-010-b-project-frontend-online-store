import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addLocalStorage } from '../../services/dataLocalStorage';

export default class CartListProduct extends Component {
  addToCart = () => {
    const { product } = this.props;
    const {
      title,
      thumbnail,
      price,
      id,
    } = product;
    const newProduct = {
      title,
      thumbnail,
      price,
      id,
      quantity: 1,
    };
    addLocalStorage('dataShoppingCart', newProduct);
  };

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/details/${id}`, state: { product } } }// Fonte: https://stackoverflow.com/questions/41466055/how-do-i-pass-state-through-react-router
        >
          <h3>{ title }</h3>
          <img src={ `${thumbnail}` } alt="..." />
        </Link>
        <p>{ price }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addToCart() }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

CartListProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};
