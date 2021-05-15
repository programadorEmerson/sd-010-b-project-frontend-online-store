import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from '../components/Category';

class Home extends Component {
  constructor(props) {
    super(props);
    const { categories } = props;
    this.state = {
      categories,
    };

    this.onChangeValue = this.onChangeValue.bind(this);
  }

  onChangeValue({ target: value }) {
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div onChange={ this.onChangeValue }>
        {categories.map((category) => (
          <Category key={ category.name } category={ category } />
        ))}
      </div>
    );
  }
}

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Home;
