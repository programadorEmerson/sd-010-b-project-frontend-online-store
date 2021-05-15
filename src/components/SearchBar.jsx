import React, { Component } from 'react';
import { getProductsFromQuery } from '../services/api';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
      listProducts: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ inputSearch: value });
  }

  async handleSubmit() {
    const { inputSearch } = this.state;
    const listProducts = await getProductsFromQuery(inputSearch);
    this.setState({ listProducts });
  }

  render() {
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
          data-testid="query-query-button"
          type="button"
          onClick={ this.handleSubmit }
        >
          Enviar
        </button>
      </div>
    );
  }
}

export default SearchBar;
