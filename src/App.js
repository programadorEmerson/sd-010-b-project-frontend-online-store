import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import ShoppingCartPage from './components/pages/ShoppingCartPage';

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
      </Switch>
    </Router>
  );
}

export default App;
