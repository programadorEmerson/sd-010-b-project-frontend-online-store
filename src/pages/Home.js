import React from 'react';
import { Link } from 'react-router-dom';
import CatList from '../components/CatList';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <input type="text" />
          <p
            data-testid="home-initial-message"
          >
            <CatList />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <Link data-testid="shopping-cart-button" to="/cart">VER CARRINHO</Link>
      </div>
    );
  }
}

export default Home;
