import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
   RenderProducts = () => {
     const value = JSON.parse(localStorage.getItem('cartItems'));
     if (value !== null) {
       this.setState = {
         empty: false,
       };
       value.sort();
       let count = 1;
       const products = value.map((product, index) => {
         if (value[index] === value[index + 1] && value.length !== null) {
           count += 1;
         } else {
           const num = count;
           count = 1;
           return (
             <div>
               <li data-testid="shopping-cart-product-name" key={ index }>{product}</li>
               <p data-testid="shopping-cart-product-quantity">
                 Quantidade:
                 {num}
               </p>
             </div>
           );
         }
         return null;
       });
       return products;
     } return (
       <div data-testid="shopping-cart-empty-message">Seu carrinho está vazio</div>
     );
   }

   render() {
     return (
       <main>
         {this.RenderProducts()}
         <Link to="/">Home</Link>
       </main>
     );
   }
}

export default ShoppingCart;
