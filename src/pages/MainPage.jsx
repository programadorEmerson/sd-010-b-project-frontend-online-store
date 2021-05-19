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
    };

    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(products, query) {
    this.setState({
      products: products.results,
      queryTerm: query,
    });
  }

  render() {
    const { products, queryTerm } = this.state;
    return (
      <main>
        <Categories
          handleQuery={ this.handleQuery }
          query={ queryTerm }
        />
        <Input handleQuery={ this.handleQuery } />
        <ProductList products={ products } />
      </main>
    );
  }
}

export default MainPage;
