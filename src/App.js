import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import './App.css';
import DetailsCard from './components/DetailsCard';

// import { getCategories } from './services/api';
// import { Home, ShoppingCart } from './component';
import Home from './components/Home';
import ShoppingCart from './components/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/cart" component={ ShoppingCart } />
          <Route path="/details/:title" component={ DetailsCard } />
        </Switch>
      </Router>
    );
  }
}

export default App;
