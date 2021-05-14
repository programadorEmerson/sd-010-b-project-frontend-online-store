import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => (
          <div data-testid="product" key={ product.id }>
            { product.title }
            {<img width="200px" src={ product.thumbnail } alt={ product.title } />}
            { product.price }
          </div>
        ))}
      </div>
    );
  }
}
ProductList.propTypes = {
  products: PropTypes.arrayOf({
    product: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      id: PropTypes.string,
      thumbnail: PropTypes.string,
    }) }).isRequired,
};
export default ProductList;
