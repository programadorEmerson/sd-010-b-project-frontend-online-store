import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/product-details/:id" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
