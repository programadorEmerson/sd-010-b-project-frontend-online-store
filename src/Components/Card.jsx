import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const { title, img, price } = this.props;
    return (
      <div data-testid="product">
        <div>{ title }</div>
        <img src={ img } alt={ title } />
        <div>{ price }</div>
      </div>
    );
  }
}

Card.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  img: PropTypes.string,
}.isRequired;

export default Card;
