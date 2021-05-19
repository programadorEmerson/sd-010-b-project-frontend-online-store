import React from 'react';
import { Redirect } from 'react-router';

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      payment: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    this.setState({
      fullname: '',
      email: '',
      cpf: '',
      phone: '',
      cep: '',
      address: '',
      payment: '',
      redirect: true,
    });
  }

  render() {
    const { fullname, email, cpf, phone, cep, address, redirect, payment } = this.state;
    const { cartList } = this.props;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="checkout-products">
        Informações do Carrinho
        <section>
          ...
        </section>
        Informações do Comprador
        <section id="info">
          Nome:
          <label htmlFor="checkout-fullname">
            <input
              data-testid="checkout-fullname"
              name="fullname"
              value={ fullname }
              type="text"
              min="12"
              max="25"
              required
              placeholder="Aristides Gonzales"
              onChange={ this.handleChange }
            />
          </label>
          Email:
          <label htmlFor="checkout-email">
            <input
              data-testid="checkout-email"
              name="email"
              value={ email }
              type="text"
              min="12"
              max="25"
              required
              placeholder="email@email.com"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          CPF:
          <label htmlFor="checkout-cpf">
            <input
              data-testid="checkout-cpf"
              name="cpf"
              value={ cpf }
              type="text"
              min="12"
              max="25"
              required
              placeholder="000.111.222-33"
              onChange={ this.handleChange }
            />
          </label>
          Telefone:
          <label htmlFor="checkout-phone">
            <input
              data-testid="checkout-phone"
              name="phone"
              value={ phone }
              type="text"
              min="12"
              max="25"
              required
              placeholder="xx 00-0000-0000"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          CEP
          <label htmlFor="checkout-cep">
            <input
              data-testid="checkout-cep"
              name="cep"
              value={ cep }
              type="text"
              min="12"
              max="25"
              required
              placeholder="00011-123"
              onChange={ this.handleChange }
            />
          </label>
          Endereço
          <label htmlFor="checkout-address">
            <input
              data-testid="checkout-address"
              name="address"
              value={ address }
              type="text"
              min="12"
              max="25"
              required
              placeholder="Rua Aristides Gonzales"
              onChange={ this.handleChange }
            />
          </label>
          <br />
          <br />
        </section>
        Método de Pagamento
        <section id="payment--method">
          <label htmlFor="payment">
            <input
              name="payment"
              type="radio"
              value={ payment }
              onChange={ this.handleChange }
            />
            Cartão
            <input
              name="payment"
              type="radio"
              value={ payment }
              onChange={ this.handleChange }
            />
            Boleto
          </label>
        </section>
        <button type="button" onClick={ this.handleClick }>Pagar</button>
      </div>
    );
  }
}

export default Checkout;
