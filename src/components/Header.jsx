import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="main-container">
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Header;
