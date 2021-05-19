import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/productsByTerms.css';

class ProductsByTerms extends React.Component {
  render() {
    const { product, id, addToCart } = this.props;
    const { shipping, title, price, thumbnail } = product;
    const { free_shipping: freeShipping } = shipping;

    return (
      <div className="card">
        <Link
          className="card__link"
          data-testid="product-detail-link"
          to={ `/details/${id}` }
        >
          <div className="title-thumbnail-price" data-testid="product">
            <p className="title-thumbnail-price__title">{title}</p>
            <div className="thumbnail-price__container">
              <img
                className="thumbnail-price__thumbnail"
                src={ thumbnail }
                alt={ title }
              />
              <p className="thumbnail-price__price">
                R$:
                {' '}
                {price}
              </p>
            </div>
          </div>
        </Link>
        <div>
          { freeShipping
          && <p className="card__fShip" data-testid="free-shipping">frete grátis</p> }
        </div>
        <button
          className="card__button"
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
