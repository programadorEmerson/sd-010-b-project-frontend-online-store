import React from 'react';
import * as api from '../services/api';
import Mensagem from '../components/Mensagem';
import Card from '../components/Card';
import CategoryFilter from '../components/CategoryFilter';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: null,
      search: '',
      // searchResult: null,
      categorySelected: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  clickButtonSearch = async () => {
    const { search, categorySelected } = this.state;
    const searchResult = await api
      .getProductsFromCategoryAndQuery(search, categorySelected);
    this.setState({
      // searchResult,
      products: searchResult.results,
    });
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  handleCategory = ({ target }) => {
    const value = target.type === 'radio' ? target.id : target.value;
    this.setState({ categorySelected: value });
  }

  handleCategoryClick = async (search, categoryId) => {
    const result = await api
      .getProductsFromCategoryAndQuery(search, categoryId);
    if (result) this.setState({ products: result.results });
  }

  render() {
    const { categories, products, search } = this.state;
    return (
      <div>
        <Mensagem />
        <input
          type="text"
          name="search"
          placeholder="buscar"
          data-testid="query-input"
          onChange={ this.handleChange }
          autoComplete="off"
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.clickButtonSearch }
        >
          Search
        </button>
        <label htmlFor="categoryFilter">
          { categories
          && categories.map((category) => (
            <CategoryFilter
              key={ category.id }
              category={ category }
              handleCategory={ this.handleCategory }
              onClick={ () => this.handleCategoryClick(search, category.id) }
            />
          ))}
        </label>
        { products
          && products.map((product) => (
            <Card product={ product } key={ product.id } />))}
      </div>
    );
  }
}
export default Home;
