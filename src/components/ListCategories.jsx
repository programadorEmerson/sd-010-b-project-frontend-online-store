import React from 'react';

import * as api from '../services/api';

import Loading from './Loading';

export default class ListCategories extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };

    this.fetchCategories = this.fetchCategories.bind(this);
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await api.getCategories();
    this.setState({
      categories,
      loading: false,
    });
  }

  render() {
    const { loading, categories } = this.state;
    if (loading) {
      return (
        <Loading />
      );
    }
    const categoriesList = categories.map(({ name, id }) => (
      <li key={ id } data-testid="category">{ name }</li>
    ));
    return categoriesList;
  }
}
