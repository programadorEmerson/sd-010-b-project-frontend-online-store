import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.categoriesOnState = this.categoriesOnState.bind(this);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.categoriesOnState();
  }

  async categoriesOnState() {
    const categories = await api.getCategories();
    this.setState({
      categories,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <h2>Categorias:</h2>
        {categories.map((category) => (
          <p key={ category.id } data-testid="category">
            {category.name}
          </p>))}
      </div>
    );
  }
}

export default Categories;
