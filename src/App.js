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
      category: [],
      products: [],
    };
    this.handleQuery = this.handleQuery.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleQuery(value) {
    this.setState({ products: value.results });
  }

  handleCategory(value) {
    this.setState({ category: value });
    console.log(value);
  }

  render() {
    const { products, category } = this.state;
    return (
      <main>
        <Categories handleCategory={ this.handleCategory } />
        <BrowserRouter>
          <Input handleQuery={ this.handleQuery } category={ category } />
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
