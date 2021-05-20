import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
<<<<<<< HEAD
import Cart from './components/Cart';
=======
>>>>>>> 4dd7746b962c93d1422de49827e84258972e7437
import ProductDetails from './components/ProductDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
<<<<<<< HEAD
        <Route path="/home/:id" component={ Home } />
        <Route exact path="/cart" component={ Cart } />
=======
>>>>>>> 4dd7746b962c93d1422de49827e84258972e7437
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
