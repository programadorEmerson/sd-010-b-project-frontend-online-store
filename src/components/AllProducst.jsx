import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Loading from './Loading';
import Product from './Product';

class AllProducst extends Component {
  constructor() {
    super();

    this.state = {
      prod: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { id, product } = this.props;
    getProductsFromCategoryAndQuery(id, product).then((response) => {
      this.setState({
        prod: response.results,
        loading: false,
      });
    });
  }

  SearchOnChange(text) {
    console.log(text);
  }

  render() {
    const { prod, loading } = this.state;
    if (loading) return <Loading />;

    return (
      <div>
        {prod.map((product) => (
          // (console.log(product.id)
          <Product
            key={ product.id }
            product={ product }
          />))}
      </div>
    );
  }
}

AllProducst.propTypes = {
  id: PropTypes.string,
  product: PropTypes.string,
}.isRequired;

export default AllProducst;
