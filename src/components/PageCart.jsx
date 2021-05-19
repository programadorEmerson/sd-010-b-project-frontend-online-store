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
        <div className="header">
          <Link to="/">
            <img src={ homeIcon } alt="Voltar para página principal" />
          </Link>
          <div>
            <h1>Logo</h1>
            <h1>|</h1>
            <h1>Carrinho de Compras</h1>
          </div>
        </div>
        <h2>
          Total: R$
          {this.getTotalPrice()}
        </h2>
        {cart.map(({ qty, product: { title, price }, id }) => (
          <CartItem
            key={ id }
            id={ id }
            name={ title }
            qty={ qty }
            price={ price }
            handleCartBtnEvent={ handleCartBtnEvent }
          />
        ))}
        <Link to="/checkout" data-testid="checkout-products">Finalizar Compra</Link>
      </div>
    );
  }
}

PageCart.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
  handleCartBtnEvent: PropTypes.func.isRequired,
};

export default PageCart;
