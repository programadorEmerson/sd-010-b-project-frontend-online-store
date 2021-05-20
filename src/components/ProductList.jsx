import React from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { products, addItemToCart } = this.props;
    return (

      products.map((product) => (
        <>
          <ProductCard key={ product.id } product={ product } />
          <button
            type="button"
            data-testid="product-add-to-cart"
            onClick={ () => addItemToCart(product) }
          >
            Adicionar
          </button>
        </>
      ))
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  addItemToCart: PropTypes.func.isRequired,
};

export default ProductList;
