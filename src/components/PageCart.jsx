import React from 'react';
import PropTypes from 'prop-types';

class PageCart extends React.Component {
  render() {
    const { cart } = this.props;
    if (!cart.length) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        <h3 data-testid="shopping-cart-product-quantity">{cart.length}</h3>
        {cart.map((item) => {
          const { title, id } = item;
          return (
            <p key={ id } data-testid="shopping-cart-product-name">{title}</p>
          );
        })}
      </div>
    );
  }
}

PageCart.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
};

export default PageCart;
