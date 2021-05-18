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
        {categories.map(({ id, name }) => (
          <li
            key={ id }
          >
            <label htmlFor={ id }>
              <input
                data-testid="category"
                type="radio"
                id={ id }
                name="categories"
                onChange={ checked }
                value={ id }
              />
              { name }
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
