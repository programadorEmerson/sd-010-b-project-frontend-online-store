import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { product: { title, thumbnail, price }, getName } = this.props;
    console.log(getName);
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
        <Link
          data-testid="product-detail-link"
          to={ `/details/${encodeURIComponent(title)}` }
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
};

export default Card;
