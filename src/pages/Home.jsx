import React from 'react';
import { getCategories } from '../services/api';

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
      </div>
    );
  }
}

export default Home;
