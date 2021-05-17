import React from 'react';
import PropTypes from 'prop-types';
import CartButton from './CartButton';
import * as api from '../services/api';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: undefined,
    };
  }

  onChange({ target: { value } }) {
    this.setState({ query: value });
    console.log(value);
  }

  // Ao clicar no botão faz requisição na API buscando o que foi inserido no input
  fetchAPI = async () => {
    const { callback } = this.props;
    const { query } = this.state;
    const category = 'all';
    console.log(query);
    const results = await api.getProductsFromCategoryAndQuery(category, query);
    callback(results);
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
  callback: PropTypes.func.isRequired,
};

export default Input;
