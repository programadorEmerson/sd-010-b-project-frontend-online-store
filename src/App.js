import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import Home from './components/Home';
// import Categories from './components/Categories'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/card" component={ Card } />
      </Switch>
      {/* <Route exact path="/" component={ Categories } /> */}
    </BrowserRouter>

  );
}

export default App;
