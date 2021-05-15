import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListCategories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <aside>
        <ul>
          {
            categories.map((category) => (
              <li
                key={ category.id }
                data-testid="category"
              >
                {category.name}
              </li>))
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
