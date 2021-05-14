import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link, BrowserRouter } from 'react-router-dom';
import { Header, ShoppingCart, ListCategory } from './components';
import { getCategories } from './services/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      cart: [],
    };

    this.updateCategory = this.updateCategory.bind(this);
  }

  componentDidMount() {
    this.updateCategory();
  }

  async updateCategory() {
    const categories = await getCategories();
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
            render={ () => (<ListCategory
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
