import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import CartButton from './components/CartButton';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/cart" component={ Cart } />
          <Route exact path="/" component={ Home } />
        </Switch>
        <CartButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
