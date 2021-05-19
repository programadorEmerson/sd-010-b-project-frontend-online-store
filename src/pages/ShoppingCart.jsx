import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem';

class ShoppingCart extends React.Component {
  // handleClick = (operator) => {
  //   const { quantity } = this.state;
  //   if (operator === '+') {
  //     this.setState({
  //       quantity: quantity + 1,
  //     });
  //   }
  //   this.setState({
  //     quantity: quantity - 1,
  //   });
  // }

  render() {
    const items = JSON.parse(localStorage.getItem('shoppingCart'));
    if (!localStorage.getItem('shoppingCart')) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio </p>;
    }
    return (
      <div>
        {/* <div>
          {items.map((itemObj) => <CartItem key={ itemObj.id } itemObj={ itemObj } />)}
        </div> */}
        {items.map((itemObj) => (
          <div key={ itemObj.id }>
            <CartItem key={ itemObj.id } itemObj={ itemObj } />
            {/* <button
              type="button"
              key={ itemObj.id }
              onClick={ this.handleClick('+') }
              data-testid="product-increase-quantity"
            >
              +
            </button>
            <button
              type="button"
              key={ itemObj.id }
              onClick={ this.handleClick('-') }
              data-testid="product-decrease-quantity"
            >
              +
            </button> */}
          </div>
        ))}
        <Link data-testid="checkout-products" to="/Checkout">Finalizar</Link>
      </div>
    );
  }
}

export default ShoppingCart;
