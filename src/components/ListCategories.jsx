import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategories extends Component {
  render() {
    const { categories, fetchProducts } = this.props;
    return (
      <aside className="asideCategories">
        <ul>
          {
            categories.map((category, key) => (
              <li key={ key }>
                <button
                  type="button"
                  key={ category.id }
                  data-testid="category"
                  onClick={ () => fetchProducts(category.id) }
                >
                  {category.name}
                </button>
              </li>
            ))
          }
        </ul>
      </aside>
    );
  }
}

ListCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

export default ListCategories;
