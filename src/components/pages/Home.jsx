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
    const products = await getProductsFromCategoryAndQuery(categoryId, '');
    this.setState({
      listProducts: products.results,
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
          <ListCategories
            categories={ listCategories }
            fetchProducts={ this.fetchProductsByCategories }
          />
        </div>
      </>
    );
  }
}
