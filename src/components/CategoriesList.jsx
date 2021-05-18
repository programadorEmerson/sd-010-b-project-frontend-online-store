import React from 'react';
import PropTypes from 'prop-types';

import * as api from '../services/api';

import Loading from './Loading';

import './styles/CategoriesList.css';

export default class CategoriesList extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };

    this.fetchCategories = this.fetchCategories.bind(this);
    this.onCategoryClick = this.onCategoryClick.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  onCategoryClick(event) {
    this.setState(
      { selectedCategory: event.target.id },
      () => {
        const { selectedCategory } = this.state;
        const { handleCategorySearch } = this.props;
        handleCategorySearch(selectedCategory);
      },
    );
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
      loading: false,
    });
  }

  render() {
    const { loading, categories } = this.state;

    if (loading) {
      return (
        <Loading />
      );
    }

    const categoriesList = categories.map(({ name, id }, index) => (
      <div key={ index }>
        <button
          id={ id }
          data-testid="category"
          onClick={ this.onCategoryClick }
          type="button"
          className="category"
        >
          { name }
        </button>
        <br />
      </div>
    ));

    return categoriesList;
  }
}

CategoriesList.propTypes = {
  handleCategorySearch: PropTypes.func.isRequired,
};
