import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProducDetails from './pages/ProductDetails';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/product-details/:id" component={ ProducDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
