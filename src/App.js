import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      addCart: [],
    };
  }

  handleAddCartItem = (produto) => {
    this.setState((oldState) => ({ addCart: [...oldState.addCart, produto] }));
  }

  render() {
    const { addCart } = this.state;

    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => <Home onClick={ this.handleAddCartItem } /> }
          />
          <Route exact path="/cart" render={ () => <Cart addCart={ addCart } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
