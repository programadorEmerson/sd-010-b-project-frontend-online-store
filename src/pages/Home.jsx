import React from 'react';
import * as api from '../services/api';
import Mensagem from '../components/Mensagem';
import Card from '../components/Card';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      search: '',
      products: [],
      loading: null,
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
    const products = await api.getProductsFromCategoryAndQuery(search);
    this.setState({
      products,
      loading: true,
    });
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories, products, loading } = this.state;
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
        { products
          && categories.map((category) => (
            <div key={ category.id } data-testid="category">
              { category.name }
            </div>))
        }
        { loading
          && products.result.map((product) => (
            <Card product={ product } key={ product.id } />))}
      </div>
    );
  }
}
export default Home;
