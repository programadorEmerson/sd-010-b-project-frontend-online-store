import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Home from './components/Home';
// import Categories from './components/Categories'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
      </Switch>
      {/* <Route exact path="/" component={ Categories } /> */}
    </BrowserRouter>
  );
}

export default App;
