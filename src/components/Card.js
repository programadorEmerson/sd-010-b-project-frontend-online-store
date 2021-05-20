import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { product: { title, thumbnail, price }, getName, qtd } = this.props;
    return (
      <div data-testid="product">
        <img src={ thumbnail } alt={ title } />
        <h1>{ title }</h1>
        <p>{ price }</p>
        <button
          onClick={ getName(title) }
          type="button"
          data-testid="product-add-to-cart"
        >
          Adicionar ao Carrinho
        </button>
        <br />
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/details/${encodeURIComponent(title)}`,
            about: {
              name: qtd,
            } } }
        >
          DETALHES DO PRODUTO
        </Link>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  getName: PropTypes.func.isRequired,
  qtd: PropTypes.func.isRequired,
};

export default Card;
