import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import './App.css';
import Cart from './pages/Cart';
/* import ListerProduct from './pages/ListerProduct'; */

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/" component={ Search } />
          <Route exact path="/cart" component={ Cart } />
          {/* <Route
            exact
            path="/busca/:id"
            render={ (props) => <ListerProduct { ...props } /> }
          /> */}
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
