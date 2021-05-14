import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import { getCategories } from './services/api'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: [],
      cart: [],
    };

    this.updateCategory = this.updateCategory.bind(this);
  }

  componentDidMount() {
    this.updateCategory();
  }

  async updateCategory() {
    const response = await getCategories();
    this.setState({ category: response });
  }

  render() {
    const { cart } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <p>
          <Link data-testid="shopping-cart-button" to="/cart">Oii</Link>
        </p>
        <Switch>
          <Route path="/cart" render={ () => <ShoppingCart cart={ cart } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
