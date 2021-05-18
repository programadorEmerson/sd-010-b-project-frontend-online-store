import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { getProductsFromCategoryAndQuery } from '../services/api';

import ProductsSearchBar from '../components/ProductsSearchBar';
import CategoriesList from '../components/CategoriesList';
import ProductsList from '../components/ProductsList';

import './styles/ShoppingHome.css';

class ShoppingHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryID: '',
      products: undefined,
      query: '',
    };

    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.updateState = this.updateState.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleQueryChange(inputedQuery) {
    this.setState(
      { query: inputedQuery },
      () => this.updateState(),
    );
  }

  handleCategoryChange(inputedCategory) {
    this.setState({
      categoryID: inputedCategory,
      query: '',
    },
    () => this.updateState());
  }

  async updateState() {
    const { categoryID, query } = this.state;
    const request = await getProductsFromCategoryAndQuery(categoryID, query);
    this.setState({ products: request.results });
  }

  render() {
    const { products } = this.state;
    return (
      <section className="ShoppingHome">
        <aside>
          <ul>
            <CategoriesList handleCategorySearch={ this.handleCategoryChange } />
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
