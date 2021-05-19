import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartCard from '../components/CartCard';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
    this.handleIncrease = this.handleIncrease.bind(this);
    this.handleDecrease = this.handleDecrease.bind(this);
  }

  componentDidMount = () => {
    this.getLocalstorage();
  }

  handleIncrease(id) {
    const { products } = this.state;
    const newProducts = [...products];
    const requestedId = newProducts.find((element) => element.id === id);
    const requestedProductIndex = newProducts.indexOf(requestedId);
    newProducts[requestedProductIndex].quantity += 1;
    this.setState(() => ({
      products: newProducts,
    }));
  }

  handleDecrease(id) {
    const { products } = this.state;
    const newProducts = [...products];
    const requestedId = newProducts.find((element) => element.id === id);
    const requestedProductIndex = newProducts.indexOf(requestedId);
    if (newProducts[requestedProductIndex].quantity > 0) {
      newProducts[requestedProductIndex].quantity -= 1;
      this.setState(() => ({
        products: newProducts,
      }));
    }
  }

  getLocalstorage = () => {
    this.setState({
      products: JSON.parse(localStorage.getItem('cartProducts')),
    });
  }

  render() {
    const { products } = this.state;
    return (
      <section>
        <h1>Carrinho de Compras</h1>
        { products
          ? products.map(({ id, title, imgUrl, price, quantity }) => (
            <CartCard
              id={ id }
              key={ id }
              title={ title }
              imgUrl={ imgUrl }
              price={ price }
              quantity={ quantity }
              handleIncrease={ this.handleIncrease }
              handleDecrease={ this.handleDecrease }
            />
          ))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({}),
  }).isRequired,
};

export default ShoppingCart;
