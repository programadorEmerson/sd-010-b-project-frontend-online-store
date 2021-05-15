import React from 'react';
import '../App.css';

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
          /
        </section>
        <section className="result-page">
          <Input />
          <p className="text-search" data-testid="home-initial-message">
            Digite algum termo de Pesquisa ou escolha uma categoria.
          </p>
          <section className="products-list">
            <ProductsList />
          </section>
        </section>
      </div>
    );
  }
}

export default Home;
