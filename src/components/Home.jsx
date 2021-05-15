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
    // this.handleClick(id);
    this.setState({ categoryId: id });
  }

  handleInput = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  // handleProducts = () => {
  //   const { categoryId, search } = this.state;
  //   this.handleClick(categoryId, search);
  // }

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

  // renderProducts = () => {
  //   const { products, productsId, search } = this.state;
  //   let product = products;
  //   if (productsId === products.category_id) {
  //     product = products.filter((prod) => prod);
  //   }
  // }

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
          // onClick={ this.handleProducts }
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
