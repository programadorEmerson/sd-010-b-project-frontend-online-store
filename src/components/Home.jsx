import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';
import ProductList from './ProductList';
import Categories from './Categories';
import * as api from '../services/api';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noProducts: false,
      products: [],
      categoryId: '',
      search: '',
    };
  }

  handleChecked = ({ target: { id } }) => {
    this.handleProducts(id);
    this.setState({ categoryId: id });
  }

  handleInput = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  handleProducts = async (id) => {
    const { search } = this.state;
    const filterProducts = await api.getProductsFromCategoryAndQuery(id, search);
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

  handleClick = async () => {
    const { categoryId, search } = this.state;
    const responseProduct = await api.getProductsFromCategoryAndQuery(categoryId, search);
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

  render() {
    const { products, noProducts } = this.state;
    const noProduct = 'Nenhum produto encontrado';
    return (
      <div>
        <input
          id="input-search"
          type="text"
          placeholder="busca"
          data-testid="query-input"
          onChange={ this.handleInput }
        />
        <button
          data-testid="query-button"
          onClick={ this.handleClick }
          type="button"
        >
          Search
        </button>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <GrCart />
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        { noProducts ? <p>{ noProduct }</p> : <ProductList products={ products } /> }
        <Categories checked={ this.handleChecked } />
      </div>
    );
  }
}

export default Home;
