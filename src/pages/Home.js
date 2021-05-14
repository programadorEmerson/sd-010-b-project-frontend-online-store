import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/Category';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <Category />
        <div>
          <input type="text" />
          <p
            data-testid="home-initial-message"
          >
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <Link data-testid="shopping-cart-button" to="/cart">VER CARRINHO</Link>
      </div>
    );
  }
}

export default Home;
