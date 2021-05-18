import React, { Component } from 'react';

class ProductDetails extends Component {
  render() {
    const { match: { params: { product } } } = this.props;
    return (
      <div>
        <p>eslint chato</p>
        <p>{ product }</p>
      </div>
    );
  }
}

export default ProductDetails;
