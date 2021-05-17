import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  render() {
    const { getResult, getApiFromQuery } = this.props;
    return (
      <div id="searchBar">
        <input
          data-testid="query-input"
          type="text"
          onChange={ getResult }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ getApiFromQuery }
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

SearchBar.propTypes = {
  getResult: PropTypes.func.isRequired,
  getApiFromQuery: PropTypes.func.isRequired,
};

export default SearchBar;
