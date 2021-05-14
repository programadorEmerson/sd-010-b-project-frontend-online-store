import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Switch>
          <Route exact path="/" component={ Search } />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
