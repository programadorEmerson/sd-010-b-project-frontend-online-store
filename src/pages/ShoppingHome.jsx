import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductsSearchBar from '../components/ProductsSearchBar';
import ListCategories from '../components/ListCategories';

import './styles/ShoppingHome.css';

class ShoppingHome extends Component {
  render() {
    return (
      <section className="ShoppingHome">
        <aside>
          <ul>
            <ListCategories />
          </ul>
        </aside>
        <main>
          <ProductsSearchBar />
          <Link to="/cart" data-testid="shopping-cart-button">
            Cart
          </Link>
        </main>
      </section>
    );
  }
}

export default ShoppingHome;
