import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ProductsList from './Components/ProductsList';
// import * as api from './services/api';

function App() {
  // console.log(api.getCategories());
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ ProductsList } />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
