import React from 'react';
import Input from '../components/Input';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      queryTerm: '',
      shoppingCart: [],
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
    if (shoppingCartProduct.find((product) => product.id === id)) {
      const index = shoppingCartProduct.findIndex((product) => product.id === id);
      shoppingCartProduct[index].quantity += 1;
    } else {
      const newCartProduct = { id, title, price, quantity: 1 };
      shoppingCartProduct.push(newCartProduct);
    }
    this.setState({ shoppingCartProduct });
    // localStorage.setItem('cart', shoppingCartProduct);
  }

  render() {
    const { products, queryTerm, shoppingCart } = this.state;
    return (
      <main>
        <Categories
          handleQuery={ this.handleQuery }
          query={ queryTerm }
        />
        <Input
          handleQuery={ this.handleQuery }
          shoppingCart={ shoppingCart }
          addItemToCart={ this.addItemToCart }
        />
        <ProductList products={ products } />
      </main>
    );
  }
}

export default MainPage;
