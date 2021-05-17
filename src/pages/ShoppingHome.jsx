import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getProductsFromCategoryAndQuery } from '../services/api';

import ProductsSearchBar from '../components/ProductsSearchBar';
import ListCategories from '../components/ListCategories';
import ProductsList from '../components/ProductsList';

import './styles/ShoppingHome.css';

class ShoppingHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: undefined,
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  async handleQueryChange(query) {
    const request = await getProductsFromCategoryAndQuery(undefined, query);
    this.setState({ products: request.results });
  }

  render() {
    const { products } = this.state;
    return (
      <section className="ShoppingHome">
        <aside>
          <ul>
            <ListCategories />
          </ul>
        </aside>
        <main>
          <ProductsSearchBar handleQuerySearch={ this.handleQueryChange } />
          <Link to="/cart" data-testid="shopping-cart-button">
            Cart
          </Link>
          <ProductsList products={ products } />
        </main>
      </section>
    );
  }
}

export default ShoppingHome;
