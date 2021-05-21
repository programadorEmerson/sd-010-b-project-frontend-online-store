import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartImage from './CartImage';

class Search extends React.Component {
  render() {
    const { handlerChange, handlerClick, query } = this.props;

    return (
      <section className="search-component">
        <div className="d-flex justify-content-between">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5
                2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7
                0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0
                2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
              />
            </svg>
          </div>
          <div className="">
            <input
              data-testid="query-input"
              type="search"
              value={ query }
              onChange={ handlerChange }
              name="query"
            />
            <button
              className="btn btn-dark"
              data-testid="query-button"
              type="button"
              onClick={ handlerClick }
            >
              Buscar
            </button>
          </div>
          <div className="">
            <Link to="/cart" data-testid="shopping-cart-button">
              <CartImage />
            </Link>
          </div>
        </div>
        <div className="">
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        </div>
      </section>
    );
  }
}

Search.propTypes = {
  handlerChange: PropTypes.func.isRequired,
  handlerClick: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

export default Search;
