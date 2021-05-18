import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ListProducts extends React.Component {
  render() {
    const { products } = this.props;
    if (products) {
      return (
        <section>
          <div className="product-list">
            { products.map((product) => (
              <div className="product-card" data-testid="product" key={ product.id }>
                <Link
                  to={ `/product/${product.id}` }
                  data-testid="product-detail-link"
                >
                  <h4>{ product.title }</h4>
                  <img src={ product.thumbnail } alt={ product.title } />
                  <h3>
                    { 'R$ ' }
                    { product.price }
                  </h3>
                </Link>
              </div>
            )) }
          </div>
        </section>
      );
    } return null;
  }
}

ListProducts.defaultProps = {
  products: undefined,
};

ListProducts.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape),
};

export default ListProducts;
