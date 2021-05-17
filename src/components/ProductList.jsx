import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {products.map((product) => (
          <div data-testid="product" key={ product.id }>
            <Link data-testid="product-detail-link" to={ `details/${product.id}` }>
              <h3>{ product.title }</h3>
              <img width="200px" src={ product.thumbnail } alt={ product.title } />
              <p>
                R$
                { product.price }
              </p>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
ProductList.propTypes = {
  map: PropTypes.arrayOf({
    products: PropTypes.shape({
      title: PropTypes.string,
      price: PropTypes.number,
      id: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
  }),
}.isRequired;

export default ProductList;
