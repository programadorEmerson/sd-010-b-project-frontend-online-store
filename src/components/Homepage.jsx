import React from 'react';
import { Link } from 'react-router-dom';
import * as Api from '../services/api';
import CategoryList from './CategoryList';

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: '',
      categories: [],
    };

    this.LoadCategories = this.LoadCategories.bind(this);
    this.renderCategories = this.renderCategories.bind(this);
  }

  componentDidMount() {
    this.LoadCategories();
  }

  async LoadCategories() {
    const allCategories = await Api.getCategories();
    this.setState({
      categories: allCategories,
    });
  }

  renderCategories() {
    const { categories } = this.state;
    return (
      <section className="category-list">
        {categories.length === 0 ? (
          <span>Nenhuma categoria foi encontrada</span>
        ) : (
          categories.map((categ) => (
            <CategoryList key={ categ.id } name={ categ.name } />
          ))
        )}
      </section>
    );
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div>
        <input
          type="text"
          value={ searchQuery }
          onChange={ (e) => this.setState({ searchQuery: e.target.value }) }
        />
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          {this.renderCategories()}
        </h3>
        <Link to="/pagecart" data-testid="shopping-cart-button">
          Page Cart
        </Link>
      </div>
    );
  }
}

export default Homepage;
