import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id, shipping } = product;
    return (
      <div data-testid="product">
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <p data-testid={ shipping.free_shipping ? 'free-shipping' : '' }>
          {shipping.free_shipping ? 'Frete Grátis' : null}
        </p>
        <Link
          to={ `/product-details/${id}` }
        >
          <button type="button" data-testid="product-detail-link">Detalhes</button>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }).isRequired,
};

export default ProductCard;
