import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ProductDetails from './pages/ProductDetails';
import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/ShoppingCart" component={ ShoppingCart } />
        <Route path="/product-details/:id" component={ ProductDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
