import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      inputSearch: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target: { value } }) {
    this.setState({ inputSearch: value });
  }

  async handleSubmit() {
    const { inputSearch } = this.state;
    const { updateListProducts, category } = this.props;
    console.log(category);
    const { results } = await getProductsFromCategoryAndQuery(category, inputSearch);
    updateListProducts(results);
  }

  render() {
    console.log(this.props.category);
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
          onClick={ this.handleSubmit }
        >
          Enviar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  updateListProducts: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default SearchBar;
