import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      products.map((product) => (
        <ProductCard key={ product.id } product={ product } />
      ))
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default ProductList;
