import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ItemProductCart extends React.Component {
  render() {
    const { cartItem } = this.props;
    console.log(cartItem)
    return (
      <section data-testid="product">
        <fieldset>
          <p>{cartItem.title}</p>
          {/* <p>{ id }</p>
          <img src={thumbnail} alt={title} />
          <p>{`R$${price}`}</p> */}
        </fieldset>
      </section>
    );
  }
}

ItemProductCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemProductCart;
