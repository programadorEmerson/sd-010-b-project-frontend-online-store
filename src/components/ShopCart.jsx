import React from 'react';
import PropTypes from 'prop-types';

class ShopCart extends React.Component {
  render() {
    const { location: { state: { shoppingCart } } } = this.props;

    if (shoppingCart.length) {
      return (
        <div>
          {shoppingCart.map((productCart) => (
            <div key={ productCart.id } div data-testid="shopping-cart-product-name">
              <h2>{productCart.title}</h2>
            </div>
          ))}
          <p data-testid="shopping-cart-product-quantity">
            <h3>Quantidade de Itens no carrinho:</h3>
            {shoppingCart.length}
          </p>
        </div>
      );
    }

    return (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
  }
}

ShopCart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      shoppingCart: PropTypes.arrayOf(PropTypes.shape),
    }).isRequired,
  }).isRequired,
}.isRequired;

export default ShopCart;
