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
<<<<<<< HEAD
        to={ `/home/${category.id}` }
        data-testid="category"
        // onClick={ console.log(category.id) }
=======
        to="/card"
        data-testid="category"
>>>>>>> 5d3773e417ddd5b19967b463b838eaedc8ca2811
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
