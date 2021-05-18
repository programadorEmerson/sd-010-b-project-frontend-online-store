import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetaills from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';

class App extends Component {
  constructor() {
    super();

    this.state = {
      addCart: [],
    };
  }

  handleAddCartItem = (produto) => {
    this.setState((odState) => ({ addCart: [...odState.addCart, produto] }));
  };

  render() {
    const { addCart } = this.state;

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => <Home onClick={ this.handleAddCartItem } /> }
            />
            <Route
              exact
              path="/shopping-cart"
              render={ () => <ShoppingCart addCart={ addCart } /> }
            />
            <Route
              exact
              path="/details/:id"
              render={ (props) => <ProductDetaills { ...props } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
