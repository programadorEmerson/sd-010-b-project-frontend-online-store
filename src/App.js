import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductsSearchBar from './components/ProductsSearchBar';
// import * as api from './services/api';

function App() {
  // console.log(api.getCategories());
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ ProductsSearchBar } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
