import React from 'react';
import '../App.css';

import CategoryBar from '../components/CategoryBar';
import Input from '../components/Input';
import ProductsList from '../components/ProductsList';

import { getCategories } from '../services/api';

class Home extends React.Component {
  componentDidMount() {
    getCategories().then((categories) => console.log(categories));
  }

  render() {
    return (
      <div className="homepage">
        <section className="categories-bar">
          <CategoryBar />
        </section>
        <section className="result-page">
          <Input datatestid="query-input" />
          <p className="text-search" data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <input
            className="btn-search"
            type="button"
            datatestid="query-button"
            onClick={ this.handleClick }
            value="Buscar"
          />
          <section className="products-list">
            <ProductsList />
          </section>
        </section>
      </div>
    );
  }
}

export default Home;
