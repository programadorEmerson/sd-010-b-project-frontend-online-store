import React, { Component } from 'react';
import Button from '../Components/Button';
import CardList from '../Components/CardList';

class SearchBar extends Component {
  render() {
    return (
      <section>
        <input type="text" data-testid="query-input" />
        <Button />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CardList />
      </section>
    );
  }
}

export default SearchBar;
