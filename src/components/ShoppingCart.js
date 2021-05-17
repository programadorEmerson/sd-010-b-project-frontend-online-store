import React, { Component } from 'react';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      empty: true,
      quantity: 0,
      product: [],
    };
  }

   RenderProducts = () => {
     const value = JSON.parse(localStorage.getItem('cartItems'));
     if (value !== null) {
       this.setState = {
         empty: false,
       };
       value.sort();
       const products = value.map((product, index) => <li data-testid="shopping-cart-product-name" key={ index }>{product}</li>);
       return products;
     } return (
       <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
     );
   }

   render() {
     return (
       <main>
         {this.RenderProducts()}
       </main>
     );
   }
}

export default ShoppingCart;
