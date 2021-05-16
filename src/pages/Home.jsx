import React from 'react';
import '../App.css';

import CategoryBar from '../components/CategoryBar';
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
          <section className="products-list">
            <ProductsList />
          </section>
        </section>
      </div>
    );
  }
}

export default Home;
