import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategories extends Component {
  render() {
    const { categories, fecthProducts } = this.props;
    return (
      <aside>
        <ul>
          {
            categories.map((category) => (
              <button
                type="button"
                key={ category.id }
                data-testid="category"
                onClick={ () => fecthProducts(category.id) }
              >
                {category.name}
              </button>))
          }
        </ul>
      </aside>
    );
  }
}

ListCategories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ListCategories;
