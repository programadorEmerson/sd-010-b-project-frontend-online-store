import React from 'react';
import ListCategories from './ListCategories';

import './styles/ProductsSearchBar.css';

class ProductsSearchBar extends React.Component {
  render() {
    return (
      <div>
        <main>
          <div>
            <input />
            <p data-testid="home-initial-message">
              Digite algum termo de pesquisa ou escolha uma categoria.
            </p>
          </div>
          <aside>
            <ListCategories />
          </aside>
        </main>
      </div>
    );
  }
}

export default ProductsSearchBar;
