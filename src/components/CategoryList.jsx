import React from 'react';
import PropTypes from 'prop-types';

class CategoryList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <aside>
        <ol>
          { categories.map(({ id, name }) => (
            <li data-testid="category" key={ id }>{ name }</li>
          )) }
        </ol>
      </aside>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CategoryList;
