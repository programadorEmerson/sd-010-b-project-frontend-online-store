import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from './ProductList';
//iniciando 06
class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      products: '',
      pageNotFound: false, // passamos uhuuuuuuuuuuuuuuuu
    };
  }

  handleSearchText = ({ target: { value } }) => {
    this.setState({
      searchText: value,
    });
  };

  handleClick = async () => {
    const { state: { searchText } } = this;
    const data = await getProductsFromCategoryAndQuery(searchText);
    const { results } = data;
    this.setState({
      products: results,
      renderProduct: true,
    });
  }

  render() {
    const { handleClick, handleSearchText, state: { pageNotFound, products } } = this;
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
        { products.length > 0 && <ProductList products={ products } /> }
        { pageNotFound && <span>Nenhum produto foi encontrado.</span> }
      </div>
    );
  }
}

export default SearchBar;
