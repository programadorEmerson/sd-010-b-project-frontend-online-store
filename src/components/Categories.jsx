import React, { Component } from 'react';
import * as api from '../services/api';
import Category from './Category';
import '../Style/Categories.css'

class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.apiCategories();
  }

  apiCategories() {
    api.getCategories().then((category) => this.setState({
      categories: category,
    }));
  }

  valorDaId = () => {
    const { id } = this.state
    this.props.categoryId(id);
  }

  render() {
    const { categories } = this.state;
    return (
      <div className='categories'>
        {categories.map((category) => (<Category
          key={ category.id }
          category={ category }
        />))}
      </div>
    );
  }
}

export default Categories;
