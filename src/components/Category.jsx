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
  category: PropTypes.objectOf.isRequired,
};

export default Category;
