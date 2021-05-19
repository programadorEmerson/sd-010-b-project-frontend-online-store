import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../styles/CategoryList.css';

class CategoryList extends Component {
  render() {
    const { name, id, onClick } = this.props;
    return (
      <div className="radio__container">
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
      </div>
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
