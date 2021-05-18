import React from 'react';
import PropTypes from 'prop-types';
import * as modules from '../services/modules';
import BtnDecrement from '../components/BtnDecrement';
import BtnIncrement from '../components/BtnIncrement';
import BtnDel from '../components/BtnDel';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // cart: [],
      reload: false,
    };
    this.handleReload = this.handleReload.bind(this);
  }

  handleReload() {
    const { reload } = this.state;
    this.setState({ reload });
  }

  handleTotalCart() {
    const { cart } = this.state;
    return cart.reduce((total, item) => {
      total += item.price * item.qty;
      return total;
    }, 0);
  }

  render() {
    const cart = modules.getCartState();

    return cart.length ? (
      <div>
        {cart.map((product) => (
          <div key={ product.id }>
            <BtnIncrement product={ product } handleReload={ this.handleReload } />
            <span data-testid="shopping-cart-product-name">
              {product.title}
            </span>
            <p data-testid="shopping-cart-product-quantity">{product.qty}</p>
            <BtnDecrement product={ product } handleReload={ this.handleReload } />

            <BtnDel product={ product } handleReload={ this.handleReload } />
          </div>
        ))}
        {/* <p>{this.handleQuantity()}</p> */}
        {/* <p>
          {this.handleTotalCart()}
        </p> */}
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
