import React, { Component } from 'react';

class BuyerInfo extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      fullName: '',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { fullName, cpf, email, phone, cep, address } = this.state;
    return (
      <div>
        <h2>Informações do comprador</h2>
        <input
          type="text"
          name="fullName"
          data-testid="checkout-fullname"
          placeholder="Nome Completo"
          value={ fullName }
          onChange={ this.handleChange }
        />

        <input
          type="text"
          name="cpf"
          data-testid="checkout-cpf"
          placeholder="CPF"
          value={ cpf }
          onChange={ this.handleChange }
        />

        <input
          type="text"
          name="email"
          data-testid="checkout-email"
          placeholder="Email"
          alue={ email }
          onChange={ this.handleChange }
        />

        <input
          type="text"
          name="phone"
          data-testid="checkout-phone"
          placeholder="Telefone"
          alue={ phone }
          onChange={ this.handleChange }
        />

        <input
          type="text"
          name="cep"
          data-testid="checkout-cep"
          placeholder="CEP"
          alue={ cep }
          onChange={ this.handleChange }
        />

        <input
          type="text"
          name="address"
          data-testid="checkout-address"
          placeholder="Endereço"
          alue={ address }
          onChange={ this.handleChange }
        />

      </div>
    );
  }
}

export default BuyerInfo;
