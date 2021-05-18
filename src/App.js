import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import ProductDetails from './Pages/ProductDetails';
import MainPage from './Pages/MainPage';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ MainPage } />
          <Route
            path="/:product"
            render={ (props) => <ProductDetails { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
// Agradecimentos ao Daniel Roberto Turma 10 Tribo B, Lucas Martins Turma 10 Tribo B
