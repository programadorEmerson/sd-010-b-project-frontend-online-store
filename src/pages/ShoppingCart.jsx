import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  render() {
    /* --------------------exercicio 8 -------------------- */
    const { cart } = this.props;
    if (!cart.length) {
      return (
        <div>
          <span data-testid="shopping-cart-empty-message">Seu carrinho está vazio</span>
        </div>
      );
    }

    return (
      <div data-testid="shopping-cart-product-name">
        {cart.map((product) => (
          <div key={ product.id }>
            <h4>{product.title}</h4>
            <img src={ product.thumbnail } alt={ product.title } />
            <p>
              R$
              {product.price}
            </p>
            <p data-testid="shopping-cart-product-quantity">
              <span>
                Quantidade:
                {' '}
                {cart.length}
              </span>
              {console.log(cart.length)}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  cart: PropTypes.string.isRequired,
  length: PropTypes.func.isRequired,
  map: PropTypes.func.isRequired,
};

export default ShoppingCart;
