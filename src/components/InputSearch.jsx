import React, { Component } from 'react';

class InputSearch extends Component {
  render() {
    return (
      <div>
        <input type="text" />
        <p data-testid="home-initial-message">Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}

export default InputSearch;
