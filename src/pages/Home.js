import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      searchQuery: [],
      products: [],
      isEmpty: true,
    };
  }

  handleSearch = ({ target: { value } }) => {
    this.setState({
      searchQuery: value,
    });
  }

  handleClick = (search) => {
    api.getProductsFromQuery(search).then((products) => (
      this.setState({
        isEmpty: false,
        products,
      })
    ));
  }

  render() {
    const { searchQuery, products, isEmpty } = this.state;

    return (
      <div className="App">
        <div>
          <input data-testid="query-input" type="text" onChange={ this.handleSearch } />
          <button
            type="button"
            data-testid="query-button"
            onClick={ () => this.handleClick(searchQuery) }
          >
          Buscar
          </button>
          {isEmpty ? (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          ) : <ProductList products={ products } />}
        </div>
        <Link data-testid="shopping-cart-button" to="/cart">VER CARRINHO</Link>
      </div>
    );
  }
}

export default Home;
