import React from 'react';

class Checkout extends React.Component {
  renderInputName = () => (
    <div>
      <label htmlFor="fullName">
        Nome completo
        <input data-testid="checkout-fullname" name="fullName" type="text" />
      </label>
    </div>
  )

  renderInputEmail = () => (
    <div>
      <label htmlFor="eMail">
        E-mail
        <input data-testid="checkout-email" name="eMail" type="text" />
      </label>
    </div>
  )

  renderInputCPF = () => (
    <div>
      <label htmlFor="CPF">
        CPF
        <input data-testid="checkout-cpf" name="CPF" type="number" />
      </label>
    </div>
  )

  renderInputPhone = () => (
    <div>
      <label htmlFor="phoneNumber">
        Telefone
        <input data-testid="checkout-phone" name="phoneNumber" type="number" />
      </label>
    </div>
  )

  renderInputCEP = () => (
    <div>
      <label htmlFor="CEP">
        CEP
        <input data-testid="checkout-cep" name="CEP" type="number" />
      </label>
    </div>
  )

  renderInputAddress = () => (
    <div>
      <label htmlFor="Address">
        Endereço
        <input data-testid="checkout-address" name="Address" type="text" />
      </label>
    </div>
  )

  render() {
    return (
      <div />
    );
  }
}

export default Checkout;
