import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonToCart from '../components/ButtonToCart';
import InputSearch from '../components/InputSearch';

export default class Home extends Component {
  render() {
    return (
      <div>
        <InputSearch />
        <Link to="/cart" data-testid="shopping-cart-button">
          <ButtonToCart />
        </Link>
      </div>
    );
  }
}
