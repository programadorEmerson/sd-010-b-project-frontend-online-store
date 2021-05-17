import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getItemById from '../services/newRequest';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.renderDetails = this.renderDetails.bind(this);
    this.getProduct = this.getProduct.bind(this);
    this.state = {
      loading: true,
      product: {},
    };
  }

  componentDidMount() {
    this.getProduct();
  }

  async getProduct() {
    const { match: { params: { id } } } = this.props;
    const result = await getItemById(id);
    this.setState({
      loading: false,
      product: result,
    });
  }

  renderDetails() {
    const { product } = this.state;
    const { title, thumbnail, price } = product;

    return (
      <div>
        <span data-testid="product-detail-name">{ title }</span>
        <span>{ price }</span>
        <img src={ thumbnail } alt={ title } />
        <Link to="/checkout">Carrinho</Link>
      </div>
    );
  }

  render() {
    const { loading } = this.state;

    return (
      <div>
        { (!loading && this.renderDetails()) }
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
