import React from 'react';
import PropTypes from 'prop-types';

import '../styles/CartItem.css';
import trashIcon from '../img/pagecart/delete.svg';

class CartItem extends React.Component {
  render() {
    const { name, handleCartBtnEvent, qty, id, price, thumbnail, Aqty } = this.props;
    console.log((Math.round((price + Number.EPSILON) * 100) / 100).toFixed(2));
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
        <div className="pc-cartItem__btn-trash-price">
          <div className="qtybutton__container">
            <button
              className="qtybutton__button"
              data-testid="product-increase-quantity"
              name="plus"
              type="button"
              onClick={ (e) => handleCartBtnEvent(e, id) }
              disabled={ Aqty === qty }
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
          <p className="pc-cartItem__price">
            Total: R$
            {' '}
            {(Math.round(((price + Number.EPSILON) * qty) * 100) / 100).toFixed(2)}
          </p>
        </div>
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
  Aqty: PropTypes.number.isRequired,
};

export default CartItem;
