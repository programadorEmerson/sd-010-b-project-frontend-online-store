import React from 'react';
import { Link, Route } from 'react-router-dom';

import Checkout from './Checkout';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/checkout">Carrinho</Link>
        <Route path="/checkout" component={ Checkout } />
      </div>
    );
  }
}

export default Home;
