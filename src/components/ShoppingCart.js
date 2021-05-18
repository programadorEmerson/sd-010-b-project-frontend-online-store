import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { productsCart } = this.props;
    if (productsCart.length === 0) {
      return (
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      );
    }
    return (
      <div>
        { productsCart.map(({ title, img, price, quantity }) => (
          <div key={ title }>
            <h3 data-testid="shopping-cart-product-name">
              { title }
            </h3>
            <img src={ img } alt={ title } />
            <p>
              R$
              { price }
            </p>
            <p data-testid="shopping-cart-product-quantity">
              Quantidade:
              { quantity }
            </p>
          </div>
        )) }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  productsCart: PropTypes.arrayOf(PropTypes.object),
};

ShoppingCart.defaultProps = {
  productsCart: [],
};

export default ShoppingCart;
