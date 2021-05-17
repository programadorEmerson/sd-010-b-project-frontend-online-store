import React from 'react';
import PropTypes from 'prop-types';

class ListProducts extends React.Component {
  render() {
    const { products } = this.props;
    if (products) {
      return (
        <section>
          <div className="product-list">
            { products.map((product) => (
              <div className="product-card" data-testid="product" key={ product.id }>
                <h4>{ product.title }</h4>
                <img src={ product.thumbnail } alt={ product.title } />
                <h3>
                  { 'R$ ' }
                  { product.price }
                </h3>
              </div>)) }
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
