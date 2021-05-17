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
          <input onChange={ SearchOnChange } type="text" />
        </form>
        <AllProducst />
      </div>
    );
  }
}

export default Search;
