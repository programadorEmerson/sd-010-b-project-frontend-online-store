import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { getCategories } from '../services/api';
// import { SearchBar } from '../components/SearchBar';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
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

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          { categories.map((catItem) => (
            <li data-testid="category" key={ catItem.id }>
              { catItem.name }
            </li>))}
        </ul>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">Cart</Link>
        <SearchBar />
      </div>
    );
  }
}

export default Home;
