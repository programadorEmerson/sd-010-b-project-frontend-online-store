import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route
          exact
          path="/products/:id"
          render={ (props) => <ProductDetails { ...props } /> }
        />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
