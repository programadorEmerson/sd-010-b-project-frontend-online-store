import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import * as api from './services/api';
import ProductDetails from './pages/ProductDetails';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      addCart: [],
    };
  }

  handleAddCartItem = async (categoryId, title, id) => {
    console.log(categoryId, id, title);
    const { results } = await api.getProductsFromCategoryAndQuery(categoryId, title);
    const findProduct = results.find((result) => result.id === id);
    this.setState((oldState) => ({ addCart: [...oldState.addCart, findProduct] }));
  };

  addProdToCart = async (product) => {
    this.setState((oldState) => ({ cart: [...oldState.cart, product] }));
  }

  render() {
    const { addCart } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Home onClick={ this.handleAddCartItem } /> }
          />
          <Route exact path="/cart" render={ () => <Cart addCart={ addCart } /> } />
          <Route
            path="/details/:id/:categoryId/:title"
            render={ (props) => (<ProductDetails
              { ...props }
              addCart={ this.handleAddCartItem }
            />) }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
