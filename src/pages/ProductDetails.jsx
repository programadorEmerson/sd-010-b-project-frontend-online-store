import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location: { state: { item } } } = this.props;
    const { title } = item;
    return (
      <p data-testid="product-detail-name">{ title }</p>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
