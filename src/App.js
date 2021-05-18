import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import * as api from './services/api';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      addCart: [],
    };
  }

  handleAddCartItem = async ({ category_id, title, id }) => {
    const { results } = await api.getProductsFromCategoryAndQuery(category_id, title)
    const result = results.find((result) => result.id === id)     
    this.setState((oldState) => ({ addCart: [...oldState.addCart, result] }));
    
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
