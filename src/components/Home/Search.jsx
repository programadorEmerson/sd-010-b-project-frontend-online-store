import React from 'react';
import { Link } from 'react-router-dom';
import CartImage from './CartImage';

class Search extends React.Component {
  render() {
    return (
      <section>
        <input
          data-testid="query-input"
          type="search"
          onChange={ this.handlerChange }
          name="query"
        />

        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handlerClick }
        >
          Buscar
        </button>

        <Link to="/cart" data-testid="shopping-cart-button"><CartImage /></Link>

        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </section>
    );
  }
}

export default Search;
