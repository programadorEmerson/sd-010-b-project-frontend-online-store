import React from 'react';

import ProductCard from '../components/ProductCard';

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: props.quantity,
    };
  }

  handleClick = (operator) => {
    const { quantity } = this.state;
    if (operator === '+') {
      this.setState({
        quantity: quantity + 1,
      });
    }
    this.setState({
      quantity: quantity - 1,
    });
  }

  render() {
    const cartList = localStorage.getItem('shoppintCart');
    if (!cartList) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio </p>;
    }
    return (
      <div>
        {cartList.map((item) => (
          <div key={ item.id }>
            <ProductCard key={ item.id } product={ item } />
            <button
              type="button"
              key={ item.id }
              onClick={ this.handleClick('+') }
              data-testid="product-increase-quantity"
            >
              +
            </button>
            <button
              type="button"
              key={ item.id }
              onClick={ this.handleClick('-') }
              data-testid="product-decrease-quantity"
            >
              +
            </button>
          </div>

        ))}
      </div>
    );
  }
}

export default ShoppingCart;
