import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartImage from './CartImage';

class Search extends React.Component {
  render() {
    const { handlerChange, handlerClick, query } = this.props;

    return (
      <section className="search-component">
        <input
          data-testid="query-input"
          type="search"
          value={ query }
          onChange={ handlerChange }
          name="query"
        />

        <button data-testid="query-button" type="button" onClick={ handlerClick }>
          Buscar
        </button>

        <Link to="/cart" data-testid="shopping-cart-button">
          <CartImage />
        </Link>

        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </section>
    );
  }
}

Search.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  handlerClick: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Search;
