import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <label htmlFor="search" data-testid="home-initial-message">
        <input type="text" name="search" value="search-text"/>
        Digite algum termo de pesquisa ou escolha uma categoria.
      </label>  
      <BrowserRouter>
        <Switch>
            <Route path="/" render={() => <ProductList />} />
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;
