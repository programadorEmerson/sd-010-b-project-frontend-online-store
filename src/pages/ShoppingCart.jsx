import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem';

class ShoppingCart extends React.Component {
  // componentDidUpdate() {
  //   this.handleClick
  // }

  render() {
    const items = JSON.parse(localStorage.getItem('shoppingCart'));
    if (!localStorage.getItem('shoppingCart')) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio </p>;
    }
    return (
      <div>
        {items.map((itemObj, index, array) => (
          <div key={ itemObj.id }>
            <CartItem
              key={ itemObj.id }
              itemObj={ itemObj }
              index={ index }
              array={ array }
            />
          </div>
        ))}
        <Link data-testid="checkout-products" to="/Checkout">Finalizar</Link>
      </div>
    );
  }
}

export default ShoppingCart;
