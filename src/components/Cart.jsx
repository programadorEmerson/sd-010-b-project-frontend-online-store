import React, { Component } from 'react';
import CartItem from './CartItem';
import '../Style/Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItens: [],
    };
  }

  componentDidMount() {
    this.addInCart();
  }

  addInCart() {
    const jsonKeyTemp = localStorage.getItem('keyTemp');
    const keyTemp = JSON.parse(jsonKeyTemp);
    this.setState({
      cartItens: keyTemp,
    });
  }

  emptyCart() {
    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }

  render() {
    const { cartItens } = this.state;

    console.log(cartItens);
    if (cartItens === null) return this.emptyCart();
    console.log(this.props);

    return (
      <div className="cart">
        {cartItens.map((product) => (<CartItem
          key={ product.id }
          product={ product }
        />))}
      </div>
    );
  }
}

export default Cart;
