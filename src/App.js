import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Mensagem from './components/Mensagem';
import CartButton from './components/CartButton';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/cart" component={ Cart } />
          <Route exact path="/" component={ Mensagem } />
        </Switch>
        <CartButton />
      </BrowserRouter>
    </div>
  );
}

export default App;
