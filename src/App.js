import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart';
import Input from './components/Input';
import Categories from './components/Categories';
import ProductList from './components/ProductList';
import EvaluationTest from './pages/EvaluationTest';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      queryTerm: '',
    };

    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(products, query) {
    this.setState({
      products: products.results,
      queryTerm: query,
    });
    console.log(`HandleQuery (APP): ${query}`);
    console.log(products);
  }

  render() {
    const { products, queryTerm } = this.state;
    return (
      <main>
        <BrowserRouter>
          <Input handleQuery={ this.handleQuery } />
          <Categories
            handleQuery={ this.handleQuery }
            query={ queryTerm }
          />
          <Switch>
            <Route path="/cart" component={ Cart } />
            <Route path="/evaluation" component={ EvaluationTest } />
          </Switch>
          <ProductList products={ products } />
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
