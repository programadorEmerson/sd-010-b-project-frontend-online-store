import React from 'react';
import PropTypes from 'prop-types';

class ItemProductCart extends React.Component {
  render() {
    const { cartItem: { cardProps: { title, thumbnail, id, price } } } = this.props;
    return (
      <section data-testid="product">
        <fieldset>
          <p>{title}</p>
          <p>{ id }</p>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$${price}`}</p>
        </fieldset>
      </section>
    );
  }
}

ItemProductCart.propTypes = {
  cartItem: PropTypes.objectOf.isRequired,
  cardProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemProductCart;
