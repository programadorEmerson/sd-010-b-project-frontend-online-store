import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <form>
        <button type="submit">Carrinho de compras</button>
        <input type="text" />
        <p>Meu carrinho está vazio</p>
      </form>
    );
  }
}

export default Header;
