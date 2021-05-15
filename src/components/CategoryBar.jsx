import React, { Component } from 'react';
import { getCategories } from '../services/api';

class CategoryBar extends Component {
  constructor() {
    super();
    this.state = {
      categorieslist: [],
    };
  }

  componentDidMount() {
    getCategories().then((categories) => this.setState({
      categorieslist: categories,
    }));
  }

  render() {
    const { categorieslist } = this.state;
    return (
      <div>
        <h1>Categorias</h1>
        <ul>
          {categorieslist.map(({ id, name }) => (
            <li
              key={ id }
              data-testid="category"
            >
              { name }
            </li>
          ))}
          ;
        </ul>
      </div>
    );
  }
}

export default CategoryBar;
