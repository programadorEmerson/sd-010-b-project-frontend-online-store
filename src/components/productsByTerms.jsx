import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductsByTerms extends React.Component {
  render() {
    const { product, id, addToCart } = this.props;
    const { shipping, title, price, thumbnail } = product;
    const { free_shipping: freeShipping } = shipping;

    return (
      <div>
        <Link  data-testid="product-detail-link" to={ `/details/${id}` }>
          <div data-testid="product">
            <p>{title}</p>
            <p>{price}</p>
            <img src={ thumbnail } alt={ title } />
          </div>
        </Link>
        <div>
          { freeShipping && <p data-testid="free-shipping">frete grátis</p> }
        </div>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => addToCart(product) }
        >
          Adicionar ao Carrinho
        </button>
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
    shipping: PropTypes.shape({
      free_shipping: PropTypes.bool,
    }),
  }),
  id: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductsByTerms;
