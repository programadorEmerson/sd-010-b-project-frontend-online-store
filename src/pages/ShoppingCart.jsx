import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  componentDidMount = () => {
    this.getLocalstorage();
  }

  getLocalstorage = () => {
    this.setState({
      products: JSON.parse(localStorage.getItem('cartProducts')),
    });
  }

  render() {
    const { products } = this.state;
    console.log(products);
    return (
      <section>
        <h1>Carrinho de Compras</h1>
        {/* TODO: Create a component to replace the 'p' element */}
        { products.length
          ? products.map((product) => <p key={ product.title }>{product.title}</p>)
          : <p>Seu Carrinho está vazio!</p>}
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
