import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Search } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
