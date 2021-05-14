import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Front end online store grupo 4</h1>
        <Link data-testid="shopping-cart-button" to="/cart">VER CARRINHO</Link>
      </div>
    );
  }
}

export default Home;
