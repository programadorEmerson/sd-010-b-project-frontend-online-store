import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';

import MainPage from './Pages/MainPage';
import ShoppingCart from './Pages/ShoppingCart';
import Header from './Components/Header';
import ProductDetails from './Pages/ProductDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route
            path="/:id"
            render={ (props) => <ProductDetails { ...props } /> }
          />
          <Route exact path="/" component={ MainPage } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
// Agradecimentos ao Daniel Roberto Turma 10 Tribo B, Lucas Martins Turma 10 Tribo B
