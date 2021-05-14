import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <button type="button">
        <Link to="/shopping-cart" data-testid="shopping-cart-button">teste</Link>
      </button>
    );
  }
}

export default Button;
