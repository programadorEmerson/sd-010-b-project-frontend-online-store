import React from 'react';
import PropTypes from 'prop-types';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.handleTotalCart = this.handleTotalCart.bind(this);
    this.handleAmount = this.handleAmount.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.handleState();
  }

  handleState() {
    const {
      location: {
        state: { cart },
      },
    } = this.props;

    this.setState({ cart });
  }

  handleQuantity() {
    const { cart } = this.state;

    return cart.reduce((total, item) => {
      total += item.qty;
      return total;
    }, 0);
  }

  handleTotalCart() {
    const { cart } = this.state;
    return cart.reduce((total, item) => {
      total += item.price * item.qty;
      return total;
    }, 0);
  }

  handleAmount(prod, bool) {
    const { cart } = this.state;

    let newCart = [];

    if (bool) {
      newCart = cart.map((elem) => (elem.id === prod.id
        ? { ...elem, qty: elem.qty + 1 } : elem));
    } else {
      newCart = cart.map((elem) => (elem.id === prod.id
        ? { ...elem, qty: elem.qty > 0 && elem.qty - 1 } : elem));
    }

    this.setState({ cart: newCart });
  }

  handleDelete(prod) {
    this.setState((preveState) => ({
      cart: preveState.cart.filter((item) => item.id !== prod.id),
    }));
  }

  render() {
    const { cart } = this.state;

    return cart.length ? (
      <div>
        {cart.map((product) => (
          <div key={ product.id }>
            <button
              data-testid="product-decrease-quantity"
              type="button"
              onClick={ () => this.handleAmount(product, false) }
            >
              -
            </button>
            <span data-testid="shopping-cart-product-name">
              {product.title}
            </span>
            <button
              data-testid="product-increase-quantity"
              type="button"
              onClick={ () => this.handleAmount(product, true) }
            >
              +
            </button>
            <button
              type="button"
              onClick={ () => this.handleDelete(product) }
            >
              X
            </button>
            <p data-testid="shopping-cart-product-quantity">
              {product.qty}
            </p>
          </div>
        ))}
        <p>{this.handleQuantity()}</p>
        <p>
          {this.handleTotalCart()}
        </p>
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
