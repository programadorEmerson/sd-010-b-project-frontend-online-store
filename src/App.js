import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Input from './components/Input';
import Categories from './components/Categories';

class App extends React.Component {
  render() {
    return (
      <main>
        <Categories />
        <BrowserRouter>
          <Input />
          <Switch>
            <Route to="/cart" component={ Cart } />
          </Switch>
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
