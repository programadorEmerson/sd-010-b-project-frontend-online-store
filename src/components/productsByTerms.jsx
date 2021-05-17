import React from 'react';
import PropTypes from 'prop-types';

class ProductsByTerms extends React.Component {
  render() {
    const { product: { title, price, thumbnail } } = this.props;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
      </div>
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
};

export default ProductsByTerms;
