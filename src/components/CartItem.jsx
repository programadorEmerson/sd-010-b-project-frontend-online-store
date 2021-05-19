import React from 'react';
import PropTypes from 'prop-types';

class CartItem extends React.Component {
  render() {
    const { name, handleCartBtnEvent, qty, id, price, Aqty } = this.props;
    return (
      <div>
        <p data-testid="shopping-cart-product-quantity">{qty}</p>
        <p data-testid="shopping-cart-product-name">{name}</p>
        <button
          data-testid="product-increase-quantity"
          name="plus"
          type="button"
          onClick={ (e) => handleCartBtnEvent(e, id) }
          disabled={ Aqty === qty }
        >
          Mais
        </button>
        <button
          data-testid="product-decrease-quantity"
          name="subtract"
          type="button"
          onClick={ (e) => handleCartBtnEvent(e, id) }
        >
          Menos
        </button>
        <button
          name="remove"
          type="button"
          onClick={ (e) => handleCartBtnEvent(e, id) }
        >
          X
        </button>
        <p>
          Total: R$
          {price * qty}
        </p>
      </div>
    );
  }
}

CartItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  qty: PropTypes.string.isRequired,
  handleCartBtnEvent: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  Aqty: PropTypes.number.isRequired,
};

export default CartItem;
