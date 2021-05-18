import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class CardList extends Component {
  render() {
    const { product: { title, thumbnail, price, id } } = this.props;

    return (
      <div data-testid="product">
        <h2>
          { title }
        </h2>
        <img src={ thumbnail } alt={ title } width="200px" />
        <h3>{ `R$ ${price}` }</h3>
        <Link to={ `/info/${id}` }>
          <button type="button" data-testid="product-detail-link">
            Descrição
          </button>
        </Link>
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
  }).isRequired,
};

export default CardList;
