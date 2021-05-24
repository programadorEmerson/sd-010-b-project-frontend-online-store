import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GiShoppingCart } from 'react-icons/gi';

class CartButton extends React.Component {
  render() {
    const { cartSize } = this.props;
    return (

      <Link
        to="/cart"
        data-testid="shopping-cart-button"
      >
        <GiShoppingCart />

        <span data-testid="shopping-cart-size">{cartSize}</span>
      </Link>
    );
  }
}

CartButton.propTypes = {
  cartSize: PropTypes.number.isRequired,
};

export default CartButton;
