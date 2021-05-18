import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategories extends Component {
  render() {
<<<<<<< HEAD
    const { categories, fecthProducts } = this.props;
=======
    const { categories, fetchProducts } = this.props;
>>>>>>> c8718613c3cb6bdf51858de698597890d5c341bd
    return (
      <aside>
        <ul>
          {
<<<<<<< HEAD
            categories.map((category) => (
              <button
                type="button"
                key={ category.id }
                data-testid="category"
                onClick={ () => fecthProducts(category.id) }
              >
                {category.name}
              </button>))
=======
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
>>>>>>> c8718613c3cb6bdf51858de698597890d5c341bd
          }
        </ul>
      </aside>
    );
  }
}

ListCategories.propTypes = {
<<<<<<< HEAD
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  fecthProducts: PropTypes.func.isRequired,
=======
  categories: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  fetchProducts: PropTypes.func.isRequired,
>>>>>>> c8718613c3cb6bdf51858de698597890d5c341bd
};

export default ListCategories;
