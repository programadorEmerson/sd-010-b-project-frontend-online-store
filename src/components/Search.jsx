import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Categories from './Categories';

class Search extends Component {
  render() {
    const { onChange, onClick, funct } = this.props;
    return (
      <section>
        <input
          type="text"
          onChange={ onChange }
          data-testid="query-input"
        />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <button
          type="button"
          onClick={ onClick }
          data-testid="query-button"
        >
          Pesquisar
        </button>
        <button
          type="button"
        >
          <Link
            to="/shoppingcart"
            data-testid="shopping-cart-button"
          >
            Carrinho
          </Link>
        </button>
        <Categories funct={ funct } />
      </section>
    );
  }
}

Search.propTypes = {
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  funct: PropTypes.func.isRequired,
};

export default Search;
