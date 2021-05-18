import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import ProductList from '../components/ProductList';
import GetProducts from '../components/GetProducts';

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

  handleClick = (categoryId, search) => {
    api.getProductsFromCategoryAndQuery(categoryId, search).then(({ results }) => (
      this.setState({
        isEmpty: false,
        products: results,
      })
    ));
  }

  render() {
    const { searchQuery, products, isEmpty } = this.state;
    const { onClick } = this.props;

    return (
      <div className="App">
        <GetProducts onClick={ onClick } />

        <div>
          <input data-testid="query-input" type="text" onChange={ this.handleSearch } />
          <button
            type="button"
            data-testid="query-button"
            onClick={ () => this.handleClick('categoryId', searchQuery) }
          >
            Buscar
          </button>
          {isEmpty ? (
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          ) : <ProductList products={ products } onClick={ onClick } />}
        </div>
        <Link data-testid="shopping-cart-button" to="/cart">VER CARRINHO</Link>
      </div>
    );
  }
}

Home.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Home;
