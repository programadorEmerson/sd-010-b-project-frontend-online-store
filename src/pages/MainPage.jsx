import React from 'react';
import Input from '../components/Input';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';
import Cart from './Cart';

class MainPage extends React.Component {
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
  }

  addItemToCart(id, title, price) {
    const { shoppingCartProduct } = this.state;
    console.log('ola');

    if (shoppingCartProduct.find((product) => product.id === id)) {
      const index = shoppingCartProduct.findIndex((product) => product.id === id);
      shoppingCartProduct[index].quantity += 1;
    } else {
      const newCartProduct = { id, title, price, quantity: 1 };
      shoppingCartProduct.push(newCartProduct);
    }
    this.setState({ shoppingCartProduct });
    // localStorage.setItem('cart', JSON.stringify(shoppingCartProduct));
  }

  render() {
    const { products, queryTerm, shoppingCartProduct } = this.state;
    return (
      <main>
        <Input
          handleQuery={ this.handleQuery }
          shoppingCartProduct={ shoppingCartProduct }
        />
        <Cart
          shoppingCartProduct={ shoppingCartProduct }
          addItemToCart={ this.addItemToCart }
        />
        <Categories
          handleQuery={ this.handleQuery }
          query={ queryTerm }
        />
        <ProductList products={ products } addItemToCart={ this.addItemToCart } />
      </main>
    );
  }
}

export default MainPage;
