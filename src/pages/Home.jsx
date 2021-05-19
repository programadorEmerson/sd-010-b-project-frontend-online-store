import React from 'react';
import { Link } from 'react-router-dom';

import btnIcon from '../img/iconeCompras.png';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ProductList />
        <Link data-testid="shopping-cart-button" to="/ShoppingCart">
          <img width="30px" src={ btnIcon } alt="ShoppingCart" />
        </Link>
        <Categories />
      </div>
    );
  }
}

export default Home;
