import React from 'react';
import { Link } from 'react-router-dom';
import { GrCart, GrHome } from 'react-icons/gr';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <GrHome />
        </Link>
        <Link
          to="/shopping-cart"
          data-testid="shopping-cart-button"
          className="shopping-cart-button"
        >
          <GrCart />
        </Link>
      </div>
    );
  }
}

export default Navbar;
