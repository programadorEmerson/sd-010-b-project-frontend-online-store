import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BuyerReview, PaymentMethod, ProductsReview } from '../components';

class Checkout extends Component {
  emptyCart() {
    console.log('finalizar compra');
  }

  render() {
    const { cart } = this.props;
    return (
      <div>

        <ProductsReview cart={ cart } />
        <BuyerReview />
        <PaymentMethod />

        <Link to="/" onClick={ this.emptyCart }>Finalizar</Link>
      </div>
    );
  }
}

Checkout.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Checkout;
