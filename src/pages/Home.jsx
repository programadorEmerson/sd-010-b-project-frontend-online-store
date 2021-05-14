import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <li />
        {/* deixar um li criado só p lembrar d fazer uma lista dinâmica */}
        <span data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </span>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">Cart</Link>

      </div>
    );
  }
}

export default Home;
