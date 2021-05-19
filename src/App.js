import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetaills from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  constructor() {
    super();
    this.addCart = this.addCart.bind(this);
    this.removeItemCart = this.removeItemCart.bind(this);
    this.removeCart = this.removeCart.bind(this);
    this.state = {
      cartItems: [],
    };
  }

  handlecartItemsItem = (produto) => {
    this.setState((odState) => ({ cartItems: [...odState.cartItems, produto] }));
  };

  addCart(product) {
    this.setState((previousValue) => ({
      cartItems: previousValue.cartItems.find(
        (p) => p.id === product.id,
      )
        ? previousValue.cartItems.map((p) => {
          if (p.id === product.id) {
            return {
              ...p,
              countItems: p.countItems + 1,
            };
          }
          return p;
        }) : [...previousValue.cartItems, { ...product, countItems: 1 }],
    }));
  }

  removeItemCart(product) {
    this.setState((previousValue) => ({
      cartItems: previousValue.cartItems.some(
        (p) => p.id === product.id,
      )
        ? previousValue.cartItems.map((p) => {
          if (p.id === product.id) {
            if (p.countItems) {
              return {
                ...p,
                countItems: p.countItems - 1,
              };
            }
          }
          return p;
        }) : [...previousValue.cartItems, { ...product, countItems: 1 }],
    }));
  }

  removeCart(productRemove) {
    this.setState((previousValue) => {
      const listItems = [...previousValue.cartItems];
      const indiceItem = listItems.findIndex((p) => p.id === productRemove.id);
      listItems.splice(indiceItem, 1);
      return { cartItems: listItems };
    });
  }

  render() {
    const { cartItems } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => <Home onClick={ this.handlecartItemsItem } /> }
            />
            <Route
              exact
              path="/shopping-cart"
              render={ (props) => (<ShoppingCart
                { ...props }
                addCart={ this.addCart }
                removeItemCart={ this.removeItemCart }
                removeCart={ this.removeCart }
                cartItems={ cartItems }
              />) }
            />
            <Route
              exact
              path="/details/:id"
              render={ (props) => (<ProductDetaills
                { ...props }
                onClick={ this.handlecartItemsItem }
              />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
