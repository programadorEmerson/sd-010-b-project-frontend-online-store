import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from './Loading';
import Product from './Product';

class AllProducts extends Component {
  render() {
    const { loading, products, stateAddCart } = this.props;
    if (loading) return <Loading />;
    return (
      <div className="allProducts">
        {products.map((product) => (
          <Product
            key={ product.id }
            // addToCart={ addToCart }
            stateAddCart={ stateAddCart }
            product={ product }
          />))}
      </div>
    );
  }
}

AllProducts.propTypes = {
  loading: PropTypes.bool,
  products: PropTypes.string,
}.isRequired;

export default AllProducts;
