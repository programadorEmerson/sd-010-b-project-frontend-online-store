import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class AllProducst extends Component {
  constructor() {
    super();

    this.state = {
      prod: [],
      loading: false,
    };
  }

  componentDidMount() {
    const { id, product } = this.props;
    getProductsFromCategoryAndQuery(id, product).then((response) => {
      this.setState({
        prod: response,
        loading: true,
      });
    });
  }

  render() {
    const { prod, loading } = this.state;

    return (
      (loading ? <loading />
        : <div>
          {/* <h1>{ title }</h1> */}
          {/* <img src={ thumbnail } alt={ thumbnail } /> */}
          {/* <h2>{ price }</h2> */}
          {prod.map((product) => console.log(product))}
        </div>
      )
    );
  }
}

AllProducst.propTypes = {
  id: PropTypes.string,
  product: PropTypes.string,
}.isRequired;

export default AllProducst;
