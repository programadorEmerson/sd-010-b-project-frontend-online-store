import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Loading from './Loading';
import Product from './Product';

class AllProducts extends Component {
  constructor() {
    super();
    this.buscafunc=this.buscafunc.bind(this)
    this.buscafunctest=this.buscafunctest.bind(this)
      this.state = {
      prod: [],
      loading: true,
      id: '',
      product: '',
    };
  }
 
  componentDidMount() {
    const { id, product } = this.state;
    this.buscafunctest(id, product)
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
        prod: response.results,
        loading: false,
      });
    });
  }
  
  render() {
    const { prod, loading } = this.state;
    if (loading) return <Loading />;
    return (
      <div className='allProducts'>
        {prod.map((product) => (
          <Product
            key={ product.id }
            product={ product }
          />))}
      </div>
    );
  }
}

AllProducts.propTypes = {
  id: PropTypes.string,
  product: PropTypes.string,
}.isRequired;

export default AllProducts;
