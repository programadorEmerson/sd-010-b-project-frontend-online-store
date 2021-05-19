import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addLocalStorage } from '../../services/dataLocalStorage';

export default class CartListProduct extends Component {
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
