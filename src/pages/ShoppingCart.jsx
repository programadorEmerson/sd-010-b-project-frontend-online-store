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

  render() {
    const { cartItems, addCart, removeItemCart, removeCart } = this.props;

    if (cartItems.length === 0) {
      return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
    }

    return (
      <div>
        <ul>
          {cartItems.map((product) => (
            <li key={ product.id }>
              <ProductCard product={ product } />
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => addCart(product) }
              >
                +
              </button>
              <p>{ product.countItens }</p>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => removeItemCart(product) }
              >
                -
              </button>
              <button type="button" onClick={ () => removeCart(product) }>X</button>
              <p data-testid="shopping-cart-product-quantity">
                Quantidade de itens no carrinho
                {product.countItems}
                {' '}
                itens
              </p>
            </li>

          ))}
        </ul>

        <button type="button">Finalizar compras</button>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cartItems: PropTypes.objectOf({
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
  addCart: PropTypes.func.isRequired,
  removeItemCart: PropTypes.func.isRequired,
  removeCart: PropTypes.func.isRequired,
};

export default ShoppingCart;
