// Agradecimentos ao Daniel Roberto Turma 10 Tribo B, Lucas Martins Turma 10 Tribo B

import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import MainPage from './Pages/MainPage';
import ShoppingCart from './Pages/ShoppingCart';
import Header from './Components/Header';
import ProductDetails from './Pages/ProductDetails';

class App extends Component {
  constructor() {
    super();

    this.state = {
      shoppingCartItens: [],
    };
  }

  removeItem = (id) => {
    const { shoppingCartItens } = this.state;
    const index = shoppingCartItens.findIndex((product) => product.id === id);
    shoppingCartItens.splice(index, 1);
    this.setState({ shoppingCartItens });
  }

  changeItemQuantity = (id, bool) => {
    const { shoppingCartItens } = this.state;
    const index = shoppingCartItens.findIndex((product) => product.id === id);
    if (bool) {
      shoppingCartItens[index].quantity += 1;
    } else if (shoppingCartItens[index].quantity > 1) {
      shoppingCartItens[index].quantity -= 1;
    } else {
      shoppingCartItens.splice(index, 1);
    }
    this.setState({ shoppingCartItens });
  }

  addToCartHandler = (id, title, price) => {
    const { shoppingCartItens } = this.state;

    if (shoppingCartItens.find((product) => product.id === id)) {
      const index = shoppingCartItens.findIndex((product) => product.id === id);
      shoppingCartItens[index].quantity += 1;
    } else {
      const newCartItem = {
        id,
        title,
        price,
        quantity: 1,
      };
      shoppingCartItens.push(newCartItem);
    }

    this.setState({ shoppingCartItens });
  };

  render() {
    const { shoppingCartItens } = this.state;
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              path="/shopping-cart"
              render={ () => (
                <ShoppingCart
                  shoppingCartItens={ shoppingCartItens }
                  changeItemQuantity={ this.changeItemQuantity }
                  removeItem={ this.removeItem }
                />
              ) }
            />
            <Route
              path="/:id"
              render={ (props) => (<ProductDetails
                addToCartHandler={ this.addToCartHandler }
                { ...props }
              />) }
            />
            <Route
              exact
              path="/"
              render={ () => (
                <MainPage addToCartHandler={ this.addToCartHandler } />
              ) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
