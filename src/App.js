import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ShoppingCart from './Components/ShoppingCart';
import './App.css';
import Checkout from './Components/Checkout';
import Info from './Components/Info';
// import * as api from './services/api';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: [],
    };
  }

  onClick = (id) => {
    this.setState((prevState) => ({ name: [...prevState.name, id] }));
  }

  render() {
    const { name } = this.state;
    return (
      <div
        className="App"
      >
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={ () => <ShoppingCart funt={ this.onClick } /> }
            />
            <Route
              exact
              path="/checkout"
              render={ () => <Checkout name={ name } /> }
            />
            <Route
              exact
              path="/info/:Name"
              render={ (props) => <Info { ...props } funt={ this.onClick } /> }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
