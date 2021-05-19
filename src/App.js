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
    const { addCart } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery(categoryId, title);
    const findProduct = results.find((result) => result.id === id);
    const exist = addCart.find((product) => product.product.id === id);
    console.log(id);

    this.setState((oldState) => {
      let newCartList = [];
      if (exist) {
        newCartList = oldState.addCart.map((product) => {
          if (product.product.id === findProduct.id) {
            product.quantity += 1;
          }
          return product;
        });
      } else {
        newCartList = [...oldState.addCart, { product: findProduct, quantity: 1 }];
      }
      return { addCart: newCartList };
    });
  };

  handleQuantity = (type, id) => {
    const { addCart } = this.state;

    let newCartList = [];
    if (type === 'decrease') {
      const findProduct = addCart.find((product) => product.product.id === id);
      if (findProduct) {
        console.log('dentro do if -');
        newCartList = addCart.map((product) => {
          if (product.product.id === findProduct.product.id) {
            console.log('dentro do if quantity');
            product.quantity -= 1;
          }
          console.log('product', product);
          return product;
        });
      }
    }

    if (type === 'increase') {
      const findProduct = addCart.find((product) => product.product.id === id);
      if (findProduct) {
        console.log('dentro do if -');
        newCartList = addCart.map((product) => {
          if (product.product.id === findProduct.product.id) {
            console.log('dentro do if quantity');
            product.quantity += 1;
          }
          console.log('product', product);
          return product;
        });
      }
    }
    this.setState(() => ({ addCart: newCartList }));
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
          <Route
            exact
            path="/cart"
            render={ () => (<Cart
              addCart={ addCart }
              onClick={ this.handleQuantity }
            />) }
          />
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
