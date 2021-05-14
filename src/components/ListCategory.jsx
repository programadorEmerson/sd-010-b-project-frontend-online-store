import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

class ListCategory extends Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {categories.map((category) => (
          <Category key={ category.name } category={ category } />
        ))}
      </ul>
    );
  }
}

ListCategory.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListCategory;
