import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  render() {
    const {
      location: {
        state: { cart },
      },
    } = this.props;

    return cart.length ? (
      <div>
        {cart.map((product) => (
          <div key={ product.id }>
            <span data-testid="shopping-cart-product-name">
              {product.title}
            </span>
          </div>
        ))}
        <p data-testid="shopping-cart-product-quantity">{cart.length}</p>
      </div>
    ) : (
      <span data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </span>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      cart: PropTypes.arrayOf.isRequired,
    }),
  }).isRequired,
};

export default Cart;
