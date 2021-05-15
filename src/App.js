import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ShopCart from './components/ShopCart';
import Main from './components/Main';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ Main } />
            <Route path="/ShopCart" component={ ShopCart } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
