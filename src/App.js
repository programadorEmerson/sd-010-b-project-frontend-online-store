import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import ShoppingCartPage from './components/pages/ShoppingCartPage';
import ItemProduct from './components/pages/ItemProduct';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route
          exact
          path="/shopping-cart"
          render={ (props) => <ShoppingCartPage { ...props } /> }
        />
        <Route exact path="/:id" component={ ItemProduct } />
      </Switch>
    </Router>
  );
}

export default App;
