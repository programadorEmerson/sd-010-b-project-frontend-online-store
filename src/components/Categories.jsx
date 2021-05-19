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

  valorDaId = () => {
    const { id } = this.state;
    const { categoryId } = this.props;
    categoryId(id);
  }

  apiCategories() {
    api.getCategories().then((category) => this.setState({
      categories: category,
    }));
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="categories">
        {categories.map((category) => (<Category
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
