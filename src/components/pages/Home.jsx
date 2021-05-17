import React, { Component } from 'react';
import CartBtn from '../buttonsAndLinks/CartBtn';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';
import ListCategories from '../ListCategories';
import SearchBox from '../SearchBox';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      listCategories: [],
      listProducts: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchCategoryAndProducts = this.fetchCategoryAndProducts.bind(this);
    this.fetchProductsByCategories = this.fetchProductsByCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    this.setState({
      listCategories: await getCategories(),
    });
  }

  async fetchCategoryAndProducts({ target: { value } }) {
    const getProducts = await getProductsFromCategoryAndQuery('', value);
    const arrayProducts = getProducts.results;
    this.setState({
      listProducts: arrayProducts,
    });
  }

  async fetchProductsByCategories(categoryId) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const categories = await response.json();
    this.setState({
      listProducts: categories.results,
    });
  }

  render() {
    const { listCategories, listProducts } = this.state;
    return (
      <>
        <CartBtn />
        <SearchBox
          onFetchProducts={ this.fetchCategoryAndProducts }
          listProducts={ listProducts }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <ListCategories categories={ listCategories } fecthProducts={ this.fetchProductsByCategories } />
        </div>
      </>
    );
  }
}
