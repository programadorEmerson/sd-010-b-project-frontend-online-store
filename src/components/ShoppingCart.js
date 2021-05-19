import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    const { productsCart,
      increaseQuantity,
      decreaseQuantity,
      removeProductFromCart,
    } = this.props;
    if (productsCart.length === 0) {
      return (
        <h1 data-testid="shopping-cart-empty-message">
          Seu carrinho está vazio
        </h1>
      );
    }
    return (
      <div>
        { productsCart.map(({ id, title, img, price, quantity }) => (
          <div key={ title }>
            <h3 data-testid="shopping-cart-product-name">
              { title }
            </h3>
            <img src={ img } alt={ title } />
            <p>
              R$
              { price }
            </p>
            <button
              type="button"
              onClick={ () => decreaseQuantity(id) }
              data-testid="product-decrease-quantity"
            >
              {' '}
              -
              {' '}

            </button>
            <span>Quantidade:</span>
            {' '}
            <span data-testid="shopping-cart-product-quantity">
              { quantity }
            </span>
            <button
              type="button"
              onClick={ () => increaseQuantity(id) }
              data-testid="product-increase-quantity"
            >
              {' '}
              +
              {' '}

            </button>
            <button
              type="button"
              onClick={ () => removeProductFromCart(id) }
              color="red"
            >
              {' '}
              X
              {' '}

            </button>
          </div>
        )) }
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  productsCart: PropTypes.arrayOf(PropTypes.object),
  increaseQuantity: PropTypes.func.isRequired,
  decreaseQuantity: PropTypes.func.isRequired,
  removeProductFromCart: PropTypes.func.isRequired,
};

ShoppingCart.defaultProps = {
  productsCart: [],
};

export default ShoppingCart;
