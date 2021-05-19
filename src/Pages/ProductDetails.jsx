import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getProductById from '../services/newapi';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  getProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const resp = await getProductById(id);
    this.setState({
      product: resp,
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <p data-testid="product-detail-name">{ product.title }</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,

};

export default ProductDetails;
