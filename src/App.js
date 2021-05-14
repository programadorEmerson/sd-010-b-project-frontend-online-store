import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import PageCart from './components/PageCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Homepage } />
          <Route path="/pagecart" component={ PageCart } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
