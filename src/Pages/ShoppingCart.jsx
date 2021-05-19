import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Req 12 :
import { Link } from 'react-router-dom';

class ShoppingCart extends Component {
  constructor(props) {
    super(props);

    this.shoppingCartItens = props.shoppingCartItens;
  }

  renderEmptyMsg = () => (
    <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
  );

  renderCartList = () => {
    const { changeItemQuantity, removeItem } = this.props;
    return (
      <div className="shopping-cart-list">
        {this.shoppingCartItens.map((product) => (
          <div key={ product.id }>
            <div data-testid="shopping-cart-product-name">{product.title}</div>
            <div data-testid="shopping-cart-product-quantity">
              {product.quantity}
            </div>
            <button
              type="button"
              data-testid="product-increase-quantity"
              onClick={ () => changeItemQuantity(product.id, true) }
            >
              +
            </button>
            <button
              type="button"
              data-testid="product-decrease-quantity"
              onClick={ () => changeItemQuantity(product.id, false) }
            >
              -
            </button>
            <button type="button" onClick={ () => removeItem(product.id) }>
              X
            </button>
          </div>
        ))}
      </div>
    );
  };

  render() {
    return (
      <section>
        {this.shoppingCartItens.length === 0
          ? this.renderEmptyMsg()
          : this.renderCartList() }
        {/* Req 12 */}
        <Link to="/shopping-cart/checkout">
          <button
            type="button"
            data-testid="checkout-products"
            onClick={ () => console.log('oi bobo') }
          >
            Checkout
          </button>
        </Link>
      </section>
    );
  }
}

ShoppingCart.propTypes = {
  shoppingCartItens: PropTypes.arrayOf(PropTypes.object),
  changeItemQuantity: PropTypes.func,
  removeItem: PropTypes.func,
}.isRequired;

export default ShoppingCart;
