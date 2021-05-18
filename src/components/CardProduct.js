import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CardProduct extends React.Component {
  render() {
    const {
      product: { title, thumbnail, price, id },
    } = this.props;
    return (
      <section data-testid="product">
        <fieldset>
          <p>{title}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$${price}`}</p>
          <Link data-testid="product-detail-link" to={ `/detail/${id}` }>
            {' '}
            Detalhes
          </Link>
          <button type="button">Adicionar ao Carrinho</button>
        </fieldset>
      </section>
    );
  }
}

CardProduct.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default CardProduct;
