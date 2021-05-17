import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart';
import './App.css';
// import * as api from './services/api';

function App() {
  return (
    <div className="App">
      <span data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </span>

      <BrowserRouter>
        <Route exact path="/" component={ ShoppingCart } />

      </BrowserRouter>

    </div>
  );
}

export default App;
