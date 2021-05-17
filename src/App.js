import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductDetaills from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/details/:id" render={(props) => <ProductDetaills {...props} />}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
