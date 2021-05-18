import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { cartItems } = this.props;
    const totalItems = cartItems.reduce((acc, curr) => acc + curr.quant, 0);
    return (
      <div className="main-container">
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link
          to="/cart"
          data-testid="shopping-cart-size"
        >
          {totalItems}
        </Link>
      </div>
    );
  }
}

Header.propTypes = {
  cartItems: PropTypes.arrayOf,
}.isRequired;

export default Header;
