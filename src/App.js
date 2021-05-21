import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import { ProductDetails } from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };
  }

  addItemToCart = (product) => {
    // console.log('cheguei');
    this.setState((preventState) => ({
      cart: [...preventState.cart, product],
    }));
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/shopping-cart"
            render={ (props) => <ShoppingCart { ...props } cart={ cart } /> }
          />
          <Route
            exact
            path="/"
            render={ () => <Home addItemToCart={ this.addItemToCart } cart={ cart } /> }
          />
          <Route
            exact
            path="/details/:id"
            render={
              (props) => (
                <ProductDetails
                  { ...props }
                  addItemToCart={ this.addItemToCart }
                  cart={ cart }
                />)
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
