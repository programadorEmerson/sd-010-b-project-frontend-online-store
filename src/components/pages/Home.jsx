import React, { Component } from 'react';
import CartBtn from '../buttonsAndLinks/CartBtn';

export default class Home extends Component {
  render() {
    return (
      <>
        <CartBtn />
        <div>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
      </>
    );
  }
}
