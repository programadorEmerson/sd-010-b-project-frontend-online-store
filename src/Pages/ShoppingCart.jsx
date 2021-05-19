import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartList from '../Components/CartList';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.cartList = this.cartList.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
  }

  emptyCart() {
    return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
  }

  cartList() {
    const { cart, totalValue } = this.props;
    return cart.map((product, curr) => (
      <CartList
        totalValue={ totalValue }
        key={ `${product.title} - ${curr}` }
        product={ product }
      />
    ));
  }

  render() {
    const { cart } = this.props;
    return <div>{ cart.length > 0 ? this.cartList() : this.emptyCart() }</div>;
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf,
  totalValue: PropTypes.func,
}.isRequired;

export default ShoppingCart;
