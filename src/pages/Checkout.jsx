import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BuyerReview, PaymentMethod, ProductsReview } from '../components';

class Checkout extends Component {
  emptyCart() {
    console.log('finalizar compra');
  }

  render() {
    return (
      <div>

        <ProductsReview />
        <BuyerReview />
        <PaymentMethod />

        <Link to="/" onClick={ this.emptyCart }>Finalizar</Link>
      </div>
    );
  }
}

Checkout.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
  }).isRequired,
};
export default Checkout;
