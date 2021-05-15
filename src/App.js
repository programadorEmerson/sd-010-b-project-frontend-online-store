import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDatails from './pages/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/cart" component={ Cart } />
            <Route exact path="/" component={ Home } />
            <Route path="/datails" component={ ProductDatails } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
