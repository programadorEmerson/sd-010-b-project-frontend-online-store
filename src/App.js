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
    this.updateQuant = this.updateQuant.bind(this);
  }

  setCart(product) {
    this.setState((state) => ({ cart: [...state.cart, product] }));
  }

  updateQuant(id, bool) {
    this.setState((state) => ({
      cart: state.cart.map((elem) => {
        if (!bool && elem.id === id) return { ...elem, quant: elem.quant - 1 };
        if (bool && elem.id === id) return { ...elem, quant: elem.quant + 1 };
        return elem;
      }),
    }));
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
          <Route
            path="/cart"
            render={ () => (<ShoppingCart
              updateQuant={ this.updateQuant }
              cart={ cart }
            />) }
          />
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
