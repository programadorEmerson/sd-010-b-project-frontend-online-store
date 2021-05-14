import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductsSearchBar from '../components/ProductsSearchBar';

import './styles/ShoppingHome.css';

class ShoppingHome extends Component {
  render() {
    return (
      <section className="ShoppingHome">
        <ProductsSearchBar />
        <Link to="/cart" data-testid="shopping-cart-button">
          Cart
        </Link>
      </section>
    );
  }
}

export default ShoppingHome;
