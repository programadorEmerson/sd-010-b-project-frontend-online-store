import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
import { ProductDetails } from './pages/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/shopping-cart" component={ ShoppingCart } />
          <Route exact path="/" component={ Home } />
          <Route
            exact
            path="/details/:id"
            // render={ (props) => <ProductDetails { ...props } /> }
            component={ ProductDetails }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
