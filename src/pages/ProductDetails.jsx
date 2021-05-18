import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const {
      title,
      thumbnail,
      price,
      id,
      address: { cityName: city, stateName: state } } = product;

    return (
      <>
        <section>
          <h1 data-testid="product-detail-name">{ title }</h1>
          <img src={ thumbnail } alt="..." />
        </section>
        <section>
          <h3>Detalhes:</h3>
          <ul>
            <li>{ id }</li>
            <li>{ price }</li>
            <li>{ city }</li>
            <li>{ state }</li>
          </ul>
          <Link
            to={ { pathname: '/Cart' } }
            data-testid="shopping-cart-button"
          >
            Ir ao carrinho
          </Link>
        </section>
      </>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        id: PropTypes.string,
        address: PropTypes.shape({
          cityName: PropTypes.string,
          stateName: PropTypes.string,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
