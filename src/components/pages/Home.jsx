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
    if (arrayProducts.length === 0) {
      const pNot = document.querySelector('.notProduct');
      pNot.style.display = 'block';
      const pMenssage = document.querySelector('.initialMenssage');
      pMenssage.style.display = 'none';
    }
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
      <main className="contendMainStore">
        <ListCategories
          categories={ listCategories }
          fecthProducts={ this.fetchProductsByCategories }
        />
        <section className="searchHeader">
          <SearchBox
            onFetchProducts={ this.fetchCategoryAndProducts }
            listProducts={ listProducts }
          />
          <CartBtn />
        </section>
      </main>
    );
  }
}
