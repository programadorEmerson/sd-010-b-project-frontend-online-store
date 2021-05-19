import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getItemById from '../services/newRequest';
// import AddButton from '../components/AddButton';

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

  clickCart({ target }) {
    const element = target.previousSibling.innerHTML;
    localStorage.setItem('id', element);
  }

  renderDetails() {
    const { product } = this.state;
    const { title, thumbnail, price, id } = product;

    return (
      <div>
        <p data-testid="product-detail-name">{ title }</p>
        <span>
          R$
          { price }
        </span>
        <img src={ thumbnail } alt={ title } />
        <Link
          to="/shoppingcart"
          data-testid="shopping-cart-button"
        >
          Carrinho
        </Link>
        <span>{ id }</span>
        <button
          type="button"
          onClick={ this.clickCart }
          data-testid="product-detail-add-to-cart"
        >
          Add
        </button>
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
