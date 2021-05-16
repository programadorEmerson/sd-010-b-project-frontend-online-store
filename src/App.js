import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
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
