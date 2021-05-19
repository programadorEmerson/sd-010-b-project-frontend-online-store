import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProductCard from '../components/ProductCard';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = {
      countProduct: 0,
    };
  }

  btnAdd = () => {
    this.setState((prevState) => ({
      countProduct: prevState.countProduct + 1,
    }));
  };

  btnLess = () => {
    const { countProduct } = this.state; // Vai ser algo para armazenar a quantidade de produtos
    this.setState((prevState) => ({
      countProduct: prevState.countProduct - 1,
    }));
    if (countProduct === 0) {
      this.setState({
        countProduct: 0,
      });
    }
  };

  buttons = () => {
    const { countProduct } = this.state;
    return (
      <div>
        <button type="button" onClick={ this.btnAdd }>+</button>
        <p>{ countProduct }</p>
        <button type="button" onClick={ this.btnLess }>-</button>
        <button type="button">X</button>
      </div>
    );
  }

  render() {
    const { addCart } = this.props;

    if (addCart.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }

    return (
      <div>
        <ul>
          {addCart.map((product) => (
            <li key={ product.id }>
              <ProductCard product={ product } />
              {this.buttons()}
            </li>
          ))}
        </ul>
        <p data-testid="shopping-cart-product-quantity">
          Quantidade de itens no carrinho
          {addCart.length}
          {' '}
          itens
        </p>
        <button type="button">Finalizar compras</button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  addCart: PropTypes.objectOf({
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default ShoppingCart;
