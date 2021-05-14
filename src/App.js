import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div className="App">
      <div>
        <label htmlFor="search" data-testid="home-initial-message">
          <input type="text" name="search" />

          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <label htmlFor="category1">
          <input type="radio" name="category1" id="category1" />
          Categoria 1
        </label>
      </div>
      <BrowserRouter>
        <div>
          <Link to="/shopping-cart" data-testid="shopping-cart-button" />
        </div>
        <Switch>
          <Route exact path="/" render={ () => <ProductList /> } />
          <Route path="/shopping-cart" render={ () => <ShoppingCart /> } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
