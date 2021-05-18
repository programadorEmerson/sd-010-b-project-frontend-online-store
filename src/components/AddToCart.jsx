import React, { Component } from 'react';

export default class AddToCart extends Component {
  addToCart = () => {
    const prod = this.props;
    const productsString = localStorage.getItem('products-on-cart');
    let products = [];
    if (productsString) {
      products = JSON.parse(productsString);
    }
    products.push({ ...prod, quantity: 1 });
    localStorage.setItem('products-on-cart', JSON.stringify(products));
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
