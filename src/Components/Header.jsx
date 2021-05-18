import React, { Component } from 'react';
import logo from '../icons/shopping-cart-logo.png';

class Header extends Component {
  render() {
    return (
      <header className="shopping-cart-header">
        <img className="page-title" src={ logo } alt="logo" />
      </header>
    );
  }
}

export default Header;
