import React, { Component } from 'react';

export default class PaymentMethod extends Component {
  render() {
    return (
      <div className="checkout-payment-method">
        <h3>Método de pagamento</h3>
        <label htmlFor="boleto">
          Boleto
          <input
            type="radio"
            id="boleto"
            name="payment"
            value="boleto"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <label htmlFor="boleto">
          Visa
          <input
            type="radio"
            id="boleto"
            name="payment"
            value="visa"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <label htmlFor="boleto">
          Master Card
          <input
            type="radio"
            id="boleto"
            name="payment"
            value="masterCard"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
      </div>
    );
  }
}
