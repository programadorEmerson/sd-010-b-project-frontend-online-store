import { ShoppingCartOutlined } from '@material-ui/icons';
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
          <ShoppingCartOutlined style={ { fontSize: '40' } } />
        </Link>
      </section>
    );
  }
}

export default ShoppingHome;
