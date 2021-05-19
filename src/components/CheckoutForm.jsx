import React, { Component } from 'react';

export default class CheckoutForm extends Component {
  render() {
    return (
      <section>
        <h3> Informações do Comprador</h3>
        <form action="get">
          <fieldset>
            <label htmlFor="fullName">
              Nome completo:
              {' '}
              <input
                id="fullName"
                type="text"
                data-testid="checkout-fullname"
                requiredTxt
              />
            </label>
            <label htmlFor="email">
              E-mail:
              {' '}
              <input id="email" type="email" data-testid="checkout-email" required />
            </label>
            <label htmlFor="cpf">
              CPF:
              {' '}
              <input id="cpf" type="text" data-testid="checkout-cpf" required />
            </label>
            <label htmlFor="phone">
              Telefone:
              {' '}
              <input id="phone" type="text" data-testid="checkout-phone" required />
            </label>
            <label htmlFor="cep">
              CEP:
              {' '}
              <input id="cep" type="text" data-testid="checkout-cep" required />
            </label>
            <label htmlFor="address">
              Endereço:
              {' '}
              <input id="address" type="text" data-testid="checkout-address" required />
            </label>
          </fieldset>
        </form>
      </section>
    );
  }
}
