import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends React.Component {
  render() {
    const { product: { title, thumbnail, price, id } } = this.props;

    return (
      <section data-testid="product">
        <h3>{ title }</h3>
        <img src={ thumbnail } alt={ title } />
        <p>{ price }</p>
        <Link
          data-testid="product-detail-link"
          to={ { pathname: `/details/${id}` } }
        >
          <p>Detalhes</p>
        </Link>
      </section>
    );
  }
}

ProductCard.propTypes = {
  product: Proptypes.shape({
    title: Proptypes.string,
    thumbnail: Proptypes.string,
    price: Proptypes.number,
    id: Proptypes.string,
  }).isRequired,
};
