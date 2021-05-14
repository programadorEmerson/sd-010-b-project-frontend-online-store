import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import './App.css';
import ShoppingCart from './Components/ShoppingCart';
// import api from './services/api';

function App() {
  return (
    <section>
      <input type="text" />
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <Link to="something" />
      <Switch>
        <Route path="/shopping-cart" component={ ShoppingCart } />
      </Switch>
    </section>
  );
}

export default App;
