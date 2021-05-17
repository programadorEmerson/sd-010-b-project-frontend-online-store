import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductsByTerms extends React.Component {
  render() {
    const { product: { title, price, thumbnail }, id } = this.props;
    return (
      <Link to={ `/details/${id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <p>{title}</p>
          <p>{price}</p>
          <img src={ thumbnail } alt={ title } />
        </div>
      </Link>
    );
  }
}

ProductsByTerms.defaultProps = {
  product: {
    title: 'faltou titulo',
    price: 9999999,
    thumbnail: 'faltou imagem',
  },

};

ProductsByTerms.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
  }),
  id: PropTypes.number.isRequired,
};

export default ProductsByTerms;
