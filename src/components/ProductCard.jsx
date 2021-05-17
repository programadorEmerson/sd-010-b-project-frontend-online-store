import React from 'react';
import Proptypes from 'prop-types';

export default class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price } } = this.props;

    return (
      <section>
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: Proptypes.shape({
    title: Proptypes.string,
    thumbnail: Proptypes.string,
    price: Proptypes.number,
  }).isRequired,
};
