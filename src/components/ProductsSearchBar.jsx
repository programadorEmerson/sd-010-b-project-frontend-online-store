import React from 'react';

import './styles/ProductsSearchBar.css';

class ProductsSearchBar extends React.Component {
  render() {
    return (
      <div>
        <input data-testid="query-input" />
        <button
          type="button"
          data-testid="query-button"
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

export default ProductsSearchBar;
