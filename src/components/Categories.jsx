import React from 'react';
import * as api from '../services/api';

class Categories extends React.Component {
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
    const categories = await api.getCategories();
    console.log(categories);
    this.setState({
      categories,

    });
  }

  render() {
    const { categories } = this.state;
    return (
      <section>
        {categories.map(((category) => (
          <label
            key={ category.id }
            data-testid="category"
            htmlFor="idCategory"
          >
            <input
              type="checkbox"
              id="idcategory"
              key={ category.id }
              name={ category.id }
              value={ category.id }
            />
            {category.name}
          </label>)))}
      </section>
    );
  }
}
export default Categories;
