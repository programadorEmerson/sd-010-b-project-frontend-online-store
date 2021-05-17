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
    this.setState({ categoryId: id });
  }

  handleInput = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  // chamada quando clica na categoria
  handleCategory = async () => {
    const { categoryId } = this.state;
    const filterProducts = await api.getProductsById(categoryId);
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
  handleClick = async () => {
    const { search } = this.state;
    const responseProduct = await api.getQuery(search);
    //  console.log(this.state.productsId);
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
  handleCheckedSearch = async () => {
    const { categoryId, search } = this.state;
    const response = await api.getProductsFromCategoryAndQuery(categoryId, search);
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
    const { products, noProducts, search } = this.state;
    const noProduct = 'Nenhum produto encontrado';
    return (
      <div>
        <Header
          handleInput={ this.handleInput }
          handleClick={ () => (
            search ? this.handleCheckedSearch() : this.handleClick()) }
        />
        { noProducts ? <p>{ noProduct }</p> : <ProductList products={ products } /> }
        <Categories
          checked={ this.handleChecked }
        />
      </div>
    );
  }
}

export default Home;
