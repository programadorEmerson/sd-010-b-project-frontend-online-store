import React, { Component } from 'react';

import Button from '../Components/Button';
import CardList from '../Components/CardList';
import ListCategories from '../Components/ListCategories';


class MainPage extends Component {
  render() {
    return (
      <main>
        <ListCategories />
        <section>
          <input type="text" data-testid="query-input" />
          <Button />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
          <CardList />
        </section>
      </main>
    );
  }
}

export default MainPage;
