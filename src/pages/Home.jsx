import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

import InputSearch from '../components/InputSearch';
import Categories from '../components/Categories';
import ButtonToCart from '../components/ButtonToCart';
import ProductCard from '../components/ProductCard';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      products: [],
      foundProducts: true,
      value: '',
    };

    this.getCategories = this.getCategories.bind(this);
    this.handleInputSearch = this.handleInputSearch.bind(this);
    this.handleSubmitFetch = this.handleSubmitFetch.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  handleSubmitFetch() {
    const { value } = this.state;
    return api
      .getProductsFromCategoryAndQuery('', value)
      .then((data) => this.setState({ products: data.results }));
  }

  handleInputSearch({ target }) {
    const { value } = target;
    this.setState({ value });
  }

  handleCard() {
    const { products } = this.state;
    return (
      <div className="card-container">
        {products.map((item) => (
          <ProductCard
            key={ item.id }
            item={ item }
            data-testid="product"
          />
        ))}
      </div>
    );
  }

  async getCategories() {
    const getCategoriesFromApi = await api.getCategories();
    this.setState({ categories: getCategoriesFromApi });
  }

  render() {
    const { categories, foundProducts } = this.state;

    return (
      <div>
        <Categories categories={ categories } />
        <div>
          <InputSearch
            handleInputSearch={ this.handleInputSearch }
            handleSubmitFetch={ this.handleSubmitFetch }
          />
          <Link to="/cart" data-testid="shopping-cart-button">
            <ButtonToCart />
          </Link>
          <p data-testid="home-initial-message">
            {foundProducts
              ? 'Digite algum termo de pesquisa ou escolha uma categoria.'
              : 'Nenhum produto foi encontrado'}
          </p>
        </div>
        {this.handleCard()}
      </div>
    );
  }
}
