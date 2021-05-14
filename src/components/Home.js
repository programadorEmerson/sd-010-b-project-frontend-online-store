import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../images/cart.png';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <input />
        <Link to="/cart">
          <button type="button">
            <img
              data-testid="shopping-cart-button"
              src={ Img }
              width="100px"
              alt="cart shop"
            />
          </button>
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default Home;
