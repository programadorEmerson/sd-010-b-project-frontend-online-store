import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as api from '../services/api';
import Category from './Category';
import '../Style/Categories.css';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.apiCategories();
  }

  apiCategories() {
    api.getCategories().then((category) => this.setState({
      categories: category,
    }));
  }

  render() {
    const { categories } = this.state;
    const { buscafunc } = this.props;
    return (
      <div className="categories">
        Categorias:
        {categories.map((category) => (<Category
          buscafunc={ buscafunc }
          key={ category.id }
          category={ category }
        />))}
      </div>
    );
  }
}

Categories.propTypes = {
  categoryId: PropTypes.string,
}.isRequired;

export default Categories;
