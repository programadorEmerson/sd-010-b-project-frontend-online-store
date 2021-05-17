import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonToCart from '../components/ButtonToCart';
import * as modules from '../services/modules';

class ProductDetails extends Component {
  render() {
    const { location: { state: { item } } } = this.props;
    const { title } = item;
    return (
      <div>
        <Link
          to={ { pathname: '/cart' } }
          data-testid="shopping-cart-button"
        >
          <ButtonToCart />
        </Link>
        <p data-testid="product-detail-name">{ title }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => modules.addProductCart(item) }
        >
          Adicionar

        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
