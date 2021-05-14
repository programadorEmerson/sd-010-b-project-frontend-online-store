import React from 'react';
import { Link } from 'react-router-dom';
import CategoryList from './CategoryList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/cart">Carinho</Link>
        <CategoryList />
      </div>
    );
  }
}

export default Home;
