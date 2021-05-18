import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends React.Component {
  render() {
    const { product: { title, thumbnail, price, id } } = this.props;
    return (
      <Link to={ `product/${id}` } data-testid="product-detail-link">
        <div data-testid="product">
          <img src={ thumbnail } alt={ title } />
          <h4>{ title }</h4>
          <h5>{ price }</h5>
        </div>
      </Link>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default Card;
