import React from 'react';
import PropTypes from 'prop-types';

import '../styles/CartItem.css';
import trashIcon from '../img/pagecart/delete.svg';

class CartItem extends React.Component {
  render() {
    const { name, handleCartBtnEvent, qty, id, price, thumbnail } = this.props;
    return (
      <div className="pc-cartItem">
        <div className="pc-cartItem__img-name">
          <img className="pc-cartItem__thumbnail" src={ thumbnail } alt="" />
          <p
            className="pc-cartItem__name"
            data-testid="shopping-cart-product-name"
          >
            {name}
          </p>
        </div>

        <div className="qtybutton__container">
          <button
            className="qtybutton__button"
            data-testid="product-increase-quantity"
            name="plus"
            type="button"
            onClick={ (e) => handleCartBtnEvent(e, id) }
          >
            +
          </button>
          <p
            data-testid="shopping-cart-product-quantity"
            className="qtybutton_text"
          >
            {qty}

          </p>
          <button
            className="qtybutton__button"
            data-testid="product-decrease-quantity"
            name="subtract"
            type="button"
            onClick={ (e) => handleCartBtnEvent(e, id) }
          >
            -
          </button>
        </div>
        <img
          className="pc-cartItem__removeIcon"
          src={ trashIcon }
          alt="remove icon"
          name="remove"
          aria-hidden="true"
          onClick={ (e) => handleCartBtnEvent(e, id) }
        />
        <p>
          Total: R$
          {' '}
          {price * qty }
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
  thumbnail: PropTypes.string.isRequired,
};

export default CartItem;
