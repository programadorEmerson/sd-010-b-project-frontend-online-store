import { ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import ShoppingCart from './pages/ShoppingCart';
// import * as api from './services/api';

function App() {
  // console.log(api.getCategories());
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/cart" data-testid="shopping-cart-button">
          {/* TODO: Verify if can change 'style' for 'className' */}
          <ShoppingCartOutlined style={ { fontSize: 40 } } />
        </Link>
        <Switch>
          <Route path="/cart" component={ ShoppingCart } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
