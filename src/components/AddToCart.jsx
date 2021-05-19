import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class AddToCart extends Component {
  addToCart = () => {
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
        checkEqual.quantity += 1;
        const newArray = [...oldArray, checkEqual];
        return localStorage.setItem(productsOnCart, JSON.stringify(newArray));
      }
    }
    products.push({ ...prod, quantity: 1 });
    localStorage.setItem(productsOnCart, JSON.stringify(products));
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
  }).isRequired,
};
