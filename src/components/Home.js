import React from 'react';
import { Link } from 'react-router-dom';

import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from './CategoryList';
import Card from './Card';

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
    this.getApiFromCategory();
    this.requestApi2();
  }

  getApiFromCategory = (param) => async () => {
    const getCategory = await getProductsFromCategoryAndQuery(param, '');
    this.setState({
      filterCategory: getCategory,
    });
  }

  getResult = ({ target: { value } }) => {
    this.setState({ search: value });
  }

  requestApi2 = async () => {
    const { search } = this.state;
    const result1 = await getProductsFromCategoryAndQuery('', search);
    this.setState({
      filtered: result1,
    });
  }

  render() {
    const { filtered: { available_filters: resultFilter }, filtered } = this.state;
    const { filterCategory } = this.state;
    return (
      <main>
        <div id="searchBar">
          <input
            data-testid="query-input"
            type="text"
            onChange={ this.getResult }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.requestApi2 }
          >
            Pesquisar
          </button>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <Link data-testid="shopping-cart-button" id="cart" to="/cart">Carrinho</Link>
        <CategoryList onClick={ this.getApiFromCategory } />
        {filtered.length !== 0 && (
          <div id="products">
            {!resultFilter || resultFilter.length === 0
              ? 'Nenhum produto a ser encontrado'
              : (filtered.results.map(
                (product) => (<Card key={ product.id } product={ product } />),
              ))}
          </div>) }
        {filterCategory && (
          <div id="products-category">
            {filterCategory.results
              .map((product) => (<Card key={ product.id } product={ product } />))}
          </div>)}
      </main>
    );
  }
}

export default Home;
