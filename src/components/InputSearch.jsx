import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputSearch extends Component {
  render() {
    const { handleInputSearch, handleSubmitFetch } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          onChange={ (e) => handleInputSearch(e) }
          type="text"
          placeholder="O que você está buscando?"
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ handleSubmitFetch }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

InputSearch.propTypes = {
  handleInputSearch: PropTypes.func.isRequired,
  handleSubmitFetch: PropTypes.func.isRequired,
};

export default InputSearch;
