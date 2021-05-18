import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';

class ProductCard extends React.Component {
  render() {
    const { product, product: { title, thumbnail, price } } = this.props;
    return (
      <section className="products-section">
        <section data-testid="product" className="product-box">
          <div className="product-name">
            <p>{ title }</p>
          </div>
          <div className="product-image">
            <img src={ thumbnail } alt={ title } />
          </div>
          <div className="product-price">
            <p>{ `R$${price}` }</p>
          </div>
          <div>
            <AddToCart data-testid="product-add-to-cart" product={ product } />
          </div>
        </section>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
