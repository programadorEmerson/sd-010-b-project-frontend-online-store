import React from 'react';
import { Link } from 'react-router-dom';

import { getProductsFromCategoryAndQuery } from '../services/api';

import CategoryList from './CategoryList';
import ProductList from './ProductList';
import SearchBar from './SearchBar';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      filtered: [],
      search: '',
      filterCategory: false,
    };
  }

  componentDidMount() {
    // this.getApiFromCategory();
    // // verificar aqui
    // this.getApiFromQuery();
  }

  getApiFromCategory = (param) => async () => {
    console.log('getApiFromCategory');
    this.setState({
      filterCategory: await getProductsFromCategoryAndQuery(param, ''),
      filtered: false,
    });
  }

  getApiFromQuery = async () => {
    const { search } = this.state;
    this.setState({
      filtered: await getProductsFromCategoryAndQuery('', search),
      filterCategory: false,
    });
  }

  getResult = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  render() {
    const { filtered: { available_filters: resultFilter },
      filtered } = this.state;
    const { filterCategory } = this.state;

    return (
      <main>
        <SearchBar
          getResult={ this.getResult }
          getApiFromQuery={ this.getApiFromQuery }
        />
        <Link data-testid="shopping-cart-button" id="cart" to="/cart">Carrinho</Link>
        <CategoryList onClick={ this.getApiFromCategory } />

        {filtered.length !== 0 && (
          <div id="products">
            {!resultFilter || resultFilter.length === 0
              ? 'Nenhum produto a ser encontrado'
              : <ProductList products={ filtered.results } /> }
          </div>) }

        {filterCategory && (
          <div id="products-category">
            <ProductList products={ filterCategory.results } />
          </div>)}
      </main>
    );
  }
}

export default Home;
