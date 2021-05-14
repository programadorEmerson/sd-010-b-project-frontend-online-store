import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { getCategories } from './services/api';
import Home from './pages/Home';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    getCategories().then((categories) => console.log(categories));
  }

  render() {
    return (
      <main className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ Home } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
