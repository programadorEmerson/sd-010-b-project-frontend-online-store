import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as productsApi from '../services/api';
import './Categories.css';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const response = await productsApi.getCategories();
    this.setState({ categories: response });
  }

  render() {
    const { categories } = this.state;
    const { checked } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <li
            key={ category.id }
            data-testid="category"
          >
            <label htmlFor={ category.id }>
              <input
                type="radio"
                id={ category.id }
                name="categories"
                onChange={ checked }
              />
              { category.name }
            </label>
          </li>))}
      </div>
    );
  }
}

Categories.propTypes = {
  checked: PropTypes.func.isRequired,
};
export default Categories;
