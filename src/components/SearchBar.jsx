import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery, getCategories } from '../services/api';
import ProductList from './ProductList';

//  iniciando 06
class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      products: [],
      pageNotFound: false,
      categories: [],
      filter: '', // passamos uhuuuuuuuuuuuuuuuu
    };
  }

  componentDidMount() {
    // console.log('mount');
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
    const { state: { searchText, filter } } = this;
    const data = await getProductsFromCategoryAndQuery(filter, searchText);
    const { results } = data;
    this.setState(() => ({
      products: results,
    }));
  }

  handleCategory = async ({ target }) => {
    const { attributes } = target;
    const value = attributes[3].nodeValue.toString();
    const { state: { searchText } } = this;
    const data = await getProductsFromCategoryAndQuery(value, searchText);
    const { results } = data;
    this.setState(() => ({
      products: results,
      filter: value,
    }));
  };

  render() {
    const { addItemToCart, cart } = this.props;
    const { handleClick,
      handleSearchText,
      handleCategory, state: { pageNotFound, products, categories } } = this;
    return (
      <div>
        <div onChange={ handleCategory }>
          { categories.map((catItem) => (
            <div key={ catItem.id }>
              { catItem.name }
              <input type="radio" name="cat" data-testid="category" cat={ catItem.id } />
            </div>
          ))}
        </div>
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
        && <ProductList
          products={ products }
          addItemToCart={ addItemToCart }
          cart={ cart }
        /> }
        { pageNotFound && <span>Nenhum produto foi encontrado.</span> }

      </div>
    );
  }
}

SearchBar.propTypes = {
  addItemToCart: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default SearchBar;
