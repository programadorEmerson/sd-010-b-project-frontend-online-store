import React from 'react';
import PropTypes from 'prop-types';
import CartButton from './CartButton';
import * as api from '../services/api';
import CheckoutButton from './CheckoutButton';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: undefined,
    };
  }

  onChange({ target: { value } }) {
    this.setState({ query: value });
  }

  // Ao clicar no botão faz requisição na API buscando o que foi inserido no input
  fetchAPI = async () => {
    const { handleQuery } = this.props;
    const { query } = this.state;
    const results = await api.getProductsFromCategoryAndQuery('all', query);
    console.log('Input fetch');
    handleQuery(results, query);
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
        <CheckoutButton />
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
};

export default Input;
