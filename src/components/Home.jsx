import React, { Component } from 'react';
import CartButton from './CartButton';
import Search from './Search';
import Categories from './Categories';
import * as api from '../services/api';
import AllProducts from './AllProducts';
import NotFound from './NotFound';

class Home extends Component {
  constructor() {
    super();
    // this.categoryId = this.categoryId.bind(this);
    this.buscafunc = this.buscafunc.bind(this);
    this.temProduto = this.temProduto.bind(this);
    this.state = {
      products: [],
      loading: true,
    };
  }

  buscafunc(id, product) {
    api.getProductsFromCategoryAndQuery(id, product).then((response) => {
      this.setState({
        products: response.results,
        loading: false,
      });
    });
  }

  // categoryId(text) {
  //   this.setState({
  //     id: text,
  //   });
  // }

  temProduto() {
    const { loading, products } = this.state;
    console.log();
    if (products.length === 0) {
      return (
        <div>
          <NotFound />
        </div>);
    }
    return (
      <AllProducts
        loading={ loading }
        products={ products }
      />
    );
  }

  render() {
    return (
      <div className="home">
        <div className="searchBox">
          <Search buscafunc={ this.buscafunc } />
          <Categories buscafunc={ this.buscafunc } />
        </div>
        {this.temProduto()}
        <div>
          <CartButton />
        </div>
      </div>
    );
  }
}

export default Home;
