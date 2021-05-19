import React, { Component } from 'react';

import * as api from '../services/api';
import CartButton from './CartButton';
import Search from './Search';
import Categories from './Categories';
import AllProducts from './AllProducts';


class Home extends Component {
  constructor() {
    super()
    this.filterTextFunc = this.filterTextFunc.bind(this)
    this.categoryId = this.categoryId.bind(this)
    this.buscafunc=this.buscafunc.bind(this)
    this.buscafunctest=this.buscafunctest.bind(this)
    this.state = {
      filterText: '',
      id: '',
      products: [],
      loading: true,
    }
  }

  componentDidMount() {
    const { id, filterText } = this.state;
    console.log(filterText);
    this.buscafunctest(id, filterText)
  }
  shouldComponentUpdate() {
    return true
  }

  buscafunctest(id, product){
    if ( id === product) {
      this.buscafunc()
    } else {
      this.buscafunc(id, product)
    }
  }

  buscafunc(id, product) {
    api.getProductsFromCategoryAndQuery(id, product).then((response) => {
      this.setState({
        products: response.results,
        loading: false,
      });
    });
  }

  filterTextFunc(text) {
    this.setState({
      filterText: text,
    });
  }

  categoryId(text) {
    this.setState({
      id: text,
    });
  }

  render() {
    const { loading, products, filterText } = this.state;
    
    return (
      <div className='home'>
        <div className='searchBox'>
          <Search filterTextFunc={this.filterTextFunc}/>
          <Categories categoryId={this.categoryId}/>
        </div>
        <div>
          <AllProducts
            loading={ loading } products={products}
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
