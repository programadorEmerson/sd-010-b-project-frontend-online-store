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
      queryTerm: '',
      // shoppingCartProduct: localStorage.getItem('cart') || [],
      shoppingCartProduct: [],
    };

    this.handleQuery = this.handleQuery.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
  }

  handleQuery(products, query) {
    this.setState({
      products: products.results,
      queryTerm: query,
    });
    console.log(`HandleQuery (APP): ${query}`);
    console.log(products);
  }

  addItemToCart(id, title, price) {
    const { shoppingCartProduct } = this.state;

    if (shoppingCartProduct.find((product) => product.id === id)) {
      const index = shoppingCartProduct.findIndex((product) => product.id === id);
      console.log(index, id);
      shoppingCartProduct[index].quantity += 1;
    } else {
      const newCartProduct = { id, title, price, quantity: 1 };
      shoppingCartProduct.push(newCartProduct);
    }
    this.setState({ shoppingCartProduct });
    // localStorage.setItem('cart', shoppingCartProduct);
    console.log(shoppingCartProduct);
  }

  render() {
    const { products, queryTerm, shoppingCartProduct } = this.state;
    return (
      <main>
        <BrowserRouter>
          <Input handleQuery={ this.handleQuery } />
          <Categories
            handleQuery={ this.handleQuery }
            query={ queryTerm }
          />
          <Switch>
            <Route
              path="/cart"
              render={ () => (
                <Cart shoppingCartProduct={ shoppingCartProduct } />
              ) }
            />
          </Switch>
          <ProductList products={ products } addItemToCart={ this.addItemToCart } />
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
