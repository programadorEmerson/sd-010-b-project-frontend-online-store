import React from 'react';

import './styles/ProductsSearchBar.css';

class ProductsSearchBar extends React.Component {
  render() {
    return (
      <div className="ProductsSearchBar">
        <input />
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ProductsSearchBar;
