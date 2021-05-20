import React, { Component } from 'react';
import barCode from '../img/bar-code.png';
import creditCard from '../img/credit-card.png';

class Payment extends Component {
  render() {
    return (
      <div>
        <h3>Método de Pagamento</h3>
        <h4>Boleto</h4>
        <div>
          <input type="radio" />
          <img width="50px" src={ barCode } alt="checkout" />
        </div>

        <h4>Cartão de Crédito</h4>
        <div>
          <input type="radio" />
          Visa
          <img width="50px" src={ creditCard } alt="checkout" />

          <input type="radio" />
          MasterCard
          <img width="50px" src={ creditCard } alt="checkout" />

          <input type="radio" />
          Elo
          <img width="50px" src={ creditCard } alt="checkout" />
        </div>
      </div>
    );
  }
}

export default Payment;
