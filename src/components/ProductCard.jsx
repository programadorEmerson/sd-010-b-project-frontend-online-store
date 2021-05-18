import React from 'react';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;
    return (
      <section data-testid="product" className="product-card">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$${price}` }</p>
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
