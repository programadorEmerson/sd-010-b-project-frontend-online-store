import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GrCart } from 'react-icons/gr';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { handleInput, handleClick } = this.props;
    return (
      <div>
        <input
          id="input-search"
          type="text"
          placeholder="busca"
          data-testid="query-input"
          onChange={ handleInput }
        />
        <button
          data-testid="query-button"
          onClick={ handleClick }
          type="button"
        >
          Search
        </button>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <GrCart />
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

      </div>
    );
  }
}

Header.propTypes = {
  handleInput: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Header;
