import React from 'react';
import { getProductsByQuery } from '../services/api';
import ProductList from './ProductList';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      renderProduct: false,
      products: '',
    };
  }

  handleSearchText = ({ target: { value } }) => {
    this.setState({
      searchText: value,
    });
  };

  handleClick = async () => {
    const { state: { searchText } } = this;
    await getProductsByQuery(searchText)
      .then((data) => this.setState({
        products: data.results,
        renderProduct: true,
      }));
  }

  render() {
    const { handleClick, handleSearchText, state: { renderProduct, products } } = this;
    return (
      <div>
        <label htmlFor="searchBar" data-testid="home-initial-message">
          <input
            type="text"
            name="searchBar"
            data-testid="query-input"
            onChange={ handleSearchText }
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <button type="button" data-testid="query-button" onClick={ handleClick }>
          Pesquisar
        </button>
        { renderProduct && <ProductList products={ products } /> }
      </div>
    );
  }
}

export default SearchBar;
