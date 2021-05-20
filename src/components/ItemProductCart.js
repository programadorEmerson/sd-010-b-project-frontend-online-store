import React from 'react';
import PropTypes from 'prop-types';

class ItemProductCart extends React.Component {

  render() {
    const {
      cartItem: {
        cardProps: { title, thumbnail, id, price, quantity },
      },
    } = this.props;
    const { handleChange } = this.props;
    return (
      <section data-testid="product">
        <fieldset>
          <p data-testid="shopping-cart-product-name">{title}</p>
          <p>{id}</p>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$${price}`}</p>
          <label htmlFor="quantidade">
            Quantidade
            <button
              onClick={ () => handleChange(quantity === 1 ? 1 : quantity - 1, id) }
              data-testid="product-decrease-quantity"
              type="button"
            >
              -
            </button>
            <input type="text" value={ quantity } id="quantidade" disabled />
            <button
              onClick={ () => handleChange(quantity + 1, id) }
              data-testid="product-increase-quantity"
              type="button"
            >
              +
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
  quantidade: PropTypes.number.isRequired,
  cardProps: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default ItemProductCart;
