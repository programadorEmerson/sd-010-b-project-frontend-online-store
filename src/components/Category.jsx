import React from 'react';
import PropTypes from 'prop-types';
import '../Style/Categories.css'

class Category extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <a
        className='category'
        type="text"
        href={ category.id }
        data-testid="category"
      >
        {`${category.name}`}
      </a>
    );
  }
}

Category.propTypes = {
  category: PropTypes.array,
}.isRequired;

export default Category;
