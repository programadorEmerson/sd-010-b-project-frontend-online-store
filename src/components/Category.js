import React from 'react';
import * as getProducts from '../services/api';

class Category extends React.Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      searchInput: '',
    };
  }

  componentDidMount() {
    getProducts.getCategories()
      .then((filter) => this.setState({ filters: filter }));
  }

  filterCategory(search) {
    const { filters } = this.state;
    return filters.filter(({ name }) => {
      return name.includes(search);
    });
  }

  render() {
    const { searchInput } = this.state;
    return (
      <div>
        <h3>Categorias</h3>
        <select>
          {this.filterCategory(searchInput).map(({ name }) => (
            <option key={ name } value={ searchInput }>{ name }</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Category;
