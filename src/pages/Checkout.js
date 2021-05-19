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
      redirect: true,
    });
  }

  render() {
    const { fullname, email, cpf, phone, cep, address, redirect } = this.state;
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
          <label htmlFor="checkout-fullname">
            <input
              data-testid="checkout-fullname"
              name="fullname"
              value={ fullname }
              type="text"
              min="12"
              max="25"
              required
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="checkout-email">
            <input
              data-testid="checkout-email"
              name="email"
              value={ email }
              type="text"
              min="12"
              max="25"
              required
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="checkout-cpf">
            <input
              data-testid="checkout-cpf"
              name="cpf"
              value={ cpf }
              type="text"
              min="12"
              max="25"
              required
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="checkout-phone">
            <input
              data-testid="checkout-phone"
              name="phone"
              value={ phone }
              type="text"
              min="12"
              max="25"
              required
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="checkout-cep">
            <input
              data-testid="checkout-cep"
              name="cep"
              value={ cep }
              type="text"
              min="12"
              max="25"
              required
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="checkout-address">
            <input
              data-testid="checkout-address"
              name="address"
              value={ address }
              type="text"
              min="12"
              max="25"
              required
              onChange={ this.handleChange }
            />
          </label>
        </section>
        Método de Pagamento
        <section id="payment--method">
          <select>
            <option type="radio">
              teste
            </option>
          </select>
        </section>
        <button type="button" onClick={ this.handleClick }>Pagar</button>
      </div>
    );
  }
}

export default Checkout;
