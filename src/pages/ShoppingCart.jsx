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
              <ProductCard
                addCart={ addCart }
                removeItemCart={ removeItemCart }
                removeCart={ removeCart }
                product={ product }
              />
            </li>

          ))}
        </ul>

        <p data-testid="shopping-cart-product-quantity">
          Quantidade de itens no carrinho
          {cartItems.length}
          {' '}
          itens
        </p>

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
