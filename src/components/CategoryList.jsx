import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  generateSelectCategories = () => {
    const { categories, onSelect } = this.props;

    return (
      <select onChange={ (event) => onSelect(event) }>
        {
          categories.map((category) => {
            const { name } = category;
            return (
              <option key={ name } data-testid="category" value={ name }>{ name }</option>
            );
          })
        }
      </select>
    );
  }

  render() {
    return (
      <section>
        <label htmlFor="category">
          Escolha a categoria:
          { this.generateSelectCategories() }
        </label>
      </section>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.shape.isRequired,
};

export default CategoryList;
