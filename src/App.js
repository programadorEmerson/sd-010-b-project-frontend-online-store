import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SeachBar from './components/SearchBar';

function App() {
  return (
   <main>
     <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ SeachBar } />
        </Switch>
     </BrowserRouter>
   </main>
  );
}

export default App;
