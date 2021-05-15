import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProductsSearchBar from '../components/ProductsSearchBar';
import ListCategories from '../components/ListCategories';

import './styles/ShoppingHome.css';

class ShoppingHome extends Component {
  render() {
    return (
      <section className="ShoppingHome">
        <main>
          <ProductsSearchBar />
          <Link to="/cart" data-testid="shopping-cart-button">
            Cart
          </Link>
        </main>
        <aside>
          <ul>
            <ListCategories />
          </ul>
        </aside>
      </section>
    );
  }
}

export default ShoppingHome;
