import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price } = product;
    return (
      <div data-testid="product">
        <Link
          to={ `/details/${title}` }
          data-testid="product-detail-link"
        >
          <img src={ thumbnail } alt={ title } />
          <h4>{ title }</h4>
          <span>{ price }</span>
          {/* Detalhes */}
        </Link>
      </div>
    );
  }
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductCard;
