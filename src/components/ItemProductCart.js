import React from 'react';
import PropTypes from 'prop-types';

class ItemProductCart extends React.Component {
  render() {
    const {
      cartItem: {
        cardProps: { title, thumbnail, id, price, quantity },
      },
    } = this.props;
    const { handleChange, handleChangeDelete } = this.props;

    return (
      <section data-testid="product">
        <fieldset>
          <button
            onClick={ () => handleChangeDelete(id) }
            type="button"
          >
            X
          </button>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>{id}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$${price}`}</p>
          <label htmlFor="quantidade">
            Quantidade
            <p
              id="quantidade"
              data-testid="shopping-cart-product-quantity"
            >
              {quantity}
            </p>
            <button
              onClick={ () => handleChange(quantity + 1, id) }
              data-testid="product-increase-quantity"
              type="button"
            >
              +
            </button>
            <button
              onClick={ () => handleChange(quantity === 1 ? 1 : quantity - 1, id) }
              data-testid="product-decrease-quantity"
              type="button"
            >
              -
            </button>
          </label>
        </fieldset>
      </section>
    );
  }
}

ItemProductCart.propTypes = {
  cartItem: PropTypes.objectOf.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleChangeDelete: PropTypes.func.isRequired,
  cardProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemProductCart;
