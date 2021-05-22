import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/home/:id" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
        {/* <Route
          exact
          path="/cart"
          render={ (props) => <Cart { ...props } stateAddCart={ stateAddCart } /> }
        /> */}
        <Route
          exact
          path="/products/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
