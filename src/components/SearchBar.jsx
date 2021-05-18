import React from 'react';
// import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import ProductList from './ProductList';

//  iniciando 06
class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      products: '',
      pageNotFound: false,
      categories: [],
      filter: '', // passamos uhuuuuuuuuuuuuuuuu
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  requestCategories = async () => {
    const categories = await getCategories();

    this.setState({
      categories,
    });
  }

  handleSearchText = ({ target: { value } }) => {
    this.setState({
      searchText: value,
    });
  };

  handleClick = async () => {
    console.log('opa');
    const { state: { searchText, filter } } = this;
    const data = await getProductsFromCategoryAndQuery(filter, searchText);
    const { results } = data;
    this.setState({
      products: results,
    });
  }

  handleCategory = ({ target }) => {
    const { parentElement: { attributes } } = target;
    const value = attributes[1].nodeValue;
    this.setState(() => ({
      filter: value,
    }));
    this.handleClick();
  };

  render() {
    const { handleClick,
      handleSearchText,
      handleCategory, state: { pageNotFound, products, categories } } = this;
    return (
      <div>
        <ul>
          { categories.map((catItem) => (
            <li data-testid="category" key={ catItem.id } cat={ catItem.id }>
              <button type="button" onClick={ handleCategory }>
                { catItem.name }
              </button>
            </li>
          ))}
        </ul>
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
        { products.length > 0
        && <ProductList products={ products } /> }
        { pageNotFound && <span>Nenhum produto foi encontrado.</span> }
      </div>
    );
  }
}

// SearchBar.propTypes = {
//   filter: PropTypes.string.isRequired,
// };

export default SearchBar;
