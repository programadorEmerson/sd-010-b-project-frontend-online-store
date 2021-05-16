import React from 'react';
import PropTypes from 'prop-types';

class Category extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <p data-testid="category">{`${category.name}`}</p>
    );
  }
}

Category.propTypes = {
  category: PropTypes.array,
}.isRequired;

export default Category;
