import React from 'react';
import PropTypes from 'prop-types';

import './styles/ProductsSearchBar.css';

class ProductsSearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleSearchInputChange(event) {
    this.setState({
      query: event.target.value,
    });
  }

  handleEnter(event) {
    const { handleQuerySearch } = this.props;
    if (event.key === 'Enter') {
      handleQuerySearch(event.target.value);
    }
  }

  render() {
    const { query } = this.state;
    const { handleQuerySearch } = this.props;
    return (
      <div>
        <input
          data-testid="query-input"
          onChange={ this.handleSearchInputChange }
          onKeyDown={ this.handleEnter }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => handleQuerySearch(query) }
        >
          Pesquisar
        </button>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

ProductsSearchBar.propTypes = {
  handleQuerySearch: PropTypes.func.isRequired,
};

export default ProductsSearchBar;
