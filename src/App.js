import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
// import * as api from './services/api';

function App() {
  // console.log(api.getCategories());
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/cart">Cart</Link>

        <Switch>
          <Route path="/cart" component={ ShoppingCart } />
        </Switch>

      </BrowserRouter>
    </div>
  );
}

export default App;
