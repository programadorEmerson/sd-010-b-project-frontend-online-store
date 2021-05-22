import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ButtonSP extends Component {
  spCartCount = (param) => {
    const dale = param.map((el) => el.count).reduce((acc, num) => acc + num, 0);
    return dale;
  }

  render() {
    const { cart } = this.props;
    return (
      <button type="button">
        <Link
          to={ { pathname: '/shoppingcart', state: { cart } } }
          data-testid="shopping-cart-button"
        >
          <img src="https://www.freeiconspng.com/uploads/grocery-cart-icon-14.png" alt="cart icon" height="25px" />
          <span data-testid="shopping-cart-size">
            { cart ? this.spCartCount(cart) : 0 }
          </span>
        </Link>
      </button>
    );
  }
}

ButtonSP.defaultProps = {
  cart: 0,
};

ButtonSP.propTypes = {
  cart: PropTypes.number,
  handleClickAddCart: PropTypes.func.isRequired,
  handleClickAddCart2: PropTypes.func.isRequired,
};
