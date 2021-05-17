import React, { Component } from 'react';

class CardList extends Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;

    return (
      <div data-testid="product">
        <h2> { title } </h2>
        <img src={ thumbnail } alt={ title } width="200px" />
        <h3>{ `R$ ${price}` }</h3>
      </div>
    );
  }
}

export default CardList;
