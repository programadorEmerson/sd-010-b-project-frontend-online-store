import React, { Component } from 'react';
import * as api from '../services/api';

import InputSearch from '../components/InputSearch';
import Categories from '../components/Categories';

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };

    this.getCategories = this.getCategories.bind(this);
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const getCategoriesFromApi = await api.getCategories();
    this.setState({ categories: getCategoriesFromApi });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <InputSearch />
        <Categories categories={ categories } />
      </div>
    );
  }
}
