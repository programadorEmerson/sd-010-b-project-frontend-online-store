import React, { Component } from 'react';
import { getCategories } from '../services/api';

class ListCategories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.handleListCategories();
  }

  handleListCategories = async () => {
    const cat = await getCategories();
    this.setState({
      categories: cat,
    });
  }

  renderCategory = () => {
    const { categories } = this.state;
    return (
      categories.map((category) => (
        <li key={ category.id } data-testid="category">
          { category.name }
        </li>
      ))
    );
  }

  render() {
    return (
      <div>
        <ul>
          { this.renderCategory() }
        </ul>
      </div>
    );
  }
}

export default ListCategories;
