import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Category extends Component {
  render() {
    const {
      category: { name },
    } = this.props;
    return <li data-testid="category">{name}</li>;
  }
}

Category.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};

export default Category;
