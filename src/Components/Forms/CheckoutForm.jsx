import React, { Component } from 'react';

class CheckoutForm extends Component {
  render() {
    return (
      <form>
        <div>
          <input type="text" data-testid="checkout-fullname" />
          <input type="text" data-testid="checkout-email" />
          <input type="text" data-testid="checkout-cpf" />
          <input type="text" data-testid="checkout-phone" />
          <input type="text" data-testid="checkout-cep" />
          <input type="text" data-testid="checkout-address" />
        </div>
      </form>
    );
  }
}

export default CheckoutForm;
