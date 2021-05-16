import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { Header } from './components';
import { ShoppingCart, Home } from './pages';
import { getCategories } from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.updateCategories();
  }

  async updateCategories() {
    const categories = await getCategories();
    this.setState({ categories });
  }

  updateCategory(categories) {
    this.setState({ categories });
  }

  render() {
    const { cart, categories } = this.state;
    return (
      <BrowserRouter>
        <Header />
        <p>
          <Link data-testid="shopping-cart-button" to="/cart">
            Carrinho
          </Link>
        </p>
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (<Home
              categories={ categories }
            />) }
          />
          <Route path="/cart" render={ () => <ShoppingCart cart={ cart } /> } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
