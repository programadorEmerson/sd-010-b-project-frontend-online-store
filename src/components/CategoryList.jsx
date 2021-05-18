import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class CategoryList extends Component {
  render() {
    const { name, id, onClick } = this.props;
    return (
      <label htmlFor={ id } data-testid="category">
        <input
          type="radio"
          id={ id }
          value={ id }
          name="category"
          onClick={ onClick }
        />
        {name}
      </label>
    );
  }
}

CategoryList.defaultProps = {
  name: 'a',
  id: 'b',
  onClick: () => {},
};

CategoryList.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export default CategoryList;
