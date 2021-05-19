import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import MainPage from './pages/MainPage';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/cart" component={ Cart } />
          <Route path="/checkout" component={ Checkout } />
          <Route exact path="/" component={ MainPage } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
