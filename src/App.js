import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/cart" component={ Cart } />
            <Route exact path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
