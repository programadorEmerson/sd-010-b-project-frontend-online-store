import React from 'react';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      searched: '',
    };
  }

  componentDidMount() {
    this.requestCategories();
  }

  handleSearchChange = ({ target: { value } }) => {
    this.setState({
      searched: value,
    });
  };

  requestCategories = async () => {
    const categories = await getCategories();

    this.setState({
      categories,
    });
  }

  render() {
    const { categories, searched } = this.state;
    const { handleSearchChange } = this;
    return (
      <div>
        <ul>
          { categories.map((catItem) => (
            <li data-testid="category" key={ catItem.id }>
              { catItem.name }
            </li>))}
        </ul>

        <label htmlFor="searchBar" data-testid="home-initial-message">
          <input type="text" name="searchBar" />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>

        <button type="button" onClick={ handleSearchChange }>
          Pesquisar!
        </button>

        <ul>
          <ProductList product={ searched } />
        </ul>
      </div>
    );
  }
}

export default Home;
