import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';

class Search extends Component {
  render() {
    return (
      <section>
        <input
          type="text"
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          type="button"
        >
          <Link
            to="/checkout"
            data-testid="shopping-cart-button"
          />
        </button>
        <Categories />
      </section>
    );
  }
}

export default Search;
