import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
// import Button from './Components/Button';
import SearchBar from './Pages/SearchBar';
import ShoppingCart from './Pages/ShoppingCart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ SearchBar } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
// Agradecimentos ao Daniel Roberto Turma 10 Tribo B
