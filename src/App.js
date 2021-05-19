import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ShoppingCart from './pages/ShoppingCart';
import ShoppingHome from './pages/ShoppingHome';
import ProductDetails from './pages/ProductDetails';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ ShoppingHome } />
            <Route exact path="/cart" component={ ShoppingCart } />
            <Route exact path="/product/:id" component={ ProductDetails } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
