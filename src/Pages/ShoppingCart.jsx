import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends Component {
  render() {
    const { shoppingCartItens } = this.props;
    return (
      <section>
        {shoppingCartItens.length === 0 ? (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        ) : (
          <div className="shopping-cart-list">
            {shoppingCartItens.map((product) => (
              <div key={ product.id }>
                <div data-testid="shopping-cart-product-name">{product.title}</div>
                <div data-testid="shopping-cart-product-quantity">{product.quantity}</div>
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  shoppingCartItens: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ShoppingCart;
