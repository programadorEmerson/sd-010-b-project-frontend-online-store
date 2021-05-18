import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      ForcedRender: 'Xablau',
    };
  }

  componentDidUpdate(_, previousState) {
    const { ForcedRender } = this.state;
    if (ForcedRender !== previousState.ForcedRender) {
      this.setState = ({ ForcedRender: 'Bruno' });
    }
    console.log(ForcedRender);
  }

  increment = () => {
    const { ForcedRender } = this.state;
    this.setState = ({
      ForcedRender: 'Fabio',
    });
    console.log(ForcedRender);
  }

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
               <button type="button">+</button>
               <button onClick={ this.increment(product) } type="button">-</button>
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
     const { ForcedRender } = this.state;
     console.log(ForcedRender);
     return (
       <main>
         {/* {ForcedRender} */}
         {this.RenderProducts()}
         <Link to="/">Home</Link>
         <button onClick={ this.increment } type="button">-</button>
       </main>
     );
   }
}

export default ShoppingCart;
