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
    // this.addToCart = this.addToCart.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state = {
      products: [],
      loading: true,
      // cartItensID: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem('cartItens') === null) {
      localStorage.setItem('cartItens', '');
    } else {
      this.updateState();
    }
    // localStorage.setItem('cartItens', '');
    // const savedItensID =
  }

  componentDidUpdate(prevProps) {
    // Uso típico, (não esqueça de comparar as props):
    // plantao do edu + react docs
    // const { id } = this.props.match.params;
    const { match: { params } } = this.props;
    if (params !== prevProps.match.params) {
      this.searchApi();
    }

    const { cartItensID } = this.state;
    localStorage.setItem('cartItens', cartItensID);
  }

  updateState() {
    // JSON.parse(localStorage.getItem('cartItems'))
    const savedItensID = localStorage.getItem('cartItens');
    // console.log(savedItensID);
    this.setState({
      cartItensID: savedItensID,
    });
  }

  searchApi(product) {
    const { match: { params: { id } } } = this.props;
    api.getProductsFromCategoryAndQuery(id, product).then((response) => {
      this.setState({
        products: response.results,
        loading: false,
        // teste: '',
      });
    });
  }

  // addToCart(event) {
  //   const id = event.target.parentNode.firstChild.href.split('products/')[1];
  //   this.setState((old) => ({
  //     cartItensID: [...old.cartItensID, id],
  //   }));
  //   console.log(event.target.parentNode.firstChild.href.split('products/')[1]);
  //   // console.log(event.target.parentNode.firstChild.href.split('products/')[1]);
  // }

  stateAddCart() {
    console.log('this.props');
    // this.setState({
    //   teste: this.props;
    // });
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
        // addToCart={ this.addToCart }
        stateAddCart={ this.stateAddCart }
        loading={ loading }
        products={ products }
      />
    );
  }

  render() {
    // console.log(this.props);
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
