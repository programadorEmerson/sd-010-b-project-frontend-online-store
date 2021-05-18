import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class CartBtn extends Component {
  render() {
    const { shoppingCart } = this.props;
    return (
      <Link
        to={ { pathname: '/shopping-cart',
          state: {
            shoppingCart,
          } } }
        data-testid="shopping-cart-button"
      >
        <img src="https://imageshack.com/i/pm2ht52pp" width="50" alt="shopping-cart" />
      </Link>

    );
  }
}

CartBtn.propTypes = {
  shoppingCart: PropTypes.shape().isRequired,
};
