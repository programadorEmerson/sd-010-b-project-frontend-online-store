import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import '../styles/PageCart.css';
import homeIcon from '../img/pagecart/home-page.svg';

class PageCart extends React.Component {
  // Faz a soma total do preço dos items que chegaram da props
  getTotalPrice = () => {
    const { cart } = this.props;
    return cart.reduce((acc, { qty, product: { price } }) => {
      acc += qty * price;
      return acc;
    }, 0);
  }

  render() {
    const { cart, handleCartBtnEvent } = this.props;
    if (!cart.length) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>

        <div className="pc-header">
          <Link to="/">
            <img
              className="pc-header__back-icon"
              src={ homeIcon }
              alt="Voltar para página principal"
            />
          </Link>
          <div className="pc-header__logoContainer">
            <h1 className="pc-header__logo">Logo &nbsp;</h1>
            <h1 className="pc-header__text">| Carrinho de Compras</h1>
          </div>
        </div>
        <div className="pc-cart">
          {cart.map(({ qty, product: { title, price, thumbnail, available_quantity: Aqty }, id }) => (
            <CartItem
              key={ id }
              id={ id }
              name={ title }
              qty={ qty }
              Aqty={ Aqty }
              price={ price }
              thumbnail={ thumbnail }
              handleCartBtnEvent={ handleCartBtnEvent }
            />
          ))}
          <div className="price-buy">
            <h2>
              Total: R$
              {this.getTotalPrice()}
            </h2>
            <Link
              className="price-buy__buy"
              to="/checkout"
              data-testid="checkout-products"
            >
              Finalizar Compra

            </Link>
          </div>
        </div>

      </div>
    );
  }
}

PageCart.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
  handleCartBtnEvent: PropTypes.func.isRequired,
};

export default PageCart;
