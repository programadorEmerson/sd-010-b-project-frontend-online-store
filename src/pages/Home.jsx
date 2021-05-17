import React, { Component } from 'react';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Categories from '../components/Categories';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noProducts: false,
      products: [],
      categoryId: undefined,
      search: undefined,
    };
  }

  handleChecked = ({ target: { id } }) => {
    const { search } = this.state;
    this.setState({ categoryId: id });
    if (search) {
      this.handleCheckedSearch(id, search);
    } else { this.handleCategory(id); }
  }

  handleInput = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  // chamada quando clica na categoria
  handleCategory = async (id) => {
    // const { categoryId } = this.state;
    const filterProducts = await api.getProductsById(id);
    if (filterProducts) {
      if (filterProducts.results.length > 0) {
        this.setState({
          products: filterProducts.results,
          noProducts: false,
        });
      } else {
        this.setState({
          noProducts: true,
        });
      }
    }
  }

  // chamada quando faz a busca no input
  handleClick = async (search) => {
    // const { search } = this.state;
    const responseProduct = await api.getQuery(search);
    if (responseProduct) {
      if (responseProduct.results.length > 0) {
        this.setState({
          products: responseProduct.results,
          noProducts: false,
        });
      } else {
        this.setState({
          noProducts: true,
        });
      }
    }
  }

  // chamada com categoria e imput
  handleCheckedSearch = async (id, search) => {
    // const {categoryId, search } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(id, search);
    if (response) {
      if (response.results.length > 0) {
        this.setState({
          products: response.results,
          noProducts: false,
        });
      } else {
        this.setState({
          noProducts: true,
        });
      }
    }
  }

  render() {
    const { products, noProducts, categoryId, search } = this.state;
    const noProduct = 'Nenhum produto encontrado';
    return (
      <div>
        <Header
          handleInput={ this.handleInput }
          handleClick={ () => (
            categoryId
              ? this.handleCheckedSearch(categoryId, search) : this.handleClick(search)) }
        />
        { noProducts ? <p>{ noProduct }</p> : <ProductList products={ products } /> }
        <Categories checked={ this.handleChecked } />
      </div>
    );
  }
}

export default Home;
