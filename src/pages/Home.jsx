import React from 'react';

import Input from '../components/Input';

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
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </section>
      </div>
    );
  }
}

export default Home;
