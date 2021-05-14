import React, { Component } from 'react';
import Button from '../Components/Button';

class SearchBar extends Component {
  render() {
    return (
      <section>
        <input type="text" />
        <Button />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </section>
    );
  }
}

export default SearchBar;
