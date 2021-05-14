import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Categories extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((categories) => {
      this.setState({ categories });
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <aside>
          { categories.map(({ id, name }) => (
            <p data-testid="category" key={ id }>{ name }</p>
          )) }
        </aside>
      </div>
    );
  }
}
