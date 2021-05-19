import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import CardList from './CardList';

import '../App.css';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      pesquisa: '',
      input: '',
      lista: [],
      status: false,
    };
  }

  componentDidMount() {
    api.getCategories().then((result) => {
      this.setState({ lista: result, status: true });
    });
  }

  handleChange({ target: { value } }) {
    this.setState({ input: value });
  }

  handleClick() {
    const { input } = this.state;
    this.setState({ pesquisa: input });
  }

  renderElement = () => {
    const { lista } = this.state;
    return lista.map((element) => (
      <li key={ element.id } data-testid="category">
        { element.name }
      </li>
    ));
  }

  render() {
    const { input, status, pesquisa } = this.state;
    return (
      <div>
        <label htmlFor="input" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
          <input
            type="text"
            id="input"
            value={ input }
            data-testid="query-input"
            onChange={ (event) => this.handleChange(event) }
          />
        </label>
        <button
          type="button"
          data-testid="query-button"
          onClick={ (event) => this.handleClick(event) }
        >
          Pesquisar
        </button>
        <Link data-testid="shopping-cart-button" to="/checkout">Compra</Link>
        <section className="options">
          { this.renderElement() }
        </section>
        { status && <CardList list={ pesquisa } /> }
      </div>
    );
  }
}

export default ShoppingCart;
