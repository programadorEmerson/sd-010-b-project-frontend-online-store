import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart';
import './App.css';
import Checkout from './Components/Checkout';
import Info from './Components/Info';
// import * as api from './services/api';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ShoppingCart } />
          <Route exact path="/checkout" component={ Checkout } />
          <Route exact path="/info/:Name" component={ Info } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
