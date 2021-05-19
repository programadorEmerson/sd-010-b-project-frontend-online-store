import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckoutForm from '../Components/Forms/CheckoutForm';

class Checkout extends Component {
  constructor(props) {
    super(props);

    this.shoppingCartItens = props.shoppingCartItens;
  }

  renderEmptyMsg = () => (
    <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
  );

  renderCartList = () => (
    <div className="shopping-cart-list">
      {this.shoppingCartItens.map((product) => (
        <div key={ product.id }>
          <div data-testid="shopping-cart-product-name">{product.title}</div>
          <div data-testid="shopping-cart-product-quantity">
            {product.quantity}
          </div>
        </div>
      ))}
    </div>
  );

  render() {
    return (
      <div>
        <div>
          {this.shoppingCartItens.length === 0
            ? this.renderEmptyMsg()
            : this.renderCartList() }
        </div>
        <CheckoutForm />
      </div>
    );
  }
}

Checkout.propTypes = {
  shoppingCartItens: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default Checkout;
