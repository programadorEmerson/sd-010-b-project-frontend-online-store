import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ inputSearch: value });
  }

  render() {
    const { handleSubmit } = this.props;
    const { inputSearch } = this.state;
    return (
      <div>
        <label htmlFor="input">
          <input
            name="input"
            value={ inputSearch }
            data-testid="query-input"
            type="text"
            onChange={ this.handleChange }
            placeholder="Digite alguma coisa"
          />
        </label>
        <button
          data-testid="query-button"
          type="button"
          onClick={ () => handleSubmit(inputSearch) }
        >
          Enviar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
