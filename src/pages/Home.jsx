import React from 'react';
import * as api from '../services/api';
import Mensagem from '../components/Mensagem';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      search: '',
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  fetchCategories = async () => {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
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
        <button type="button" data-testid="query-button">Search</button>
        {
          categories.map((category) => (
            <div key={ category.id } data-testid="category">
              { category.name }
            </div>))
        }
      </div>
    );
  }
}
export default Home;
