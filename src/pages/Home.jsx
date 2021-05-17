import React from 'react';
import * as api from '../services/api';
import Mensagem from '../components/Mensagem';
import Card from '../components/Card';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: null,
      search: '',
      // searchResult: null,
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
    const { search } = this.state;
    const searchResult = await api.getProductsFromCategoryAndQuery(search);
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

  render() {
    const { categories, products } = this.state;
    return (
      <div>
        <Mensagem />
        <input
          type="text"
          name="search"
          placeholder="buscar"
          data-testid="query-input"
          onChange={ this.handleChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.clickButtonSearch }
        >
          Search
        </button>
        { categories
          && categories.map((category) => (
            <div key={ category.id } data-testid="category">
              { category.name }
            </div>))}
        { products
          && products.map((product) => (
            <Card product={ product } key={ product.id } />))}
      </div>
    );
  }
}
export default Home;
