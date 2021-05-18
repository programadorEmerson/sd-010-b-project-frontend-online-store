import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
// import Categories from './components/Categories'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
      </Switch>
      {/* <Route exact path="/" component={ Categories } /> */}
    </BrowserRouter>
  );
}

export default App;
