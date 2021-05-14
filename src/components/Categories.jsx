import React, { Component } from 'react';
import * as productsApi from '../services/api';
import './Categories.css';

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  fetchCategories = async () => {
    const response = await productsApi.getCategories();
    console.log(response);
    this.setState({ categories: response });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category) => (
          <li
            key={ category.id }
            data-testid="category"
          >
            <input type="radio" />
            { category.name }
          </li>))}
      </div>
    );
  }
}

export default Categories;
