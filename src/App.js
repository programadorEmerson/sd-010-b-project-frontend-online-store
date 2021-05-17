import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Search from './components/Search';
// import Categories from './components/Categories'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Search } />
      </Switch>
      {/* <Route exact path="/" component={ Categories } /> */}
    </BrowserRouter>
  );
}

export default App;
