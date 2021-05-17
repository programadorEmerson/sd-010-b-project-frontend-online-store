import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    this.requestProduct();
  }

  requestProduct = async () => {
    const { match: { params: { id } } } = this.props;
    const { getProductsById } = api;
    const getProduct = await getProductsById(id);
    this.setState({
      product: getProduct,
    });
  }

  render() {
    const { product } = this.state;
    return (
      product.map(({ body }) => (
        <div key={ body.title }>
          <h1 data-testid=" product-detail-name">{body.title}</h1>
          <p>{`R$${body.price}`}</p>
          <img src={ body.thumbnail } alt={ body.title } />
          <p>Especificações:</p>
          <ul>
            {body.attributes.map((item) => (
              <li
                key={ item.id }
              >
                {`${item.name}: ${item.value_name}`}
              </li>))}
          </ul>
        </div>
      )));
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default ProductDetails;
