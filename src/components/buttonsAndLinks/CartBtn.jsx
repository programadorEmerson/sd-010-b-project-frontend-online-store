import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CartBtn extends Component {
  render() {
    return (
      <Link to="/shopping-cart" data-testid="shopping-cart-button">
        <img src="https://imageshack.com/i/pm2ht52pp" width="50" alt="shopping-cart" />
      </Link>
    );
  }
}
