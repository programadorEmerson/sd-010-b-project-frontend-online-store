import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartImage from '../components/CartImage';

class Search extends React.Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <section>
        <input
          type="search"
          value={ value }
          onChange={ onChange }
        />
        <Link to="/cart" data-testid="shopping-cart-button"><CartImage /></Link>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </section>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Search;
