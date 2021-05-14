import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class CategoryList extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="category" data-testid="category">
        <button type="checkbox">{name}</button>
      </div>
    );
  }
}

CategoryList.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryList;
