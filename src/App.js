import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { Header } from './components';
import { ShoppingCart, Home, ProductDetails } from './pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.setCart = this.setCart.bind(this);
  }

  setCart(product) {
    this.setState((state) => ({ cart: [...state.cart, product] }));
  }

  render() {
    const { cart, categories } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <p>
          <Link data-testid="shopping-cart-button" to="/cart">
            Carrinho
          </Link>
        </p>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Home setCart={ this.setCart } categories={ categories } /> }
          />
          <Route path="/cart" render={ () => <ShoppingCart cart={ cart } /> } />
          <Route
            path="/product/:id"
            render={ (props) => <ProductDetails setCart={ this.setCart } { ...props } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
