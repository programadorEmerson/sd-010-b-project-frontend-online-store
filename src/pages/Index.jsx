import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../components/SearchBar';
import * as api from '../services/api';
import CategoryList from '../components/CategoryList';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      lista: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((categories) => {
      this.setState({
        lista: categories,
      });
    });
  }

  render() {
    const { addToCart } = this.props;
    const { lista } = this.state;
    return (
      <section>
        <SearchBar addToCart={ addToCart } />
        <CategoryList categories={ lista } addToCart={ addToCart } />
      </section>
    );
  }
}

Index.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Index;
