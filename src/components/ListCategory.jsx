import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

class ListCategory extends Component {
  render() {
    const { categories } = this.props;
    return categories.map((category) => (
      <Category key={ category.name } category={ category } />
    ));
  }
}

ListCategory.propTypes = {};

export default ListCategory;
