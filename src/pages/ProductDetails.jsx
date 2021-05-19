import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Review from '../components/Review';

class ProductDetails extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const {
      title,
      thumbnail,
      price,
      id,
      address: { city_name: city, state_name: state } } = product;
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
          <Review product={ product } />
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
          city_name: PropTypes.string,
          state_name: PropTypes.string,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
