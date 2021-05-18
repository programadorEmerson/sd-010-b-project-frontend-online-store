import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  render() {
    const { itenCart } = this.props;
    return (
      <ol>
        {itenCart.length
          ? itenCart.map((itens) => (
            <li
              data-testid="shopping-cart-product-name"
              key={ itens.id }
            >
              { itens.title }
              <p data-testid="shopping-cart-product-quantity">{itenCart.length}</p>
            </li>))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </ol>
    );
  }
}

ShoppingCart.propTypes = {
  itenCart: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default ShoppingCart;
