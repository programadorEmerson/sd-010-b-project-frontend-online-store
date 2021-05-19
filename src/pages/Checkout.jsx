import React from 'react';
import CartItem from '../components/CartItem';

class Checkout extends React.Component {
  render() {
    const items = JSON.parse(localStorage.getItem('shoppingCart'));
    console.log(items);
    if (!localStorage.getItem('shoppingCart')) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio </p>;
    }
    return (
      <div>
        {items.map((itemObj) => <CartItem key={ itemObj.id } itemObj={ itemObj } />)}
      </div>
    );
  }
}

export default Checkout;
