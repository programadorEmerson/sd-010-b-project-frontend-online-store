import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardList extends Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;

    return (
      <div data-testid="product">
        <h2>
          { title }
        </h2>
        <img src={ thumbnail } alt={ title } width="200px" />
        <h3>{ `R$ ${price}` }</h3>
      </div>
    );
  }
}

CardList.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default CardList;
