import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Index from './pages/Index';
import ProductDetails from './pages/ProductDetails';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      itenCart: [],
    };
  }

  addToCart = (produto) => {
    const { itenCart } = this.state;
    this.setState({ itenCart: [...itenCart, produto] });
  }

  render() {
    const { itenCart } = this.state;
    return (
      <main>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => <Index addToCart={ this.addToCart } /> }
            />
            <Route
              path="/ShoppingCart"
              render={ () => <ShoppingCart itenCart={ itenCart } /> }
            />
            <Route
              path="/details/:idc/:idp"
              render={ (props) => <ProductDetails { ...props } /> }
            />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
