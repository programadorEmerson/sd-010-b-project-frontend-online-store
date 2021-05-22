import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import '../Style/Categories.css';

class Category extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <Link
        className="category"
        to={ `/home/${category.id}` }
        data-testid="category"
      >
        {`${category.name}`}
      </Link>
    );
  }
}

Category.propTypes = {
  category: PropTypes.array,
}.isRequired;

export default Category;
