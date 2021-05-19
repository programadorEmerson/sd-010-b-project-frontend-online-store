import React from 'react';
import PropTypes from 'prop-types';

import getProductById from '../services/api2';
import * as api from '../services/api';

import Loading from '../components/Loading';
import Rating from '../components/Rating';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.fetchProduct = this.fetchProduct.bind(this);
    this.state = {
      productDetails: {},
      fetched: false,
    };
  }

  componentDidMount() {
    this.fetchProduct();
  }

  async fetchProduct() {
    const { match: { params: { id } } } = this.props;
    const productDetails = await getProductById(id);
    this.setState({ productDetails, fetched: true });
    await api.getProductsFromCategoryAndQuery();
  }

  render() {
    const { productDetails, fetched } = this.state;
    if (!fetched) return <Loading />;
    const { title, thumbnail, attributes } = productDetails;
    return (
      <div>
        <h3 data-testid="product-detail-name">{title}</h3>
        <img src={ thumbnail } alt={ title } />
        <ul>
          {attributes.map((attribute) => (
            <li key={ attribute.id }>
              { `${attribute.name}: ${attribute.value_name}` }
            </li>))}
        </ul>
        <Rating />
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
