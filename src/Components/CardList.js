import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardList extends Component {
  render() {
    const { product: { title, thumbnail, price, id }, onclick } = this.props;
    const link = `/info/${id}`;

    return (
      <div id={ title } data-testid="product">
        <h2>
          { title }
        </h2>
        <Link data-testid="product-detail-link" to={ link }>Detalhes</Link>
        <button
          data-testid="product-add-to-cart"
          type="button"
          onClick={ () => onclick(id, title) }
        >
          Colocar no carrinho

        </button>
        <img src={ thumbnail } alt={ title } width="200px" />
        <h3>
          { `R$ ${price}` }
        </h3>
      </div>
    );
  }
}

CardList.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }),
  onclick: PropTypes.func,
}.isRequired;

export default CardList;
