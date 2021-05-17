import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ButtonToCart from '../components/ButtonToCart';

class ProductDetails extends Component {
  constructor() {
    super();

    this.state = {
      cart: [],
    };
    this.addProductIntoCart = this.addProductIntoCart.bind(this);
  }

  addProductIntoCart(item) {
    const { cart } = this.state;
    this.setState({ cart: [...cart, item] });
  }

  render() {
    const { location: { state: { item } } } = this.props;
    const { title } = item;
    const { cart } = this.state;
    return (
      <div>
        <Link
          to={ { pathname: '/cart', state: { cart } } }
          data-testid="shopping-cart-button"
        >
          <ButtonToCart />
        </Link>
        <p data-testid="product-detail-name">{ title }</p>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addProductIntoCart(item) }
        >
          Adicionar

        </button>
      </div>
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
