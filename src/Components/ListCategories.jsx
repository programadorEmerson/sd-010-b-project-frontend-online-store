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
    this.HandleListCategories();
  }

  HandleListCategories = async () => {
    const categories = await getCategories();
    if (categories.length === 0) {
      return null;
    }
    console.log(categories);
    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <ul>
          {categories.map((category) => (
            <li key={ category.id } data-testid="category">
              { category.name }
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListCategories;
