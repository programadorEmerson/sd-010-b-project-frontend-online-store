import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      products.map((product) => <Card key={ product.id } product={ product } />)
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default ProductList;
