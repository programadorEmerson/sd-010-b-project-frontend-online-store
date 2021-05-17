import React, { Component } from 'react';
import AllProducst from './AllProducst';

class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input type="text" />
          <button onClick={ this.onClick } type="button">Buscar</button>
        </form>
        <AllProducst />
      </div>
    );
  }
}

export default Search;
