import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import * as modules from '../services/modules';

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
      reload: true,
    };

    this.getCategories = this.getCategories.bind(this);
    this.handleInputSearch = this.handleInputSearch.bind(this);
    this.handleSubmitFetch = this.handleSubmitFetch.bind(this);
    this.handleSelectCategory = this.handleSelectCategory.bind(this);
    this.handleReload = this.handleReload.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  handleReload() {
    const { reload } = this.state;
    this.setState({ reload });
  }

  handleSubmitFetch() {
    const { value } = this.state;
    return api
      .getProductsFromCategoryAndQuery('', value)
      .then((data) => this.setState({ products: data.results }))
      .catch(() => {
        this.setState({ foundProducts: false });
      });
  }

  handleInputSearch({ target }) {
    const { value } = target;
    this.setState({ value });
  }

  handleSelectCategory(e) {
    const { value } = e.target;
    return api
      .getProductsFromCategoryAndQuery(value, '')
      .then((data) => this.setState({ products: data.results }));
  }

  handleCard() {
    const { products } = this.state;
    return (
      <div className="card-container">
        {products.map((item) => (
          <ProductCard
            key={ item.id }
            item={ item }
            addProductIntoCart={ this.addProductIntoCart }
            data-testid="product"
            handleReload={ this.handleReload }
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
    const { categories, foundProducts, cart } = this.state;

    return (
      <div>
        <Categories
          handleSelectCategory={ this.handleSelectCategory }
          categories={ categories }
        />
        <div>
          <InputSearch
            handleInputSearch={ this.handleInputSearch }
            handleSubmitFetch={ this.handleSubmitFetch }
          />
          <Link
            to={ { pathname: '/cart', state: { cart } } }
            data-testid="shopping-cart-button"
          >
            <ButtonToCart />
          </Link>
          <p data-testid="shopping-cart-size">{modules.getLength()}</p>
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
