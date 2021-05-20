import React from 'react';

class PaymentMethod extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Método de Pagamento</legend>
        <label htmlFor="boleto">
          Boleto
          <input type="radio" id="boleto" name="payment" required defaultChecked />
        </label>

        <label htmlFor="creditCard">
          Cartão de Crédito
          <input type="radio" id="creditCard" name="payment" required />
          Visa
          <input type="radio" id="creditCard" name="payment" required />
          MarterCard
          <input type="radio" id="creditCard" name="payment" required />
          Elo
        </label>
      </fieldset>
    );
  }
}

export default PaymentMethod;
