import React from 'react';
import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart';
import Checkout from './Components/Checkout';
// import * as api from './services/api';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router>
          <Route exact path="/" render={ () => <ShoppingCart /> } />
          <Route exact path="/checkout" render={ () => <Checkout /> } />
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
