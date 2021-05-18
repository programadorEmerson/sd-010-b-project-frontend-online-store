import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

class Home extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Link to="/shopping-cart" data-testid="shopping-cart-button">Cart</Link>
      </div>
    );
  }
}

export default Home;
