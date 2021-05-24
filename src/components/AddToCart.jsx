import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToCart extends Component {
  addToCart = () => {
    const { add } = this.props;
    const prod = this.props;
    const productsOnCart = 'products-on-cart';
    const productsString = localStorage.getItem(productsOnCart);
    let products = [];
    if (productsString) {
      products = JSON.parse(productsString);
      const checkEqual = products
        .find((product) => product.product.id === prod.product.id);
      if (checkEqual) {
        const oldArray = products
          .filter((product) => product.product.id !== prod.product.id);
        checkEqual.quantity += add;
        const newArray = [...oldArray, checkEqual];
        const { product } = this.props;
        const TOTAL_PRICE_STORAGE = 'total-price';
        const fetchCart = localStorage.getItem(TOTAL_PRICE_STORAGE);
        if (fetchCart) {
          localStorage.setItem(TOTAL_PRICE_STORAGE,
            JSON.stringify(JSON.parse(fetchCart) + product.price));
        }
        if (!fetchCart) {
          localStorage.setItem(TOTAL_PRICE_STORAGE, JSON.stringify(product.price));
        }
        return localStorage.setItem(productsOnCart, JSON.stringify(newArray));
      }
    }
    products.push({ ...prod, quantity: add });
    localStorage.setItem(productsOnCart, JSON.stringify(products));
    const { product } = this.props;
    const TOTAL_PRICE_STORAGE = 'total-price';
    if (localStorage.getItem(TOTAL_PRICE_STORAGE)) {
      localStorage.setItem(TOTAL_PRICE_STORAGE, JSON.stringify(
        JSON.parse(localStorage.getItem(TOTAL_PRICE_STORAGE)) + product.price,
      ));
    }
    if (!localStorage.getItem(TOTAL_PRICE_STORAGE)) {
      localStorage.setItem(TOTAL_PRICE_STORAGE, JSON.stringify(product.price));
    }
  }

  render() {
    return (
      <div>
        <button
          { ...this.props }
          type="submit"
          onClick={ () => this.addToCart() }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

AddToCart.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  add: PropTypes.number.isRequired,
};
