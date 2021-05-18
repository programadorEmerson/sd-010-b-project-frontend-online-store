import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import CartButton from './components/CartButton';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            path="/product/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route path="/cart" component={ Cart } />
          <Route exact path="/" component={ Home } />
        </Switch>
        <CartButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
