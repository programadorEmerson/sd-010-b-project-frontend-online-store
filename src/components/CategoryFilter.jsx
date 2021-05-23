import React from 'react';
import PropTypes from 'prop-types';

class CategoryFilter extends React.Component {
  render() {
    const { category: { id, name }, handleCategory, onClick } = this.props;
    return (
      <section className="category-item">
        <label htmlFor={ id } data-testid="category">
          <input
            onClick={ onClick }
            onChange={ handleCategory }
            name="categoryFilter"
            id={ id }
            type="radio"
          />
          { name }
        </label>
      </section>
    );
  }
}

CategoryFilter.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  handleCategory: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CategoryFilter;
