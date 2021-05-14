import React from 'react';
import CartButton from './CartButton';

class Input extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="text" />
        <CartButton />
        <br />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Input;
