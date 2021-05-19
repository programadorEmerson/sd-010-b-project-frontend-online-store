import React, { Component } from 'react';

import * as api from '../services/api';
import CartButton from './CartButton';
import Search from './Search';
import Categories from './Categories';
import AllProducts from './AllProducts';

class Home extends Component {
  constructor() {
    super();
    this.categoryId = this.categoryId.bind(this);
    this.buscafunc = this.buscafunc.bind(this);
    this.state = {
      products: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { id, filterText } = this.state;
    console.log(filterText);
    this.buscafunc(id, filterText);
  }

  buscafunc(id, product) {
    api.getProductsFromCategoryAndQuery(id, product).then((response) => {
      this.setState({
        products: response.results,
        loading: false,
      });
    });
  }

  categoryId(text) {
    this.setState({
      id: text,
    });
  }

  render() {
    const { loading, products } = this.state;

    return (
      <div className="home">
        <div className="searchBox">
          <Search buscafunc={ this.buscafunc } />
          <Categories buscafunc={ this.buscafunc } />
        </div>
        <div>
          <AllProducts
            loading={ loading }
            products={ products }
          />
        </div>
        <div>
          <CartButton />
        </div>
      </div>
    );
  }
}

export default Home;
