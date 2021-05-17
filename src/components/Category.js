import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const { category: { name, id } } = this.props;
    return (
      <label htmlFor={ name }>
        <input data-testid="category" type="radio" value={ id } name="category" />
        {name}
      </label>
    );
  }
}

Category.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default Category;
