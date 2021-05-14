import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ShoppingCart extends React.Component {
  constructor() {
    super();

    this.state = {
      lista: [],
    };
  }

  componentDidMount() {
    api.getCategories().then((result) => {
      this.setState({ lista: result });
    });
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
    return (
      <div>
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Link data-testid="shopping-cart-button" to="/checkout">Compra</Link>
        { this.renderElement() }
      </div>
    );
  }
}

export default ShoppingCart;
