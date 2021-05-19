import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import '../styles/CheckoutPage.css';

class CheckoutPage extends React.Component {
  getTotalPrice = () => {
    const { cart } = this.props;
    return cart.reduce((acc, { qty, product: { price } }) => {
      acc += qty * price;
      return acc;
    }, 0);
  }

  render() {
    const { cart } = this.props;
    if (!cart.length) {
      return (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      );
    }
    return (
      <div>
        <table className="cp-checkout">
          <tr className="cp-checkout_row">
            <th className="cp-checkout_title cp-checkout_first">Produtos</th>
            <th className="cp-checkout_qty">Quantidade</th>
            <th className="cp-checkout_price">Preço</th>
          </tr>
          {cart.map(({ qty, product: { title, price }, id }) => (
            <tr className="cp-checkout_row" key={ id }>
              <td className="cp-checkout_title">{title}</td>
              <td className="cp-checkout_qty">{qty}</td>
              <td className="cp-checkout_price">{price}</td>
            </tr>
          ))}
          <h3>
            Total: R$
            {this.getTotalPrice()}
          </h3>
        </table>
        <form className="cp-form">
          <h3>Informações do Comprador</h3>
          <div className="cp-form__container">
            <input
              className="cp-form__first"
              data-testid="checkout-fullname"
              type="text"
              placeholder="Nome Completo"
              required
            />
            <input
              className="cp-form__second"
              data-testid="checkout-cpf"
              type="text"
              placeholder="CPF"
              required
            />
          </div>
          <div className="cp-form__container">
            <input
              className="cp-form__first"
              data-testid="checkout-email"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="cp-form__second"
              data-testid="checkout-phone"
              type="tel"
              placeholder="Telefone"
              required
            />
          </div>
          <div className="cp-form__container">
            <input
              className="cp-form__first"
              data-testid="checkout-address"
              type="text"
              placeholder="Endereço"
              required
            />
            <input
              className="cp-form__second"
              data-testid="checkout-cep"
              type="text"
              placeholder="CEP"
              required
            />
          </div>
          <h3>Formas de Pagamento</h3>
          <div>
            <label htmlFor="boleto">
              Boleto
              <input type="checkbox" id="boleto" name="boleto" value="boleto" />
            </label>

            <h4>Cartão de Credito</h4>
            <label htmlFor="Visa">
              Visa
              <input type="checkbox" name="Visa" value="Visa" />
            </label>
            <label htmlFor="MasterCard">
              MasterCard
              <input type="checkbox" name="MasterCard" value="MasterCard" />
            </label>

            <label htmlFor="Elo">
              Elo
              <input type="checkbox" name="Elo" value="Elo" />
            </label>

          </div>
          <input
            className="cp-form__send"
            type="submit"
            name="Comprar"
            onClick={ () => { const history = useHistory(); history.push('/'); } }
          />
        </form>
      </div>
    );
  }
}

CheckoutPage.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
};

export default CheckoutPage;
