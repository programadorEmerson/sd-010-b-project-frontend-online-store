import React from 'react';

import ProductCard from '../components/ProductCard';

class ShoppingCart extends React.Component {
  render() {
    const cartList = localStorage.getItem('shoppintCart');
    if (!cartList) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio </p>;
    }
    return (
      <div>
        {cartList.map((item) => (
          <ProductCard key={ item.id } product={ item } />
        ))}
      </div>
    );
  }
}

export default ShoppingCart;
