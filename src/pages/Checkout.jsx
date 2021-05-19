import React, { Component } from 'react';
import BuyerInfo from '../components/BuyerInfo';
import CartItem from '../components/CartItem';
import Payment from '../components/Payment';

class Checkout extends Component {
  render() {
    const items = JSON.parse(localStorage.getItem('shoppingCart'));
    return (
      <div>
        <div>
          {items.map((itemObj) => (
            <CartItem key={ itemObj.id } itemObj={ itemObj } />
          ))}
        </div>
        <div>
          R$
          {items.reduce((total, cart) => {
            total += cart.quantidade * cart.price;
            return total;
          }, 0)}
        </div>
        <BuyerInfo />
        <Payment />
      </div>
    );
  }
}

export default Checkout;
