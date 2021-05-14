import React from 'react';
import { Link } from 'react-router-dom';

import btnIcon from '../img/iconeCompras.png';

class Home extends React.Component {
  // handleOnClick = (target) => {
  //   <Link data-testid="shopping-cart-button" to={`/${target.alt}`}></Link>
  // }
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link data-testid="shopping-cart-button" to="/checkout">
          <img width="30px" src={ btnIcon } alt="checkout" />
        </Link>
      </div>
    );
  }
}

export default Home;
