import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';
// import * as api from './services/api';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={ ShoppingCart } />
        <Route exact path="/checkout" component={ Checkout } />
      </Router>
    </div>
  );
}

export default App;
