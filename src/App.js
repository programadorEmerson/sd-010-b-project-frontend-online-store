import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <p>
          <Link data-testid="shopping-cart-button" to="/cart">Oi</Link>
        </p>
        <Switch>
          <Route path="/cart" render={ () => <ShoppingCart cart={ cart } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
