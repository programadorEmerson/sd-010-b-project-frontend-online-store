import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { Header } from './components';
import { ShoppingCart, Home, ProductDetails, Checkout } from './pages';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.setCart = this.setCart.bind(this);
    this.updateQuant = this.updateQuant.bind(this);
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
  }

  componentDidMount() {
    if (localStorage.cartItems) {
      this.getFromLocalStorage();
    }
  }

  getFromLocalStorage() {
    const previousCart = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({
      cart: previousCart,
    });
  }

  setCart(product) {
    this.setState((state) => ({ cart: [...state.cart, product] }), () => {
      const { cart } = this.state;
      localStorage.setItem('cartItems', JSON.stringify(cart));
    });
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
        <Header cartItems={ cart } />
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
            exact
            path="/checkout"
            render={ () => <Checkout cart={ cart } /> }
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
