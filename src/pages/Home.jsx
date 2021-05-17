import React from 'react';
import Categories from '../components/Categories';
import ProductList from '../components/ProductList';

class Home extends React.Component {
  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ProductList />
        <Categories />
      </div>
    );
  }
}

export default Home;
