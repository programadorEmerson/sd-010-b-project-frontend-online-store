import React, { Component } from 'react';
import Categories from './Categories';

class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input type="text" />
        </form>
        <div>
          <Categories />
        </div>
      </div>
    );
  }
}

export default Search;
