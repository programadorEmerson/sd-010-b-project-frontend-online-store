import React, { Component } from 'react';
import { getCategories } from '../../services/api';
import ListCategories from '../ListCategories';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      listCategories: [],
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    this.setState({
      listCategories: await getCategories(),
    });
  }

  render() {
    return (
      <div>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ListCategories categories={ this.state.listCategories } />
      </div>
    );
  }
}
