import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <form>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria ap.
        </p>
        <input type="text" />
      </form>
    );
  }
}

export default Search;
