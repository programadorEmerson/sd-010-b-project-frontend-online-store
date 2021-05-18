import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

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
        {cart.map(({ qty, product: { title, price }, id }) => (
          <div key={ id }>
            <p>{qty}</p>
            <p>{title}</p>
            <p>{price}</p>
          </div>
        ))}
        <h3>
          Total: R$
          {this.getTotalPrice()}
        </h3>
        <form>
          <h3>Informações do Comprador</h3>
          <input
            data-testid="checkout-fullname"
            type="text"
            placeholder="Nome Completo"
            required
          />
          <input
            data-testid="checkout-cpf"
            type="text"
            placeholder="CPF"
            required
          />
          <input
            data-testid="checkout-email"
            type="email"
            placeholder="Email"
            required
          />
          <input
            data-testid="checkout-phone"
            type="tel"
            placeholder="Telefone"
            required
          />
          <input
            data-testid="checkout-cep"
            type="text"
            placeholder="CEP"
            required
          />
          <input
            data-testid="checkout-address"
            type="text"
            placeholder="Endereço"
            required
          />
          <h3>Formas de Pagamento</h3>

          <label htmlFor="boleto">
            Boleto
            <input type="checkbox" id="boleto" name="boleto" value="boleto" />
          </label>
          <label htmlFor="boleto">
            Cartão de Credito
            <br />
            <br />
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
          </label>
          <input
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
