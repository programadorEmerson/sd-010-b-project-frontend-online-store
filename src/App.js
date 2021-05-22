import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/cart" component={ Cart } />
          <Route path="/checkout" component={ Checkout } />
          <Route
            path="/product/:id"
            render={
              (props) => (
                <ProductDetails { ...props } />)
            }
          />
          <Route
            exact
            path="/"
            render={
              (props) => (
                <Home { ...props } />)
            }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
