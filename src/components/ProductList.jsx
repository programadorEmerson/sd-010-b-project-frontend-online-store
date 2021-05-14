import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <li>
        { products.map((product) => (
          <ProductCard key={ product.key } product={ product } />
        ))}
      </li>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default ProductList;
