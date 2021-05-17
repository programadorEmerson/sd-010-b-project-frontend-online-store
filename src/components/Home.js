import React from 'react';
import { Link } from 'react-router-dom';

import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from './CategoryList';

import Card from './Card';
import SearchBar from './SearchBar';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      filtered: [],
      search: '',
      filterCategory: false,
      nameItems: [],
    };
  }

  componentDidMount() {
    this.getApiFromCategory();
    this.getApiFromQuery();
  }

  componentDidUpdate(_, previousState) {
    const { nameItems } = this.state;
    if (nameItems !== previousState.nameItems) {
      localStorage.setItem('cartItems', JSON.stringify(nameItems));
    }
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

  getName = (title) => () => {
    this.setState((oldState) => ({
      nameItems: [...oldState.nameItems, title],
    }));
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
              : (filtered.results.map(
                (product) => (
                  <Card getName={ this.getName } key={ product.id } product={ product } />
                ),
              ))}
          </div>) }

        {filterCategory && (
          <div id="products-category">
            {filterCategory.results
              .map((product) => (
                <Card
                  getName={ this.getName }
                  key={ product.id }
                  product={ product }
                />))}
          </div>)}
      </main>
    );
  }
}

export default Home;
