import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDatails extends Component {
  render() {
    const { location: { state: { item } } } = this.props;
    const { title } = item;
    return (
      <p data-testid="product-detail-name">{ title }</p>
    );
  }
}

ProductDatails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      item: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default ProductDatails;
