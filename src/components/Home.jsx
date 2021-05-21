import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

import CartButton from './CartButton';
import Search from './Search';
import Categories from './Categories';
import AllProducts from './AllProducts';
import NotFound from './NotFound';

class Home extends Component {
  constructor() {
    super();
    this.searchApi = this.searchApi.bind(this);
    this.notFoundFunc = this.notFoundFunc.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      products: [],
      loading: true,
      cartItensID: [],
    };
  }

  componentDidUpdate(prevProps) {
    // Uso típico, (não esqueça de comparar as props):
    // plantao do edu + react docs
    // const { id } = this.props.match.params;
    const { match: { params } } = this.props;
    if (params !== prevProps.match.params) {
      this.searchApi();
    }
  }

  searchApi(product) {
    const { match: { params: { id } } } = this.props;
    api.getProductsFromCategoryAndQuery(id, product).then((response) => {
      this.setState({
        products: response.results,
        loading: false,
      });
    });
  }

  addToCart(event) {
    const id = event.target.parentNode.firstChild.href.split('products/')[1];
    this.setState((old) => ({
      cartItensID: [...old.cartItensID, id],
    }));
    // console.log(event.target.parentNode.firstChild.href.split('products/')[1]);
  }

  notFoundFunc() {
    const { loading, products } = this.state;

    if (products.length === 0) {
      return (
        <div>
          <NotFound />
        </div>);
    }
    return (
      <AllProducts
        addToCart={ this.addToCart }
        loading={ loading }
        products={ products }
      />
    );
  }

  render() {
    return (
      <div className="home">
        <div className="searchBox">
          <Search searchApi={ this.searchApi } />
          <Categories />
        </div>
        {this.notFoundFunc()}
        <div>
          <CartButton />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  match: PropTypes.object,
}.isRequired;

export default Home;
