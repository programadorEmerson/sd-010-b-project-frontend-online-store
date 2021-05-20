import React from 'react';
import PropTypes from 'prop-types';

class FormCheckout extends React.Component {
  render() {
    const { handleForm, state } = this.props;
    const { fullname, email, cpf, phone, cep, address } = state;
    return (
      <form>
        <fieldset>
          <legend>
            Informações do Comprador
          </legend>
          <label htmlFor="fullname">
            Nome:
            <input
              id="fullname"
              name="fullname"
              data-testid="checkout-fullname"
              type="text"
              placeholder="Nome completo"
              value={ fullname }
              onChange={ handleForm }
            />
          </label>
          <label htmlFor="email">
            E-mail:
            <input
              id="email"
              name="email"
              data-testid="checkout-email"
              type="text"
              placeholder="E-mail"
              value={ email }
              onChange={ handleForm }
            />
          </label>
          <label htmlFor="cpf">
            CPF:
            <input
              id="cpf"
              name="cpf"
              data-testid="checkout-cpf"
              type="text"
              placeholder="CPF"
              value={ cpf }
              onChange={ handleForm }
            />
          </label>
          <label htmlFor="phone">
            Telefone:
            <input
              id="phone"
              name="phone"
              data-testid="checkout-phone"
              type="text"
              placeholder="Número de Telefone"
              value={ phone }
              onChange={ handleForm }
            />
          </label>
          <label htmlFor="cep">
            CEP:
            <input
              id="cep"
              name="cep"
              data-testid="checkout-cep"
              typer="number"
              placeholder="CEP"
              value={ cep }
              onChange={ handleForm }
            />
          </label>
          <label htmlFor="address">
            Endereço:
            <input
              id="address"
              name="address"
              data-testid="checkout-address"
              type="text"
              placeholder="Endereço"
              value={ address }
              onChange={ handleForm }
            />
          </label>
        </fieldset>
      </form>
    );
  }
}

FormCheckout.propTypes = {
  handleForm: PropTypes.func.isRequired,
  state: PropTypes.shape({
    fullname: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    phone: PropTypes.string,
    cep: PropTypes.string,
    address: PropTypes.string,
  }).isRequired,
};

export default FormCheckout;
