import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Index from './pages/Index';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/cart" componet={ Button } /> */}
          <Route exact path="/" component={ Index } />
          <Route path="/ShoppingCart" component={ ShoppingCart } />
          <Route
            path="/details/:idc/:idp"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
