import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CartListProduct extends Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <Link
        className=""
        data-testid="product-detail-link"
        to={ { pathname: `/details/${id}`, state: { product } } }// Fonte: https://stackoverflow.com/questions/41466055/how-do-i-pass-state-through-react-router
      >
        <li data-testid="product" className="card" style={ { width: '18rem' } }>
          <img
            src={ `${thumbnail}` }
            className="card-img-top"
            style={ { maxHeight: 'unset' } }
            alt="..."
          />
          <h5 className="text-dark">{ title }</h5>
          <p>{ price }</p>
        </li>
      </Link>
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
