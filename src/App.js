import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ShoppingCart from './pages/ShoppingCart';
import ShoppingHome from './pages/ShoppingHome';

import ProductsSearchBar from "./components/ProductsSearchBar";

import './App.css';
// import * as api from './services/api';

function App() {
  // console.log(api.getCategories());
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ ShoppingHome } />
          <Route exact path="/cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;

