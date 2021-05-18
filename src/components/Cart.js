import React from 'react';
import ItemProductCart from './ItemProductCart';

class Cart extends React.Component {
  render() {
    const cartItems = JSON.parse(localStorage.getItem('cartState'));
    const total = cartItems.length;
    if (!cartItems) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }
    return (
      <div>
        <p data-testid="shopping-cart-product-quantity">{ total }</p>
        {cartItems.map((cartItem, index) => (
          <ItemProductCart cartItem={ cartItem } key={ index + 1 } />
        ))}
      </div>
    );
  }
}

export default Cart;
