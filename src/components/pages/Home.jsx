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
      shoppingCart: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.fetchCategoryAndProducts = this.fetchCategoryAndProducts.bind(this);
    this.fetchProductsByCategories = this.fetchProductsByCategories.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
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

  addItemToCart(event) {
    const { shoppingCart } = this.state;
    this.setState({ shoppingCart: [...shoppingCart, event] });
  }

  render() {
    const { listCategories, listProducts, shoppingCart } = this.state;
    return (
      <>
        <CartBtn shoppingCart={ shoppingCart } />
        <SearchBox
          onFetchProducts={ this.fetchCategoryAndProducts }
          addItemToCart={ this.addItemToCart }
          listProducts={ listProducts }
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          <ListCategories
            categories={ listCategories }
            fecthProducts={ this.fetchProductsByCategories }
          />
        </div>
      </>
    );
  }
}
