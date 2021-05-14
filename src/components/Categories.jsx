import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Categories.css';

class Categories extends Component {
  render() {
    const { categories } = this.props;
    return (
      <div className="category">
        <h3>Categorias:</h3>
        <div>
          {
            categories.map(({ name, id }) => (
              <li key={ id } data-testid="category">{ name }</li>
            ))
          }
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

export default Categories;
