import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getItemById } from '../services/api';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.renderDetails = this.renderDetails.bind(this);
    this.state = {
      loading: true,
      product: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;

    getItemById(id).then((product) => {
      this.setState({
        loading: false,
        product,
      });
    });
  }

  renderDetails() {
    const { product } = this.state;
    const { title, thumbnail, price } = product;
    // this.setState({ loading: false });

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
