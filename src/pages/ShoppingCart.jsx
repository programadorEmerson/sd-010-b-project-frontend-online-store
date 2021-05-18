import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProductCart from '../components/ProductCart';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.renderList = this.renderList.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.renderIsEmpty = this.renderIsEmpty.bind(this);
  }

  renderList() {
    const { cart, updateQuant } = this.props;
    return cart.map((product, index) => (
      <ProductCart
        updateQuant={ updateQuant }
        key={ `${product.title} - ${index}` }
        product={ product }
      />
    ));
  }

  renderContent() {
    return (
      <div>
        <h2>Checkout</h2>
        <div>
          {this.renderList()}
        </div>
        <Link
          to="/checkout"
          data-testid="checkout-products"
        >
          Fechar Carrinho
        </Link>
      </div>
    );
  }

  renderIsEmpty() {
    return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
  }

  render() {
    const { cart } = this.props;
    return <div>{cart.length < 1 ? this.renderIsEmpty() : this.renderContent()}</div>;
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf,
  updateQuant: PropTypes.func.isRequired,
}.isRequired;

export default ShoppingCart;
