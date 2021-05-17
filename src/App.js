import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Input from './components/Input';
import Categories from './components/Categories';
import ProductList from './components/ProductList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(value) {
    this.setState({ products: value.results });
    // console.log(value.results);
  }

  render() {
    const { products } = this.state;
    return (
      <main>
        <Categories />
        <BrowserRouter>
          <Input callback={ this.handleQuery } />
          <Switch>
            <Route to="/cart" component={ Cart } />
          </Switch>
          <ProductList products={ products } />
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
