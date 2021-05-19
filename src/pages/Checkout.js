import React from 'react';
import PropTypes from 'prop-types';
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
    this.renderPrice = this.renderPrice.bind(this);
    this.renderQuantity = this.renderQuantity.bind(this);
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

  renderQuantity() {
    const { addCart } = this.props;
    let total = 0;
    addCart.map(({ quantity }) => {
      total += quantity;
      return total;
    });
    return total;
  }

  renderPrice() {
    const { addCart } = this.props;
    let totalPrice = 0;
    addCart.map(({ product, quantity }) => {
      totalPrice += Number(product.price) * Number(quantity);
      return totalPrice;
    });
    return totalPrice;
  }

  render() {
    const { fullname, email, cpf, phone, cep, address, redirect, payment } = this.state;
    const { addCart } = this.props;
    console.log(addCart);

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
      <div data-testid="checkout-products">
        Informações do Carrinho
        <section>
          {/* <h1>Preço Total{ this.renderPrice() }</h1> */}
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

Checkout.propTypes = {
  addCart: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default Checkout;
