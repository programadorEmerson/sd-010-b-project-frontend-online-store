import React from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      listProduct: [],
      search: '',
    };
    this.getResult = this.getResult.bind(this);
    this.requestApi = this.requestApi.bind(this);
    this.resultMap = this.resultMap.bind(this);
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
    console.log(result1);
    return result1;
  }

  resultMap() {
    const { listProduct } = this.state;
    const product = listProduct.map((products) => (
      <li key={ products.id }>{products.name}</li>
    ));
    return product;
  }

  render() {
    // const { search } = this.state;
    return (
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
          {this.resultMap()}
        </ol>
        <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
      </div>
    );
  }
}

export default Home;
