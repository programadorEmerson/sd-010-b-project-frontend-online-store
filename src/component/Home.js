import { findByTestId } from '@testing-library/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from './CategoryList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      filtered: false,
      listProduct: [],
      search: '',
    };
    this.getResult = this.getResult.bind(this);
    this.requestApi = this.requestApi.bind(this);
    this.requestApi2 = this.requestApi2.bind(this);
  }

  componentDidMount() {
    this.requestApi();
    // this.requestApi2();
  }

  getResult(event) {
    this.setState({
      search: event.target.value,
    });
  }

  async requestApi() {
    const result = await getCategories();
    this.setState({
      listProduct: result,
    });
  }

  async requestApi2() {
    const { search } = this.state;
    const result1 = await getProductsFromCategoryAndQuery('', search);
    this.setState({
      filtered: result1,
    });
  }

  render() {
    const { filtered } = this.state;
    const { available_filters } = filtered;
    console.log(available_filters);
    return (
      <div>
        <div>
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
          <ol>
            <CategoryList />
          </ol>
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </div>
        {!filtered || filtered.available_filters.length === 0 ? 'Nenhum produto a ser encontrado'
          : (filtered.results.map(
            (product) => (<li key={ product.id }>{product.title}</li>),
          ))}
      </div>
    );
  }
}

export default Home;
