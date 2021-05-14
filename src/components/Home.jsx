import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { GrCart } from 'react-icons/gr';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="busca"
        />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <GrCart />
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
