import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from '../components/Category';

class Home extends Component {
  render() {
    const { categories } = this.props;
    return (
      <ul>
        {categories.map((category) => (
          <Category key={ category.name } category={ category } />
        ))}
      </ul>
    );
  }
}

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
