import React from 'react';
import PropTypes from 'prop-types';
import CartButton from './CartButton';
import * as api from '../services/api';

class Input extends React.Component {
  constructor(props) {
    super(props);

    const { category } = this.props;
    this.state = {
      query: undefined,
      categories: category,
    };
  }

  onChange({ target: { value } }) {
    this.setState({ query: value });
  }

  // Ao clicar no botão faz requisição na API buscando o que foi inserido no input
  fetchAPI = async () => {
    const { handleQuery } = this.props;
    const { query, categories } = this.state;
    let categories2;
    if (categories.length === 0) {
      categories2 = 'all';
    } else {
      categories2 = categories.toString(',');
    }
    console.log(categories2);
    let results;
    if (query === undefined) {
      results = await api.getProductsFromCategories(categories2);
    }
    if (query !== undefined && categories !== 'all') {
      results = await api.getProductsFromCategoryAndQuery(categories, query);
    }
    handleQuery(results);
  }

  render() {
    return (
      <div
        className="search"
      >
        <input
          type="text"
          data-testid="query-input"
          placeholder="Procurar produto"
          onChange={ (event) => this.onChange(event) }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.fetchAPI }
        >
          Pesquisar
        </button>
        <CartButton />
        <br />
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

Input.propTypes = {
  handleQuery: PropTypes.func.isRequired,
  category: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Input;
